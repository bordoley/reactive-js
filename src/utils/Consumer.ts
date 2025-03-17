import { MAX_SAFE_INTEGER } from "../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../__internal__/mixins.js";
import { IterableLike } from "../computations.js";
import { Comparator, Optional } from "../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  DropOldestBackpressureStrategy,
  QueueLike,
  SinkLike_isCompleted,
} from "../utils.js";
import DisposableMixin from "./__mixins__/DisposableMixin.js";
import QueueingConsumerMixin from "./__mixins__/QueueingConsumerMixin.js";

const createInternal: <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  comparator?: Comparator<T>;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  const createQueue = mixInstanceFactory(
    include(DisposableMixin, QueueingConsumerMixin()),
    function ConsumerQueue(
      this: unknown,
      options: Optional<{
        autoDispose?: boolean;
        capacity?: number;
        comparator?: Comparator<T>;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerLike<T> & QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueingConsumerMixin<T>(), this, options);

      return this;
    },
  );

  return (options?: {
    autoDispose?: boolean;
    capacity?: number;
    comparator?: Comparator<T>;
    backpressureStrategy?: BackpressureStrategy;
  }) => createQueue(options);
})();

export const create = <T>(options?: {
  autoDispose?: boolean;
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}): ConsumerLike<T> & CollectionEnumeratorLike<T> =>
  createInternal({
    autoDispose: options?.autoDispose,
    capacity: options?.capacity,
    backpressureStrategy: options?.backpressureStrategy,
  });

export const createDropOldestWithoutBackpressure: <T>(
  capacity: number,
  options?: {
    autoDispose?: boolean;
  },
) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, QueueingConsumerMixin()),
    function ConsumerQueueDropOldestWithoutBackpressur(
      this: unknown,
      capacity: number,
      options: Optional<{
        autoDispose?: boolean;
      }>,
    ): ConsumerLike<T> & QueueLike<T> & IterableLike<T> {
      init(DisposableMixin, this);
      init(QueueingConsumerMixin<T>(), this, {
        autoDispose: options?.autoDispose,
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });

      return this;
    },
    props(),
    proto({
      get [ConsumerLike_isReady](): boolean {
        unsafeCast<ConsumerLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },

      get [ConsumerLike_capacity](): number {
        return MAX_SAFE_INTEGER;
      },
    }),
  ))();
