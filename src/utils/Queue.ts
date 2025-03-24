import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { Comparator, Optional } from "../functions.js";
import {
  BackpressureStrategy,
  DropOldestBackpressureStrategy,
  QueueLike,
} from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        capacity?: number;
        comparator?: Comparator<T>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
  ))();

export const create = <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}): QueueLike<T> =>
  createInternal({
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
  });

export const createSorted = <T>(comparator: Comparator<T>): QueueLike<T> =>
  createInternal({
    comparator,
  });

export const createDropOldest = <T>(capacity: number): QueueLike<T> =>
  createInternal<T>({
    backpressureStrategy: DropOldestBackpressureStrategy,
    capacity,
  });
