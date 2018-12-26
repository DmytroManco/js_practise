const list = document.getElementById('observerList');
const addBtn = document.getElementById('addItem');
const removeBtn = document.getElementById('removeItem');
const recordEl = document.getElementById('record');
const observer = new MutationObserver(mutationCb);

const createListItem = () => {
    const li = document.createElement('li');
    const index = list.children.length;
    li.innerText = `Item-${index + 1}`;
    list.appendChild(li);
};

const deleteLastEl = () => {
    if(!list.children.length) return;
    const child = list.children[list.children.length - 1];
    child.parentElement.removeChild(child);
};

function mutationCb(record) {
    if (record[0].addedNodes.length) {
        recordEl.innerText = 'You Added Element';
    } else {
        recordEl.innerText = 'Element was deleted';
    }
}

addBtn.addEventListener('click', createListItem);
removeBtn.addEventListener('click', deleteLastEl);
observer.observe(list, {
   childList: true
});