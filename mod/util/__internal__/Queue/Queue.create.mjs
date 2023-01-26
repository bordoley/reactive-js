/// <reference types="./Queue.create.d.ts" />
import { floor, getLength, isSome, none, newInstance } from '../../../functions.mjs';
import { QueueLike_count, QueueLike_clear, QueueLike_peek, QueueLike_pop, QueueLike_push } from '../util.internal.mjs';

const computeParentIndex = (index) => floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { values, compare } = queue;
    const length = getLength(values);
    for (let index = 0; index < length;) {
        const leftIndex = (index + 1) * 2 - 1;
        const rightIndex = leftIndex + 1;
        const left = values[leftIndex];
        const right = values[rightIndex];
        if (isSome(left) && compare(left, item) < 0) {
            if (isSome(right) && compare(right, left) < 0) {
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
        else if (isSome(right) && compare(right, item) < 0) {
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
    for (let index = getLength(values) - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; isSome(parent) && compare(parent, item) > 0; index = parentIndex,
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
    get [QueueLike_count]() {
        return getLength(this.values);
    }
    [QueueLike_clear]() {
        this.values.length = 0;
    }
    [QueueLike_peek]() {
        return this.values[0];
    }
    [QueueLike_pop]() {
        const { values } = this;
        const length = getLength(values);
        if (length === 0) {
            return none;
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
    [QueueLike_push](item) {
        const { values } = this;
        values.push(item);
        siftUp(this, item);
    }
}
const Queue_create = (comparator) => newInstance(PriorityQueueImpl, comparator);

export { Queue_create as default };
