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

function toggleWorksMenu(event) {
    event.stopPropagation();
    const menu = document.getElementById('works-category-menu');
    const button = document.getElementById('nav-works');
    const isOpen = menu.classList.toggle('show');
    button.setAttribute('aria-expanded', String(isOpen));
}

function handleWorksNavigation(event) {
    event.stopPropagation();

    if (window.matchMedia('(max-width: 768px), (orientation: portrait)').matches) {
        event.preventDefault();
        closeWorksMenu();
        filterCategory('PANTALLAS / DISEÑO Y REALIZACIÓN');
        return;
    }

    toggleWorksMenu(event);
}

function closeWorksMenu() {
    const menu = document.getElementById('works-category-menu');
    const button = document.getElementById('nav-works');
    if (!menu || !button) return;

    menu.classList.remove('show');
    button.setAttribute('aria-expanded', 'false');
}

document.addEventListener('click', (event) => {
    if (!event.target.closest('.dropdown-container')) {
        closeWorksMenu();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeWorksMenu();
    }
});

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

async function handleTerminalSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const nameInput = document.getElementById('cli-name');
    const subjectInput = document.getElementById('cli-subject');
    const messageInput = document.getElementById('cli-message');
    const output = document.getElementById('cli-output');
    const submitButton = form.querySelector('button[type="submit"]');
    const name = nameInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    output.classList.remove('hidden');
    if (!name || !subject || !message) {
        output.textContent = '> ERROR: COMPLETÁ NOMBRE, ASUNTO Y MENSAJE.';
        return;
    }

    submitButton.disabled = true;
    output.textContent = '> PROCESANDO TRANSMISIÓN...';

    try {
        const response = await fetch('https://formspree.io/f/mgaalpel', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                name,
                subject,
                message,
                _subject: `CONTACT WEB ${name} - ${subject}`
            })
        });
        const result = await response.json();

        if (!response.ok || result.ok !== true) {
            const errorMessage = result.error
                || result.errors?.map(error => error.message).join(' ')
                || 'Formspree rechazó el envío.';
            throw new Error(errorMessage);
        }

        output.textContent = '> MENSAJE ENVIADO. GRACIAS POR CONTACTAR.';
        form.reset();
    } catch (error) {
        console.error('No se pudo enviar el mensaje de contacto con Formspree:', error);
        output.textContent = '> ERROR: NO SE PUDO ENVIAR EL MENSAJE. INTENTÁ NUEVAMENTE.';
    } finally {
        submitButton.disabled = false;
    }
}

function repositionNetworkDirectory(shouldReposition = true) {
    const network = document.querySelector('.network-directory-dots');
    if (!network) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (shouldReposition && reduceMotion) return;

    const nodes = Array.from(network.querySelectorAll('span')).map((node) => {
        const x = shouldReposition
            ? 5 + Math.random() * 90
            : parseFloat(getComputedStyle(node).getPropertyValue('--dot-x'));
        const y = shouldReposition
            ? 8 + Math.random() * 84
            : parseFloat(getComputedStyle(node).getPropertyValue('--dot-y'));
        if (shouldReposition) {
            node.style.setProperty('--dot-x', `${x}%`);
            node.style.setProperty('--dot-y', `${y}%`);
        }
        return { x, y };
    });

    const connections = network.querySelector('.network-directory-connections');
    if (!connections) return;

    const edges = new Set();
    nodes.forEach((node, index) => {
        const nearest = nodes
            .map((candidate, candidateIndex) => ({
                candidateIndex,
                distance: Math.hypot(node.x - candidate.x, node.y - candidate.y)
            }))
            .filter(({ candidateIndex }) => candidateIndex !== index)
            .sort((first, second) => first.distance - second.distance)
            .slice(0, 2);

        nearest.forEach(({ candidateIndex }) => {
            edges.add(`${Math.min(index, candidateIndex)}-${Math.max(index, candidateIndex)}`);
        });
    });

    const svgNamespace = 'http://www.w3.org/2000/svg';
    const edgeElements = Array.from(edges, (edge) => {
        const [startIndex, endIndex] = edge.split('-').map(Number);
        const start = nodes[startIndex];
        const end = nodes[endIndex];
        const path = document.createElementNS(svgNamespace, 'path');
        path.setAttribute('d', `M${start.x} ${start.y} L${end.x} ${end.y}`);
        return path;
    });

    connections.replaceChildren(...edgeElements);
}

repositionNetworkDirectory(false);

function updateLinkPreview(title, description, imageUrl = 'https://www.google.com/s2/favicons?sz=256&domain_url=www.google.com') {
    document.getElementById('preview-name').innerText = title;
    document.getElementById('preview-desc').innerText = description;
    repositionNetworkDirectory();

    const previewImage = document.getElementById('preview-image');
    if (previewImage) {
        previewImage.src = imageUrl || 'https://www.google.com/s2/favicons?sz=256&domain_url=www.google.com';
        previewImage.alt = `${title} logo`;
    }
}
