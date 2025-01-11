import {
  Array,
  Array_length,
  MAX_SAFE_INTEGER,
} from "../../__internal__/constants.js";
import { clampPositiveInteger, floor } from "../../__internal__/math.js";
import {
  Mixin2,
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

const QueueMixin: <T>() => Mixin2<
  QueueLike<T>,
  Optional<Comparator<T>>,
  Optional<{
    readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
    readonly [QueueableLike_capacity]?: number;
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
    const capacity = thiz[QueueMixin_values][Array_length];
    const head = thiz[QueueMixin_head];
    const headOffsetIndex = index + head;
    const tailOffsetIndex = headOffsetIndex - capacity;
    const count = thiz[QueueLike_count];

    raiseIf(index < 0 || index >= count, "index out of range");

    return headOffsetIndex < capacity ? headOffsetIndex : tailOffsetIndex;
  };

  const copyArray = (
    src: ReadonlyArray<Optional<T>>,
    head: number,
    tail: number,
    size: number,
  ) => {
    const capacity = src[Array_length];

    const dest = newInstance<Array<Optional<T>>, number>(Array, size);
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

  const grow = (instance: TProperties) => {
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
    } else {
      const newCapacity = capacity << 1;
      const newList = copyArray(values, head, tail, newCapacity);

      instance[QueueMixin_values] = newList;
      instance[QueueMixin_head] = 0;
      instance[QueueMixin_tail] = count;
    }

    instance[QueueMixin_capacityMask] = (capacityMask << 1) | 1;
  };

  const shrink = (instance: TProperties) => {
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
    } else {
      const newList = copyArray(values, head, tail, newCapacity);

      instance[QueueMixin_values] = newList;
      instance[QueueMixin_head] = 0;
      instance[QueueMixin_tail] = count;
    }

    instance[QueueMixin_capacityMask] = newCapacity - 1;
  };

  const siftDown = (queue: TProperties & QueueLike<T>, item: T) => {
    const compare = queue[QueueMixin_comparator] as Comparator<T>;
    const count = queue[QueueLike_count];

    for (let index = 0; index < count; ) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      const hasLeft = leftIndex >= 0 && leftIndex < count;
      const hasRight = rightIndex >= 0 && rightIndex < count;

      const left = hasLeft ? getValue(queue, leftIndex) : none;
      const right = hasRight ? getValue(queue, rightIndex) : none;

      if (hasLeft && compare(left as T, item) < 0) {
        if (hasRight && compare(right as T, left as T) < 0) {
          setValue(queue, index, right as T);
          setValue(queue, rightIndex, item);
          index = rightIndex;
        } else {
          setValue(queue, index, left as T);
          setValue(queue, leftIndex, item);
          index = leftIndex;
        }
      } else if (hasRight && compare(right as T, item) < 0) {
        setValue(queue, index, right as T);
        setValue(queue, rightIndex, item);
        index = rightIndex;
      } else {
        break;
      }
    }
  };

  const siftUp = (queue: TProperties & QueueLike<T>, item: T) => {
    const compare = queue[QueueMixin_comparator] as Comparator<T>;
    const count = queue[QueueLike_count];

    for (
      let index = count - 1, parentIndex = floor((index - 1) / 2);
      parentIndex >= 0 &&
      parentIndex <= count &&
      compare(getValue(queue, parentIndex), item) > 0;
      index = parentIndex, parentIndex = floor((index - 1) / 2)
    ) {
      const parent = getValue(queue, parentIndex);
      setValue(queue, parentIndex, item);
      setValue(queue, index, parent);
    }
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

  const popLast = (queue: TProperties & QueueLike<T>): Optional<T> => {
    const head = queue[QueueMixin_head];
    const values = queue[QueueMixin_values];
    const capacity = values[Array_length];

    let tail = queue[QueueMixin_tail];

    const item =
      head === tail
        ? none
        : ((tail = (tail - 1 + capacity) & queue[QueueMixin_capacityMask]),
          (queue[QueueMixin_tail] = tail),
          queue[QueueLike_count]--,
          values[tail]);

    values[tail] = none;

    shrink(queue);

    return item;
  };

  return returns(
    mix(
      function QueueMixin(
        instance: Omit<
          QueueLike<T>,
          typeof QueueLike_count | typeof QueueableLike_capacity
        > &
          Mutable<TProperties>,
        comparator: Optional<Comparator<T>>,
        config?: {
          readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
          readonly [QueueableLike_capacity]?: number;
        },
      ): QueueLike<T> {
        instance[QueueableLike_backpressureStrategy] =
          config?.[QueueableLike_backpressureStrategy] ??
          OverflowBackpressureStrategy;
        instance[QueueableLike_capacity] = clampPositiveInteger(
          config?.[QueueableLike_capacity] ?? MAX_SAFE_INTEGER,
        );

        instance[QueueMixin_comparator] = comparator;

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

          if (count === 0) {
            return none;
          } else if (count > 1 && isSorted) {
            const first = getValue(this, 0);
            const last = popLast(this) as T;
            setValue(this, 0, last);

            siftDown(this, last);

            return first;
          } else {
            const tail = this[QueueMixin_tail];
            const values = this[QueueMixin_values];

            let head = this[QueueMixin_head];

            const item = head === tail ? none : values[head];

            if (head !== tail) {
              values[head] = none;
              head = (head + 1) & this[QueueMixin_capacityMask];
              this[QueueMixin_head] = head;
              this[QueueLike_count]--;
            }

            shrink(this);

            return item;
          }
        },

        *[Symbol.iterator](this: QueueLike<T> & TProperties): Iterator<T> {
          const count = this[QueueLike_count];
          for (let i = 0; i < count; i++) {
            yield getValue(this, i);
          }
        },

        [QueueableLike_enqueue](
          this: TProperties & QueueLike<T>,
          item: T,
        ): boolean {
          const backpressureStrategy = this[QueueableLike_backpressureStrategy];
          const capacity = this[QueueableLike_capacity];
          const count = this[QueueLike_count];
          const isSorted = isSome(this[QueueMixin_comparator]);

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
      },
    ),
  );
})();

export default QueueMixin;
