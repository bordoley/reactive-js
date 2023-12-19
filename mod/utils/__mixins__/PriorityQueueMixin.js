/// <reference types="./PriorityQueueMixin.d.ts" />

import { floor } from "../../__internal__/math.js";
import { getPrototype, include, init, mix, props, } from "../../__internal__/mixins.js";
import { CollectionLike_count, KeyedLike_get, MutableKeyedLike_set, } from "../../collections.js";
import { call, newInstance, none, pipe, raiseError, returns, } from "../../functions.js";
import { BackPressureError, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, StackLike_pop, } from "../../utils.js";
import IndexedQueueMixin from "./IndexedQueueMixin.js";
const PriorityQueueMixin = /*@__PURE__*/ (() => {
    const IndexedQueuePrototype = getPrototype(IndexedQueueMixin());
    const PriorityQueueMixin_comparator = Symbol("PriorityQueueMixin_comparator");
    const siftDown = (queue, item) => {
        const compare = queue[PriorityQueueMixin_comparator];
        const count = queue[CollectionLike_count];
        for (let index = 0; index < count;) {
            const leftIndex = (index + 1) * 2 - 1;
            const rightIndex = leftIndex + 1;
            const hasLeft = leftIndex >= 0 && leftIndex < count;
            const hasRight = rightIndex >= 0 && rightIndex < count;
            const left = hasLeft ? queue[KeyedLike_get](leftIndex) : none;
            const right = hasRight ? queue[KeyedLike_get](rightIndex) : none;
            if (hasLeft && compare(left, item) < 0) {
                if (hasRight && compare(right, left) < 0) {
                    queue[MutableKeyedLike_set](index, right);
                    queue[MutableKeyedLike_set](rightIndex, item);
                    index = rightIndex;
                }
                else {
                    queue[MutableKeyedLike_set](index, left);
                    queue[MutableKeyedLike_set](leftIndex, item);
                    index = leftIndex;
                }
            }
            else if (hasRight && compare(right, item) < 0) {
                queue[MutableKeyedLike_set](index, right);
                queue[MutableKeyedLike_set](rightIndex, item);
                index = rightIndex;
            }
            else {
                break;
            }
        }
    };
    const siftUp = (queue, item) => {
        const compare = queue[PriorityQueueMixin_comparator];
        const count = queue[CollectionLike_count];
        for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
            parentIndex <= count &&
            compare(queue[KeyedLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = queue[KeyedLike_get](parentIndex);
            queue[MutableKeyedLike_set](parentIndex, item);
            queue[MutableKeyedLike_set](index, parent);
        }
    };
    return pipe(mix(include(IndexedQueueMixin()), function PriorityQueueMixin(instance, comparator, config) {
        init(IndexedQueueMixin(), instance, config);
        instance[PriorityQueueMixin_comparator] = comparator;
        return instance;
    }, props({
        [PriorityQueueMixin_comparator]: none,
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
                const first = this[KeyedLike_get](0);
                const last = this[StackLike_pop]();
                this[MutableKeyedLike_set](0, last);
                siftDown(this, last);
                return first;
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const count = this[CollectionLike_count];
            const capacity = this[QueueableLike_capacity];
            if (backpressureStrategy === "drop-latest" && count >= capacity) {
                return false;
            }
            else if (backpressureStrategy === "drop-oldest" &&
                count >= capacity) {
                this[QueueLike_dequeue]();
            }
            else if (backpressureStrategy === "throw" && count >= capacity) {
                raiseError(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
            const result = call(IndexedQueuePrototype[QueueableLike_enqueue], this, item);
            siftUp(this, item);
            return result;
        },
    }), returns);
})();
export default PriorityQueueMixin;
