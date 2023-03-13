import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { IndexedQueueLike } from "../../../__internal__/util.internal.js";
import IndexedQueue_fifoQueueMixin from "./IndexedQueue.fifoQueueMixin.js";

const IndexedQueue_createFifoQueue: <T>(options?: {
  maxBufferSize: number;
}) => IndexedQueueLike<T> = /*@__PURE__*/ (() => {
  const factory: <T>(maxBufferSize: number) => IndexedQueueLike<T> =
    createInstanceFactory(IndexedQueue_fifoQueueMixin());

  return options => {
    const maxBuffersize = max(options?.maxBufferSize ?? MAX_SAFE_INTEGER, 1);
    return factory(maxBuffersize);
  };
})();

export default IndexedQueue_createFifoQueue;
