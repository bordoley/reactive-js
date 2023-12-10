import { createInstanceFactory } from "../__internal__/mixins.js";
import {
  IndexedQueueLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import IndexedQueueMixin from "./__mixins__/IndexedQueueMixin.js";

export const create: <T>(
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => IndexedQueueLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(IndexedQueueMixin()))();
