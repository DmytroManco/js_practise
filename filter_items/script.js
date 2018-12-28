const mockProjects = [
    {
        name: 'Project-1',
        client: 'Kennet',
        technology: 'angular',
        service: 'outsource'
    },
    {
        name: 'Project-2',
        client: 'EG',
        technology: 'ionic',
        service: 'outsource'
    },
    {
        name: 'Project-3',
        client: 'Transwestern',
        technology: 'native',
        service: 'outstaff'
    },
    {
        name: 'Project-4',
        client: 'Muiko',
        technology: 'umbraco',
        service: 'outsource'
    },
];
const filtersObj = {};
const filters = document.querySelectorAll('[data-filter-prop]');
const itemsContainer = document.getElementById('itemList');

function createProjectElement(project) {
    const div = document.createElement('div');
    const title = document.createElement('h4');
    const clientEl = document.createElement('div');

    div.classList.add('project');
    title.innerText = project.name;
    clientEl.innerText = project.client;
    div.appendChild(title);
    div.appendChild(clientEl);
    div.appendChild(makeInfoProjectSection(project));

    return div;
}

function updateView(projects) {
    const fragment = document.createDocumentFragment();
    itemsContainer.innerHTML = '';

    projects.forEach(project => {
        fragment.appendChild(createProjectElement(project));
    });

    itemsContainer.appendChild(fragment);
}

function makeInfoProjectSection(project) {
    const infoEl = document.createElement('div');
    const infoTechEl = document.createElement('div');
    const infoServiceEl = document.createElement('div');

    infoTechEl.innerText = project.technology;
    infoServiceEl.innerText = project.service;
    infoEl.appendChild(infoTechEl);
    infoEl.appendChild(infoServiceEl);
    infoEl.classList.add('project__info');

    return infoEl;
}

function initFilters() {
    const values = [];
    filters.forEach(filter => {
        values.push(filter.getAttribute('data-filter-prop'));
    });

    values.reduce((current, next) => {
        if(current.indexOf(next) < 0) {
            current.push(next);
            filtersObj[next] = '';
        }
        return current;
    }, []);
}

function setFilters(event) {
    const filterValue = event.target.getAttribute('data-filter');
    const filterProperty = event.target.getAttribute('data-filter-prop');

    filtersObj[filterProperty] = filtersObj[filterProperty] === filterValue ? '' : filterValue;
    filterProjects(filtersObj, mockProjects);
}

function filterProjects(filtersObj, projects) {
    let filtered = projects;

    for (const property in filtersObj) {
        if (filtersObj[property] && filtersObj.hasOwnProperty(property)) {
            filtered = filtered.filter(project => project[property] === filtersObj[property]);
        }
    }

    updateView(filtered);
}

initFilters();
updateView(mockProjects);
filters.forEach(filterEl => filterEl.addEventListener('click', setFilters));