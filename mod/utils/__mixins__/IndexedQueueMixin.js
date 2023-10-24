/// <reference types="./IndexedQueueMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { clampPositiveInteger } from "../../__internal__/math.js";
import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { CollectionLike_count, EnumerableLike_enumerate, KeyedLike_get, MutableKeyedLike_set, } from "../../collections.js";
import Enumerator_fromIterator from "../../collections/Enumerator/__internal__/Enumerator.fromIterator.js";
import { newInstance, none, pipe, raiseError, raiseWithDebugMessage, returns, } from "../../functions.js";
import { BackPressureError, QueueLike_dequeue, QueueLike_head, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, StackLike_head, StackLike_pop, } from "../../utils.js";
const IndexedQueueMixin = /*@PURE*/ (() => {
    const IndexedQueueMixin_capacityMask = Symbol("IndexedQueueMixin_capacityMask");
    const IndexedQueueMixin_head = Symbol("IndexedQueueMixin_head");
    const IndexedQueueMixin_tail = Symbol("IndexedQueueMixin_tail");
    const IndexedQueueMixin_values = Symbol("IndexedQueueMixin_values");
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
        const head = instance[IndexedQueueMixin_head];
        const tail = instance[IndexedQueueMixin_tail];
        if (tail !== head && tail !== 0) {
            return;
        }
        const values = instance[IndexedQueueMixin_values] ?? [];
        const capacity = values.length;
        const capacityMask = instance[IndexedQueueMixin_capacityMask];
        const count = instance[CollectionLike_count];
        if (head === 0 || (tail === 0 && head < capacity >> 2)) {
            values.length <<= 1;
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
        const values = instance[IndexedQueueMixin_values] ?? [];
        const capacity = values.length;
        const count = instance[CollectionLike_count];
        if (count >= capacity >> 2 || capacity <= 32) {
            return;
        }
        const head = instance[IndexedQueueMixin_head];
        const tail = instance[IndexedQueueMixin_tail];
        const newCapacity = capacity >> 1;
        if (tail >= head && tail < newCapacity) {
            values.length >>= 1;
        }
        else {
            const newList = copyArray(values, head, tail, newCapacity);
            instance[IndexedQueueMixin_values] = newList;
            instance[IndexedQueueMixin_head] = 0;
            instance[IndexedQueueMixin_tail] = count;
        }
        instance[IndexedQueueMixin_capacityMask] = newCapacity - 1;
    };
    return pipe(mix(function IndexedQueueMixin(instance, capacity, backpressureStrategy) {
        instance[QueueableLike_backpressureStrategy] = backpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(capacity);
        return instance;
    }, props({
        [CollectionLike_count]: 0,
        [QueueableLike_backpressureStrategy]: "overflow",
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [IndexedQueueMixin_head]: 0,
        [IndexedQueueMixin_tail]: 0,
        [IndexedQueueMixin_capacityMask]: 0,
        [IndexedQueueMixin_values]: none,
    }), {
        get [QueueLike_head]() {
            unsafeCast(this);
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values] ?? [];
            return head === this[IndexedQueueMixin_tail] ? none : values[head];
        },
        get [StackLike_head]() {
            unsafeCast(this);
            const head = this[IndexedQueueMixin_head];
            const tail = this[IndexedQueueMixin_tail];
            const values = this[IndexedQueueMixin_values] ?? [];
            const index = tail > 0 ? tail - 1 : values.length - 1;
            return head === tail ? none : values[index];
        },
        [QueueLike_dequeue]() {
            const tail = this[IndexedQueueMixin_tail];
            const values = this[IndexedQueueMixin_values] ?? [];
            let head = this[IndexedQueueMixin_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
                values[head] = none;
                head = (head + 1) & this[IndexedQueueMixin_capacityMask];
                this[IndexedQueueMixin_head] = head;
                this[CollectionLike_count]--;
            }
            shrink(this);
            return item;
        },
        [StackLike_pop]() {
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values] ?? [];
            const capacity = values.length;
            let tail = this[IndexedQueueMixin_tail];
            const item = head === tail
                ? none
                : ((tail =
                    (tail - 1 + capacity) & this[IndexedQueueMixin_capacityMask]),
                    (this[IndexedQueueMixin_tail] = tail),
                    this[CollectionLike_count]--,
                    values[tail]);
            values[tail] = none;
            shrink(this);
            return item;
        },
        [KeyedLike_get](index) {
            const count = this[CollectionLike_count];
            const capacity = this[IndexedQueueMixin_values]?.length ?? 0;
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values] ?? [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex = index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                    ? headOffsetIndex
                    : tailOffsetIndex;
            return values[computedIndex];
        },
        [MutableKeyedLike_set](index, value) {
            const count = this[CollectionLike_count];
            const capacity = this[IndexedQueueMixin_values]?.length ?? 0;
            const head = this[IndexedQueueMixin_head];
            const values = this[IndexedQueueMixin_values] ?? [];
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
            const values = this[IndexedQueueMixin_values] ??
                ((this[IndexedQueueMixin_capacityMask] = 31),
                    (this[IndexedQueueMixin_values] = newInstance(Array, 32)),
                    this[IndexedQueueMixin_values]);
            const capacityMask = this[IndexedQueueMixin_capacityMask];
            let tail = this[IndexedQueueMixin_tail];
            values[tail] = item;
            this[CollectionLike_count]++;
            tail = (tail + 1) & capacityMask;
            this[IndexedQueueMixin_tail] = tail;
            grow(this);
            return this[CollectionLike_count] < this[QueueableLike_capacity];
        },
        [EnumerableLike_enumerate]() {
            return pipe(this[Symbol.iterator], Enumerator_fromIterator());
        },
        *[Symbol.iterator]() {
            const head = this[IndexedQueueMixin_head];
            const count = this[CollectionLike_count];
            const values = this[IndexedQueueMixin_values] ?? [];
            const valuesLength = values.length;
            let i = head;
            let iNormalized = 0;
            while (iNormalized < count) {
                yield values[i];
                iNormalized++;
                i = i + 1;
                i = i < valuesLength ? i : 0;
            }
        },
    }), returns);
})();
export default IndexedQueueMixin;
