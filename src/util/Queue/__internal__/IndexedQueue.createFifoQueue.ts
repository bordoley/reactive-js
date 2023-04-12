import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const IndexedQueue_createFifoQueue: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(IndexedQueue_fifoQueueMixin()))();

export default IndexedQueue_createFifoQueue;
