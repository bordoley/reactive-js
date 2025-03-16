/// <reference types="./QueueMixin.d.ts" />

import { Array, Array_length, MAX_SAFE_INTEGER, } from "../../__internal__/constants.js";
import { mix, props, unsafeCast, } from "../../__internal__/mixins.js";
import EventSource_addEventHandler from "../../computations/EventSource/__private__/EventSource.addEventHandler.js";
import * as Publisher from "../../computations/Publisher.js";
import { isSome, newInstance, none, pipe, raiseError, returns, } from "../../functions.js";
import { clampPositiveInteger, floor } from "../../math.js";
import { BackPressureError, ConsumerLike_addOnReadyListener, ConsumerLike_backpressureStrategy, ConsumerLike_capacity, ConsumerLike_isReady, DisposableLike_dispose, DropLatestBackpressureStrategy, DropOldestBackpressureStrategy, EventListenerLike_notify, OverflowBackpressureStrategy, QueueLike_count, QueueLike_dequeue, QueueLike_head, SinkLike_complete, SinkLike_isCompleted, ThrowBackpressureStrategy, } from "../../utils.js";
import * as Disposable from "../Disposable.js";
const QueueMixin = /*@__PURE__*/ (() => {
    const QueueMixin_autoDispose = Symbol("QueueMixin_autoDispose");
    const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
    const QueueMixin_head = Symbol("QueueMixin_head");
    const QueueMixin_tail = Symbol("QueueMixin_tail");
    const QueueMixin_values = Symbol("QueueMixin_values");
    const QueueMixin_comparator = Symbol("QueueMixin_comparator");
    const QueueMixin_onReadyPublisher = Symbol("QueueMixin_onReadyPublisher");
    const QueueMixin_backpressureStrategy = Symbol("QueueMixin_backpressureStrategy");
    const QueueMixin_capacity = Symbol("QueueMixin_capacity");
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
        this[QueueMixin_backpressureStrategy] =
            config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        this[QueueMixin_capacity] = clampPositiveInteger(config?.capacity ?? MAX_SAFE_INTEGER);
        this[QueueMixin_autoDispose] = config?.autoDispose ?? false;
        this[QueueMixin_comparator] = config?.comparator;
        this[QueueMixin_values] = none;
        return this;
    }, props({
        [QueueMixin_autoDispose]: false,
        [QueueLike_count]: 0,
        [QueueMixin_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueMixin_capacity]: MAX_SAFE_INTEGER,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 31,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
        [SinkLike_isCompleted]: false,
        [QueueMixin_onReadyPublisher]: none,
    }), {
        get [ConsumerLike_capacity]() {
            unsafeCast(this);
            return this[QueueMixin_capacity];
        },
        get [ConsumerLike_backpressureStrategy]() {
            unsafeCast(this);
            return this[QueueMixin_backpressureStrategy];
        },
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
        get [ConsumerLike_isReady]() {
            unsafeCast(this);
            const count = this[QueueLike_count];
            const capacity = this[QueueMixin_capacity];
            const isCompleted = this[SinkLike_isCompleted];
            return !isCompleted && count < capacity;
        },
        [QueueLike_dequeue]() {
            const count = this[QueueLike_count];
            const values = this[QueueMixin_values];
            const capacity = this[QueueMixin_capacity];
            const isCompleted = this[SinkLike_isCompleted];
            const shouldNotifyReady = count === capacity && !isCompleted;
            const onReadySignal = this[QueueMixin_onReadyPublisher];
            if (count <= 1) {
                const item = this[QueueMixin_values];
                this[QueueLike_count] = 0;
                this[QueueMixin_values] = none;
                shouldNotifyReady && onReadySignal?.[EventListenerLike_notify]();
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
                shouldNotifyReady && onReadySignal?.[EventListenerLike_notify]();
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
            const newCapacityMask = shouldShrink
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
            shouldNotifyReady && onReadySignal?.[EventListenerLike_notify]();
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
        [EventListenerLike_notify](item) {
            const backpressureStrategy = this[QueueMixin_backpressureStrategy];
            const capacity = this[QueueMixin_capacity];
            const applyBackpressure = this[QueueLike_count] >= capacity;
            const isCompleted = this[SinkLike_isCompleted];
            if (isCompleted ||
                (backpressureStrategy === DropLatestBackpressureStrategy &&
                    applyBackpressure) ||
                // Special case the 0 capacity queue so that we don't fall through
                // to pushing an item onto the queue
                (backpressureStrategy === DropOldestBackpressureStrategy &&
                    capacity === 0)) {
                return;
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
        [SinkLike_complete]() {
            this[SinkLike_isCompleted] = true;
            this[QueueMixin_onReadyPublisher]?.[DisposableLike_dispose]();
            this[QueueMixin_onReadyPublisher] = none;
            if (this[QueueMixin_autoDispose]) {
                this[DisposableLike_dispose]();
            }
        },
        [ConsumerLike_addOnReadyListener](callback) {
            const publisher = this[QueueMixin_onReadyPublisher];
            this[QueueMixin_onReadyPublisher] =
                publisher ?? pipe(Publisher.create(), Disposable.addTo(this));
            return pipe(this[QueueMixin_onReadyPublisher], EventSource_addEventHandler(callback), Disposable.addTo(this));
        },
    }));
})();
export default QueueMixin;
