import { floor } from "../../../__internal__/math.js";
import {
  Mixin2,
  Mutable,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { PriorityQueueImpl_comparator } from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  IndexedQueueLike_get,
  IndexedQueueLike_pop,
  IndexedQueueLike_set,
  QueueLike,
  QueueLike_count,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  Comparator,
  Optional,
  call,
  none,
  pipe,
  returns,
} from "../../../functions.js";
import { QueueableLike_push } from "../../../util.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const Queue_priorityQueueMixin: <T>() => Mixin2<
  QueueLike<T>,
  Comparator<T>,
  number
> = /*@__PURE__*/ (<T>() => {
  const IndexedQueuePrototype = getPrototype(IndexedQueue_fifoQueueMixin());

  type TProperties = {
    readonly [PriorityQueueImpl_comparator]: Comparator<T>;
  };

  const siftDown = (queue: TProperties & IndexedQueueLike<T>, item: T) => {
    const compare = queue[PriorityQueueImpl_comparator];
    const count = queue[QueueLike_count];

    for (let index = 0; index < count; ) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      const hasLeft = leftIndex >= 0 && leftIndex < count;
      const hasRight = rightIndex >= 0 && rightIndex < count;

      const left = hasLeft ? queue[IndexedQueueLike_get](leftIndex) : none;
      const right = hasRight ? queue[IndexedQueueLike_get](rightIndex) : none;

      if (hasLeft && compare(left as T, item) < 0) {
        if (hasRight && compare(right as T, left as T) < 0) {
          queue[IndexedQueueLike_set](index, right as T);
          queue[IndexedQueueLike_set](rightIndex, item);
          index = rightIndex;
        } else {
          queue[IndexedQueueLike_set](index, left as T);
          queue[IndexedQueueLike_set](leftIndex, item);
          index = leftIndex;
        }
      } else if (hasRight && compare(right as T, item) < 0) {
        queue[IndexedQueueLike_set](index, right as T);
        queue[IndexedQueueLike_set](rightIndex, item);
        index = rightIndex;
      } else {
        break;
      }
    }
  };

  const siftUp = (queue: TProperties & IndexedQueueLike<T>, item: T) => {
    const compare = queue[PriorityQueueImpl_comparator];
    const count = queue[QueueLike_count];

    for (
      let index = count - 1, parentIndex = floor((index - 1) / 2);
      parentIndex >= 0 &&
      parentIndex <= count &&
      compare(queue[IndexedQueueLike_get](parentIndex), item) > 0;
      index = parentIndex, parentIndex = floor((index - 1) / 2)
    ) {
      const parent = queue[IndexedQueueLike_get](parentIndex);
      queue[IndexedQueueLike_set](parentIndex, item);
      queue[IndexedQueueLike_set](index, parent);
    }
  };

  return pipe(
    mix(
      include(IndexedQueue_fifoQueueMixin<T>()),
      function PriorityQueue(
        instance: Pick<
          QueueLike<T>,
          typeof QueueLike_pull | typeof QueueableLike_push
        > &
          Mutable<TProperties>,
        comparator: Comparator<T>,
        maxBufferSize: number,
      ): QueueLike<T> {
        init(IndexedQueue_fifoQueueMixin<T>(), instance, maxBufferSize);
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
      },
      props<TProperties>({
        [PriorityQueueImpl_comparator]: none,
      }),
      {
        [QueueLike_pull](this: TProperties & IndexedQueueLike<T>): Optional<T> {
          const count = this[QueueLike_count];

          if (count === 0) {
            return none;
          } else if (count === 1) {
            return call(
              IndexedQueuePrototype[QueueLike_pull],
              this,
            ) as Optional<T>;
          } else {
            const first = this[IndexedQueueLike_get](0);
            const last = this[IndexedQueueLike_pop]() as T;
            this[IndexedQueueLike_set](0, last);

            siftDown(this, last);

            return first;
          }
        },

        [QueueableLike_push](
          this: TProperties & IndexedQueueLike<T>,
          item: T,
        ): boolean {
          const result = call(
            IndexedQueuePrototype[QueueableLike_push],
            this,
            item,
          );
          siftUp(this, item);
          return result;
        },
      },
    ),
    returns,
  );
})();

export default Queue_priorityQueueMixin;
