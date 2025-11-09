const canvas = document.getElementById('artCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

ctx.lineWidth = 2;
ctx.lineCap = "round";

function drawBranch(x, y, len, teta, depth) {
    if (depth ===0) return;

    const xp = x + len * Math.cos(teta);
    const yp = y + len * Math.sin(teta);
    
    ctx.strokeStyle=`hsl(${(depth * 40) % 360}, 80%, 60%)`;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(xp, yp);
    ctx.stroke();

    const nextLen = len * 0.7;

    setTimeout(() => {
        drawBranch(xp, yp, nextLen, teta -0.5, depth -1);
        drawBranch(xp, yp, nextLen, teta +0.5, depth -1);
    }, 50);
}

drawBranch(canvas.width /2, canvas.height/2, 120, -Math.PI / 2, 10);