class Queue {
    constructor(...items) {
        this.queue = [...items];
        this.reverse = false;
    }

    enqueue(...items) {
        return this.reverse ? this.queue.push(...items) : this.queue.unshift(...items);
    }

    dequeue() {
        return this.reverse ? this.queue.shift() : this.queue.pop();
    }
}

const queue = new Queue(1, 2);
queue.enqueue(3, 4);
console.log(queue);
queue.dequeue();
console.log(queue);