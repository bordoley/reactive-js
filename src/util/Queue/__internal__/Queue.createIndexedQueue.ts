import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Queue_indexedQueueMixin from "./Queue.indexedQueueMixin.js";

const Queue_createIndexedQueue: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_indexedQueueMixin()))();

export default Queue_createIndexedQueue;
