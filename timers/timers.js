let start, stopId, progress;
let toggle = false;

const el = document.getElementById('block');
const btn = document.getElementById('toggleBtn');

function step(timestamp) {
    if(!start || progress > 500) start = timestamp;
    progress = (timestamp - start) / 10 + 50;
    el.style.top = `${progress}px`;
    stopId = window.requestAnimationFrame(step);
}

function toggleAnimation() {
    if (!toggle) {
        toggle = true;
        window.requestAnimationFrame(step);
    } else {
        toggle = false;
        cancelAnimationFrame(stopId);
    }
}

btn.addEventListener('click', toggleAnimation);