/// <reference types="./Queue.priorityQueueMixin.d.ts" />

import { floor } from "../../../__internal__/math.js";
import { getPrototype, include, init, mix, props, } from "../../../__internal__/mixins.js";
import { PriorityQueueImpl_comparator } from "../../../__internal__/symbols.js";
import { IndexedQueueLike_get, IndexedQueueLike_pop, IndexedQueueLike_set, QueueLike_count, QueueLike_pull, } from "../../../__internal__/util.internal.js";
import { call, none, pipe, returns, } from "../../../functions.js";
import { QueueableLike_push } from "../../../util.js";
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
            const left = hasLeft ? queue[IndexedQueueLike_get](leftIndex) : none;
            const right = hasRight ? queue[IndexedQueueLike_get](rightIndex) : none;
            if (hasLeft && compare(left, item) < 0) {
                if (hasRight && compare(right, left) < 0) {
                    queue[IndexedQueueLike_set](index, right);
                    queue[IndexedQueueLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    queue[IndexedQueueLike_set](index, left);
                    queue[IndexedQueueLike_set](leftIndex, item);
                    index = leftIndex;
                }
            }
            else if (hasRight && compare(right, item) < 0) {
                queue[IndexedQueueLike_set](index, right);
                queue[IndexedQueueLike_set](rightIndex, item);
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
            compare(queue[IndexedQueueLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = queue[IndexedQueueLike_get](parentIndex);
            queue[IndexedQueueLike_set](parentIndex, item);
            queue[IndexedQueueLike_set](index, parent);
        }
    };
    return pipe(mix(include(IndexedQueue_fifoQueueMixin()), function PriorityQueue(instance, comparator, maxBufferSize) {
        init(IndexedQueue_fifoQueueMixin(), instance, maxBufferSize);
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
    }, props({
        [PriorityQueueImpl_comparator]: none,
    }), {
        [QueueLike_pull]() {
            const count = this[QueueLike_count];
            if (count === 0) {
                return none;
            }
            else if (count === 1) {
                return call(IndexedQueuePrototype[QueueLike_pull], this);
            }
            else {
                const first = this[IndexedQueueLike_get](0);
                const last = this[IndexedQueueLike_pop]();
                this[IndexedQueueLike_set](0, last);
                siftDown(this, last);
                return first;
            }
        },
        [QueueableLike_push](item) {
            const result = call(IndexedQueuePrototype[QueueableLike_push], this, item);
            siftUp(this, item);
            return result;
        },
    }), returns);
})();
export default Queue_priorityQueueMixin;
