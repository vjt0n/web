document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------------------------
    // 1. CONFIGURACIÓN Y SELECTORES
    // ----------------------------------------------------
    const buttons = document.querySelectorAll('.load-content-btn');
    const contentPanels = document.querySelectorAll('.content-panel');
    const mountContainer = document.getElementById('main-content-mount');
    const worksDropdown = document.getElementById('works-dropdown');

    // Clases CSS
    const ACTIVE_CLASS = 'is-active';
    const HIDDEN_CLASS = 'hidden';
    const TRANSITION_DURATION = 500; // Debe coincidir con CSS (0.5s)

    // BANDERA DE ESTADO: Evita clics múltiples durante la animación
    // Esto es vital para que no se rompa la secuencia si el usuario hace clic rápido.
    let isAnimating = false;

    // ----------------------------------------------------
    // 2. FUNCIONES DE CONTROL DE PANELES
    // ----------------------------------------------------

    /**
     * Muestra un panel con efecto Fade-In
     * @param {HTMLElement} panel - El elemento a mostrar
     */
    const showPanel = (panel) => {
        if (!panel) return;

        // 1. Quitar display: none (ahora ocupa espacio, pero es invisible por opacity: 0)
        panel.classList.remove(HIDDEN_CLASS);

        // 2. Pequeño delay técnico para asegurar que el navegador registre el 'display: block'
        // antes de aplicar la clase de opacidad.
        requestAnimationFrame(() => {
            setTimeout(() => {
                panel.classList.add(ACTIVE_CLASS);
                
                // Scroll suave opcional hacia el contenido
                if (mountContainer) {
                    const offset = 90;
                    const targetPosition = mountContainer.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
                }
                
                // IMPORTANTE: Liberar el bloqueo de animación cuando termine esta transición
                setTimeout(() => {
                    isAnimating = false;
                }, TRANSITION_DURATION);
                
            }, 50);
        });
    };

    /**
     * Oculta un panel con efecto Fade-Out y espera a que termine
     * @param {HTMLElement} panel - El elemento a ocultar
     * @param {Function} callback - Función a ejecutar cuando termine de ocultarse
     */
    const hidePanel = (panel, callback) => {
        if (!panel) {
            if (callback) callback();
            return;
        }

        // 1. Iniciar Fade-Out (CSS transition opacity)
        panel.classList.remove(ACTIVE_CLASS);

        // 2. ESPERAR a que termine la transición antes de hacer cualquier otra cosa
        setTimeout(() => {
            panel.classList.add(HIDDEN_CLASS); // Ahora sí, display: none (deja de ocupar espacio)
            if (callback) callback(); // Ejecutar el siguiente paso (mostrar el nuevo)
        }, TRANSITION_DURATION);
    };

    // ----------------------------------------------------
    // 3. LISTENERS DE CLIC (Lógica Secuencial)
    // ----------------------------------------------------
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // SI YA ESTAMOS ANIMANDO, IGNORAR EL CLIC
            if (isAnimating) return;

            const targetId = btn.getAttribute('data-target');
            const targetPanel = document.getElementById(targetId);
            
            // Identificar el panel que está activo actualmente
            const currentPanel = document.querySelector(`.content-panel.${ACTIVE_CLASS}`);

            // Si clicamos el mismo botón de la sección activa, no hacemos nada
            if (currentPanel && currentPanel.id === targetId) {
                return; 
            }

            // INICIAR SECUENCIA
            isAnimating = true;

            // Cerrar dropdown si está abierto
            if (worksDropdown && worksDropdown.classList.contains('submenu-open')) {
                worksDropdown.classList.remove('submenu-open');
            }

            // LÓGICA DE INTERCAMBIO (SWAP)
            if (currentPanel) {
                // PASO A: Ocultar el viejo completamente...
                hidePanel(currentPanel, () => {
                    // PASO B: ...Y SOLO ENTONCES, mostrar el nuevo
                    if (targetPanel) {
                        showPanel(targetPanel);
                    } else {
                        isAnimating = false; // Reset por seguridad si no hay target
                    }
                });
            } else {
                // Si no hay nada activo (primera carga rara), mostrar directo
                if (targetPanel) {
                    showPanel(targetPanel);
                } else {
                    isAnimating = false;
                }
            }
        });
    });

    // ----------------------------------------------------
    // 4. INICIALIZACIÓN (Carga inicial)
    // ----------------------------------------------------
    const initialPanelId = 'content-about'; // O el que prefieras por defecto
    const initialPanel = document.getElementById(initialPanelId);

    // Limpieza inicial: asegurar que todo esté oculto salvo el inicial
    contentPanels.forEach(panel => {
        if (panel !== initialPanel) {
            panel.classList.remove(ACTIVE_CLASS);
            panel.classList.add(HIDDEN_CLASS);
        }
    });

    // Mostrar el inicial
    if (initialPanel) {
        initialPanel.classList.remove(HIDDEN_CLASS);
        // Pequeño delay para que haga fade-in al cargar la página
        setTimeout(() => {
            initialPanel.classList.add(ACTIVE_CLASS);
        }, 100);
    }
});