// TV Stack Noise Canvas Simulation
function initTVCanvas() {
    const canvas = document.getElementById('tv-stack-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function drawTV() {
        if (currentTab === 'contact') {
            ctx.fillStyle = '#050505';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const cols = 3;
            const rows = 3;
            const w = canvas.width / cols;
            const h = canvas.height / rows;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * w + 5;
                    const y = j * h + 5;
                    const tvW = w - 10;
                    const tvH = h - 10;

                    ctx.strokeStyle = '#333';
                    ctx.strokeRect(x, y, tvW, tvH);

                    const imgData = ctx.createImageData(tvW, tvH);
                    for (let p = 0; p < imgData.data.length; p += 4) {
                        const noise = Math.random() > 0.5 ? 255 : 0;
                        const isBlue = (i + j) % 2 === 0;
                        imgData.data[p] = isBlue ? 0 : noise;
                        imgData.data[p+1] = isBlue ? noise/2 : noise;
                        imgData.data[p+2] = isBlue ? noise : noise;
                        imgData.data[p+3] = 200;
                    }
                    ctx.putImageData(imgData, x, y);
                }
            }
        }
        requestAnimationFrame(drawTV);
    }
    drawTV();
}

// Main VJ Interactive Visual Canvas Simulator
function initVJCanvas() {
    const canvas = document.getElementById('vj-screen-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let angle = 0;

    function renderVJLoop() {
        if (currentTab === 'works') {
            ctx.fillStyle = 'rgba(5, 5, 5, 0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const mode = filteredProjects[currentProjectIndex]?.canvasMode || 'grid';
            const time = Date.now() * 0.002;
            const cx = canvas.width / 2;
            const cy = canvas.height / 2;

            ctx.strokeStyle = '#ff5500';
            ctx.lineWidth = 1.5;

            if (mode === 'grid') {
                for (let i = -canvas.width; i < canvas.width; i += 30) {
                    ctx.beginPath();
                    ctx.moveTo(cx + i, cy);
                    ctx.lineTo(cx + i * 4, canvas.height);
                    ctx.stroke();
                }
                const horizon = cy + Math.sin(time) * 20;
                ctx.beginPath();
                ctx.arc(cx, horizon - 40, 50, 0, Math.PI * 2);
                ctx.stroke();
            } else if (mode === 'waves') {
                ctx.beginPath();
                for (let x = 0; x < canvas.width; x += 10) {
                    const y = cy + Math.sin(x * 0.02 + time * 2) * 40;
                    if (x === 0) ctx.moveTo(x, y);
                    else ctx.lineTo(x, y);
                }
                ctx.stroke();
            } else if (mode === 'glitch') {
                for (let i = 0; i < 5; i++) {
                    const gx = Math.random() * canvas.width;
                    const gy = Math.random() * canvas.height;
                    const gw = Math.random() * 80 + 20;
                    const gh = Math.random() * 30 + 10;
                    ctx.strokeStyle = Math.random() > 0.5 ? '#ff5500' : '#ffffff';
                    ctx.strokeRect(gx, gy, gw, gh);
                }
            } else {
                angle += 0.02;
                ctx.save();
                ctx.translate(cx, cy);
                ctx.rotate(angle);
                ctx.strokeRect(-60, -60, 120, 120);
                ctx.rotate(-angle * 2);
                ctx.strokeRect(-40, -40, 80, 80);
                ctx.restore();
            }
        }
        requestAnimationFrame(renderVJLoop);
    }
    renderVJLoop();
}
