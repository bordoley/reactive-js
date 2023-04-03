import { floor } from "../../../__internal__/math.js";
import {
  Mixin3,
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
  MutableIndexedLike_set,
  QueueLike,
  QueueLike_dequeue,
  StackLike_pop,
} from "../../../__internal__/util.internal.js";
import {
  Comparator,
  Optional,
  call,
  none,
  pipe,
  raiseWithDebugMessage,
  returns,
} from "../../../functions.js";
import {
  CollectionLike_count,
  IndexedLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  BufferLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const Queue_priorityQueueMixin: <T>() => Mixin3<
  QueueLike<T>,
  Comparator<T>,
  number,
  QueueableLike[typeof QueueableLike_backpressureStrategy]
> = /*@__PURE__*/ (<T>() => {
  const IndexedQueuePrototype = getPrototype(IndexedQueue_fifoQueueMixin());

  type TProperties = {
    readonly [PriorityQueueImpl_comparator]: Comparator<T>;
  };

  const siftDown = (queue: TProperties & IndexedQueueLike<T>, item: T) => {
    const compare = queue[PriorityQueueImpl_comparator];
    const count = queue[CollectionLike_count];

    for (let index = 0; index < count; ) {
      const leftIndex = (index + 1) * 2 - 1;
      const rightIndex = leftIndex + 1;

      const hasLeft = leftIndex >= 0 && leftIndex < count;
      const hasRight = rightIndex >= 0 && rightIndex < count;

      const left = hasLeft ? queue[IndexedLike_get](leftIndex) : none;
      const right = hasRight ? queue[IndexedLike_get](rightIndex) : none;

      if (hasLeft && compare(left as T, item) < 0) {
        if (hasRight && compare(right as T, left as T) < 0) {
          queue[MutableIndexedLike_set](index, right as T);
          queue[MutableIndexedLike_set](rightIndex, item);
          index = rightIndex;
        } else {
          queue[MutableIndexedLike_set](index, left as T);
          queue[MutableIndexedLike_set](leftIndex, item);
          index = leftIndex;
        }
      } else if (hasRight && compare(right as T, item) < 0) {
        queue[MutableIndexedLike_set](index, right as T);
        queue[MutableIndexedLike_set](rightIndex, item);
        index = rightIndex;
      } else {
        break;
      }
    }
  };

  const siftUp = (queue: TProperties & IndexedQueueLike<T>, item: T) => {
    const compare = queue[PriorityQueueImpl_comparator];
    const count = queue[CollectionLike_count];

    for (
      let index = count - 1, parentIndex = floor((index - 1) / 2);
      parentIndex >= 0 &&
      parentIndex <= count &&
      compare(queue[IndexedLike_get](parentIndex), item) > 0;
      index = parentIndex, parentIndex = floor((index - 1) / 2)
    ) {
      const parent = queue[IndexedLike_get](parentIndex);
      queue[MutableIndexedLike_set](parentIndex, item);
      queue[MutableIndexedLike_set](index, parent);
    }
  };

  return pipe(
    mix(
      include(IndexedQueue_fifoQueueMixin<T>()),
      function PriorityQueue(
        instance: Pick<
          QueueLike<T>,
          typeof QueueLike_dequeue | typeof QueueableLike_enqueue
        > &
          Mutable<TProperties>,
        comparator: Comparator<T>,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): QueueLike<T> {
        init(
          IndexedQueue_fifoQueueMixin<T>(),
          instance,
          capacity,
          backpressureStrategy,
        );
        instance[PriorityQueueImpl_comparator] = comparator;
        return instance;
      },
      props<TProperties>({
        [PriorityQueueImpl_comparator]: none,
      }),
      {
        [QueueLike_dequeue](
          this: TProperties & IndexedQueueLike<T>,
        ): Optional<T> {
          const count = this[CollectionLike_count];

          if (count === 0) {
            return none;
          } else if (count === 1) {
            return call(
              IndexedQueuePrototype[QueueLike_dequeue],
              this,
            ) as Optional<T>;
          } else {
            const first = this[IndexedLike_get](0);
            const last = this[StackLike_pop]() as T;
            this[MutableIndexedLike_set](0, last);

            siftDown(this, last);

            return first;
          }
        },

        [QueueableLike_enqueue](
          this: TProperties & IndexedQueueLike<T>,
          item: T,
        ): boolean {
          const backpressureStrategy = this[QueueableLike_backpressureStrategy];
          const count = this[CollectionLike_count];
          const capacity = this[BufferLike_capacity];

          if (backpressureStrategy === "drop-latest" && count >= capacity) {
            return false;
          } else if (
            backpressureStrategy === "drop-oldest" &&
            count >= capacity
          ) {
            this[QueueLike_dequeue]();
          } else if (backpressureStrategy === "throw" && count >= capacity) {
            raiseWithDebugMessage(
              "attempting to enqueue a value to a queue that is full",
            );
          }

          const result = call(
            IndexedQueuePrototype[QueueableLike_enqueue],
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
