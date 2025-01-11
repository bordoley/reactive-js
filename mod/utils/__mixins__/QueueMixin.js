/// <reference types="./QueueMixin.d.ts" />

import { Array, Array_length, MAX_SAFE_INTEGER, } from "../../__internal__/constants.js";
import { clampPositiveInteger, floor } from "../../__internal__/math.js";
import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { isSome, newInstance, none, raiseError, raiseIf, returns, } from "../../functions.js";
import { BackPressureError, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
const QueueMixin = /*@PURE*/ (() => {
    const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
    const QueueMixin_head = Symbol("QueueMixin_head");
    const QueueMixin_tail = Symbol("QueueMixin_tail");
    const QueueMixin_values = Symbol("QueueMixin_values");
    const QueueMixin_comparator = Symbol("QueueMixin_comparator");
    const computeIndex = (thiz, index) => {
        const capacity = thiz[QueueMixin_values][Array_length];
        const head = thiz[QueueMixin_head];
        const headOffsetIndex = index + head;
        const tailOffsetIndex = headOffsetIndex - capacity;
        const count = thiz[QueueLike_count];
        raiseIf(index < 0 || index >= count, "index out of range");
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
        const head = instance[QueueMixin_head];
        const tail = instance[QueueMixin_tail];
        const count = instance[QueueLike_count];
        const values = instance[QueueMixin_values];
        const capacity = values[Array_length];
        const capacityMask = instance[QueueMixin_capacityMask];
        if (count < capacity >> 1 || (tail !== head && tail !== 0)) {
            return;
        }
        if (head === 0 || (tail === 0 && head < capacity >> 2)) {
            values[Array_length] <<= 1;
            instance[QueueMixin_tail] = count + head;
        }
        else {
            const newCapacity = capacity << 1;
            const newList = copyArray(values, head, tail, newCapacity);
            instance[QueueMixin_values] = newList;
            instance[QueueMixin_head] = 0;
            instance[QueueMixin_tail] = count;
        }
        instance[QueueMixin_capacityMask] = (capacityMask << 1) | 1;
    };
    const shrink = (instance) => {
        const values = instance[QueueMixin_values];
        const capacity = values[Array_length];
        const count = instance[QueueLike_count];
        const head = instance[QueueMixin_head];
        const tail = instance[QueueMixin_tail];
        const newCapacity = capacity >> 1;
        if (count >= capacity >> 2 || capacity <= 32) {
            return;
        }
        if (tail >= head && tail < newCapacity) {
            values[Array_length] >>= 1;
        }
        else {
            const newList = copyArray(values, head, tail, newCapacity);
            instance[QueueMixin_values] = newList;
            instance[QueueMixin_head] = 0;
            instance[QueueMixin_tail] = count;
        }
        instance[QueueMixin_capacityMask] = newCapacity - 1;
    };
    const siftDown = (queue, item) => {
        const compare = queue[QueueMixin_comparator];
        const count = queue[QueueLike_count];
        for (let index = 0; index < count;) {
            const leftIndex = (index + 1) * 2 - 1;
            const rightIndex = leftIndex + 1;
            const hasLeft = leftIndex >= 0 && leftIndex < count;
            const hasRight = rightIndex >= 0 && rightIndex < count;
            const left = hasLeft ? getValue(queue, leftIndex) : none;
            const right = hasRight ? getValue(queue, rightIndex) : none;
            if (hasLeft && compare(left, item) < 0) {
                if (hasRight && compare(right, left) < 0) {
                    setValue(queue, index, right);
                    setValue(queue, rightIndex, item);
                    index = rightIndex;
                }
                else {
                    setValue(queue, index, left);
                    setValue(queue, leftIndex, item);
                    index = leftIndex;
                }
            }
            else if (hasRight && compare(right, item) < 0) {
                setValue(queue, index, right);
                setValue(queue, rightIndex, item);
                index = rightIndex;
            }
            else {
                break;
            }
        }
    };
    const siftUp = (queue, item) => {
        const compare = queue[QueueMixin_comparator];
        const count = queue[QueueLike_count];
        for (let index = count - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
            parentIndex <= count &&
            compare(getValue(queue, parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
            const parent = getValue(queue, parentIndex);
            setValue(queue, parentIndex, item);
            setValue(queue, index, parent);
        }
    };
    const getValue = (queue, index) => {
        const computedIndex = computeIndex(queue, index);
        return queue[QueueMixin_values][computedIndex];
    };
    const setValue = (queue, index, value) => {
        const values = queue[QueueMixin_values];
        const computedIndex = computeIndex(queue, index);
        const oldValue = values[computedIndex];
        values[computedIndex] = value;
        return oldValue;
    };
    return returns(mix(function QueueMixin(instance, config) {
        instance[QueueableLike_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        instance[QueueMixin_comparator] = config?.comparator;
        instance[QueueMixin_capacityMask] = 31;
        instance[QueueMixin_values] = newInstance(Array, 32);
        return instance;
    }, props({
        [QueueLike_count]: 0,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 0,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
    }), {
        get [QueueLike_head]() {
            unsafeCast(this);
            const head = this[QueueMixin_head];
            const values = this[QueueMixin_values];
            return head === this[QueueMixin_tail] ? none : values[head];
        },
        /*get [QueueLike_tail]() {
          unsafeCast<TProperties>(this);
          const head = this[QueueMixin_head];
          const tail = this[QueueMixin_tail];
          const values = this[QueueMixin_values];
          const index = tail > 0 ? tail - 1 : values[Array_length] - 1;

          return head === tail ? none : values[index];
        },*/
        [QueueLike_dequeue]() {
            const count = this[QueueLike_count];
            const isSorted = isSome(this[QueueMixin_comparator]);
            const tail = this[QueueMixin_tail];
            const values = this[QueueMixin_values];
            const head = this[QueueMixin_head];
            if (count === 0) {
                return none;
            }
            else if (count > 1 && isSorted) {
                const first = getValue(this, 0);
                const capacity = values[Array_length];
                const newTail = (tail - 1 + capacity) & this[QueueMixin_capacityMask];
                this[QueueMixin_tail] = newTail;
                this[QueueLike_count]--;
                const last = values[newTail];
                values[newTail] = none;
                shrink(this);
                setValue(this, 0, last);
                siftDown(this, last);
                return first;
            }
            else {
                const item = head === tail ? none : values[head];
                if (head !== tail) {
                    values[head] = none;
                    this[QueueMixin_head] =
                        (head + 1) & this[QueueMixin_capacityMask];
                    this[QueueLike_count]--;
                }
                shrink(this);
                return item;
            }
        },
        *[Symbol.iterator]() {
            const count = this[QueueLike_count];
            for (let i = 0; i < count; i++) {
                yield getValue(this, i);
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const capacity = this[QueueableLike_capacity];
            const count = this[QueueLike_count];
            const isSorted = isSome(this[QueueMixin_comparator]);
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
            const values = this[QueueMixin_values];
            const capacityMask = this[QueueMixin_capacityMask];
            let tail = this[QueueMixin_tail];
            values[tail] = item;
            this[QueueLike_count]++;
            tail = (tail + 1) & capacityMask;
            this[QueueMixin_tail] = tail;
            grow(this);
            if (isSorted) {
                siftUp(this, item);
            }
            return this[QueueLike_count] < this[QueueableLike_capacity];
        },
    }));
})();
export default QueueMixin;
