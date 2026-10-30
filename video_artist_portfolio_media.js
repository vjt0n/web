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

function resizeOdesurGalleryImages(gallery) {
    const portraits = Array.from(gallery.querySelectorAll('.project-media-gallery-portraits img'));
    const landscapes = Array.from(gallery.querySelectorAll('.project-media-gallery-landscapes img'));
    const portraitReference = portraits[0];
    const landscapeReference = landscapes[0];
    const landscapeToResize = landscapes[2];

    [...portraits, landscapeToResize].filter(Boolean).forEach((image) => {
        image.style.height = '';
        image.style.objectFit = '';
    });

    if (portraitReference?.naturalWidth && portraitReference.naturalHeight) {
        const referenceHeight = portraitReference.getBoundingClientRect().width
            * portraitReference.naturalHeight
            / portraitReference.naturalWidth;
        portraits.forEach((image) => {
            image.style.height = `${referenceHeight}px`;
            image.style.objectFit = 'cover';
        });
    }

    if (landscapeReference?.naturalWidth && landscapeReference.naturalHeight && landscapeToResize) {
        const referenceHeight = landscapeReference.getBoundingClientRect().width
            * landscapeReference.naturalHeight
            / landscapeReference.naturalWidth;
        landscapeToResize.style.height = `${referenceHeight}px`;
        landscapeToResize.style.objectFit = 'cover';
    }
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

    window.addEventListener('resize', () => {
        const gallery = document.querySelector('.project-media-gallery');
        if (gallery) resizeOdesurGalleryImages(gallery);
    });
}

function getEmbeddedMediaHtml(mediaUrls, mediaLayout, compactLastYoutube = false, mediaLimit = 6, moreLink = '', mediaSections = [], mediaPairStart = 0, mediaFeaturedCount = 4, mediaMoreLinkCentered = false) {
    const urls = Array.isArray(mediaUrls) ? mediaUrls : [];
    const valid = urls
        .map(normalizeUrl)
        .filter(Boolean)
        .slice(0, mediaLimit);
    const normalizedMoreLink = normalizeUrl(moreLink);
    const sectionHeadings = new Map(
        mediaSections
            .filter(section => Number.isInteger(section.before) && section.before >= 0 && section.title)
            .map(section => [section.before, String(section.title)])
    );

    if (valid.length === 0 && !normalizedMoreLink) return '';

    const items = valid.map((url, index) => {
        const type = detectMediaType(url);
        const sectionTitle = sectionHeadings.get(index);
        const sectionHeading = sectionTitle
            ? `<h3 class="project-media-section-heading">${sectionTitle.replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character])}</h3>`
            : '';
        if (type === 'youtube') {
            const videoId = getYoutubeVideoId(url);
            if (!videoId) return ``;
            if (compactLastYoutube && index === valid.length - 1) return `${sectionHeading}${createCompactYoutubeLink(videoId)}`;
            return `${sectionHeading}${createYoutubeEmbed(videoId)}`;
        }
        if (type === 'video') {
            return `${sectionHeading}<video src="${url}" controls playsinline preload="metadata"></video>`;
        }
        const loading = mediaLayout === 'featured-gallery' && index >= 4 ? 'eager' : 'lazy';
        return `${sectionHeading}<img class="project-media-image" src="${url}" alt="Proyecto visual" loading="${loading}" />`;
    }).filter(Boolean);

    if (normalizedMoreLink) {
        const centeredClass = mediaMoreLinkCentered ? ' project-media-more-link-centered' : '';
        items.push(`<a class="project-media-more-link${centeredClass}" href="${normalizedMoreLink}" target="_blank" rel="noopener noreferrer">Ver más <span aria-hidden="true">↗</span></a>`);
    }

    if (items.length === 1) return items[0];
    const youtubeCount = valid.filter(url => detectMediaType(url) === 'youtube' && getYoutubeVideoId(url)).length;
    const scrollClass = youtubeCount > 2 || mediaLayout === 'pairs' || mediaLayout === 'vertical-pairs' || mediaLayout === 'featured-pairs' || mediaLayout === 'featured-gallery' || mediaLayout === 'featured-trio' ? ' project-media-grid-scrollable' : '';
    const pairsLayoutClass = mediaLayout === 'pairs' ? ' project-media-grid-pairs' : '';
    const pairsFitLayoutClass = mediaLayout === 'pairs-fit' ? ' project-media-grid-pairs-fit' : '';
    const layoutClass = mediaLayout === 'vertical' || mediaLayout === 'vertical-pairs' ? ' project-media-grid-vertical' : '';
    const aspectLayoutClass = mediaLayout === 'aspect' ? ' project-media-grid-aspect' : '';
    const featuredPairsLayoutClass = mediaLayout === 'featured-pairs' ? ' project-media-grid-featured-pairs' : '';
    const featuredGalleryLayoutClass = mediaLayout === 'featured-gallery' ? ' project-media-grid-featured-gallery' : '';
    const featuredTrioLayoutClass = mediaLayout === 'featured-trio' ? ' project-media-grid-featured-trio' : '';
    if (mediaLayout === 'vertical-pairs') {
        const pairStart = Math.min(
            Number.isInteger(mediaPairStart) && mediaPairStart >= 0 ? mediaPairStart : 0,
            items.length
        );
        const pairs = [];
        for (let index = pairStart; index < items.length; index += 2) {
            pairs.push(`<div class="project-media-grid-media-pair">${items.slice(index, index + 2).join('')}</div>`);
        }
        return `<div class="project-media-grid${scrollClass}${layoutClass}">${items.slice(0, pairStart).join('')}${pairs.join('')}</div>`;
    }
    if (mediaLayout === 'interstellar-pairs') {
        return `<div class="project-media-grid project-media-grid-aspect project-media-grid-scrollable">${items.slice(0, 5).join('')}<div class="project-media-grid-pair">${items.slice(5, 7).join('')}</div><div class="project-media-grid-pair">${items.slice(7, 9).join('')}</div>${items.slice(9).join('')}</div>`;
    }
    if (mediaLayout === 'featured-gallery') {
        const featuredCount = Number.isInteger(mediaFeaturedCount) && mediaFeaturedCount > 0
            ? Math.min(mediaFeaturedCount, items.length)
            : 4;
        return `<div class="project-media-grid${scrollClass}${featuredGalleryLayoutClass}"><div class="project-media-featured">${items.slice(0, featuredCount).join('')}</div><div class="project-media-gallery"><div class="project-media-gallery-portraits">${items.slice(featuredCount, featuredCount + 5).join('')}</div><div class="project-media-gallery-landscapes">${items.slice(featuredCount + 5).join('')}</div></div></div>`;
    }
    return `<div class="project-media-grid${scrollClass}${pairsLayoutClass}${pairsFitLayoutClass}${layoutClass}${aspectLayoutClass}${featuredPairsLayoutClass}${featuredGalleryLayoutClass}${featuredTrioLayoutClass}">${items.join('')}</div>`;
}

