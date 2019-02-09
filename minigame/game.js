(function () {
    const field = document.querySelector('.field');
    const timeInput = document.getElementById('timeInput');
    const startBtn = document.getElementById('startGame');
    const score = {user: 0, program: 0};
    const scoreUserEl = document.querySelector('.score__user');
    const scoreProgramEl = document.querySelector('.score__program');
    const dialog = document.getElementById('dialog');
    const closeModalBtn = document.querySelector('.modal__close');
    const modalTitle = document.querySelector('.modal__title');
    const modalImage = document.querySelector('.modal__img');
    let timerId;

    function renderGrid() {
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 100; i++) {
            const div = document.createElement('div');
            div.classList.add('square');
            fragment.appendChild(div);
        }

        field.appendChild(fragment);
    }

    function startGame() {
        if (score.user >= 10 || score.program >= 10) {
            showResultMsg();
            return;
        }

        let time = parseInt(timeInput.value, 10);
        if (!time || isNaN(time)) time = 500;
        makeActiveSquare(time);
    }

    function makeActiveSquare(delay) {
        const index = returnRandomIndex(0, 99);
        const squaresCollection = document.querySelectorAll('.square');
        const activeSquare = squaresCollection[index];
        activeSquare.classList.add('active');

        activeSquare.addEventListener('click', scoreUser);
        timerId = setTimeout(() => {
            score.program++;
            activeSquare.classList.remove('active');
            activeSquare.removeEventListener('click', scoreUser);
            startGame();
        }, delay);
    }

    function scoreUser() {
        clearTimeout(timerId);
        score.user++;
        this.classList.remove('active');
        this.removeEventListener('click', scoreUser);
        startGame();
    }

    function returnRandomIndex(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    function bindDomElement(obj, prop, domEl) {
        Object.defineProperty(obj, prop, {
            get: function() { return domEl.innerText; },
            set: function(newValue) { domEl.innerText = newValue; },
            configurable: true
        });
    }

    function showResultMsg() {
        dialog.classList.add('show');

        if (score.user > score.program) {
            modalTitle.innerText = 'You Won!';
            modalImage.src = 'win.jpg';
        } else {
            modalTitle.innerText = 'You Lost!';
            modalImage.src = 'lost.jpg';
        }
    }

    function hideDialog() {
        dialog.classList.remove('show');
        score.user = 0;
        score.program = 0;
    }

    renderGrid();
    startBtn.addEventListener('click', startGame);
    bindDomElement(score, 'user', scoreUserEl);
    bindDomElement(score, 'program', scoreProgramEl);
    dialog.addEventListener('click', hideDialog);
    closeModalBtn.addEventListener('click', hideDialog);
}());