import { include, init, mixInstanceFactory } from "../__internal__/mixins.js";
import { Comparator, Optional } from "../functions.js";
import {
  BackpressureStrategy,
  FlowControlQueueLike,
  QueueLike,
} from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import FlowControlQueueMixin from "./__mixins__/FlowControlQueueMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
  comparator?: Comparator<T>;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
        comparator?: Comparator<T>;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
  ))();

export const create = <T>(options?: {
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}): QueueLike<T> =>
  createInternal({
    backpressureStrategy: options?.backpressureStrategy,
    capacity: options?.capacity,
  });

export const createWithFlowControl: <T>(options?: {
  backpressureStrategy?: BackpressureStrategy;
  capacity?: number;
}) => FlowControlQueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, FlowControlQueueMixin()),
    function FlowControlQueue(
      this: unknown,
      options: Optional<{
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
      }>,
    ): FlowControlQueueLike<T> {
      init(DisposableMixin, this);
      init(FlowControlQueueMixin<T>(), this, options);

      return this;
    },
  ))();

export const createSorted = <T>(comparator: Comparator<T>): QueueLike<T> =>
  createInternal({
    comparator,
  });
