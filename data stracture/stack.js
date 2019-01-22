class Stack {
    constructor(...items) {
        this.stack = [...items];
        this.reverse = false;
    }

    push(...items) {
        return this.reverse ? this.stack.unshift(...items) : this.stack.push(...items);
    }

    pop() {
        return this.reverse ? this.stack.shift() : this.stack.pop();
    }
}

const stack = new Stack(1, 2);
stack.push(3, 4, 5);
console.log(stack);
stack.pop();
console.log(stack);
stack.reverse = true;
stack.pop();
console.log(stack);