import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../__internal__/util.internal.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const IndexedQueue_createFifoQueue: <T>() => IndexedQueueLike<T> =
  /*@__PURE__*/ (() => createInstanceFactory(IndexedQueue_fifoQueueMixin()))();

export default IndexedQueue_createFifoQueue;
