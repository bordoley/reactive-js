import { createInstanceFactory } from "../__internal__/mixins.js";
import { Function1 } from "../functions.js";
import {
  IndexedQueueLike,
  IndexedQueueLike_get,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_count,
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

export const toReadonlyArray =
  <T>(): Function1<IndexedQueueLike<T>, ReadonlyArray<T>> =>
  queue => {
    const count = queue[QueueableLike_count];
    const result: T[] = new Array(count);

    for (let i = 0; i < count; i++) {
      result[i] = queue[IndexedQueueLike_get](i);
    }
    return result;
  };
