import { floor } from "../../../__internal__/math.js";
import { Mixin1, Mutable, mix, props } from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import {
  Comparator,
  isSome,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import { QueueLike_count, QueueLike_push } from "../../../util.js";
import {
  PullableQueueLike,
  PullableQueueLike_head,
  PullableQueueLike_pull,
} from "../../__internal__/util.internal.js";

const computeParentIndex = (index: number) => floor((index - 1) / 2);

const PriorityQueueImpl_comparator = Symbol("PriorityQueueImpl_comparator");
const PriorityQueueImpl_values = Symbol("PriorityQueueImpl_values");

const PullableQueue_priorityQueueMixin: <T>() => Mixin1<
  PullableQueueLike<T>,
  Comparator<T>
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
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
          PullableQueueLike<T>,
          | typeof QueueLike_count
          | typeof PullableQueueLike_head
          | typeof PullableQueueLike_pull
          | typeof QueueLike_push
        > &
          Mutable<TProperties>,
        comparator: Comparator<T>,
      ): PullableQueueLike<T> {
        instance[PriorityQueueImpl_values] = [];
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
      },
      props<TProperties>({
        [PriorityQueueImpl_values]: none,
        [PriorityQueueImpl_comparator]: none,
      }),
      {
        get [QueueLike_count](): number {
          unsafeCast<TProperties>(this);
          return ReadonlyArray_getLength(this[PriorityQueueImpl_values]);
        },
        get [PullableQueueLike_head]() {
          unsafeCast<TProperties>(this);
          return this[PriorityQueueImpl_values][0];
        },
        [PullableQueueLike_pull](this: TProperties) {
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
        [QueueLike_push](this: TProperties, item: T) {
          this[PriorityQueueImpl_values].push(item);
          siftUp(this, item);
        },
      },
    ),
    returns,
  );
})();

export default PullableQueue_priorityQueueMixin;
