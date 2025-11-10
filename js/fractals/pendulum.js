export function drawPendulumFlower(ctx, canvas) {
    const cX = canvas.width / 2;
    const cY = canvas.height / 2;
    const numPendulums = 12;   
    const len = 200;         
    const amplitude = Math.PI / 4; 
    const speed = 0.02;         

    let t = 0;

    function animate() {
        ctx.fillStyle = 'rgba(0,0,0,0.05)'; 
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < numPendulums; i++) {
            const baseAngle = i * (2 * Math.PI / numPendulums);
            const theta = baseAngle + amplitude * Math.sin(speed * t + i);

            const x = cX + len * Math.sin(theta);
            const y = cY - len * Math.cos(theta);

            ctx.strokeStyle = `hsl(${(i * 360 / numPendulums + t * 50) % 360}, 100%, 60%)`;
            ctx.beginPath();
            ctx.moveTo(cX, cY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }

        t += 1;
        requestAnimationFrame(animate);
    }

    animate();
}
