(function () {
    const filtersObj = {};
    const filters = document.querySelectorAll('[data-filter-prop]');
    const casesEl = document.querySelectorAll('#itemList .case');

    function updateView(event) {
        const filterValue = event.target.getAttribute('data-filter');
        const filterProperty = event.target.getAttribute('data-filter-prop');

        filtersObj[filterProperty] = filtersObj[filterProperty] === filterValue ? '' : filterValue;
        filterElements(filtersObj);
        toggleActiveClass(filterProperty, event.target);
    }

    function filterElements(filterObj) {
        let filtered = [...casesEl];
        let toHide = [];
        const values = Object.values(filterObj);

        if (values.every(value => !value)) {
            casesEl.forEach(element => element.classList.remove('d-none'));
            return;
        }

        for (const property in filterObj) {
            if (filterObj[property] && filterObj.hasOwnProperty(property)) {
                filtered = filtered.filter(element => {
                    const values = element.getAttribute(`data-filter-${property}`).split(' ');
                    if (values.includes(filterObj[property])) {
                        return element;
                    } else {
                        toHide.push(element);
                    }
                })
            }
        }

        toHide.forEach(element => element.classList.add('d-none'));
        filtered.forEach(element => element.classList.remove('d-none'));
    }

    function initFilters() {
        const values = [];
        filters.forEach(filter => {
            values.push(filter.getAttribute('data-filter-prop'));
        });

        values.reduce((current, next) => {
            if (current.indexOf(next) < 0) {
                current.push(next);
                filtersObj[next] = '';
            }
            return current;
        }, []);
    }

    function toggleActiveClass(category, targetEl) {
        const filters = document.querySelectorAll(`[data-filter-prop=${category}]`);

        if (targetEl.classList.contains('btn-active')) {
            filters.forEach(element => {
                element.classList.remove('btn-active');
            });
            return;
        }

        filters.forEach(element => {
            element.classList.remove('btn-active');
        });
        targetEl.classList.add('btn-active');
    }

    initFilters();
    filters.forEach(filterEl => filterEl.addEventListener('click', updateView));
})();