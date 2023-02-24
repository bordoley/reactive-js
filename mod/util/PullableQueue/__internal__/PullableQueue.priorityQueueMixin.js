/// <reference types="./PullableQueue.priorityQueueMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import { floor, isSome, none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { QueueableLike_count, QueueableLike_push } from "../../../util.js";
import { PullableQueueLike_peek, PullableQueueLike_pull, } from "../../__internal__/util.internal.js";
const computeParentIndex = (index) => floor((index - 1) / 2);
const PriorityQueueImpl_comparator = Symbol("PriorityQueueImpl_comparator");
const PriorityQueueImpl_values = Symbol("PriorityQueueImpl_values");
const PullableQueue_priorityQueueMixin = /*@__PURE__*/ (() => {
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
    return pipe(mix(function PriorityQueue(instance, comparator) {
        instance[PriorityQueueImpl_values] = [];
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
    }, props({
        [PriorityQueueImpl_values]: none,
        [PriorityQueueImpl_comparator]: none,
    }), {
        get [QueueableLike_count]() {
            unsafeCast(this);
            return ReadonlyArray_getLength(this[PriorityQueueImpl_values]);
        },
        [PullableQueueLike_peek]() {
            return this[PriorityQueueImpl_values][0];
        },
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
        },
        [QueueableLike_push](item) {
            this[PriorityQueueImpl_values].push(item);
            siftUp(this, item);
        },
    }), returns);
})();
export default PullableQueue_priorityQueueMixin;
