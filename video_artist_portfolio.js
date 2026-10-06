// Global State Variables
let currentTab = 'about';
let currentLang = 'es';
let selectedCategory = 'MOTION GRAPHICS';
let currentProjectIndex = 0;
let projectsData = [...defaultProjectsData, ...clearStoredProjects()];
let filteredProjects = [];
let youtubePlayers = {};

window.addEventListener('DOMContentLoaded', () => {
    projectsData = [...defaultProjectsData, ...clearStoredProjects()];
    filteredProjects = projectsData.filter(project => matchesCategoryFilter(project.category, selectedCategory));
    currentProjectIndex = 0;

    const toggleButton = document.getElementById('toggle-project-form');
    const cancelButton = document.getElementById('cancel-project-form');
    const projectForm = document.getElementById('project-form');
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const portraitTrigger = document.getElementById('about-portrait-trigger');
    const portraitOverlay = document.getElementById('about-portrait-overlay');
    const contactPortraitTrigger = document.getElementById('contact-portrait-trigger');
    const contactPortraitOverlay = document.getElementById('contact-portrait-overlay');

    toggleButton.addEventListener('click', toggleProjectForm);
    cancelButton.addEventListener('click', () => projectForm.classList.add('hidden'));
    projectForm.addEventListener('submit', handleProjectFormSubmit);
    themeToggleBtn.addEventListener('click', toggleTheme);

    const openPortraitOverlay = (overlay) => {
        overlay.classList.remove('hidden');
        overlay.classList.add('flex');
    };

    const closePortraitOverlay = (overlay) => {
        overlay.classList.add('hidden');
        overlay.classList.remove('flex');
    };

    if (portraitTrigger && portraitOverlay) {
        portraitTrigger.addEventListener('click', (event) => {
            event.stopPropagation();
            openPortraitOverlay(portraitOverlay);
        });

        portraitOverlay.addEventListener('click', (event) => {
            if (event.target === portraitOverlay || event.target.closest('[data-close-portrait]')) {
                closePortraitOverlay(portraitOverlay);
            }
        });
    }

    if (contactPortraitTrigger && contactPortraitOverlay) {
        contactPortraitTrigger.addEventListener('click', (event) => {
            event.stopPropagation();
            openPortraitOverlay(contactPortraitOverlay);
        });

        contactPortraitOverlay.addEventListener('click', (event) => {
            if (event.target === contactPortraitOverlay || event.target.closest('[data-close-contact-portrait]')) {
                closePortraitOverlay(contactPortraitOverlay);
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            if (portraitOverlay && !portraitOverlay.classList.contains('hidden')) {
                closePortraitOverlay(portraitOverlay);
            }
            if (contactPortraitOverlay && !contactPortraitOverlay.classList.contains('hidden')) {
                closePortraitOverlay(contactPortraitOverlay);
            }
        }
    });

    applyThemeState('dark');
    themeToggleBtn.innerHTML = '☀';

    attachProjectVideoControls();

    // Initial render
    updateCategoryButtonState();
    renderProjectList();
    loadProject(0);
    initTVCanvas();
    initVJCanvas();

    // Highlight initial tab nav
    updateNavState('about');
});
