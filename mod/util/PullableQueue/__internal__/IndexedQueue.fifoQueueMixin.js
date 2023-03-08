/// <reference types="./IndexedQueue.fifoQueueMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { newInstance, none, pipe, raiseWithDebugMessage, returns, unsafeCast, } from "../../../functions.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import { IndexedQueueLike_get, PullableQueueLike_head, PullableQueueLike_pull, } from "../../__internal__/util.internal.js";
const IndexedQueue_fifoQueueMixin = /*@__PURE__*/ (() => {
    const FifoQueue_head = Symbol("FifoQueue_head");
    const FifoQueue_tail = Symbol("FifoQueue_tail");
    const FifoQueue_capacityMask = Symbol("FifoQueue_capacityMask");
    const FifoQueue_values = Symbol("FifoQueue_values");
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
    return pipe(mix(function FifoQueue(instance) {
        return instance;
    }, props({
        [QueueLike_count]: 0,
        [FifoQueue_head]: 0,
        [FifoQueue_tail]: 0,
        [FifoQueue_capacityMask]: 0,
        [FifoQueue_values]: none,
    }), {
        [IndexedQueueLike_get](index) {
            var _a, _b, _c;
            const count = this[QueueLike_count];
            const capacity = (_b = (_a = this[FifoQueue_values]) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
            const head = this[FifoQueue_head];
            const values = (_c = this[FifoQueue_values]) !== null && _c !== void 0 ? _c : [];
            const headOffsetIndex = index + head;
            const tailOffsetIndex = headOffsetIndex - capacity;
            return index < 0 || index >= count
                ? raiseWithDebugMessage("index out of range")
                : headOffsetIndex < capacity
                    ? values[headOffsetIndex]
                    : values[tailOffsetIndex];
        },
        get [PullableQueueLike_head]() {
            var _a;
            unsafeCast(this);
            const head = this[FifoQueue_head];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            return head === this[FifoQueue_tail] ? none : values[head];
        },
        [PullableQueueLike_pull]() {
            var _a;
            const tail = this[FifoQueue_tail];
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : [];
            const capacity = values.length;
            let head = this[FifoQueue_head];
            const item = head === tail ? none : values[head];
            if (head !== tail) {
                values[head] = none;
                head = (head + 1) & this[FifoQueue_capacityMask];
                this[FifoQueue_head] = head;
                this[QueueLike_count]--;
            }
            const count = this[QueueLike_count];
            if (count < capacity / 4 && capacity > 32) {
                const newCapacity = capacity >> 1;
                const newList = copyArray(values, head, tail, newCapacity);
                this[FifoQueue_values] = newList;
                this[FifoQueue_head] = 0;
                this[FifoQueue_tail] = count;
                this[FifoQueue_capacityMask] = newCapacity - 1;
            }
            return item;
        },
        [QueueLike_push](item) {
            var _a;
            const values = (_a = this[FifoQueue_values]) !== null && _a !== void 0 ? _a : ((this[FifoQueue_capacityMask] = 0x31),
                (this[FifoQueue_values] = newInstance(Array, 32)),
                this[FifoQueue_values]);
            const capacityMask = this[FifoQueue_capacityMask];
            const head = this[FifoQueue_head];
            const capacity = values.length;
            let count = this[QueueLike_count];
            let tail = this[FifoQueue_tail];
            values[tail] = item;
            count++;
            this[QueueLike_count] = count;
            tail = (tail + 1) & capacityMask;
            this[FifoQueue_tail] = tail;
            if (tail === head) {
                // growArray
                if (head !== 0) {
                    const newCapacity = capacity << 1;
                    const newList = copyArray(values, head, tail, newCapacity);
                    this[FifoQueue_values] = newList;
                    this[FifoQueue_head] = 0;
                }
                else {
                    // double the queue length.
                    this[FifoQueue_values].length <<= 1;
                }
                this[FifoQueue_tail] = count;
                this[FifoQueue_capacityMask] = (capacityMask << 1) | 1;
            }
        },
    }), returns);
})();
export default IndexedQueue_fifoQueueMixin;
