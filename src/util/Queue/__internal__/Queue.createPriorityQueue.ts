import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";

const Queue_createPriorityQueue = /*@__PURE__*/ (() =>
  createInstanceFactory(Queue_priorityQueueMixin()) as <T>(
    comparator: Comparator<T>,
  ) => QueueLike<T>)();

export default Queue_createPriorityQueue;