function renderProjectMedia(project) {
    const mediaLayer = document.getElementById('project-media-layer');
    const canvas = document.getElementById('vj-screen-canvas');
    const html = getEmbeddedMediaHtml(project.media || [], project.mediaLayout, project.compactLastYoutube, project.mediaLimit, project.moreLink, project.mediaSections, project.mediaPairStart, project.mediaFeaturedCount, project.mediaMoreLinkCentered);
    mediaLayer.classList.toggle('project-media-layer-full-bleed', Boolean(project.mediaFullBleed));
    mediaLayer.classList.toggle('project-media-layer-fill', Boolean(project.mediaFill));
    mediaLayer.classList.toggle('project-media-layer-video-fill', Boolean(project.mediaVideoFill));
    mediaLayer.classList.toggle('project-media-layer-hiko', project.id === 44);
    mediaLayer.classList.toggle('project-media-layer-tempoferoz', project.id === 20);
    mediaLayer.classList.toggle('project-media-layer-azar', project.id === 48);
    mediaLayer.classList.toggle('project-media-layer-bizarrap', project.id === 40);
    mediaLayer.classList.toggle('project-media-layer-disney', project.id === 41);
    mediaLayer.classList.toggle('project-media-layer-cuerpo', project.id === 31);
    mediaLayer.classList.toggle('project-media-layer-glitchcon', project.id === 3);

    if (!html) {
        mediaLayer.innerHTML = '';
        mediaLayer.classList.remove('visible');
        canvas.style.display = 'block';
        return;
    }

    mediaLayer.innerHTML = html;
    mediaLayer.classList.add('visible');
    canvas.style.display = 'none';

    if (project.id === 31) {
        const moreLink = mediaLayer.querySelector('.project-media-more-link');
        if (moreLink) mediaLayer.appendChild(moreLink);
    }

    const mediaGallery = mediaLayer.querySelector('.project-media-gallery');
    if (mediaGallery) {
        mediaGallery.querySelectorAll('img').forEach((image) => {
            if (image.complete) {
                resizeOdesurGalleryImages(mediaGallery);
            } else {
                image.addEventListener('load', () => resizeOdesurGalleryImages(mediaGallery), { once: true });
            }
        });
    }

    mediaLayer.querySelectorAll('.project-media-grid-aspect .project-media-image').forEach((image) => {
        const classifyImage = () => {
            image.classList.toggle('project-media-image-landscape', image.naturalWidth > image.naturalHeight * 1.15);
        };
        if (image.complete) {
            classifyImage();
        } else {
            image.addEventListener('load', classifyImage, { once: true });
        }
    });

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
    const projectInfoContainer = document.getElementById('project-info-container');
    const projectInfoContent = document.getElementById('project-info-content');
    const projectInfoPlaceholder = document.getElementById('project-info-placeholder');
    const projectInfoGroups = Array.isArray(proj.projectInfo)
        ? proj.projectInfo.filter(group => Array.isArray(group) && group.length > 0)
        : [];
    projectInfoContent.replaceChildren();
    projectInfoGroups.forEach(group => {
        const groupElement = document.createElement('div');
        group.forEach(paragraph => {
            const lineElement = document.createElement('p');
            const parts = Array.isArray(paragraph) ? paragraph : [{ text: String(paragraph) }];
            parts.forEach(part => {
                const text = String(part.text || '');
                let contentNode = document.createTextNode(text);
                if (part.bold) {
                    const strong = document.createElement('strong');
                    strong.appendChild(contentNode);
                    contentNode = strong;
                }
                if (part.href) {
                    const link = document.createElement('a');
                    link.href = part.href;
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                    link.className = 'text-cyber-orange underline';
                    link.appendChild(contentNode);
                    contentNode = link;
                }
                lineElement.appendChild(contentNode);
            });
            groupElement.appendChild(lineElement);
        });
        projectInfoContent.appendChild(groupElement);
    });
    projectInfoContainer.classList.toggle('hidden', projectInfoGroups.length === 0);
    projectInfoPlaceholder.classList.toggle('hidden', projectInfoGroups.length > 0);

    const metaLabel = document.getElementById('project-meta-label');
    const metaValue = document.getElementById('project-studio');
    const isLiveOperation = proj.category === 'OPERACIÓN EN VIVO' || proj.category === 'PANTALLAS / OPERACIÓN EN VIVO';
    const metaLabelOverride = String(proj.studioLabel || '').trim();
    const hasStudio = String(proj.studio || '').trim();
    const hasRole = String(proj.role || '').trim();

    metaValue.parentElement.classList.toggle('hidden', isLiveOperation);

    document.getElementById('project-title').innerText = proj.title;
    const isRealizationCategory = proj.category === 'PANTALLAS / DISEÑO Y REALIZACIÓN';
    const isMotionGraphicsSubcategory = proj.category.startsWith('MOTION GRAPHICS /');
    const showCategoryDetail = isRealizationCategory || proj.category === 'MOTION GRAPHICS' || isMotionGraphicsSubcategory;
    document.getElementById('project-category-badge').innerText = isRealizationCategory
        ? 'PANTALLAS / REALIZACIÓN'
        : (isMotionGraphicsSubcategory ? 'MOTION GRAPHICS' : proj.category);
    const categoryDetailElement = document.getElementById('project-category-detail');
    const categoryDetail = String(proj.categoryDetail || '').trim();
    categoryDetailElement.innerText = categoryDetail || 'Composición, Animación y Render';
    categoryDetailElement.classList.toggle('hidden', !showCategoryDetail && !categoryDetail);
    document.getElementById('project-date').innerText = proj.date;

    if (isMotionGraphicsSubcategory) {
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
        } else if (proj.category === 'LIVE SETS AV') {
            metaLabel.innerText = proj.studioLabel !== undefined ? metaLabelOverride : 'PRODUCCIÓN:';
        } else if (proj.category === 'VIDEOINSTALACIÓN') {
            metaLabel.innerText = proj.studioLabel !== undefined ? metaLabelOverride : 'PRODUCCIÓN:';
        } else if (proj.category === 'OPERACIÓN EN VIVO') {
            metaLabel.innerText = 'PRODUCCIÓN:';
        } else {
            metaLabel.innerText = proj.studioLabel !== undefined
                ? metaLabelOverride
                : (hasStudio ? 'ESTUDIO:' : '');
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
