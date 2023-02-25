/// <reference types="./PullableQueue.fifoQueueMixin.d.ts" />

import { mix, props } from "../../../__internal__/mixins.js";
import { none, pipe, returns, unsafeCast, } from "../../../functions.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import { PullableQueueLike_peek, PullableQueueLike_pull, } from "../../__internal__/util.internal.js";
const PullableQueue_fifoQueueMixin = /*@__PURE__*/ (() => {
    const FifoQueue_head = Symbol("FifoQueue_head");
    const FifoQueue_tail = Symbol("FifoQueue_tail");
    const FifoQueue_capacityMask = Symbol("FifoQueue_capacityMask");
    const FifoQueue_values = Symbol("FifoQueue_values");
    const copyArrayAndDoubleSize = (self) => {
        const src = self[FifoQueue_values];
        const capacity = src.length;
        const count = self[QueueLike_count];
        const size = (self[FifoQueue_values].length << 1) | count;
        const dest = new Array(size);
        let k = 0;
        for (let i = self[FifoQueue_head]; i < capacity; i++) {
            dest[k++] = src[i];
        }
        for (let i = 0; i < self[FifoQueue_tail]; i++) {
            dest[k++] = src[i];
        }
        return dest;
    };
    const growArray = (self) => {
        if (self[FifoQueue_head] != 0) {
            const newList = copyArrayAndDoubleSize(self);
            self[FifoQueue_tail] = self[FifoQueue_values].length;
            self[FifoQueue_head] = 0;
            self[FifoQueue_values] = newList;
        }
        else {
            self[FifoQueue_tail] = self[FifoQueue_values].length;
            self[FifoQueue_values].length <<= 1;
        }
        self[FifoQueue_capacityMask] = (self[FifoQueue_capacityMask] << 1) | 1;
    };
    return pipe(mix(function FifoQueue(instance) {
        instance[FifoQueue_head] = 0;
        instance[FifoQueue_tail] = 0;
        instance[FifoQueue_values] = new Array(4);
        instance[FifoQueue_capacityMask] = 0x3;
        return instance;
    }, props({
        [FifoQueue_head]: 0,
        [FifoQueue_tail]: 0,
        [FifoQueue_capacityMask]: 0,
        [FifoQueue_values]: none,
    }), {
        get [QueueLike_count]() {
            unsafeCast(this);
            const head = this[FifoQueue_head];
            const tail = this[FifoQueue_tail];
            const capacityMask = this[FifoQueue_capacityMask];
            const count = tail - head;
            return count >= 0 ? count : capacityMask + 1 + count;
        },
        [PullableQueueLike_peek]() {
            const head = this[FifoQueue_head];
            return head === this[FifoQueue_tail]
                ? none
                : this[FifoQueue_values][head];
        },
        [PullableQueueLike_pull]() {
            const head = this[FifoQueue_head];
            if (head === this[FifoQueue_tail]) {
                return none;
            }
            else {
                const item = this[FifoQueue_values][head];
                this[FifoQueue_values][head] = none;
                this[FifoQueue_head] = (head + 1) & this[FifoQueue_capacityMask];
                if (head < 2 &&
                    this[FifoQueue_tail] > 10000 &&
                    this[FifoQueue_tail] <= this[FifoQueue_values].length >>> 2) {
                    // shrinkArray
                    this[FifoQueue_values].length >>>= 1;
                    this[FifoQueue_capacityMask] >>>= 1;
                }
                return item;
            }
        },
        [QueueLike_push](item) {
            const tail = this[FifoQueue_tail];
            this[FifoQueue_values][tail] = item;
            this[FifoQueue_tail] = (tail + 1) & this[FifoQueue_capacityMask];
            if (this[FifoQueue_tail] === this[FifoQueue_head]) {
                growArray(this);
            }
        },
    }), returns);
})();
export default PullableQueue_fifoQueueMixin;
