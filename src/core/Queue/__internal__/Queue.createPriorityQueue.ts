import { QueueCollectionLike } from "../../../__internal__/core.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../core.js";
import { Comparator } from "../../../functions.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";

const Queue_createPriorityQueue: <T>(
  comparator: Comparator<T>,
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => QueueCollectionLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_priorityQueueMixin()))();

export default Queue_createPriorityQueue;
