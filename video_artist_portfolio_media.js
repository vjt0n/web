function normalizeUrl(url) {
    return String(url || '').trim().replace(/^['"]+|['"]+$/g, '');
}

function getYoutubeVideoId(url) {
    if (!url) return '';
    const value = url.trim();
    const match = value.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/i);
    return match ? match[1] : '';
}

function detectMediaType(url) {
    const normalizedUrl = normalizeUrl(url);
    if (!normalizedUrl) return 'empty';
    const lower = normalizedUrl.toLowerCase();
    if (lower.includes('youtube.com') || lower.includes('youtu.be') || lower.includes('youtube-nocookie.com')) return 'youtube';
    if (/\.(?:mp4|webm|ogg|mov|m4v|avi)(?:$|\?)/i.test(lower) || lower.includes('video')) return 'video';
    return 'image';
}

function createYoutubeEmbed(videoId) {
    const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&controls=0&autoplay=0&enablejsapi=1&origin=${encodeURIComponent(window.location.origin)}`;

    return `
        <div class="project-video-card" data-video-card="${videoId}">
            <div class="project-video-frame">
                <iframe id="project-youtube-${videoId}" class="youtube-player-frame" data-video-id="${videoId}" src="${embedUrl}" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div class="project-video-controls">
                <button type="button" class="video-control" data-video-id="${videoId}" data-video-action="play" aria-label="Reproducir video">▶</button>
                <button type="button" class="video-control" data-video-id="${videoId}" data-video-action="pause" aria-label="Pausar video">❚❚</button>
                <button type="button" class="video-control" data-video-id="${videoId}" data-video-action="mute" aria-label="Silenciar video">🔊</button>
                <button type="button" class="video-control" data-video-id="${videoId}" data-video-action="fullscreen" aria-label="Pantalla completa">▢</button>
            </div>
        </div>
    `;
}

function createCompactYoutubeLink(videoId) {
    return `
        <a class="project-youtube-compact-link" href="https://www.youtube.com/watch?v=${videoId}" target="_blank" rel="noopener noreferrer" aria-label="Ver video en YouTube">
            <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg" alt="" loading="lazy" />
            <span class="project-youtube-compact-copy">
                <strong>YouTube</strong>
                <span>Ver contenido completo</span>
            </span>
            <span class="project-youtube-compact-arrow" aria-hidden="true">↗</span>
        </a>
    `;
}

function sendPlayerCommand(iframe, command) {
    if (!iframe || !iframe.contentWindow) return;

    iframe.contentWindow.postMessage(
        JSON.stringify({
            event: 'command',
            func: command,
            args: []
        }),
        '*'
    );
}

function handleProjectVideoAction(event) {
    const button = event.target.closest('.video-control');
    if (!button) return;

    const videoId = button.dataset.videoId;
    const action = button.dataset.videoAction;
    const iframe = document.getElementById(`project-youtube-${videoId}`);

    if (!iframe) return;

    if (action === 'play') {
        sendPlayerCommand(iframe, 'playVideo');
    }

    if (action === 'pause') {
        sendPlayerCommand(iframe, 'pauseVideo');
    }

    if (action === 'mute') {
        const muted = button.dataset.muted === 'true';
        sendPlayerCommand(iframe, muted ? 'unMute' : 'mute');
        button.dataset.muted = muted ? 'false' : 'true';
        button.textContent = muted ? '🔊' : '🔇';
        button.setAttribute('aria-label', muted ? 'Silenciar video' : 'Activar sonido');
    }

    if (action === 'fullscreen') {
        if (iframe.requestFullscreen) {
            iframe.requestFullscreen();
        }
    }
}

function attachProjectVideoControls() {
    document.addEventListener('click', (event) => {
        const button = event.target.closest('.video-control');
        if (!button) return;
        handleProjectVideoAction(event);
    });
}

function getEmbeddedMediaHtml(mediaUrls, mediaLayout, compactLastYoutube = false, mediaLimit = 6, moreLink = '') {
    const urls = Array.isArray(mediaUrls) ? mediaUrls : [];
    const valid = urls
        .map(normalizeUrl)
        .filter(Boolean)
        .slice(0, mediaLimit);
    const normalizedMoreLink = normalizeUrl(moreLink);

    if (valid.length === 0 && !normalizedMoreLink) return '';

    const items = valid.map((url, index) => {
        const type = detectMediaType(url);
        if (type === 'youtube') {
            const videoId = getYoutubeVideoId(url);
            if (!videoId) return ``;
            if (compactLastYoutube && index === valid.length - 1) return createCompactYoutubeLink(videoId);
            return createYoutubeEmbed(videoId);
        }
        if (type === 'video') {
            return `<video src="${url}" controls playsinline preload="metadata"></video>`;
        }
        return `<img src="${url}" alt="Proyecto visual" loading="lazy" />`;
    }).filter(Boolean);

    if (normalizedMoreLink) {
        items.push(`<a class="project-media-more-link" href="${normalizedMoreLink}" target="_blank" rel="noopener noreferrer">Ver más <span aria-hidden="true">↗</span></a>`);
    }

    if (items.length === 1) return items[0];
    const youtubeCount = valid.filter(url => detectMediaType(url) === 'youtube' && getYoutubeVideoId(url)).length;
    const scrollClass = youtubeCount > 2 || mediaLayout === 'pairs' ? ' project-media-grid-scrollable' : '';
    const pairsLayoutClass = mediaLayout === 'pairs' ? ' project-media-grid-pairs' : '';
    const layoutClass = mediaLayout === 'vertical' ? ' project-media-grid-vertical' : '';
    return `<div class="project-media-grid${scrollClass}${pairsLayoutClass}${layoutClass}">${items.join('')}</div>`;
}

function renderProjectMedia(project) {
    const mediaLayer = document.getElementById('project-media-layer');
    const canvas = document.getElementById('vj-screen-canvas');
    const html = getEmbeddedMediaHtml(project.media || [], project.mediaLayout, project.compactLastYoutube, project.mediaLimit, project.moreLink);
    mediaLayer.classList.toggle('project-media-layer-full-bleed', Boolean(project.mediaFullBleed));

    if (!html) {
        mediaLayer.innerHTML = '';
        mediaLayer.classList.remove('visible');
        canvas.style.display = 'block';
        return;
    }

    mediaLayer.innerHTML = html;
    mediaLayer.classList.add('visible');
    canvas.style.display = 'none';

    mediaLayer.querySelectorAll('.youtube-player-frame').forEach((iframe) => {
        iframe.addEventListener('load', () => {
            iframe.dataset.ready = 'true';
        });
    });
}

function loadProject(index) {
    if (filteredProjects.length === 0) return;
    currentProjectIndex = index;

    const proj = filteredProjects[index];
    const metaLabel = document.getElementById('project-meta-label');
    const metaValue = document.getElementById('project-studio');
    const isLiveOperation = proj.category === 'OPERACIÓN EN VIVO' || proj.category === 'PANTALLAS / OPERACIÓN EN VIVO';
    const metaLabelOverride = String(proj.studioLabel || '').trim();
    const hasStudio = String(proj.studio || '').trim();
    const hasRole = String(proj.role || '').trim();

    metaValue.parentElement.classList.toggle('hidden', isLiveOperation);

    document.getElementById('project-title').innerText = proj.title;
    document.getElementById('project-category-badge').innerText = proj.category;
    document.getElementById('project-date').innerText = proj.date;

    if (proj.category === 'MOTION GRAPHICS / VISUALIZERS') {
        metaLabel.innerText = '';
        metaValue.replaceChildren();
    } else {
        if (proj.category === 'TEATRO') {
            if (hasStudio) {
                metaLabel.innerText = 'ESTUDIO:';
                metaValue.innerText = hasStudio;
            } else {
                metaLabel.innerText = 'DIRECCIÓN:';
                metaValue.innerText = hasRole;
            }
        } else if (proj.category === 'VIDEOINSTALACIÓN' || proj.category === 'LIVE SETS AV' || proj.category === 'OPERACIÓN EN VIVO') {
            metaLabel.innerText = 'PRODUCCIÓN:';
        } else {
            metaLabel.innerText = proj.studioLabel !== undefined ? metaLabelOverride : 'ESTUDIO:';
        }

        metaValue.replaceChildren();
        if (hasStudio && proj.studioUrl) {
            const studioLink = document.createElement('a');
            studioLink.href = proj.studioUrl;
            studioLink.target = '_blank';
            studioLink.rel = 'noopener noreferrer';
            studioLink.className = 'text-white font-bold underline';
            studioLink.textContent = hasStudio;
            metaValue.appendChild(studioLink);
        } else if (!hasStudio && hasRole && proj.roleUrl) {
            const roleLink = document.createElement('a');
            roleLink.href = proj.roleUrl;
            roleLink.target = '_blank';
            roleLink.rel = 'noopener noreferrer';
            roleLink.className = 'text-white font-bold underline';
            roleLink.textContent = hasRole;
            metaValue.appendChild(roleLink);
        } else {
            metaValue.textContent = hasStudio || hasRole;
        }
    }

    renderProjectMedia(proj);
    renderProjectList();
}

function nextProject() {
    if (filteredProjects.length === 0) return;
    currentProjectIndex = (currentProjectIndex + 1) % filteredProjects.length;
    loadProject(currentProjectIndex);
}

function prevProject() {
    if (filteredProjects.length === 0) return;
    currentProjectIndex = (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;
    loadProject(currentProjectIndex);
}
