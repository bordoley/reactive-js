import { floor } from "../../__internal__/math.js";
import {
  Mixin2,
  Mutable,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  Comparator,
  Optional,
  call,
  newInstance,
  none,
  pipe,
  raiseError,
  returns,
} from "../../functions.js";
import {
  BackPressureError,
  BackpressureStrategy,
  DropLatestBackpressureStrategy,
  DropOldestBackpressureStrategy,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
  ThrowBackpressureStrategy,
} from "../../utils.js";
import IndexedQueueMixin, {
  IndexedQueueLike,
  IndexedQueueLike_get,
  IndexedQueueLike_set,
  StackLike_pop,
} from "./IndexedQueueMixin.js";

const PriorityQueueMixin: <T>() => Mixin2<
  QueueLike<T>,
  Comparator<T>,
  Optional<{
    readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
    readonly [QueueableLike_capacity]?: number;
  }>
> = /*@__PURE__*/ (<T>() => {
  const IndexedQueuePrototype = getPrototype(IndexedQueueMixin());

  const PriorityQueueMixin_comparator = Symbol("PriorityQueueMixin_comparator");

  type TProperties = {
    readonly [PriorityQueueMixin_comparator]: Comparator<T>;
  };

  const siftDown = (queue: TProperties & IndexedQueueLike<T>, item: T) => {
    const compare = queue[PriorityQueueMixin_comparator];
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
    const compare = queue[PriorityQueueMixin_comparator];
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
      include(IndexedQueueMixin<T>()),
      function PriorityQueueMixin(
        instance: Pick<
          QueueLike<T>,
          typeof QueueLike_dequeue | typeof QueueableLike_enqueue
        > &
          Mutable<TProperties>,
        comparator: Comparator<T>,
        config?: {
          readonly [QueueableLike_backpressureStrategy]?: BackpressureStrategy;
          readonly [QueueableLike_capacity]?: number;
        },
      ): QueueLike<T> {
        init(IndexedQueueMixin<T>(), instance, config);
        instance[PriorityQueueMixin_comparator] = comparator;
        return instance;
      },
      props<TProperties>({
        [PriorityQueueMixin_comparator]: none,
      }),
      {
        [QueueLike_dequeue](
          this: TProperties & IndexedQueueLike<T>,
        ): Optional<T> {
          const count = this[QueueLike_count];

          if (count === 0) {
            return none;
          } else if (count === 1) {
            return call(
              IndexedQueuePrototype[QueueLike_dequeue],
              this,
            ) as Optional<T>;
          } else {
            const first = this[IndexedQueueLike_get](0);
            const last = this[StackLike_pop]() as T;
            this[IndexedQueueLike_set](0, last);

            siftDown(this, last);

            return first;
          }
        },

        [QueueableLike_enqueue](
          this: TProperties & IndexedQueueLike<T>,
          item: T,
        ): boolean {
          const backpressureStrategy = this[QueueableLike_backpressureStrategy];
          const count = this[QueueLike_count];
          const capacity = this[QueueableLike_capacity];

          if (
            backpressureStrategy === DropLatestBackpressureStrategy &&
            count >= capacity
          ) {
            return false;
          } else if (
            backpressureStrategy === DropOldestBackpressureStrategy &&
            count >= capacity
          ) {
            this[QueueLike_dequeue]();
          } else if (
            backpressureStrategy === ThrowBackpressureStrategy &&
            count >= capacity
          ) {
            raiseError(
              newInstance(BackPressureError, capacity, backpressureStrategy),
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

export default PriorityQueueMixin;
