import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { floor } from "../../../__internal__/math.js";
import { Mixin2, Mutable, mix, props } from "../../../__internal__/mixins.js";
import {
  QueueLike,
  QueueLike_count,
  QueueLike_head,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import {
  Comparator,
  isSome,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  QueueableLike_maxBufferSize,
  QueueableLike_push,
} from "../../../util.js";

const computeParentIndex = (index: number) => floor((index - 1) / 2);

const PriorityQueueImpl_comparator = Symbol("PriorityQueueImpl_comparator");
const PriorityQueueImpl_values = Symbol("PriorityQueueImpl_values");

const Queue_priorityQueueMixin: <T>() => Mixin2<
  QueueLike<T>,
  Comparator<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [QueueableLike_maxBufferSize]: number;
    readonly [PriorityQueueImpl_values]: T[];
    readonly [PriorityQueueImpl_comparator]: Comparator<T>;
  };

  const siftDown = (queue: TProperties, item: T) => {
    const {
      [PriorityQueueImpl_values]: values,
      [PriorityQueueImpl_comparator]: compare,
    } = queue;
    const length = ReadonlyArray_getLength(values);

    for (let index = 0; index < length; ) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      const left = values[leftIndex];
      const right = values[rightIndex];

      if (isSome(left) && compare(left, item) < 0) {
        if (isSome(right) && compare(right, left) < 0) {
          values[index] = right;
          values[rightIndex] = item;
          index = rightIndex;
        } else {
          values[index] = left;
          values[leftIndex] = item;
          index = leftIndex;
        }
      } else if (isSome(right) && compare(right, item) < 0) {
        values[index] = right;
        values[rightIndex] = item;
        index = rightIndex;
      } else {
        break;
      }
    }
  };

  const siftUp = (queue: TProperties, item: T) => {
    const {
      [PriorityQueueImpl_values]: values,
      [PriorityQueueImpl_comparator]: compare,
    } = queue;

    for (
      let index = ReadonlyArray_getLength(values) - 1,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex];
      isSome(parent) && compare(parent, item) > 0;
      index = parentIndex,
        parentIndex = computeParentIndex(index),
        parent = values[parentIndex]
    ) {
      values[parentIndex] = item;
      values[index] = parent;
    }
  };

  return pipe(
    mix(
      function PriorityQueue(
        instance: Pick<
          QueueLike<T>,
          | typeof QueueLike_count
          | typeof QueueLike_head
          | typeof QueueLike_pull
          | typeof QueueableLike_push
        > &
          Mutable<TProperties>,
        comparator: Comparator<T>,
        maxBufferSize: number,
      ): QueueLike<T> {
        instance[QueueableLike_maxBufferSize] = maxBufferSize;
        instance[PriorityQueueImpl_values] = [];
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
      },
      props<TProperties>({
        [QueueableLike_maxBufferSize]: MAX_SAFE_INTEGER,
        [PriorityQueueImpl_values]: none,
        [PriorityQueueImpl_comparator]: none,
      }),
      {
        get [QueueLike_count](): number {
          unsafeCast<TProperties>(this);
          return ReadonlyArray_getLength(this[PriorityQueueImpl_values]);
        },
        get [QueueLike_head]() {
          unsafeCast<TProperties>(this);
          return this[PriorityQueueImpl_values][0];
        },
        [QueueLike_pull](this: TProperties) {
          const { [PriorityQueueImpl_values]: values } = this;
          const length = ReadonlyArray_getLength(values);
          if (length === 0) {
            return none;
          } else if (length === 1) {
            return values.shift();
          } else {
            const first = values[0];
            const last = values.pop() as T;
            values[0] = last;

            siftDown(this, last);

            return first;
          }
        },
        [QueueableLike_push](
          this: TProperties & QueueLike<T>,
          item: T,
        ): boolean {
          this[PriorityQueueImpl_values].push(item);
          siftUp(this, item);

          return this[QueueLike_count] <= this[QueueableLike_maxBufferSize];
        },
      },
    ),
    returns,
  );
})();

export default Queue_priorityQueueMixin;
