const videoInstallationProjectOrder = new Map(
    [31, 49, 32, 33, 34, 46, 30, 50].map((projectId, index) => [projectId, index])
);
const theaterProjectOrder = new Map(
    [18, 16, 13, 14, 15].map((projectId, index) => [projectId, index])
);
const realizationProjectOrder = new Map(
    [44, 43, 40, 45, 41, 37, 38, 36, 35, 42, 39].map((projectId, index) => [projectId, index])
);
const liveOperationProjectOrder = new Map(
    [27, 28, 25, 29, 52, 24, 22, 23, 26, 51].map((projectId, index) => [projectId, index])
);
const motionGraphicsProjectOrder = new Map(
    [7, 3, 4, 5, 6, 53, 47, 1, 2].map((projectId, index) => [projectId, index])
);

function matchesCategoryFilter(projectCategory, category) {
    if (!projectCategory) return false;

    if (projectCategory === category) return true;
    if (category === 'OPERACIÓN EN VIVO') return projectCategory === 'OPERACIÓN EN VIVO' || projectCategory === 'PANTALLAS / OPERACIÓN EN VIVO';
    if (category === 'PANTALLAS / OPERACIÓN EN VIVO') return projectCategory === 'OPERACIÓN EN VIVO' || projectCategory === 'PANTALLAS / OPERACIÓN EN VIVO';
    if (category === 'PANTALLAS / DISEÑO Y REALIZACIÓN') return projectCategory === 'PANTALLAS / DISEÑO Y REALIZACIÓN' || projectCategory === 'PANTALLAS';
    if (category === 'MOTION GRAPHICS') return projectCategory.startsWith('MOTION GRAPHICS');
    if (category === 'PANTALLAS') return projectCategory.startsWith('PANTALLAS') || projectCategory === 'OPERACIÓN EN VIVO';

    return false;
}

function updateCategoryButtonState() {
    const screensCategory = document.getElementById('catalog-screens-category');
    const isScreensCategory = selectedCategory === 'PANTALLAS / DISEÑO Y REALIZACIÓN' || selectedCategory === 'OPERACIÓN EN VIVO';
    screensCategory.classList.toggle('border-cyber-orange', isScreensCategory);
    screensCategory.classList.toggle('bg-cyber-orange/10', isScreensCategory);
    screensCategory.classList.toggle('text-white', isScreensCategory);
    screensCategory.classList.toggle('text-cyber-dim', !isScreensCategory);
    screensCategory.classList.toggle('font-bold', isScreensCategory);
    screensCategory.classList.toggle('shadow-[0_0_10px_rgba(255,85,0,0.18)]', isScreensCategory);

    document.querySelectorAll('.cat-pill').forEach(button => {
        const isActive = button.dataset.category === selectedCategory;
        button.classList.toggle('border-cyber-orange', isActive);
        button.classList.toggle('bg-cyber-orange/10', isActive);
        button.classList.toggle('text-white', isActive);
        button.classList.toggle('text-cyber-dim', !isActive);
        button.classList.toggle('font-bold', isActive);
        button.classList.toggle('shadow-[0_0_10px_rgba(255,85,0,0.18)]', isActive);
    });
}

function filterCategory(category) {
    closeWorksMenu();
    selectedCategory = category;
    switchTab('works');

    filteredProjects = projectsData.filter(p => matchesCategoryFilter(p.category, category));
    if (category === 'VIDEOINSTALACIÓN') {
        filteredProjects.sort((a, b) => (
            (videoInstallationProjectOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER)
            - (videoInstallationProjectOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ));
    } else if (category === 'MOTION GRAPHICS') {
        filteredProjects.sort((a, b) => (
            (motionGraphicsProjectOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER)
            - (motionGraphicsProjectOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ));
    } else if (category === 'TEATRO') {
        filteredProjects.sort((a, b) => (
            (theaterProjectOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER)
            - (theaterProjectOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ));
    } else if (category === 'PANTALLAS / DISEÑO Y REALIZACIÓN') {
        filteredProjects.sort((a, b) => (
            (realizationProjectOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER)
            - (realizationProjectOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ));
    } else if (category === 'OPERACIÓN EN VIVO') {
        filteredProjects.sort((a, b) => (
            (liveOperationProjectOrder.get(a.id) ?? Number.MAX_SAFE_INTEGER)
            - (liveOperationProjectOrder.get(b.id) ?? Number.MAX_SAFE_INTEGER)
        ));
    }

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
            <span class="truncate whitespace-nowrap">${proj.title}</span>
            <span class="text-[10px] text-cyber-orange">${isActive ? '►' : ''}</span>
        `;

        container.appendChild(btn);
    });
}
