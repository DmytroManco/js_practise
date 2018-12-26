const currentUser = {
    isAuth: () => false,
    name: 'Vasenka',
};

function TodoStore(currentUser) {
    let todos = [];

    function add(todo) {
        const start = Date.now();
        if (currentUser.isAuth()) {
            todos.push(todo);
        } else {
            throw  'You are not logged';
        }
        const duration = Date.now() - start;
        console.log(`add() duration : ${duration}`);
    }

    return Object.freeze(add);
}

function logDuration(fn) {
    return function decorator(...args) {
        const start = Date.now();
        const result = fn.apply(this, args);
        const duration = Date.now() - start;
        console.log(`${fn.name}() duration : ${duration}`);
        return result;
    }
}

function authDecoratorMaker(currentUSer) {
    return function auth(fn) {
        return function decorator(...args) {
            if (currentUSer.iAuth()) {
                return fn.apply(this, args);
            } else {
                throw  'You are not logged';
            }
        }
    }
}

const authorixe = authDecoratorMaker(currentUser);
