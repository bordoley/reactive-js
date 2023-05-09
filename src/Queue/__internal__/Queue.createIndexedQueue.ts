import { createInstanceFactory } from "../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../__internal__/types.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../types.js";
import Queue_indexedQueueMixin from "./Queue.indexedQueueMixin.js";

const Queue_createIndexedQueue: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_indexedQueueMixin()))();

export default Queue_createIndexedQueue;
