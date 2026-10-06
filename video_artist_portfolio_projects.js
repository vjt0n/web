function matchesCategoryFilter(projectCategory, category) {
    if (!projectCategory) return false;

    if (projectCategory === category) return true;
    if (category === 'OPERACIÓN EN VIVO') return projectCategory === 'OPERACIÓN EN VIVO' || projectCategory === 'PANTALLAS / OPERACIÓN EN VIVO';
    if (category === 'PANTALLAS / OPERACIÓN EN VIVO') return projectCategory === 'OPERACIÓN EN VIVO' || projectCategory === 'PANTALLAS / OPERACIÓN EN VIVO';
    if (category === 'PANTALLAS / DISEÑO Y REALIZACIÓN') return projectCategory === 'PANTALLAS / DISEÑO Y REALIZACIÓN' || projectCategory === 'PANTALLAS';
    if (category === 'MOTION GRAPHICS') return projectCategory === 'MOTION GRAPHICS';
    if (category === 'PANTALLAS') return projectCategory.startsWith('PANTALLAS') || projectCategory === 'OPERACIÓN EN VIVO';

    return false;
}

function updateCategoryButtonState() {
    document.querySelectorAll('.cat-pill').forEach(button => {
        const isScreensCategory = selectedCategory === 'PANTALLAS / DISEÑO Y REALIZACIÓN' || selectedCategory === 'OPERACIÓN EN VIVO';
        const isActive = button.dataset.category === selectedCategory || (button.dataset.category === 'PANTALLAS' && isScreensCategory);
        button.classList.toggle('border-cyber-orange', isActive);
        button.classList.toggle('bg-cyber-orange/10', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('text-cyber-dim', !isActive);
        button.classList.toggle('font-bold', isActive);
        button.classList.toggle('shadow-[0_0_10px_rgba(255,85,0,0.18)]', isActive);
    });
}

function filterCategory(category) {
    selectedCategory = category;
    switchTab('works');

    filteredProjects = projectsData.filter(p => matchesCategoryFilter(p.category, category));

    updateCategoryButtonState();
    renderProjectList();
    if (filteredProjects.length > 0) {
        loadProject(0);
    }
}

function renderProjectList() {
    const container = document.getElementById('project-list-container');
    container.innerHTML = '';

    filteredProjects.forEach((proj, idx) => {
        const btn = document.createElement('button');
        const isActive = idx === currentProjectIndex;

        btn.className = `w-full text-left p-2 border transition-all flex items-center justify-between ${
            isActive 
                ? 'border-cyber-orange bg-cyber-orange/10 text-white font-bold' 
                : 'border-cyber-border bg-black text-cyber-dim hover:text-white'
        }`;

        btn.onclick = () => loadProject(idx);
        btn.innerHTML = `
            <span class="truncate">${proj.title}</span>
            <span class="text-[10px] text-cyber-orange">${isActive ? '►' : ''}</span>
        `;

        container.appendChild(btn);
    });
}

function parseMediaUrls(rawText) {
    return String(rawText || '')
        .split(/[\n,]+/)
        .map(value => value.trim())
        .filter(value => value && value.includes('http'));
}

function toggleProjectForm() {
    const form = document.getElementById('project-form');
    form.classList.toggle('hidden');
}

function handleProjectFormSubmit(event) {
    event.preventDefault();

    const title = document.getElementById('project-form-title').value.trim();
    const category = document.getElementById('project-form-category').value;
    const date = document.getElementById('project-form-date').value.trim() || 'Sin fecha';
    const studio = document.getElementById('project-form-studio').value.trim() || 'Proyecto propio';
    const role = document.getElementById('project-form-role').value.trim() || 'Dirección visual';
    const mediaInput = document.getElementById('project-form-media').value;
    const media = parseMediaUrls(mediaInput);

    if (!title) {
        showToast('> INGRESÁ UN TÍTULO PARA EL PROYECTO');
        return;
    }

    const customProject = {
        id: Date.now(),
        title: title.toUpperCase(),
        category,
        date,
        studio,
        role,
        canvasMode: 'grid',
        media
    };

    const storedProjects = getStoredProjects();
    const updatedProjects = [...storedProjects, customProject];
    saveStoredProjects(updatedProjects);

    projectsData = [...defaultProjectsData, ...updatedProjects];
    selectedCategory = category;
    filteredProjects = projectsData.filter(project => matchesCategoryFilter(project.category, selectedCategory));
    currentProjectIndex = filteredProjects.length - 1;
    updateCategoryButtonState();
    renderProjectList();
    loadProject(currentProjectIndex);

    document.getElementById('project-form').reset();
    document.getElementById('project-form').classList.add('hidden');
    showToast('> PROYECTO GUARDADO');
}
