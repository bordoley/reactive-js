import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { max } from "../../../__internal__/math.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";

const Queue_createPriorityQueue: <T>(
  comparator: Comparator<T>,
  options?: {
    maxBufferSize: number;
  },
) => QueueLike<T> = /*@__PURE__*/ (() => {
  const factory: <T>(
    comparator: Comparator<T>,
    maxBufferSize: number,
  ) => QueueLike<T> = createInstanceFactory(Queue_priorityQueueMixin());

  return (comparator, options) => {
    const maxBuffersize = max(options?.maxBufferSize ?? MAX_SAFE_INTEGER, 1);
    return factory(comparator, maxBuffersize);
  };
})();

export default Queue_createPriorityQueue;
