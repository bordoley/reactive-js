/// <reference types="./IndexedQueueMixin.d.ts" />

import { Array_length, MAX_SAFE_INTEGER, } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { newInstance, none, raiseError, raiseIf, returns, } from "../../functions.js";
import { BackPressureError, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, IndexedQueueLike_get, IndexedQueueLike_set, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, StackLike_head, StackLike_pop, ThrowBackpressureStrategy, } from "../../utils.js";
const IndexedQueueMixin = /*@PURE*/ (() => {
    const IndexedQueueMixin_capacityMask = Symbol("IndexedQueueMixin_capacityMask");
    const IndexedQueueMixin_head = Symbol("IndexedQueueMixin_head");
    const IndexedQueueMixin_tail = Symbol("IndexedQueueMixin_tail");
    const IndexedQueueMixin_values = Symbol("IndexedQueueMixin_values");
    const computeIndex = (thiz, index) => {
        const count = thiz[QueueLike_count];
        raiseIf(index < 0 || index >= count, "index out of range");
        const capacity = thiz[IndexedQueueMixin_values][Array_length];
        const head = thiz[IndexedQueueMixin_head];
        const headOffsetIndex = index + head;
        const tailOffsetIndex = headOffsetIndex - capacity;
        return headOffsetIndex < capacity ? headOffsetIndex : tailOffsetIndex;
    };
    const copyArray = (src, head, tail, size) => {
        const capacity = src[Array_length];
        const dest = newInstance(Array, size);
        let k = 0;
        let bound = head >= tail ? capacity : tail;
        for (let i = head; i < bound; i++) {
            dest[k++] = src[i];
        }
        bound = head >= tail ? tail : 0;
        for (let i = 0; i < bound; i++) {
            dest[k++] = src[i];
        }
        return dest;
    };
    const grow = (instance) => {
        const head = instance[IndexedQueueMixin_head];
        const tail = instance[IndexedQueueMixin_tail];
        const count = instance[QueueLike_count];
        const values = instance[IndexedQueueMixin_values];
        const capacity = values[Array_length];
        const capacityMask = instance[IndexedQueueMixin_capacityMask];
        if (count < capacity >> 1 || (tail !== head && tail !== 0)) {
            return;
        }
        if (head === 0 || (tail === 0 && head < capacity >> 2)) {
            values[Array_length] <<= 1;
            instance[IndexedQueueMixin_tail] = count + head;
        }
        else {
            const newCapacity = capacity << 1;
            const newList = copyArray(values, head, tail, newCapacity);
            instance[IndexedQueueMixin_values] = newList;
            instance[IndexedQueueMixin_head] = 0;
            instance[IndexedQueueMixin_tail] = count;
        }
        instance[IndexedQueueMixin_capacityMask] = (capacityMask << 1) | 1;
    };
    const shrink = (instance) => {
        const values = instance[IndexedQueueMixin_values];
        const capacity = values[Array_length];
        const count = instance[QueueLike_count];
        if (count >= capacity >> 2 || capacity <= 32) {
            return;
        }
        const head = instance[IndexedQueueMixin_head];
        const tail = instance[IndexedQueueMixin_tail];
        const newCapacity = capacity >> 1;
        if (tail >= head && tail < newCapacity) {
            values[Array_length] >>= 1;
        }
        else {
            const newList = copyArray(values, head, tail, newCapacity);
            instance[IndexedQueueMixin_values] = newList;
            instance[IndexedQueueMixin_head] = 0;
            instance[IndexedQueueMixin_tail] = count;
        }
        instance[IndexedQueueMixin_capacityMask] = newCapacity - 1;
    };
    return returns(mix(function IndexedQueueMixin(instance, config) {
        instance[QueueableLike_backpressureStrategy] =
            config?.[QueueableLike_backpressureStrategy] ??
                OverflowBackpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(config?.[QueueableLike_capacity] ?? MAX_SAFE_INTEGER);
        instance[IndexedQueueMixin_capacityMask] = 31;
        instance[IndexedQueueMixin_values] = newInstance(Array, 32);
        return instance;
    }, props({
        [QueueLike_count]: 0,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [IndexedQueueMixin_head]: 0,
        [IndexedQueueMixin_tail]: 0,
        [IndexedQueueMixin_capacityMask]: 0,
        [IndexedQueueMixin_values]: none,
    }), {
        get [QueueLike_head]() {
            unsafeCast(this);
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values];
            return head === this[IndexedQueueMixin_tail] ? none : values[head];
        },
        get [StackLike_head]() {
            unsafeCast(this);
            const head = this[IndexedQueueMixin_head];
            const tail = this[IndexedQueueMixin_tail];
            const values = this[IndexedQueueMixin_values];
            const index = tail > 0 ? tail - 1 : values[Array_length] - 1;
            return head === tail ? none : values[index];
        },
        [QueueLike_dequeue]() {
            const tail = this[IndexedQueueMixin_tail];
            const values = this[IndexedQueueMixin_values];
            let head = this[IndexedQueueMixin_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
                values[head] = none;
                head = (head + 1) & this[IndexedQueueMixin_capacityMask];
                this[IndexedQueueMixin_head] = head;
                this[QueueLike_count]--;
            }
            shrink(this);
            return item;
        },
        [StackLike_pop]() {
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values];
            const capacity = values[Array_length];
            let tail = this[IndexedQueueMixin_tail];
            const item = head === tail
                ? none
                : ((tail =
                    (tail - 1 + capacity) & this[IndexedQueueMixin_capacityMask]),
                    (this[IndexedQueueMixin_tail] = tail),
                    this[QueueLike_count]--,
                    values[tail]);
            values[tail] = none;
            shrink(this);
            return item;
        },
        [IndexedQueueLike_get](index) {
            const computedIndex = computeIndex(this, index);
            return this[IndexedQueueMixin_values][computedIndex];
        },
        [IndexedQueueLike_set](index, value) {
            const values = this[IndexedQueueMixin_values];
            const computedIndex = computeIndex(this, index);
            const oldValue = values[computedIndex];
            values[computedIndex] = value;
            return oldValue;
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            let count = this[QueueLike_count];
            const capacity = this[QueueableLike_capacity];
            if (backpressureStrategy === DropLatestBackpressureStrategy &&
                count >= capacity) {
                return false;
            }
            else if (backpressureStrategy === DropOldestBackpressureStrategy &&
                count >= capacity) {
                if (capacity > 0) {
                    // We want to pop off the oldest value first, before enqueueing
                    // to avoid unintentionally growing the queue.
                    this[QueueLike_dequeue]();
                }
                else {
                    // Special case the 0 capacity queue so that we don't fall through
                    // to pushing an item onto the queue
                    return false;
                }
            }
            else if (backpressureStrategy === ThrowBackpressureStrategy &&
                count >= capacity) {
                raiseError(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
            const values = this[IndexedQueueMixin_values];
            const capacityMask = this[IndexedQueueMixin_capacityMask];
            let tail = this[IndexedQueueMixin_tail];
            values[tail] = item;
            this[QueueLike_count]++;
            tail = (tail + 1) & capacityMask;
            this[IndexedQueueMixin_tail] = tail;
            grow(this);
            return this[QueueLike_count] < this[QueueableLike_capacity];
        },
    }));
})();
export default IndexedQueueMixin;
