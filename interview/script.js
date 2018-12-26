const a = [1, 2, 3, 4, 5];
Array.prototype.multiply = function () {
    const newArr = this.concat(this.map(n => Math.pow(n, 2)));
    this.splice(0, this.length, ...newArr);
};

a.multiply();




