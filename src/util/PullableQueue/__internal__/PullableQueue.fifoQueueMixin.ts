import { Mixin, Mutable, mix, props } from "../../../__internal__/mixins.js";
import {
  Optional,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import { QueueLike, QueueLike_count, QueueLike_push } from "../../../util.js";
import {
  PullableQueueLike,
  PullableQueueLike_peek,
  PullableQueueLike_pull,
} from "../../__internal__/util.internal.js";

const PullableQueue_fifoQueueMixin: <T>() => Mixin<
  PullableQueueLike<T>,
  PullableQueueLike<T>
> = /*@__PURE__*/ (<T>() => {
  const FifoQueue_head = Symbol("FifoQueue_head");
  const FifoQueue_tail = Symbol("FifoQueue_tail");
  const FifoQueue_capacityMask = Symbol("FifoQueue_capacityMask");
  const FifoQueue_values = Symbol("FifoQueue_values");

  type TProperties = {
    [FifoQueue_head]: number;
    [FifoQueue_tail]: number;
    [FifoQueue_capacityMask]: number;
    [FifoQueue_values]: Optional<T>[];
  };

  const copyArray = (
    src: ReadonlyArray<unknown>,
    head: number,
    tail: number,
    size: number,
  ) => {
    const capacity = src.length;

    const dest = new Array(size);
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
        instance: PullableQueueLike<T> & Mutable<TProperties>,
      ): PullableQueueLike<T> {
        instance[FifoQueue_head] = 0;
        instance[FifoQueue_tail] = 0;

        instance[FifoQueue_values] = new Array(4);
        instance[FifoQueue_capacityMask] = 0x3;

        return instance;
      },
      props<TProperties>({
        [FifoQueue_head]: 0,
        [FifoQueue_tail]: 0,
        [FifoQueue_capacityMask]: 0,
        [FifoQueue_values]: none,
      }),
      {
        get [QueueLike_count](): number {
          unsafeCast<TProperties>(this);
          const head = this[FifoQueue_head];
          const tail = this[FifoQueue_tail];
          const capacityMask = this[FifoQueue_capacityMask];

          const count = tail - head;
          return count >= 0 ? count : capacityMask + 1 + count;
        },
        [PullableQueueLike_peek](this: TProperties) {
          const head = this[FifoQueue_head];
          return head === this[FifoQueue_tail]
            ? none
            : this[FifoQueue_values][head];
        },
        [PullableQueueLike_pull](this: TProperties & QueueLike) {
          const tail = this[FifoQueue_tail];
          let head = this[FifoQueue_head];

          if (head === tail) {
            return none;
          } else {
            const values = this[FifoQueue_values];
            const capacity = values.length;

            const item = values[head];
            values[head] = none;
            head = (head + 1) & this[FifoQueue_capacityMask];
            this[FifoQueue_head] = head;

            const count = this[QueueLike_count];

            if (count < capacity / 4 && capacity > 4) {
              const newCapacity = capacity >> 1;
              const newList = copyArray(values, head, tail, newCapacity);

              this[FifoQueue_values] = newList;
              this[FifoQueue_head] = 0;
              this[FifoQueue_tail] = count;
              this[FifoQueue_capacityMask] = newCapacity - 1;
            }

            return item;
          }
        },
        [QueueLike_push](this: TProperties & QueueLike, item: T) {
          const capacityMask = this[FifoQueue_capacityMask];
          const head = this[FifoQueue_head];
          const values = this[FifoQueue_values];
          const capacity = values.length;

          let count = this[QueueLike_count];
          let tail = this[FifoQueue_tail];

          values[tail] = item;
          count++;
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

export default PullableQueue_fifoQueueMixin;
