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
  ConsumerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  DropOldestBackpressureStrategy,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike,
  FlowControllerLike_capacity,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  FlowControllerQueueLike_enqueue,
  ObserverLike,
  SchedulerLike,
  SinkLike,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import DelegatingConsumerMixin from "../__mixins__/DelegatingConsumerMixin.js";
import DelegatingDisposableMixin from "../__mixins__/DelegatingDisposableMixin.js";
import DisposableMixin from "../__mixins__/DisposableMixin.js";
import FlowControlledQueueMixin from "../__mixins__/FlowControlledQueueMixin.js";
import ObserverMixin, {
  ObserverMixinLike,
  ObserverMixinLike_complete,
  ObserverMixinLike_consumer,
  ObserverMixinLike_notify,
} from "../__mixins__/ObserverMixin.js";

export const create: <T>(options?: {
  capacity?: number;
  backpressureStrategy?: BackpressureStrategy;
}) => ConsumerLike<T> & FlowControllerEnumeratorLike<T> = /*@__PURE__*/ (<
  T,
>() => {
  type TPrototype = Pick<
    SinkLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
  >;

  return mixInstanceFactory(
    include(DisposableMixin, FlowControlledQueueMixin()),
    function ConsumerQueue(
      this: TPrototype,
      options: Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>,
    ): ConsumerLike<T> & FlowControllerQueueLike<T> {
      init(DisposableMixin, this);
      init(FlowControlledQueueMixin<T>(), this, options);

      return this;
    },
    props(),
    proto<TPrototype>({
      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: FlowControllerQueueLike<T>, item: T) {
        if (!this[DisposableLike_isDisposed]) {
          this[FlowControllerQueueLike_enqueue](item);
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
) => ConsumerLike<T> & FlowControllerEnumeratorLike<T> = /*@__PURE__*/ (<
  T,
>() => {
  type TPrototype = Pick<
    ConsumerLike<T>,
    | typeof EventListenerLike_notify
    | typeof SinkLike_complete
    | typeof SinkLike_isCompleted
    | typeof FlowControllerLike_isReady
    | typeof FlowControllerLike_capacity
  >;

  return mixInstanceFactory(
    include(DisposableMixin, FlowControlledQueueMixin()),
    function ConsumerQueueDropOldestWithoutBackpressur(
      this: TPrototype,
      capacity: number,
    ): ConsumerLike<T> & FlowControllerQueueLike<T> {
      init(DisposableMixin, this);
      init(FlowControlledQueueMixin<T>(), this, {
        backpressureStrategy: DropOldestBackpressureStrategy,
        capacity,
      });
      return this;
    },
    props(),
    proto<TPrototype>({
      get [FlowControllerLike_isReady](): boolean {
        unsafeCast<ConsumerLike<T>>(this);
        const isCompleted = this[SinkLike_isCompleted];

        return !isCompleted;
      },

      get [FlowControllerLike_capacity](): number {
        return MAX_SAFE_INTEGER;
      },

      get [SinkLike_isCompleted]() {
        unsafeCast<DisposableLike>(this);
        return this[DisposableLike_isDisposed];
      },

      [EventListenerLike_notify](this: FlowControllerQueueLike<T>, item: T) {
        if (!this[DisposableLike_isDisposed]) {
          this[FlowControllerQueueLike_enqueue](item);
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
