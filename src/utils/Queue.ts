import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import { Comparator, Optional } from "../functions.js";
import {
  BackpressureStrategy,
  DropOldestBackpressureStrategy,
  OverflowBackpressureStrategy,
  QueueLike,
  QueueableLike,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SinkLike_isCompleted,
} from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueMixin from "./__mixins__/QueueMixin.js";

const createInternal: <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => QueueLike<T> = /*@__PURE__*/ (<T>() => {
  const createQueue = mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      options: Optional<{
        autoDispose?: boolean;
        capacity?: number;
        comparator?: Comparator<T>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
  );

  return (options?: {
    autoDispose?: boolean;
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
    );
  };
})();

export const create = <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}): QueueLike<T> =>
  createInternal({
    autoDispose: options?.autoDispose,
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
  });

export const createSorted = <T>(
  comparator: Comparator<T>,
  options?: {
    autoDispose?: boolean;
  },
): QueueLike<T> =>
  createInternal({
    autoDispose: options?.autoDispose,
    capacity: MAX_SAFE_INTEGER,
    backpressureStrategy: OverflowBackpressureStrategy,
    comparator,
  });

export const createDropOldestWithoutBackpressure: <T>(
  capacity: number,
  options?: {
    autoDispose?: boolean;
  },
) => QueueLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function Queue(
      this: unknown,
      capacity: number,
      options: Optional<{
        autoDispose?: boolean;
      }>,
    ): QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });

      return this;
    },
    props(),
    proto({
      get [QueueableLike_isReady](): boolean {
        unsafeCast<QueueableLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },

      get [QueueableLike_capacity](): number {
        return MAX_SAFE_INTEGER;
      },
    }),
  ))();
