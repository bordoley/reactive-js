import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  IndexedQueueLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../utils.js";
import IndexedQueueMixin from "../../__mixins__/IndexedQueueMixin.js";

const Queue_createIndexedQueue: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(IndexedQueueMixin()))();

export default Queue_createIndexedQueue;
