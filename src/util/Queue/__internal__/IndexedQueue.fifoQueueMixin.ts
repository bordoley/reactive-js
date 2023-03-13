import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import {
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueLike_head,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  Optional,
  newInstance,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_count,
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";

const IndexedQueue_fifoQueueMixin: <T>() => Mixin1<
  IndexedQueueLike<T>,
  number,
  Omit<
    IndexedQueueLike<T>,
    typeof QueueableLike_count | typeof QueueableLike_maxBufferSize
  >
> = /*@__PURE__*/ (<T>() => {
  const FifoQueue_head = Symbol("FifoQueue_head");
  const FifoQueue_tail = Symbol("FifoQueue_tail");
  const FifoQueue_capacityMask = Symbol("FifoQueue_capacityMask");
  const FifoQueue_values = Symbol("FifoQueue_values");

  type TProperties = {
    [QueueableLike_count]: number;
    readonly [QueueableLike_maxBufferSize]: number;
    [FifoQueue_head]: number;
    [FifoQueue_tail]: number;
    [FifoQueue_capacityMask]: number;
    [FifoQueue_values]: Optional<Optional<T>[]>;
  };

  const copyArray = (
    src: ReadonlyArray<Optional<T>>,
    head: number,
    tail: number,
    size: number,
  ) => {
    const capacity = src.length;

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

  return pipe(
    mix(
      function FifoQueue(
        instance: Omit<
          IndexedQueueLike<T>,
          typeof QueueableLike_count | typeof QueueableLike_maxBufferSize
        > &
          Mutable<TProperties>,
        maxBufferSize: number,
      ): IndexedQueueLike<T> {
        instance[QueueableLike_maxBufferSize] = maxBufferSize;
        return instance;
      },
      props<TProperties>({
        [QueueableLike_count]: 0,
        [QueueableLike_maxBufferSize]: MAX_SAFE_INTEGER,
        [FifoQueue_head]: 0,
        [FifoQueue_tail]: 0,
        [FifoQueue_capacityMask]: 0,
        [FifoQueue_values]: none,
      }),
      {
        [IndexedQueueLike_get](
          this: TProperties & QueueableLike,
          index: number,
        ): T {
          const count = this[QueueableLike_count];
          const capacity = this[FifoQueue_values]?.length ?? 0;
          const head = this[FifoQueue_head];
          const values = this[FifoQueue_values] ?? [];

          const headOffsetIndex = index + head;
          const tailOffsetIndex = headOffsetIndex - capacity;

          return index < 0 || index >= count
            ? raiseWithDebugMessage("index out of range")
            : headOffsetIndex < capacity
            ? (values[headOffsetIndex] as T)
            : (values[tailOffsetIndex] as T);
        },
        get [QueueLike_head]() {
          unsafeCast<TProperties>(this);
          const head = this[FifoQueue_head];
          const values = this[FifoQueue_values] ?? [];

          return head === this[FifoQueue_tail] ? none : values[head];
        },
        [QueueLike_pull](this: TProperties & QueueableLike) {
          const tail = this[FifoQueue_tail];
          const values = this[FifoQueue_values] ?? [];
          const capacity = values.length;

          let head = this[FifoQueue_head];

          const item = head === tail ? none : values[head];

          if (head !== tail) {
            values[head] = none;
            head = (head + 1) & this[FifoQueue_capacityMask];
            this[FifoQueue_head] = head;
            this[QueueableLike_count]--;
          }

          const count = this[QueueableLike_count];
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
        [QueueableLike_push](this: TProperties & QueueableLike, item: T) {
          const values =
            this[FifoQueue_values] ??
            ((this[FifoQueue_capacityMask] = 31),
            (this[FifoQueue_values] = newInstance<Array<Optional<T>>, number>(
              Array,
              32,
            )),
            this[FifoQueue_values]);

          const capacityMask = this[FifoQueue_capacityMask];
          const head = this[FifoQueue_head];

          const capacity = values.length;

          let count = this[QueueableLike_count];
          let tail = this[FifoQueue_tail];

          values[tail] = item;
          count++;
          this[QueueableLike_count] = count;

          tail = (tail + 1) & capacityMask;
          this[FifoQueue_tail] = tail;

          if (tail === head) {
            // growArray
            if (head !== 0) {
              const newCapacity = capacity << 1;
              const newList = copyArray(values, head, tail, newCapacity);

              this[FifoQueue_values] = newList;
              this[FifoQueue_head] = 0;
            } else {
              // double the queue length.
              this[FifoQueue_values].length <<= 1;
            }

            this[FifoQueue_tail] = count;
            this[FifoQueue_capacityMask] = (capacityMask << 1) | 1;
          }
        },
      },
    ),
    returns,
  );
})();

export default IndexedQueue_fifoQueueMixin;
