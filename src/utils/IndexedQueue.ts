import { createInstanceFactory } from "../__internal__/mixins.js";
import {
  BackpressureStrategy,
  IndexedQueueLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => IndexedQueueLike<T> = /*@__PURE__*/ (() => {
  const createIndexedQueue = createInstanceFactory(IndexedQueueMixin());

  return <T>(options?: {
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }) =>
    createIndexedQueue({
      [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
      [QueueableLike_capacity]: options?.capacity,
    }) as IndexedQueueLike<T>;
})();
