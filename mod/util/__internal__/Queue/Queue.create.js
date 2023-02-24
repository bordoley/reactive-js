/// <reference types="./Queue.create.d.ts" />

var _a;
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { floor, isSome, newInstance, none, } from "../../../functions.js";
import { QueueableLike_count, QueueableLike_push } from "../../../util.js";
import { PullableQueueLike_peek, PullableQueueLike_pull, } from "../util.internal.js";
const computeParentIndex = (index) => floor((index - 1) / 2);
const siftDown = (queue, item) => {
    const { [PriorityQueueImpl_values]: values, [PriorityQueueImpl_comparator]: compare, } = queue;
    const length = ReadonlyArray_getLength(values);
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
    const { [PriorityQueueImpl_values]: values, [PriorityQueueImpl_comparator]: compare, } = queue;
    for (let index = ReadonlyArray_getLength(values) - 1, parentIndex = computeParentIndex(index), parent = values[parentIndex]; isSome(parent) && compare(parent, item) > 0; index = parentIndex,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex]) {
        values[parentIndex] = item;
        values[index] = parent;
    }
};
const PriorityQueueImpl_comparator = Symbol("PriorityQueueImpl_comparator");
const PriorityQueueImpl_values = Symbol("PriorityQueueImpl_values");
class PriorityQueueImpl {
    constructor(comparator) {
        this[_a] = [];
        this[PriorityQueueImpl_comparator] = comparator;
    }
    get [(_a = PriorityQueueImpl_values, QueueableLike_count)]() {
        return ReadonlyArray_getLength(this[PriorityQueueImpl_values]);
    }
    [PullableQueueLike_peek]() {
        return this[PriorityQueueImpl_values][0];
    }
    [PullableQueueLike_pull]() {
        const { [PriorityQueueImpl_values]: values } = this;
        const length = ReadonlyArray_getLength(values);
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
    [QueueableLike_push](item) {
        this[PriorityQueueImpl_values].push(item);
        siftUp(this, item);
    }
}
const Queue_create = (comparator) => newInstance(PriorityQueueImpl, comparator);
export default Queue_create;
