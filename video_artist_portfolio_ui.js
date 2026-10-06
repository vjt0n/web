// Tab Switching Logic
function switchTab(tabId) {
    currentTab = tabId;
    document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.remove('active'));
    
    const targetPanel = document.getElementById(`tab-${tabId}`);
    if (targetPanel) {
        targetPanel.classList.add('active');
    }

    updateNavState(tabId);
}

function updateNavState(tabId) {
    document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('text-cyber-orange', 'text-glow'));
    const activeNav = document.getElementById(`nav-${tabId}`);
    if (activeNav) {
        activeNav.classList.add('text-cyber-orange', 'text-glow');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    const esBlock = document.getElementById('about-text-es');
    const enBlock = document.getElementById('about-text-en');
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');

    if (lang === 'es') {
        esBlock.classList.remove('hidden');
        enBlock.classList.add('hidden');
        btnEs.className = "font-bold text-cyber-orange border-b border-cyber-orange px-1";
        btnEn.className = "font-bold text-cyber-dim hover:text-white px-1";
    } else {
        esBlock.classList.add('hidden');
        enBlock.classList.remove('hidden');
        btnEn.className = "font-bold text-cyber-orange border-b border-cyber-orange px-1";
        btnEs.className = "font-bold text-cyber-dim hover:text-white px-1";
    }
}

function applyThemeState(themeName) {
    const root = document.body;
    const isLight = themeName === 'light';
    const header = document.querySelector('header');
    const themeBtn = document.getElementById('theme-toggle-btn');

    root.dataset.theme = themeName;
    root.style.backgroundColor = isLight ? '#f2efe9' : '#050505';
    root.style.color = isLight ? '#1d1d1d' : '#d0d0d0';

    document.documentElement.style.setProperty('--bg-dark', isLight ? '#f2efe9' : '#050505');
    document.documentElement.style.setProperty('--bg-card', isLight ? '#f8f5f0' : '#0d0d0d');
    document.documentElement.style.setProperty('--text-bright', isLight ? '#0a0a0a' : '#ffffff');
    document.documentElement.style.setProperty('--text-main', isLight ? '#1d1d1d' : '#d0d0d0');
    document.documentElement.style.setProperty('--text-dim', isLight ? '#5c5c5c' : '#707070');
    document.documentElement.style.setProperty('--accent-orange', isLight ? '#d84800' : '#ff5500');
    document.documentElement.style.setProperty('--border-color', isLight ? '#d3c7b8' : '#222222');

    if (header) {
        header.style.backgroundColor = isLight ? 'rgba(255,255,255,0.86)' : 'rgba(0,0,0,0.9)';
        header.style.borderColor = isLight ? '#d3c7b8' : '#1f1f1f';
    }

    if (themeBtn) {
        themeBtn.innerHTML = isLight ? '☾' : '☀';
        themeBtn.title = isLight ? 'Tema oscuro' : 'Tema claro';
        themeBtn.setAttribute('aria-label', isLight ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro');
    }
}

function toggleTheme() {
    const root = document.body;
    const isLight = root.dataset.theme === 'light';
    applyThemeState(isLight ? 'dark' : 'light');
}

function copyToClipboard(text, label) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);

    showToast(`> ${label} COPIADO AL PORTAPAPELES`);
}

function showToast(message) {
    const toast = document.getElementById('toast-notification');
    const toastText = document.getElementById('toast-text');
    toastText.innerText = message;
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');

    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 2500);
}

function handleTerminalSubmit(e) {
    e.preventDefault();
    const name = document.getElementById('cli-name').value;
    const message = document.getElementById('cli-message').value;
    const output = document.getElementById('cli-output');

    output.classList.remove('hidden');
    output.innerHTML = `> PROCESANDO TRANSMISIÓN...<br>> MENSAJE DE "${name.toUpperCase()}" RECIBIDO [200 OK]`;

    document.getElementById('cli-name').value = '';
    document.getElementById('cli-message').value = '';

    setTimeout(() => {
        output.innerHTML += `<br>> GRACIAS POR CONTACTAR. TE RESPONDERÉ A LA BREVEDAD.`;
    }, 1000);
}

function updateLinkPreview(title, description, imageUrl = 'https://www.google.com/s2/favicons?sz=256&domain_url=www.google.com') {
    document.getElementById('preview-name').innerText = title;
    document.getElementById('preview-desc').innerText = description;

    const previewImage = document.getElementById('preview-image');
    if (previewImage) {
        previewImage.src = imageUrl || 'https://www.google.com/s2/favicons?sz=256&domain_url=www.google.com';
        previewImage.alt = `${title} logo`;
    }
}
