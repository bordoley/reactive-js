/// <reference types="./QueueMixin.d.ts" />

import { Array, Array_length, MAX_SAFE_INTEGER, } from "../../__internal__/constants.js";
import { clampPositiveInteger, floor } from "../../__internal__/math.js";
import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import { isSome, newInstance, none, raiseError, returns, } from "../../functions.js";
import { BackPressureError, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueLike_head, QueueableLike_backpressureStrategy, QueueableLike_capacity, QueueableLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
const QueueMixin = /*@PURE*/ (() => {
    const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
    const QueueMixin_head = Symbol("QueueMixin_head");
    const QueueMixin_tail = Symbol("QueueMixin_tail");
    const QueueMixin_values = Symbol("QueueMixin_values");
    const QueueMixin_comparator = Symbol("QueueMixin_comparator");
    const computeIndex = (values, count, head, index) => {
        const valuesLength = values[Array_length] ?? 0;
        const headOffsetIndex = index + head;
        const tailOffsetIndex = headOffsetIndex - valuesLength;
        return index < 0 || index >= count
            ? -1
            : headOffsetIndex < valuesLength
                ? headOffsetIndex
                : tailOffsetIndex;
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
    return returns(mix(function QueueMixin(instance, config) {
        instance[QueueableLike_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        instance[QueueMixin_comparator] = config?.comparator;
        instance[QueueMixin_values] = none;
        return instance;
    }, props({
        [QueueLike_count]: 0,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 31,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
    }), {
        get [QueueLike_head]() {
            unsafeCast(this);
            const count = this[QueueLike_count];
            const head = this[QueueMixin_head];
            const values = this[QueueMixin_values];
            return count <= 1
                ? values
                : values[head];
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
            const values = this[QueueMixin_values];
            if (count <= 1) {
                const item = this[QueueMixin_values];
                this[QueueLike_count] = 0;
                this[QueueMixin_values] = none;
                return item;
            }
            unsafeCast(values);
            const isSorted = isSome(this[QueueMixin_comparator]);
            const tail = this[QueueMixin_tail];
            const head = this[QueueMixin_head];
            const capacityMask = this[QueueMixin_capacityMask];
            const newCount = --this[QueueLike_count];
            const valuesLength = values[Array_length];
            const item = values[head];
            if (newCount === 1) {
                const newHead = (head + 1) & capacityMask;
                this[QueueMixin_values] = values[newHead];
                return item;
            }
            if (isSorted) {
                const compare = this[QueueMixin_comparator];
                const newTail = (this[QueueMixin_tail] =
                    (tail - 1 + valuesLength) & capacityMask);
                const last = values[newTail];
                values[newTail] = none;
                values[head] = last;
                // Inline: siftDown
                for (let index = 0; index < newCount;) {
                    const indexValuesIndex = computeIndex(values, newCount, head, index);
                    const leftIndex = (index + 1) * 2 - 1;
                    const hasLeft = leftIndex >= 0 && leftIndex < newCount;
                    const leftValuesIndex = computeIndex(values, newCount, head, leftIndex);
                    const left = values[leftValuesIndex];
                    const rightIndex = leftIndex + 1;
                    const hasRight = rightIndex >= 0 && rightIndex < newCount;
                    const rightValuesIndex = computeIndex(values, newCount, head, rightIndex);
                    const right = values[rightValuesIndex];
                    if (hasLeft && compare(left, last) < 0) {
                        if (hasRight && compare(right, left) < 0) {
                            values[indexValuesIndex] = right;
                            values[rightValuesIndex] = last;
                            index = rightIndex;
                        }
                        else {
                            values[indexValuesIndex] = left;
                            values[leftValuesIndex] = last;
                            index = leftIndex;
                        }
                    }
                    else if (hasRight && compare(right, last) < 0) {
                        values[indexValuesIndex] = right;
                        values[rightValuesIndex] = last;
                        index = rightIndex;
                    }
                    else {
                        break;
                    }
                }
            }
            else {
                values[head] = none;
                this[QueueMixin_head] = (head + 1) & capacityMask;
            }
            const newHead = this[QueueMixin_head];
            const newTail = this[QueueMixin_tail];
            const newValuesLength = valuesLength >> 1;
            const shouldShrink = newCount < newValuesLength && valuesLength > 32;
            const newCapacityMask = newCount === 0
                ? 31
                : shouldShrink
                    ? newValuesLength - 1
                    : capacityMask;
            // Inline: shrink
            if (shouldShrink && newTail >= newHead && newTail < newValuesLength) {
                values[Array_length] = newValuesLength;
            }
            else if (shouldShrink) {
                this[QueueMixin_values] = copyArray(values, newHead, newTail, newValuesLength);
                this[QueueMixin_head] = 0;
                this[QueueMixin_tail] = newCount;
            }
            this[QueueMixin_capacityMask] = newCapacityMask;
            return item;
        },
        *[Symbol.iterator]() {
            const values = this[QueueMixin_values];
            const count = this[QueueLike_count];
            if (count === 1) {
                yield values;
            }
            else if (count > 1) {
                unsafeCast(values);
                const valuesLength = values[Array_length];
                const head = this[QueueMixin_head];
                const tail = this[QueueMixin_tail];
                const headCount = head <= tail ? tail : valuesLength;
                for (let i = head; i < headCount; i++) {
                    yield values[i];
                }
                const tailCount = head <= tail ? 0 : tail;
                for (let i = 0; i < tailCount; i++) {
                    yield values[i];
                }
            }
        },
        [QueueableLike_enqueue](item) {
            const backpressureStrategy = this[QueueableLike_backpressureStrategy];
            const capacity = this[QueueableLike_capacity];
            const applyBackpressure = this[QueueLike_count] >= capacity;
            if ((backpressureStrategy === DropLatestBackpressureStrategy &&
                applyBackpressure) ||
                // Special case the 0 capacity queue so that we don't fall through
                // to pushing an item onto the queue
                (backpressureStrategy === DropOldestBackpressureStrategy &&
                    capacity === 0)) {
                return false;
            }
            else if (backpressureStrategy === DropOldestBackpressureStrategy &&
                applyBackpressure) {
                // We want to pop off the oldest value first, before enqueueing
                // to avoid unintentionally growing the queue.
                this[QueueLike_dequeue]();
            }
            else if (backpressureStrategy === ThrowBackpressureStrategy &&
                applyBackpressure) {
                raiseError(newInstance(BackPressureError, capacity, backpressureStrategy));
            }
            // Assign these after applying backpressure because backpressure
            // can mutate the state of the queue.
            const newCount = ++this[QueueLike_count];
            if (newCount === 1) {
                this[QueueMixin_values] = item;
                return newCount < capacity;
            }
            const compare = this[QueueMixin_comparator];
            const oldValues = this[QueueMixin_values];
            const values = newCount === 2
                ? ((this[QueueMixin_capacityMask] = 31),
                    (this[QueueMixin_head] = 0),
                    (this[QueueMixin_tail] = 1),
                    ((this[QueueMixin_values] = newInstance(Array, 32)),
                        (this[QueueMixin_values][0] = oldValues),
                        this[QueueMixin_values]))
                : oldValues;
            const valuesLength = values?.[Array_length] ?? 0;
            const capacityMask = this[QueueMixin_capacityMask];
            const head = this[QueueMixin_head];
            const tail = this[QueueMixin_tail];
            const isSorted = isSome(this[QueueMixin_comparator]);
            values[tail] = item;
            const newTail = (this[QueueMixin_tail] = (tail + 1) & capacityMask);
            // Inline: siftUp
            for (let index = newCount - 1, parentIndex = -1, parentValuesIndex = -1; isSorted &&
                ((parentIndex = floor((index - 1) / 2)),
                    (parentValuesIndex = computeIndex(values, newCount, head, parentIndex)),
                    parentIndex >= 0 &&
                        parentIndex <= newCount &&
                        compare(values[parentValuesIndex], item) > 0); index = parentIndex) {
                const parent = values[parentValuesIndex];
                const itemValuesIndex = computeIndex(values, newCount, head, index);
                values[parentValuesIndex] = item;
                values[itemValuesIndex] = parent;
            }
            const shouldGrow = newCount >= valuesLength;
            const newCapacityMask = shouldGrow
                ? (capacityMask << 1) | 1
                : capacityMask;
            const newValuesLength = valuesLength << 1;
            // Inline: grow
            if (shouldGrow && head === 0) {
                values[Array_length] = newValuesLength;
                this[QueueMixin_tail] = newCount + head;
            }
            else if (shouldGrow) {
                this[QueueMixin_values] = copyArray(values, head, newTail, newValuesLength);
                this[QueueMixin_head] = 0;
                this[QueueMixin_tail] = newCount;
            }
            this[QueueMixin_capacityMask] = newCapacityMask;
            return newCount < capacity;
        },
    }));
})();
export default QueueMixin;
