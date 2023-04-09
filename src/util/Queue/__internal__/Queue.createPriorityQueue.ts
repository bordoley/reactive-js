import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { QueueCollectionLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import {
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../../../util.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";

const Queue_createPriorityQueue: <T>(
  comparator: Comparator<T>,
  capacity: number,
  backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
) => QueueCollectionLike<T> = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_priorityQueueMixin()))();

export default Queue_createPriorityQueue;
