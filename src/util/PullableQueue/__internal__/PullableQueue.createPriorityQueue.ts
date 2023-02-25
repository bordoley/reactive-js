import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Comparator } from "../../../functions.js";
import { PullableQueueLike } from "../../__internal__/util.internal.js";
import PullableQueue_priorityQueueMixin from "./PullableQueue.priorityQueueMixin.js";

const PullableQueue_createPriorityQueue = /*@__PURE__*/ (() =>
  createInstanceFactory(PullableQueue_priorityQueueMixin()) as <T>(
    comparator: Comparator<T>,
  ) => PullableQueueLike<T>)();

export default PullableQueue_createPriorityQueue;
