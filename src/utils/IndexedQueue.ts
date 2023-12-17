import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { createInstanceFactory } from "../__internal__/mixins.js";
import {
  IndexedQueueLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
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
    createIndexedQueue(
      options?.capacity ?? MAX_SAFE_INTEGER,
      options?.backpressureStrategy ?? "overflow",
    ) as IndexedQueueLike<T>;
})();
