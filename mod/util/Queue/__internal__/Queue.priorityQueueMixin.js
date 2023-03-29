/// <reference types="./Queue.priorityQueueMixin.d.ts" />

import { floor } from "../../../__internal__/math.js";
import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PriorityQueueImpl_comparator } from "../../../__internal__/symbols.js";
import { IndexedLike_get, IndexedLike_set, QueueLike_count, QueueLike_dequeue, StackLike_pop, } from "../../../__internal__/util.internal.js";
import { call, none, pipe, raiseWithDebugMessage, returns, } from "../../../functions.js";
import { QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";
const Queue_priorityQueueMixin = /*@__PURE__*/ (() => {
    const IndexedQueuePrototype = getPrototype(IndexedQueue_fifoQueueMixin());
    const siftDown = (queue, item) => {
        const compare = queue[PriorityQueueImpl_comparator];
        const count = queue[QueueLike_count];
        for (let index = 0; index < count;) {
            const leftIndex = (index + 1) * 2 - 1;
            const rightIndex = leftIndex + 1;
            const hasLeft = leftIndex >= 0 && leftIndex < count;
            const hasRight = rightIndex >= 0 && rightIndex < count;
            const left = hasLeft ? queue[IndexedLike_get](leftIndex) : none;
            const right = hasRight ? queue[IndexedLike_get](rightIndex) : none;
            if (hasLeft && compare(left, item) < 0) {
                if (hasRight && compare(right, left) < 0) {
                    queue[IndexedLike_set](index, right);
                    queue[IndexedLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    queue[IndexedLike_set](index, left);
                    queue[IndexedLike_set](leftIndex, item);
                    index = leftIndex;
                }
            }
            else if (hasRight && compare(right, item) < 0) {
                queue[IndexedLike_set](index, right);
                queue[IndexedLike_set](rightIndex, item);
                index = rightIndex;
            }
            else {
                break;
            }
        }
    };
    const siftUp = (queue, item) => {
        const compare = queue[PriorityQueueImpl_comparator];
        const count = queue[QueueLike_count];
        for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
            parentIndex <= count &&
            compare(queue[IndexedLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = queue[IndexedLike_get](parentIndex);
            queue[IndexedLike_set](parentIndex, item);
            queue[IndexedLike_set](index, parent);
        }
    };
    return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function PriorityQueue(instance, comparator, capacity, backpressureStrategy) {
        init(IndexedQueue_fifoQueueMixin(), instance, capacity, backpressureStrategy);
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
    }, props({
        [PriorityQueueImpl_comparator]: none,
    }), {
        [QueueLike_dequeue]() {
            const count = this[QueueLike_count];
            if (count === 0) {
                return none;
            }
            else if (count === 1) {
                return call(IndexedQueuePrototype[QueueLike_dequeue], this);
            }
            else {
                const first = this[IndexedLike_get](0);
                const last = this[StackLike_pop]();
                this[IndexedLike_set](0, last);
                siftDown(this, last);
                return first;
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            let count = this[QueueLike_count] + 1;
            const capacity = this[QueueableLike_capacity];
            if (backpressureStrategy === "drop-latest" && count > capacity) {
                return false;
            }
            else if (backpressureStrategy === "drop-oldest" &&
                count > capacity) {
                this[QueueLike_dequeue]();
                count = this[QueueLike_count] + 1;
            }
            else if (backpressureStrategy === "throw" && count > capacity) {
                raiseWithDebugMessage("attempting to enqueue a value to a queue that is full");
            }
            const result = call(IndexedQueuePrototype[QueueableLike_enqueue], this, item);
            siftUp(this, item);
            return result;
        },
    }), returns);
})();
export default Queue_priorityQueueMixin;
