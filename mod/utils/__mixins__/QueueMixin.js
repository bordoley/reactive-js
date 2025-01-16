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
        const valuesLength = thiz[QueueMixin_values][Array_length];
        const head = thiz[QueueMixin_head];
        const headOffsetIndex = index + head;
        const tailOffsetIndex = headOffsetIndex - valuesLength;
        const count = thiz[QueueLike_count];
        raiseIf(index < 0 || index >= count, "index out of range");
        return headOffsetIndex < valuesLength ? headOffsetIndex : tailOffsetIndex;
    };
    const copyArray = (src, head, tail, size) => {
        const arrayLength = src[Array_length];
        const dest = newInstance(Array, size);
        let k = 0;
        let bound = head >= tail ? arrayLength : tail;
        for (let i = head; i < bound; i++) {
            dest[k++] = src[i];
        }
        bound = head >= tail ? tail : 0;
        for (let i = 0; i < bound; i++) {
            dest[k++] = src[i];
        }
        return dest;
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
            const valuesLength = values[Array_length];
            const head = this[QueueMixin_head];
            const item = values[head];
            const compare = this[QueueMixin_comparator];
            if (count === 0) {
                return none;
            }
            this[QueueLike_count]--;
            const newCount = this[QueueLike_count];
            if (isSorted && newCount > 1) {
                const newTail = (tail - 1 + valuesLength) & this[QueueMixin_capacityMask];
                const last = values[newTail];
                values[newTail] = none;
                values[head] = last;
                this[QueueMixin_tail] = newTail;
                // Inline: siftDown
                for (let index = 0; index < newCount;) {
                    const leftIndex = (index + 1) * 2 - 1;
                    const rightIndex = leftIndex + 1;
                    const hasLeft = leftIndex >= 0 && leftIndex < newCount;
                    const hasRight = rightIndex >= 0 && rightIndex < newCount;
                    const left = hasLeft ? getValue(this, leftIndex) : none;
                    const right = hasRight ? getValue(this, rightIndex) : none;
                    if (hasLeft && compare(left, last) < 0) {
                        if (hasRight && compare(right, left) < 0) {
                            setValue(this, index, right);
                            setValue(this, rightIndex, last);
                            index = rightIndex;
                        }
                        else {
                            setValue(this, index, left);
                            setValue(this, leftIndex, last);
                            index = leftIndex;
                        }
                    }
                    else if (hasRight && compare(right, last) < 0) {
                        setValue(this, index, right);
                        setValue(this, rightIndex, last);
                        index = rightIndex;
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                values[head] = none;
                this[QueueMixin_head] = (head + 1) & this[QueueMixin_capacityMask];
            }
            // Inline: shrink
            if (!((newCount << valuesLength) >> 1 || valuesLength <= 32)) {
                const head = this[QueueMixin_head];
                const tail = this[QueueMixin_tail];
                const newValuesLength = valuesLength >> 1;
                if (tail >= head && tail < newValuesLength) {
                    values[Array_length] >>= 1;
                }
                else {
                    const newValues = copyArray(values, head, tail, newValuesLength);
                    this[QueueMixin_values] = newValues;
                    this[QueueMixin_head] = 0;
                    this[QueueMixin_tail] = newCount;
                }
                this[QueueMixin_capacityMask] = newValuesLength - 1;
            }
            return item;
        },
        *[Symbol.iterator]() {
            const count = this[QueueLike_count];
            const head = this[QueueMixin_head];
            const tail = this[QueueMixin_tail];
            const values = this[QueueMixin_values];
            const headCount = head < tail ? tail : count;
            for (let i = head; i < headCount; i++) {
                yield values[i];
            }
            const tailCount = head < tail ? 0 : tail;
            for (let i = 0; i < tailCount; i++) {
                yield values[i];
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const capacity = this[QueueableLike_capacity];
            const compare = this[QueueMixin_comparator];
            const count = this[QueueLike_count];
            const isSorted = isSome(this[QueueMixin_comparator]);
            const values = this[QueueMixin_values];
            const valuesLength = values[Array_length];
            const capacityMask = this[QueueMixin_capacityMask];
            const tail = this[QueueMixin_tail];
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
            values[tail] = item;
            this[QueueLike_count]++;
            const newCount = this[QueueLike_count];
            this[QueueMixin_tail] = (tail + 1) & capacityMask;
            if (isSorted) {
                // INLINE: siftUp
                for (let index = newCount - 1, parentIndex = floor((index - 1) / 2); parentIndex >= 0 &&
                    parentIndex <= newCount &&
                    compare(getValue(this, parentIndex), item) > 0; index = parentIndex, parentIndex = floor((index - 1) / 2)) {
                    const parent = getValue(this, parentIndex);
                    setValue(this, parentIndex, item);
                    setValue(this, index, parent);
                }
            }
            // Inline: grow
            if (newCount >= valuesLength) {
                const head = this[QueueMixin_head];
                const tail = this[QueueMixin_tail];
                if (head === 0) {
                    values[Array_length] <<= 1;
                    this[QueueMixin_tail] = newCount + head;
                }
                else {
                    const newValuesLength = valuesLength << 1;
                    const newValues = copyArray(values, head, tail, newValuesLength);
                    this[QueueMixin_values] = newValues;
                    this[QueueMixin_head] = 0;
                    this[QueueMixin_tail] = newCount;
                }
                this[QueueMixin_capacityMask] = (capacityMask << 1) | 1;
            }
            return newCount < this[QueueableLike_capacity];
        },
    }));
})();
export default QueueMixin;
