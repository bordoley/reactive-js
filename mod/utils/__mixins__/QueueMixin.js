/// <reference types="./QueueMixin.d.ts" />

import { Array, Array_length, MAX_SAFE_INTEGER, } from "../../__internal__/constants.js";
import { mix, props, proto, unsafeCast, } from "../../__internal__/mixins.js";
import { isSome, newInstance, none, raiseError, returns, } from "../../functions.js";
import { clampPositiveInteger, floor } from "../../math.js";
import { BackPressureConfig_capacity, BackPressureConfig_strategy, BackPressureError, CollectionEnumeratorLike_count, CollectionEnumeratorLike_peek, DisposableLike_isDisposed, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_moveNext, OverflowBackpressureStrategy, QueueLike_enqueue, ThrowBackpressureStrategy, } from "../../utils.js";
const QueueMixin = 
/*@__PURE__*/ (() => {
    const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
    const QueueMixin_head = Symbol("QueueMixin_head");
    const QueueMixin_tail = Symbol("QueueMixin_tail");
    const QueueMixin_values = Symbol("QueueMixin_values");
    const QueueMixin_comparator = Symbol("QueueMixin_comparator");
    const QueueMixin_backpressureStrategy = Symbol("QueueMixin_backpressureStrategy");
    const QueueMixin_backpressureCapacity = Symbol("QueueMixin_backpressureCapacity");
    const computeIndex = (values, count, head, index) => {
        const valuesLength = values[Array_length];
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
    return returns(mix(function QueueMixin(config) {
        this[QueueMixin_comparator] = config?.comparator;
        this[QueueMixin_values] = none;
        this[QueueMixin_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        this[QueueMixin_backpressureCapacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        return this;
    }, props({
        [QueueMixin_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueMixin_backpressureCapacity]: MAX_SAFE_INTEGER,
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 31,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
    }), proto({
        /*get [FlowControllerQueueLike_tail]() {
          unsafeCast<TProperties>(this);
          const head = this[QueueMixin_head];
          const tail = this[QueueMixin_tail];
          const values = this[QueueMixin_values];
          const index = tail > 0 ? tail - 1 : values[Array_length] - 1;

          return head === tail ? none : values[index];
        },*/
        get [BackPressureConfig_capacity]() {
            unsafeCast(this);
            return this[QueueMixin_backpressureCapacity];
        },
        get [BackPressureConfig_strategy]() {
            unsafeCast(this);
            return this[QueueMixin_backpressureStrategy];
        },
        get [CollectionEnumeratorLike_peek]() {
            unsafeCast(this);
            const head = this[QueueMixin_head];
            const values = this[QueueMixin_values];
            const count = this[CollectionEnumeratorLike_count];
            return count === 0
                ? none
                : count === 1
                    ? values
                    : values[head];
        },
        [EnumeratorLike_moveNext]() {
            const count = this[CollectionEnumeratorLike_count];
            const values = this[QueueMixin_values];
            if (count < 1) {
                // Queue was empty to start with;
                this[EnumeratorLike_current] = none;
                this[EnumeratorLike_hasCurrent] = false;
                return false;
            }
            if (count === 1) {
                const item = this[QueueMixin_values];
                this[CollectionEnumeratorLike_count] = 0;
                this[QueueMixin_values] = none;
                this[EnumeratorLike_current] = item;
                this[EnumeratorLike_hasCurrent] = true;
                return true;
            }
            unsafeCast(values);
            const isSorted = isSome(this[QueueMixin_comparator]);
            const tail = this[QueueMixin_tail];
            const head = this[QueueMixin_head];
            const capacityMask = this[QueueMixin_capacityMask];
            const newCount = --this[CollectionEnumeratorLike_count];
            const valuesLength = values[Array_length];
            const item = values[head];
            if (newCount === 1) {
                const newHead = (head + 1) & capacityMask;
                this[QueueMixin_values] = values[newHead];
                this[EnumeratorLike_current] = item;
                this[EnumeratorLike_hasCurrent] = true;
                return true;
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
            const newCapacityMask = shouldShrink
                ? newValuesLength - 1
                : capacityMask;
            // Inline: shrink
            if (shouldShrink &&
                newTail >= newHead &&
                newTail < newValuesLength) {
                values[Array_length] = newValuesLength;
            }
            else if (shouldShrink) {
                this[QueueMixin_values] = copyArray(values, newHead, newTail, newValuesLength);
                this[QueueMixin_head] = 0;
                this[QueueMixin_tail] = newCount;
            }
            this[QueueMixin_capacityMask] = newCapacityMask;
            this[EnumeratorLike_current] = item;
            this[EnumeratorLike_hasCurrent] = true;
            return true;
        },
        *[Symbol.iterator]() {
            const values = this[QueueMixin_values];
            const count = this[CollectionEnumeratorLike_count];
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
        [QueueLike_enqueue](item) {
            const isDisposed = this[DisposableLike_isDisposed];
            const backpressureStrategy = this[QueueMixin_backpressureStrategy];
            const capacity = this[QueueMixin_backpressureCapacity];
            const applyBackpressure = this[CollectionEnumeratorLike_count] >= capacity;
            if ((backpressureStrategy === DropLatestBackpressureStrategy &&
                applyBackpressure) ||
                // Special case the 0 capacity queue so that we don't fall through
                // to pushing an item onto the queue
                (backpressureStrategy === DropOldestBackpressureStrategy &&
                    capacity === 0) ||
                isDisposed) {
                return;
            }
            else if (backpressureStrategy === DropOldestBackpressureStrategy &&
                applyBackpressure) {
                // We want to pop off the oldest value first, before enqueueing
                // to avoid unintentionally growing the queue.
                this[EnumeratorLike_moveNext]();
            }
            else if (backpressureStrategy === ThrowBackpressureStrategy &&
                applyBackpressure) {
                raiseError(newInstance(BackPressureError, this));
            }
            const newCount = ++this[CollectionEnumeratorLike_count];
            if (newCount === 1) {
                this[QueueMixin_values] = item;
                return;
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
            const valuesLength = values[Array_length];
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
        },
    })));
})();
export default QueueMixin;
