import { IndexedQueueLike } from "../../../__internal__/core.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../core.js";
import Queue_indexedQueueMixin from "./Queue.indexedQueueMixin.js";

const Queue_createIndexedQueue: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_indexedQueueMixin()))();

export default Queue_createIndexedQueue;
