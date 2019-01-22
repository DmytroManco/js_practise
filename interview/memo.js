function memo(fn) {
    const cache = {};
    
    return function (...args) {
        const key = JSON.stringify(arguments);

        if (cache[key]) return cache[key];

        const value = fn(...args);
        cache[key] = value;
        // console.log('Cache', cache);

        return value;
    }
}

const fib = memo(function (n) {
    if (n < 2) return 1;
    // console.log('loading... ');
    return fib(n - 2) + fib(n - 1);
});

console.log(fib(3));