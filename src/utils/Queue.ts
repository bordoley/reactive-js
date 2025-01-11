import { createInstanceFactory } from "../__internal__/mixins.js";
import { Comparator, Optional } from "../functions.js";
import { BackpressureStrategy, QueueLike } from "../utils.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T> = /*@__PURE__*/ (() => {
  const createQueue = createInstanceFactory(QueueMixin());

  return <T>(options?: {
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }) => {
    return createQueue(
      options as Optional<{
        capacity?: number;
        comparator?: Comparator<unknown>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ) as QueueLike<T>;
  };
})();
