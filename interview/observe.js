const dataObj = {
    name: 'Some Name',
    age: 22,
};

const containerEl = document.getElementById('block-1');
const changeBtn = document.getElementById('changeNameBtn');
changeBtn.addEventListener('click', () => {
    dataObj.name = dataObj.name === 'Some Name' ? 'Another Name' : 'Some Name';
});

containerEl.innerText = dataObj.name;

function bindDomElement(obj, prop, domEl) {
    Object.defineProperty(obj, prop, {
        get: function() { return domEl.innerText; },
        set: function(newValue) { domEl.innerText = newValue; },
        configurable: true
    });
}

bindDomElement(dataObj, 'name', containerEl);