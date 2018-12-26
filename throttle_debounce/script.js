function throttle(delay, fn) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall < delay) return;

        lastCall = now;

        return fn(...args);
    }
}

const throttleBtn = document.getElementById('throttleBtn');
throttleBtn.addEventListener('click', throttle(5000, console.log));
const debounceBtn = document.getElementById('debounceBtn');
debounceBtn.addEventListener('click', debounce(2000, console.log));

function debounce(delay, fn) {
    let timerId;

    return function (...args) {
        if (timerId) {
            clearTimeout(timerId);
        }

        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}