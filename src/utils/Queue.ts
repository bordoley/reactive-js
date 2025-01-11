import { createInstanceFactory } from "../__internal__/mixins.js";
import { Comparator, isSome } from "../functions.js";
import {
  BackpressureStrategy,
  QueueLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T> = /*@__PURE__*/ (() => {
  const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());
  const createPriorityQueue = createInstanceFactory(PriorityQueueMixin());

  return <T>(options?: {
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }) => {
    const { comparator } = options ?? {};
    return isSome(comparator)
      ? (createPriorityQueue(comparator as Comparator<unknown>, {
          [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
          [QueueableLike_capacity]: options?.capacity,
        }) as QueueLike<T>)
      : (createIndexedQueue({
          [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
          [QueueableLike_capacity]: options?.capacity,
        }) as QueueLike<T>);
  };
})();
