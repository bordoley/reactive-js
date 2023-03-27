import { MAX_SAFE_INTEGER } from "../../../__internal__/constants.js";
import { createInstanceFactory } from "../../../__internal__/mixins.js";
import { QueueLike } from "../../../__internal__/util.internal.js";
import { Comparator } from "../../../functions.js";
import Queue_priorityQueueMixin from "./Queue.priorityQueueMixin.js";

const Queue_createPriorityQueue: <T>(
  comparator: Comparator<T>,
  options?: {
    capacity: number;
  },
) => QueueLike<T> = /*@__PURE__*/ (() => {
  const factory: <T>(
    comparator: Comparator<T>,
    capacity: number,
  ) => QueueLike<T> = createInstanceFactory(Queue_priorityQueueMixin());

  return (comparator, options) => {
    const capacity = options?.capacity ?? MAX_SAFE_INTEGER;
    return factory(comparator, capacity);
  };
})();

export default Queue_createPriorityQueue;
