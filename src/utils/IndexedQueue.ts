import { createInstanceFactory } from "../__internal__/mixins.js";
import {
  IndexedQueueLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => IndexedQueueLike<T> = /*@__PURE__*/ (() => {
  const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());

  return <T>(options?: {
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  }) =>
    createIndexedQueue({
      [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
      [QueueableLike_capacity]: options?.capacity,
    }) as IndexedQueueLike<T>;
})();
