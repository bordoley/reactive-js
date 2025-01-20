import {
  Array,
  Array_length,
  MAX_SAFE_INTEGER,
} from "../../__internal__/constants.js";
import { clampPositiveInteger, floor } from "../../__internal__/math.js";
import {
  Mixin1,
  Mutable,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Comparator,
  Optional,
  isSome,
  newInstance,
  none,
  raiseError,
  raiseIf,
  returns,
} from "../../functions.js";
import {
  BackPressureError,
  BackpressureStrategy,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueLike_head,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";

const QueueMixin: <T>() => Mixin1<
  QueueLike<T>,
  Optional<{
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  unknown,
  Omit<
    QueueLike<T>,
    | typeof QueueableLike_backpressureStrategy
    | typeof QueueLike_count
    | typeof QueueableLike_capacity
  >
> = /*@PURE*/ (<T>() => {
  const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
  const QueueMixin_head = Symbol("QueueMixin_head");
  const QueueMixin_tail = Symbol("QueueMixin_tail");
  const QueueMixin_values = Symbol("QueueMixin_values");
  const QueueMixin_comparator = Symbol("QueueMixin_comparator");

  type TProperties = {
    [QueueLike_count]: number;
    readonly [QueueableLike_backpressureStrategy]: BackpressureStrategy;
    readonly [QueueableLike_capacity]: number;
    [QueueMixin_head]: number;
    [QueueMixin_tail]: number;
    [QueueMixin_capacityMask]: number;
    [QueueMixin_values]: Optional<T>[];
    readonly [QueueMixin_comparator]: Optional<Comparator<T>>;
  };

  const computeIndex = (thiz: TProperties & QueueLike<T>, index: number) => {
    const valuesLength = thiz[QueueMixin_values][Array_length];
    const head = thiz[QueueMixin_head];
    const headOffsetIndex = index + head;
    const tailOffsetIndex = headOffsetIndex - valuesLength;
    const count = thiz[QueueLike_count];

    raiseIf(index < 0 || index >= count, "index out of range");

    return headOffsetIndex < valuesLength ? headOffsetIndex : tailOffsetIndex;
  };

  const copyArray = (
    src: ReadonlyArray<Optional<T>>,
    head: number,
    tail: number,
    size: number,
  ) => {
    const arrayLength = src[Array_length];

    const dest = newInstance<Array<Optional<T>>, number>(Array, size);
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

  const getValue = (queue: TProperties & QueueLike<T>, index: number): T => {
    const computedIndex = computeIndex(queue, index);
    return queue[QueueMixin_values][computedIndex] as T;
  };

  const setValue = (
    queue: TProperties & QueueLike<T>,
    index: number,
    value: T,
  ): T => {
    const values = queue[QueueMixin_values];
    const computedIndex = computeIndex(queue, index);
    const oldValue = values[computedIndex] as T;

    values[computedIndex] = value;

    return oldValue;
  };

  return returns(
    mix(
      function QueueMixin(
        instance: Omit<
          QueueLike<T>,
          typeof QueueLike_count | typeof QueueableLike_capacity
        > &
          Mutable<TProperties>,
        config?: {
          capacity?: number;
          comparator?: Comparator<T>;
          backpressureStrategy?: BackpressureStrategy;
        },
      ): QueueLike<T> {
        instance[QueueableLike_backpressureStrategy] =
          config?.backpressureStrategy ?? OverflowBackpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(
          config?.capacity ?? MAX_SAFE_INTEGER,
        );

        instance[QueueMixin_comparator] = config?.comparator;

        instance[QueueMixin_capacityMask] = 31;
        instance[QueueMixin_values] = newInstance<Array<Optional<T>>, number>(
          Array,
          32,
        );

        return instance;
      },
      props<TProperties>({
        [QueueLike_count]: 0,
        [QueueableLike_backpressureStrategy]: OverflowBackpressureStrategy,
        [QueueableLike_capacity]: MAX_SAFE_INTEGER,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 0,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
      }),
      {
        get [QueueLike_head]() {
          unsafeCast<TProperties>(this);
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

        [QueueLike_dequeue](this: TProperties & QueueLike<T>) {
          const count = this[QueueLike_count];
          const isSorted = isSome(this[QueueMixin_comparator]);
          const tail = this[QueueMixin_tail];
          const values = this[QueueMixin_values];
          const valuesLength = values[Array_length];
          const head = this[QueueMixin_head];
          const item = values[head];
          const compare = this[QueueMixin_comparator] as Comparator<T>;

          if (count === 0) {
            return none;
          }

          this[QueueLike_count]--;
          const newCount = this[QueueLike_count];

          if (isSorted && newCount > 1) {
            const newTail =
              (tail - 1 + valuesLength) & this[QueueMixin_capacityMask];
            const last = values[newTail] as T;
            values[newTail] = none;
            values[head] = last;
            this[QueueMixin_tail] = newTail;

            // Inline: siftDown
            for (let index = 0; index < newCount; ) {
              const leftIndex = (index + 1) * 2 - 1;
              const rightIndex = leftIndex + 1;

              const hasLeft = leftIndex >= 0 && leftIndex < newCount;
              const hasRight = rightIndex >= 0 && rightIndex < newCount;

              const left = hasLeft ? getValue(this, leftIndex) : none;
              const right = hasRight ? getValue(this, rightIndex) : none;

              if (hasLeft && compare(left as T, last) < 0) {
                if (hasRight && compare(right as T, left as T) < 0) {
                  setValue(this, index, right as T);
                  setValue(this, rightIndex, last);
                  index = rightIndex;
                } else {
                  setValue(this, index, left as T);
                  setValue(this, leftIndex, last);
                  index = leftIndex;
                }
              } else if (hasRight && compare(right as T, last) < 0) {
                setValue(this, index, right as T);
                setValue(this, rightIndex, last);
                index = rightIndex;
              } else {
                break;
              }
            }
          } else {
            values[head] = none;
            this[QueueMixin_head] = (head + 1) & this[QueueMixin_capacityMask];
          }

          (newCount >= valuesLength >> 1 || valuesLength <= 32)

          // Inline: shrink
          if (!((newCount >= valuesLength >> 1 || valuesLength <= 32))) {
            const head = this[QueueMixin_head];
            const tail = this[QueueMixin_tail];

            const newValuesLength = valuesLength >> 1;

            if (tail >= head && tail < newValuesLength) {
              values[Array_length] >>= 1;
            } else {
              const newValues = copyArray(values, head, tail, newValuesLength);

              this[QueueMixin_values] = newValues;
              this[QueueMixin_head] = 0;
              this[QueueMixin_tail] = newCount;
            }

            this[QueueMixin_capacityMask] = newValuesLength - 1;
          }

          return item;
        },

        *[Symbol.iterator](this: QueueLike<T> & TProperties): Iterator<T> {
          const count = this[QueueLike_count];
          const head = this[QueueMixin_head];
          const tail = this[QueueMixin_tail];
          const values = this[QueueMixin_values];

          const headCount = head < tail ? tail : count;
          for (let i = head; i < headCount; i++) {
            yield values[i] as T;
          }

          const tailCount = head < tail ? 0 : tail;
          for (let i = 0; i < tailCount; i++) {
            yield values[i] as T;
          }
        },

        [QueueableLike_enqueue](
          this: TProperties & QueueLike<T>,
          item: T,
        ): boolean {
          const backpressureStrategy = this[QueueableLike_backpressureStrategy];
          const capacity = this[QueueableLike_capacity];
          const compare = this[QueueMixin_comparator] as Comparator<T>;
          const count = this[QueueLike_count];
          const isSorted = isSome(this[QueueMixin_comparator]);
          const values = this[QueueMixin_values];
          const valuesLength = values[Array_length];
          const capacityMask = this[QueueMixin_capacityMask];
          const tail = this[QueueMixin_tail];

          if (
            backpressureStrategy === DropLatestBackpressureStrategy &&
            count >= capacity
          ) {
            return false;
          } else if (
            backpressureStrategy === DropOldestBackpressureStrategy &&
            count >= capacity
          ) {
            if (capacity > 0) {
              // We want to pop off the oldest value first, before enqueueing
              // to avoid unintentionally growing the queue.
              this[QueueLike_dequeue]();
            } else {
              // Special case the 0 capacity queue so that we don't fall through
              // to pushing an item onto the queue
              return false;
            }
          } else if (
            backpressureStrategy === ThrowBackpressureStrategy &&
            count >= capacity
          ) {
            raiseError(
              newInstance(BackPressureError, capacity, backpressureStrategy),
            );
          }

          values[tail] = item;
          this[QueueLike_count]++;
          const newCount = this[QueueLike_count];
          this[QueueMixin_tail] = (tail + 1) & capacityMask;

          if (isSorted) {
            // INLINE: siftUp
            for (
              let index = newCount - 1, parentIndex = floor((index - 1) / 2);
              parentIndex >= 0 &&
              parentIndex <= newCount &&
              compare(getValue(this, parentIndex), item) > 0;
              index = parentIndex, parentIndex = floor((index - 1) / 2)
            ) {
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
            } else {
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
      },
    ),
  );
})();

export default QueueMixin;
