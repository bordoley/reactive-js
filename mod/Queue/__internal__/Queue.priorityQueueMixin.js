/// <reference types="./Queue.priorityQueueMixin.d.ts" />

import { floor } from "../../__internal__/math.js";
import { getPrototype, include, init, mix, props, } from "../../__internal__/mixins.js";
import { __PriorityQueueImpl_comparator } from "../../__internal__/symbols.js";
import { MutableKeyedCollectionLike_set, QueueLike_dequeue, StackLike_pop, } from "../../__internal__/types.js";
import { call, none, pipe, raiseWithDebugMessage, returns, } from "../../functions.js";
import { BufferLike_capacity, CollectionLike_count, KeyedCollectionLike_get, QueueableLike_backpressureStrategy, QueueableLike_enqueue, } from "../../types.js";
import Queue_indexedQueueMixin from "./Queue.indexedQueueMixin.js";
const Queue_priorityQueueMixin = /*@__PURE__*/ (() => {
    const IndexedQueuePrototype = getPrototype(Queue_indexedQueueMixin());
    const siftDown = (queue, item) => {
        const compare = queue[__PriorityQueueImpl_comparator];
        const count = queue[CollectionLike_count];
        for (let index = 0; index < count;) {
            const leftIndex = (index + 1) * 2 - 1;
            const rightIndex = leftIndex + 1;
            const hasLeft = leftIndex >= 0 && leftIndex < count;
            const hasRight = rightIndex >= 0 && rightIndex < count;
            const left = hasLeft ? queue[KeyedCollectionLike_get](leftIndex) : none;
            const right = hasRight
                ? queue[KeyedCollectionLike_get](rightIndex)
                : none;
            if (hasLeft && compare(left, item) < 0) {
                if (hasRight && compare(right, left) < 0) {
                    queue[MutableKeyedCollectionLike_set](index, right);
                    queue[MutableKeyedCollectionLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    queue[MutableKeyedCollectionLike_set](index, left);
                    queue[MutableKeyedCollectionLike_set](leftIndex, item);
                    index = leftIndex;
                }
            }
            else if (hasRight && compare(right, item) < 0) {
                queue[MutableKeyedCollectionLike_set](index, right);
                queue[MutableKeyedCollectionLike_set](rightIndex, item);
                index = rightIndex;
            }
            else {
                break;
            }
        }
    };
    const siftUp = (queue, item) => {
        const compare = queue[__PriorityQueueImpl_comparator];
        const count = queue[CollectionLike_count];
        for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
            parentIndex <= count &&
            compare(queue[KeyedCollectionLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = queue[KeyedCollectionLike_get](parentIndex);
            queue[MutableKeyedCollectionLike_set](parentIndex, item);
            queue[MutableKeyedCollectionLike_set](index, parent);
        }
    };
    return pipe(mix(include(Queue_indexedQueueMixin()), function PriorityQueue(instance, comparator, capacity, backpressureStrategy) {
        init(Queue_indexedQueueMixin(), instance, capacity, backpressureStrategy);
        instance[__PriorityQueueImpl_comparator] = comparator;
        return instance;
    }, props({
        [__PriorityQueueImpl_comparator]: none,
    }), {
        [QueueLike_dequeue]() {
            const count = this[CollectionLike_count];
            if (count === 0) {
                return none;
            }
            else if (count === 1) {
                return call(IndexedQueuePrototype[QueueLike_dequeue], this);
            }
            else {
                const first = this[KeyedCollectionLike_get](0);
                const last = this[StackLike_pop]();
                this[MutableKeyedCollectionLike_set](0, last);
                siftDown(this, last);
                return first;
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const count = this[CollectionLike_count];
            const capacity = this[BufferLike_capacity];
            if (backpressureStrategy === "drop-latest" && count >= capacity) {
                return false;
            }
            else if (backpressureStrategy === "drop-oldest" &&
                count >= capacity) {
                this[QueueLike_dequeue]();
            }
            else if (backpressureStrategy === "throw" && count >= capacity) {
                raiseWithDebugMessage("attempting to enqueue a value to a queue that is full");
            }
            const result = call(IndexedQueuePrototype[QueueableLike_enqueue], this, item);
            siftUp(this, item);
            return result;
        },
    }), returns);
})();
export default Queue_priorityQueueMixin;
