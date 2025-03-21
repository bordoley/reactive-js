import { Array, Array_length } from "../../__internal__/constants.js";
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
  returns,
} from "../../functions.js";
import { floor } from "../../math.js";
import {
  CollectionEnumeratorLike_count,
  EnumeratorLike_current,
  EnumeratorLike_hasCurrent,
  EnumeratorLike_moveNext,
  QueueLike,
  QueueLike_enqueue,
} from "../../utils.js";

const QueueMixin: <T>() => Mixin1<
  QueueLike<T>,
  Optional<{
    comparator?: Comparator<T>;
  }>,
  unknown,
  Omit<
    QueueLike<T>,
    | typeof CollectionEnumeratorLike_count
    | typeof EnumeratorLike_current
    | typeof EnumeratorLike_hasCurrent
  >
> = /*@__PURE__*/ (<T>() => {
  const QueueMixin_capacityMask = Symbol("QueueMixin_capacityMask");
  const QueueMixin_head = Symbol("QueueMixin_head");
  const QueueMixin_tail = Symbol("QueueMixin_tail");
  const QueueMixin_values = Symbol("QueueMixin_values");
  const QueueMixin_comparator = Symbol("QueueMixin_comparator");

  type TProperties = {
    [EnumeratorLike_current]: T;
    [EnumeratorLike_hasCurrent]: boolean;
    [CollectionEnumeratorLike_count]: number;
    [QueueMixin_head]: number;
    [QueueMixin_tail]: number;
    [QueueMixin_capacityMask]: number;
    [QueueMixin_values]: Optional<Optional<T>[] | T>;
    readonly [QueueMixin_comparator]: Optional<Comparator<T>>;
  };

  const computeIndex = (
    values: readonly Optional<T>[],
    count: number,
    head: number,
    index: number,
  ) => {
    const valuesLength = values[Array_length];
    const headOffsetIndex = index + head;
    const tailOffsetIndex = headOffsetIndex - valuesLength;

    return index < 0 || index >= count
      ? -1
      : headOffsetIndex < valuesLength
        ? headOffsetIndex
        : tailOffsetIndex;
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

  return returns(
    mix(
      function QueueMixin(
        this: QueueLike<T> & Mutable<TProperties>,
        config: Optional<{
          comparator?: Comparator<T>;
        }>,
      ): QueueLike<T> {
        this[QueueMixin_comparator] = config?.comparator;
        this[QueueMixin_values] = none;

        return this;
      },
      props<TProperties>({
        [EnumeratorLike_current]: none,
        [EnumeratorLike_hasCurrent]: false,
        [CollectionEnumeratorLike_count]: 0,
        [QueueMixin_head]: 0,
        [QueueMixin_tail]: 0,
        [QueueMixin_capacityMask]: 31,
        [QueueMixin_values]: none,
        [QueueMixin_comparator]: none,
      }),
      {
        /*get [QueueLike_tail]() {
          unsafeCast<TProperties>(this);
          const head = this[QueueMixin_head];
          const tail = this[QueueMixin_tail];
          const values = this[QueueMixin_values];
          const index = tail > 0 ? tail - 1 : values[Array_length] - 1;

          return head === tail ? none : values[index];
        },*/

        [EnumeratorLike_moveNext](this: TProperties & QueueLike<T>) {
          const count = this[CollectionEnumeratorLike_count];
          const values = this[QueueMixin_values];

          if (count < 1) {
            this[EnumeratorLike_current] = none as T;
            this[EnumeratorLike_hasCurrent] = false;
            return this[EnumeratorLike_hasCurrent];
          }

          if (count === 1) {
            const item = this[QueueMixin_values] as Optional<T>;
            this[CollectionEnumeratorLike_count] = 0;
            this[QueueMixin_values] = none;

            this[EnumeratorLike_current] = item as T;
            this[EnumeratorLike_hasCurrent] = true;
            return this[EnumeratorLike_hasCurrent];
          }

          unsafeCast<Optional<T>[]>(values);

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

            this[EnumeratorLike_current] = item as T;
            this[EnumeratorLike_hasCurrent] = true;
            return this[EnumeratorLike_hasCurrent];
          }

          if (isSorted) {
            const compare = this[QueueMixin_comparator] as Comparator<T>;
            const newTail = (this[QueueMixin_tail] =
              (tail - 1 + valuesLength) & capacityMask);
            const last = values[newTail] as T;
            values[newTail] = none;
            values[head] = last;

            // Inline: siftDown
            for (let index = 0; index < newCount; ) {
              const indexValuesIndex = computeIndex(
                values,
                newCount,
                head,
                index,
              );

              const leftIndex = (index + 1) * 2 - 1;
              const hasLeft = leftIndex >= 0 && leftIndex < newCount;
              const leftValuesIndex = computeIndex(
                values,
                newCount,
                head,
                leftIndex,
              );
              const left = values[leftValuesIndex];

              const rightIndex = leftIndex + 1;
              const hasRight = rightIndex >= 0 && rightIndex < newCount;
              const rightValuesIndex = computeIndex(
                values,
                newCount,
                head,
                rightIndex,
              );
              const right = values[rightValuesIndex];

              if (hasLeft && compare(left as T, last) < 0) {
                if (hasRight && compare(right as T, left as T) < 0) {
                  values[indexValuesIndex] = right;
                  values[rightValuesIndex] = last;
                  index = rightIndex;
                } else {
                  values[indexValuesIndex] = left;
                  values[leftValuesIndex] = last;
                  index = leftIndex;
                }
              } else if (hasRight && compare(right as T, last) < 0) {
                values[indexValuesIndex] = right;
                values[rightValuesIndex] = last;
                index = rightIndex;
              } else {
                break;
              }
            }
          } else {
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
          } else if (shouldShrink) {
            this[QueueMixin_values] = copyArray(
              values,
              newHead,
              newTail,
              newValuesLength,
            );
            this[QueueMixin_head] = 0;
            this[QueueMixin_tail] = newCount;
          }

          this[QueueMixin_capacityMask] = newCapacityMask;

          this[EnumeratorLike_current] = item as T;
          this[EnumeratorLike_hasCurrent] = true;
          return this[EnumeratorLike_hasCurrent];
        },

        *[Symbol.iterator](this: QueueLike<T> & TProperties): Iterator<T> {
          const values = this[QueueMixin_values];
          const count = this[CollectionEnumeratorLike_count];

          if (count === 1) {
            yield values as T;
          } else if (count > 1) {
            unsafeCast<Array<Optional<T>>>(values);
            const valuesLength = values[Array_length];
            const head = this[QueueMixin_head];
            const tail = this[QueueMixin_tail];

            const headCount = head <= tail ? tail : valuesLength;
            for (let i = head; i < headCount; i++) {
              yield values[i] as T;
            }

            const tailCount = head <= tail ? 0 : tail;
            for (let i = 0; i < tailCount; i++) {
              yield values[i] as T;
            }
          }
        },

        [QueueLike_enqueue](this: TProperties & QueueLike<T>, item: T) {
          // Assign these after applying backpressure because backpressure
          // can mutate the state of the queue.
          const newCount = ++this[CollectionEnumeratorLike_count];
          if (newCount === 1) {
            this[QueueMixin_values] = item;
            return;
          }

          const compare = this[QueueMixin_comparator] as Comparator<T>;
          const oldValues = this[QueueMixin_values];
          const values =
            newCount === 2
              ? ((this[QueueMixin_capacityMask] = 31),
                (this[QueueMixin_head] = 0),
                (this[QueueMixin_tail] = 1),
                ((this[QueueMixin_values] = newInstance<
                  Array<Optional<T>>,
                  number
                >(Array, 32)),
                (this[QueueMixin_values][0] = oldValues as Optional<T>),
                this[QueueMixin_values]))
              : (oldValues as Optional<T>[]);

          const valuesLength = values[Array_length];
          const capacityMask = this[QueueMixin_capacityMask];
          const head = this[QueueMixin_head];
          const tail = this[QueueMixin_tail];
          const isSorted = isSome(this[QueueMixin_comparator]);

          values[tail] = item;

          const newTail = (this[QueueMixin_tail] = (tail + 1) & capacityMask);

          // Inline: siftUp
          for (
            let index = newCount - 1, parentIndex = -1, parentValuesIndex = -1;
            isSorted &&
            ((parentIndex = floor((index - 1) / 2)),
            (parentValuesIndex = computeIndex(
              values,
              newCount,
              head,
              parentIndex,
            )),
            parentIndex >= 0 &&
              parentIndex <= newCount &&
              compare(values[parentValuesIndex] as T, item) > 0);
            index = parentIndex
          ) {
            const parent = values[parentValuesIndex] as T;
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
          } else if (shouldGrow) {
            this[QueueMixin_values] = copyArray(
              values,
              head,
              newTail,
              newValuesLength,
            );
            this[QueueMixin_head] = 0;
            this[QueueMixin_tail] = newCount;
          }

          this[QueueMixin_capacityMask] = newCapacityMask;
        },
      },
    ),
  );
})();

export default QueueMixin;
