import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const IndexedQueue_createFifoQueue: <T>(options?: {
  capacity: number;
}) => IndexedQueueLike<T> = /*@__PURE__*/ (() => {
  const factory: <T>(capacity: number) => IndexedQueueLike<T> =
    createInstanceFactory(IndexedQueue_fifoQueueMixin());

  return options => {
    const capacity = options?.capacity ?? MAX_SAFE_INTEGER;
    return factory(capacity);
  };
})();

export default IndexedQueue_createFifoQueue;
