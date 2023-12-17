import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import { createInstanceFactory } from "../__internal__/mixins.js";
import { Comparator } from "../functions.js";
import {
  QueueCollectionLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
} from "../utils.js";
import PriorityQueueMixin from "./__mixins__/PriorityQueueMixin.js";

export const create: <T>(
  comparator: Comparator<T>,
  options?: {
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
  },
) => QueueCollectionLike<T> = /*@__PURE__*/ (() => {
  const createPriorityQueue = createInstanceFactory(PriorityQueueMixin());

  return <T>(
    comparator: Comparator<T>,
    options?: {
      capacity?: number;
      backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    },
  ) =>
    createPriorityQueue(
      comparator as Comparator<unknown>,
      options?.capacity ?? MAX_SAFE_INTEGER,
      options?.backpressureStrategy ?? "overflow",
    ) as QueueCollectionLike<T>;
})();
