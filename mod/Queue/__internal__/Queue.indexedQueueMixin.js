/// <reference types="./Queue.indexedQueueMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { mix, props } from "../../__internal__/mixins.js";
import { __IndexedQueueMixin_capacityMask, __IndexedQueueMixin_head, __IndexedQueueMixin_tail, __IndexedQueueMixin_values, } from "../../__internal__/symbols.js";
import { MutableKeyedCollectionLike_set, QueueLike_dequeue, QueueLike_head, StackLike_head, StackLike_pop, } from "../../__internal__/types.js";
import { newInstance, none, pipe, raiseError, raiseWithDebugMessage, returns, unsafeCast, } from "../../functions.js";
import { CollectionLike_count, KeyedCollectionLike_get, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, } from "../../types.js";
import BackPressureError from "./Queue.BackPressureError.js";
const Queue_indexedQueueMixin = /*@__PURE__*/ (() => {
    const copyArray = (src, head, tail, size) => {
        const capacity = src.length;
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
        const head = instance[__IndexedQueueMixin_head];
        const tail = instance[__IndexedQueueMixin_tail];
        if (tail !== head && tail !== 0) {
            return;
        }
        const values = instance[__IndexedQueueMixin_values] ?? [];
        const capacity = values.length;
        const capacityMask = instance[__IndexedQueueMixin_capacityMask];
        const count = instance[CollectionLike_count];
        if (head === 0 || (tail === 0 && head < capacity >> 2)) {
            values.length <<= 1;
            instance[__IndexedQueueMixin_tail] = count + head;
        }
        else {
            const newCapacity = capacity << 1;
            const newList = copyArray(values, head, tail, newCapacity);
            instance[__IndexedQueueMixin_values] = newList;
            instance[__IndexedQueueMixin_head] = 0;
            instance[__IndexedQueueMixin_tail] = count;
        }
        instance[__IndexedQueueMixin_capacityMask] = (capacityMask << 1) | 1;
    };
    const shrink = (instance) => {
        const values = instance[__IndexedQueueMixin_values] ?? [];
        const capacity = values.length;
        const count = instance[CollectionLike_count];
        if (count >= capacity >> 2 || capacity <= 32) {
            return;
        }
        const head = instance[__IndexedQueueMixin_head];
        const tail = instance[__IndexedQueueMixin_tail];
        const newCapacity = capacity >> 1;
        if (tail >= head && tail < newCapacity) {
            values.length >>= 1;
        }
        else {
            const newList = copyArray(values, head, tail, newCapacity);
            instance[__IndexedQueueMixin_values] = newList;
            instance[__IndexedQueueMixin_head] = 0;
            instance[__IndexedQueueMixin_tail] = count;
        }
        instance[__IndexedQueueMixin_capacityMask] = newCapacity - 1;
    };
    return pipe(mix(function IndexedQueueMixin(instance, capacity, backpressureStrategy) {
        instance[QueueableLike_backpressureStrategy] = backpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(capacity);
        return instance;
    }, props({
        [CollectionLike_count]: 0,
        [QueueableLike_backpressureStrategy]: "overflow",
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [__IndexedQueueMixin_head]: 0,
        [__IndexedQueueMixin_tail]: 0,
        [__IndexedQueueMixin_capacityMask]: 0,
        [__IndexedQueueMixin_values]: none,
    }), {
        get [QueueLike_head]() {
            unsafeCast(this);
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            return head === this[__IndexedQueueMixin_tail] ? none : values[head];
        },
        get [StackLike_head]() {
            unsafeCast(this);
            const head = this[__IndexedQueueMixin_head];
            const tail = this[__IndexedQueueMixin_tail];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const index = tail > 0 ? tail - 1 : values.length - 1;
            return head === tail ? none : values[index];
        },
        [QueueLike_dequeue]() {
            const tail = this[__IndexedQueueMixin_tail];
            const values = this[__IndexedQueueMixin_values] ?? [];
            let head = this[__IndexedQueueMixin_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
                values[head] = none;
                head = (head + 1) & this[__IndexedQueueMixin_capacityMask];
                this[__IndexedQueueMixin_head] = head;
                this[CollectionLike_count]--;
            }
            shrink(this);
            return item;
        },
        [StackLike_pop]() {
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const capacity = values.length;
            let tail = this[__IndexedQueueMixin_tail];
            const item = head === tail
                ? none
                : ((tail =
                    (tail - 1 + capacity) &
                        this[__IndexedQueueMixin_capacityMask]),
                    (this[__IndexedQueueMixin_tail] = tail),
                    this[CollectionLike_count]--,
                    values[tail]);
            values[tail] = none;
            shrink(this);
            return item;
        },
        [KeyedCollectionLike_get](index) {
            const count = this[CollectionLike_count];
            const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex = index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                    ? headOffsetIndex
                    : tailOffsetIndex;
            return values[computedIndex];
        },
        [MutableKeyedCollectionLike_set](index, value) {
            const count = this[CollectionLike_count];
            const capacity = this[__IndexedQueueMixin_values]?.length ?? 0;
            const head = this[__IndexedQueueMixin_head];
            const values = this[__IndexedQueueMixin_values] ?? [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex = index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                    ? headOffsetIndex
                    : tailOffsetIndex;
            const oldValue = values[computedIndex];
            values[computedIndex] = value;
            return oldValue;
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            let count = this[CollectionLike_count];
            const capacity = this[QueueableLike_capacity];
            if (backpressureStrategy === "drop-latest" && count >= capacity) {
                return false;
            }
            else if (backpressureStrategy === "drop-oldest" &&
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
            else if (backpressureStrategy === "throw" && count >= capacity) {
                raiseError(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
            const values = this[__IndexedQueueMixin_values] ??
                ((this[__IndexedQueueMixin_capacityMask] = 31),
                    (this[__IndexedQueueMixin_values] = newInstance(Array, 32)),
                    this[__IndexedQueueMixin_values]);
            const capacityMask = this[__IndexedQueueMixin_capacityMask];
            let tail = this[__IndexedQueueMixin_tail];
            values[tail] = item;
            this[CollectionLike_count]++;
            tail = (tail + 1) & capacityMask;
            this[__IndexedQueueMixin_tail] = tail;
            grow(this);
            return this[CollectionLike_count] < this[QueueableLike_capacity];
        },
    }), returns);
})();
export default Queue_indexedQueueMixin;
