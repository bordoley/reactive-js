/// <reference types="./PriorityQueueMixin.d.ts" />

import { floor } from "../../__internal__/math.js";
import { getPrototype, include, init, mix, props, } from "../../__internal__/mixins.js";
import { call, newInstance, none, pipe, raiseError, returns, } from "../../functions.js";
import { BackPressureError, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
import IndexedQueueMixin, { IndexedQueueLike_get, IndexedQueueLike_set, StackLike_pop, } from "./IndexedQueueMixin.js";
const PriorityQueueMixin = /*@__PURE__*/ (() => {
    const IndexedQueuePrototype = getPrototype(IndexedQueueMixin());
    const PriorityQueueMixin_comparator = Symbol("PriorityQueueMixin_comparator");
    const siftDown = (queue, item) => {
        const compare = queue[PriorityQueueMixin_comparator];
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
        const compare = queue[PriorityQueueMixin_comparator];
        const count = queue[QueueLike_count];
        for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
            parentIndex <= count &&
            compare(queue[IndexedQueueLike_get](parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = queue[IndexedQueueLike_get](parentIndex);
            queue[IndexedQueueLike_set](parentIndex, item);
            queue[IndexedQueueLike_set](index, parent);
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
            const count = this[QueueLike_count];
            if (count === 0) {
                return none;
            }
            else if (count === 1) {
                return call(IndexedQueuePrototype[QueueLike_dequeue], this);
            }
            else {
                const first = this[IndexedQueueLike_get](0);
                const last = this[StackLike_pop]();
                this[IndexedQueueLike_set](0, last);
                siftDown(this, last);
                return first;
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const count = this[QueueLike_count];
            const capacity = this[QueueableLike_capacity];
            if (backpressureStrategy === DropLatestBackpressureStrategy &&
                count >= capacity) {
                return false;
            }
            else if (backpressureStrategy === DropOldestBackpressureStrategy &&
                count >= capacity) {
                this[QueueLike_dequeue]();
            }
            else if (backpressureStrategy === ThrowBackpressureStrategy &&
                count >= capacity) {
                raiseError(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
            const result = call(IndexedQueuePrototype[QueueableLike_enqueue], this, item);
            siftUp(this, item);
            return result;
        },
    }), returns);
})();
export default PriorityQueueMixin;
