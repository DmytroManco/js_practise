function createIterator(arr) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < arr.length ? {value: arr[nextIndex++], done: false} : {done: false};
        }
    }
}
const arr1 = [1, 2, 'some value'];
const obj1 = {name: 'anonymous', age: undefined};
const map1 = new Map([['id', '1'], ['name', 'anonymous']]);
function testArgs(args) {
    for(const value of arguments) {
        console.log(value);
    }
}

const iterator = createIterator(arr1);

console.log(arr1[Symbol.iterator]);
console.log(obj1[Symbol.iterator]);
console.log(map1[Symbol.iterator]);

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for(const entries of map1) {
    console.log(entries);
}

testArgs(1, 2, {name: 'anonymous', age: undefined});

Object.prototype[Symbol.iterator] = function () {
    const obj = this;
    const properties = Object.keys(obj);
    let index = 0;

    return {
        next: function () {
            return index < properties.length ?
                {value: obj[properties[index++]], done: false} :
                {done: true};
        }
    }
};

for (const val of obj1) {
    console.log(val);
}