import { createInstanceFactory } from "../__internal__/mixins.js";
import { Comparator } from "../functions.js";
import {
  BackpressureStrategy,
  QueueLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
} from "../utils.js";
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
    const { comparator } = options ?? {};
    return createQueue(comparator as Comparator<unknown>, {
      [QueueableLike_backpressureStrategy]: options?.backpressureStrategy,
      [QueueableLike_capacity]: options?.capacity,
    }) as QueueLike<T>;
  };
})();
