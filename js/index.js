import { drawFlower } from './fractals/flower.js'
import { drawPendulumFlower } from './fractals/pendulum.js'
// import { drawTree} from './fractals/tree.js'

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

const algorithms = {
    flower: drawFlower,
    pendulum: drawPendulumFlower,
    // tree: drawTree
};

const select = document.getElementById('algoSelect');

function runSelectedAlgo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const algoName = select.value;
    algorithms[algoName](ctx, canvas);
}

select.addEventListener('change', runSelectedAlgo);
runSelectedAlgo();

