class Tree {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }

    insert(value) {
        if (value < this.value) {
            if (!this.left) {
                this.left = new Tree(value);
            } else {
                this.left.insert(value);
            }
        } else {
            if (!this.right) {
                this.right = new Tree(value);
            } else {
                this.right.insert(value);
            }
        }
    }

    contains(value) {
        if (value === this.value) return true;

        if (value < this.value) {
            if (!this.left) return false;
            else return this.left.contains(value);
        } else {
            if (!this.right) return false;
            else return this.right.contains(value);
        }
    }

    depthFirstTraverse(order, cb) {
        order === 'pre' && cb(this.value);
        this.left && this.left.depthFirstTraverse(order, cb);
        order === 'in' && cb(this.value);
        this.right && this.right.depthFirstTraverse(order, cb);
        order === 'post' && cb(this.value);
    }

    breathFirstTraverse(cb) {
        const queue = [this];
        while (queue.length) {
            const root = queue.shift();
            cb(root.value);
            root.left && queue.push(root.left);
            root.right && queue.push(root.right);
        }
    }

    getMinValue() {
        if (this.left) return this.left.getMinValue();
        return this.value;
    }

    getMaxValue() {
        if (this.right) return this.right.getMaxValue();
        return this.value;
    }
}

const tree = new Tree(5);
for (const value of [3, 6, 1, 7, 8, 4, 10, 2, 9]) tree.insert(value);

console.log(tree);