import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import {
  include,
  init,
  mixInstanceFactory,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Function1, Optional, none } from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike,
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
  QueueableLike_capacity,
  QueueableLike_isReady,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import ObserverMixin, {
  ObserverMixinLike,
  ObserverMixinLike_complete,
  ObserverMixinLike_consumer,
  ObserverMixinLike_notify,
} from "../__mixins__/ObserverMixin.js";
import QueueMixin from "../__mixins__/QueueMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    SinkLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
  >;

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function ConsumerQueue(
      this: TPrototype,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerLike<T> & QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, options);

      return this;
    },
    props(),
    proto<TPrototype>({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: QueueLike<T>, item: T) {
        if (!this[DisposableLike_isDisposed]) {
          this[QueueLike_enqueue](item);
        }
      },

      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );
})();

export const createDelegatingNotifyOnlyNonCompletingNonDisposing: <T>(
  o: ConsumerLike<T>,
) => ConsumerLike<T> = /*@__PURE__*/ (<T>() =>
  mixInstanceFactory(
    include(DisposableMixin, DelegatingConsumerMixin()),
    function NonDisposingDelegatingConsumer(
      this: unknown,
      delegate: ConsumerLike<T>,
    ): ConsumerLike<T> {
      init(DisposableMixin, this);
      init(DelegatingConsumerMixin(), this, delegate);

      return this;
    },
    props(),
    proto({
      get [SinkLike_isCompleted]() {
        unsafeCast<ConsumerLike<T>>(this);
        return this[DisposableLike_isDisposed];
      },

      [SinkLike_complete](this: ConsumerLike<T>) {
        this[DisposableLike_dispose]();
      },
    }),
  ))();

export const createDropOldestWithoutBackpressure: <T>(
  capacity: number,
) => ConsumerLike<T> & CollectionEnumeratorLike<T> = /*@__PURE__*/ (<T>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
    | typeof QueueableLike_isReady
    | typeof QueueableLike_capacity
  >;

  return mixInstanceFactory(
    include(DisposableMixin, QueueMixin()),
    function ConsumerQueueDropOldestWithoutBackpressur(
      this: TPrototype,
      capacity: number,
    ): ConsumerLike<T> & QueueLike<T> {
      init(DisposableMixin, this);
      init(QueueMixin<T>(), this, {
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });
      return this;
    },
    props(),
    proto<TPrototype>({
      get [QueueableLike_isReady](): boolean {
        unsafeCast<ConsumerLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },

      get [QueueableLike_capacity](): number {
        return MAX_SAFE_INTEGER;
      },

      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: QueueLike<T>, item: T) {
        if (!this[DisposableLike_isDisposed]) {
          this[QueueLike_enqueue](item);
        }
      },

      [SinkLike_complete](this: DisposableLike) {
        this[DisposableLike_dispose]();
      },
    }),
  );
})();

export const toObserver: <T>(
  scheduler: SchedulerLike,
) => Function1<ConsumerLike<T>, ObserverLike<T>> = /*@__PURE__*/ (<T>() => {
  const createConsumerToObserver = mixInstanceFactory(
    include(DelegatingDisposableMixin, ObserverMixin()),
    function ConsumerToObserver(
      this: unknown,
      scheduler: SchedulerLike,
      consumer: ConsumerLike<T>,
    ): ObserverLike<T> {
      init(DelegatingDisposableMixin, this, consumer);
      init(
        ObserverMixin<ConsumerLike<T>, T>(),
        this,
        consumer,
        scheduler,
        none,
      );

      return this;
    },
    props(),
    proto({
      [ObserverMixinLike_notify](
        this: ObserverMixinLike<ConsumerLike<T>, T>,
        next: T,
      ) {
        this[ObserverMixinLike_consumer][EventListenerLike_notify](next);
      },

      [ObserverMixinLike_complete](
        this: ObserverMixinLike<ConsumerLike<T>, T>,
      ) {
        this[ObserverMixinLike_consumer][SinkLike_complete]();
      },
    }),
  );

  return (scheduler: SchedulerLike) => (consumer: ConsumerLike<T>) =>
    createConsumerToObserver(scheduler, consumer);
})();
