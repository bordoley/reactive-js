/// <reference types="./IndexedQueue.fifoQueueMixin.d.ts" />

import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { clampPositiveNonZeroInteger } from "../../../__internal__/math.js";
import { mix, props } from "../../../__internal__/mixins.js";
import { FifoQueue_capacityMask, FifoQueue_head, FifoQueue_tail, FifoQueue_values, } from "../../../__internal__/symbols.js";
import { IndexedLike_get, IndexedLike_set, QueueLike_count, QueueLike_dequeue, QueueLike_head, StackLike_head, StackLike_pop, } from "../../../__internal__/util.internal.js";
import { newInstance, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { QueueableLike_capacity, QueueableLike_enqueue, } from "../../../util.js";
const IndexedQueue_fifoQueueMixin = /*@__PURE__*/ (() => {
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
        var _a;
        const head = instance[FifoQueue_head];
        const tail = instance[FifoQueue_tail];
        if (tail !== head && tail !== 0) {
            return;
        }
        const values = (_a = instance[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
        const capacity = values.length;
        const capacityMask = instance[FifoQueue_capacityMask];
        const count = instance[QueueLike_count];
        if (head === 0 || (tail === 0 && head < capacity >> 2)) {
            values.length <<= 1;
            instance[FifoQueue_tail] = count + head;
        }
        else {
            const newCapacity = capacity << 1;
            const newList = copyArray(values, head, tail, newCapacity);
            instance[FifoQueue_values] = newList;
            instance[FifoQueue_head] = 0;
            instance[FifoQueue_tail] = count;
        }
        instance[FifoQueue_capacityMask] = (capacityMask << 1) | 1;
    };
    const shrink = (instance) => {
        var _a;
        const values = (_a = instance[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
        const capacity = values.length;
        const count = instance[QueueLike_count];
        if (count >= capacity >> 2 || capacity <= 32) {
            return;
        }
        const head = instance[FifoQueue_head];
        const tail = instance[FifoQueue_tail];
        const newCapacity = capacity >> 1;
        if (tail >= head && tail < newCapacity) {
            values.length >>= 1;
        }
        else {
            const newList = copyArray(values, head, tail, newCapacity);
            instance[FifoQueue_values] = newList;
            instance[FifoQueue_head] = 0;
            instance[FifoQueue_tail] = count;
        }
        instance[FifoQueue_capacityMask] = newCapacity - 1;
    };
    return pipe(mix(function FifoQueue(instance, capacity) {
        instance[QueueableLike_capacity] =
            clampPositiveNonZeroInteger(capacity);
        return instance;
    }, props({
        [QueueLike_count]: 0,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [FifoQueue_head]: 0,
        [FifoQueue_tail]: 0,
        [FifoQueue_capacityMask]: 0,
        [FifoQueue_values]: none,
    }), {
        get [QueueLike_head]() {
            var _a;
            unsafeCast(this);
            const head = this[FifoQueue_head];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            return head === this[FifoQueue_tail] ? none : values[head];
        },
        get [StackLike_head]() {
            var _a;
            unsafeCast(this);
            const head = this[FifoQueue_head];
            const tail = this[FifoQueue_tail];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            const index = tail > 0 ? tail - 1 : values.length - 1;
            return head === tail ? none : values[index];
        },
        [QueueLike_dequeue]() {
            var _a;
            const tail = this[FifoQueue_tail];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            let head = this[FifoQueue_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
                values[head] = none;
                head = (head + 1) & this[FifoQueue_capacityMask];
                this[FifoQueue_head] = head;
                this[QueueLike_count]--;
            }
            shrink(this);
            return item;
        },
        [StackLike_pop]() {
            var _a;
            const head = this[FifoQueue_head];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            const capacity = values.length;
            let tail = this[FifoQueue_tail];
            const item = head === tail
                ? none
                : ((tail = (tail - 1 + capacity) & this[FifoQueue_capacityMask]),
                    (this[FifoQueue_tail] = tail),
                    this[QueueLike_count]--,
                    values[tail]);
            values[tail] = none;
            shrink(this);
            return item;
        },
        [IndexedLike_get](index) {
            var _a, _b, _c;
            const count = this[QueueLike_count];
            const capacity = (_b = (_a = this[FifoQueue_values]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
            const head = this[FifoQueue_head];
            const values = (_c = this[FifoQueue_values]) !== null && _c !== void 0 ? _c : [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            const computedIndex = index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                    ? headOffsetIndex
                    : tailOffsetIndex;
            return values[computedIndex];
        },
        [IndexedLike_set](index, value) {
            var _a, _b, _c;
            const count = this[QueueLike_count];
            const capacity = (_b = (_a = this[FifoQueue_values]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
            const head = this[FifoQueue_head];
            const values = (_c = this[FifoQueue_values]) !== null && _c !== void 0 ? _c : [];
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
            var _a;
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : ((this[FifoQueue_capacityMask] = 31),
                (this[FifoQueue_values] = newInstance(Array, 32)),
                this[FifoQueue_values]);
            const capacityMask = this[FifoQueue_capacityMask];
            let count = this[QueueLike_count];
            let tail = this[FifoQueue_tail];
            values[tail] = item;
            count++;
            this[QueueLike_count] = count;
            tail = (tail + 1) & capacityMask;
            this[FifoQueue_tail] = tail;
            grow(this);
            return this[QueueLike_count] <= this[QueueableLike_capacity];
        },
    }), returns);
})();
export default IndexedQueue_fifoQueueMixin;
