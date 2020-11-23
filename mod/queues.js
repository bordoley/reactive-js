'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var functions = require('./functions.js');
var option = require('./option.js');
var enumerable = require('./enumerable.js');
var runnable = require('./runnable.js');

const computeParentIndex = (index) => Math.floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { values, compare } = queue;
    const length = values.length;
    for (let index = 0; index < length;) {
        const leftIndex = (index + 1) * 2 - 1;
        const rightIndex = leftIndex + 1;
        const left = values[leftIndex];
        const right = values[rightIndex];
        if (option.isSome(left) && compare(left, item) < 0) {
            if (option.isSome(right) && compare(right, left) < 0) {
                values[index] = right;
                values[rightIndex] = item;
                index = rightIndex;
            }
            else {
                values[index] = left;
                values[leftIndex] = item;
                index = leftIndex;
            }
        }
        else if (option.isSome(right) && compare(right, item) < 0) {
            values[index] = right;
            values[rightIndex] = item;
            index = rightIndex;
        }
        else {
            break;
        }
    }
};
const siftUp = (queue, item) => {
    const { values, compare } = queue;
    for (let index = values.length - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; option.isSome(parent) && compare(parent, item) > 0; index = parentIndex,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex]) {
        values[parentIndex] = item;
        values[index] = parent;
    }
};
class PriorityQueueImpl {
    constructor(compare) {
        this.compare = compare;
        this.values = [];
    }
    get count() {
        return this.values.length;
    }
    clear() {
        this.values.length = 0;
    }
    enumerate() {
        return functions.pipe(this.values, enumerable.fromArray(), enumerable.enumerate);
    }
    peek() {
        return this.values[0];
    }
    pop() {
        const { values } = this;
        const length = values.length;
        if (length === 0) {
            return option.none;
        }
        else if (length === 1) {
            return values.shift();
        }
        else {
            const first = values[0];
            const last = values.pop();
            values[0] = last;
            siftDown(this, last);
            return first;
        }
    }
    push(item) {
        const { values } = this;
        values.push(item);
        siftUp(this, item);
    }
}
const createPriorityQueue = (comparator) => new PriorityQueueImpl(comparator);

class UniqueQueueImpl {
    constructor() {
        this.values = new Set();
    }
    get count() {
        return this.values.size;
    }
    clear() {
        this.values.clear();
    }
    enumerate() {
        return functions.pipe(this.values, enumerable.fromIterable(), enumerable.enumerate);
    }
    peek() {
        return functions.pipe(this.values, enumerable.fromIterable(), enumerable.toRunnable(), runnable.first);
    }
    pop() {
        const head = this.peek();
        if (option.isSome(head)) {
            this.values.delete(head);
        }
        return head;
    }
    push(item) {
        if (!this.values.has(item)) {
            this.values.add(item);
        }
    }
}
const createUniqueQueue = () => new UniqueQueueImpl();

exports.createPriorityQueue = createPriorityQueue;
exports.createUniqueQueue = createUniqueQueue;
