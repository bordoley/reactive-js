import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { Comparator } from "../../../functions.js";
import { PullableQueueLike } from "../../__internal__/util.internal.js";
import PullableQueue_fifoQueueMixin from "./PullableQueue.fifoQueueMixin.js";

const PullableQueue_createFifoQueue = /*@__PURE__*/ (() =>
  createInstanceFactory(PullableQueue_fifoQueueMixin()) as <T>(
    comparator: Comparator<T>,
  ) => PullableQueueLike<T>)();

export default PullableQueue_createFifoQueue;
