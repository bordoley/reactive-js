import {
  Mixin3,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { Optional, bind, call, none, pipe, returns } from "../../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  FlowControllerEnumeratorLike_addOnDataAvailableListener,
  FlowControllerEnumeratorLike_isDataAvailable,
  FlowControllerLike,
  FlowControllerLike_addOnReadyListener,
  FlowControllerLike_isReady,
  FlowControllerQueueLike,
  ObserverLike,
  QueueLike_enqueue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import {
  ConsumerMixinLike,
  ConsumerMixinLike_complete,
  ConsumerMixinLike_consumer,
  ConsumerMixinLike_notify,
} from "./ConsumerMixin.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";

type TReturn<TConsumer extends ConsumerLike, T> = ConsumerMixinLike<
  TConsumer,
  T
> &
  Omit<ObserverLike<T>, keyof DisposableLike>;

type TPrototype<TConsumer extends ConsumerLike, T> = Omit<
  ObserverLike<T> & ConsumerMixinLike<TConsumer, T>,
  | keyof DisposableLike
  | keyof SchedulerLike
  | keyof FlowControllerLike
  | typeof ConsumerMixinLike_consumer
>;

const ObserverMixin: <TConsumer extends ConsumerLike, T>() => Mixin3<
  TReturn<TConsumer, T>,
  TConsumer,
  SchedulerLike,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  TPrototype<TConsumer, T>,
  DisposableLike
> = /*@__PURE__*/ (<TConsumer extends ConsumerLike, T>() => {
  function* observerSchedulerContinuation(this: TThis) {
    // This is the ultimate downstream consumer of events.
    const consumer = this[ConsumerMixinLike_consumer];

    let isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
    let isDisposed = this[DisposableLike_isDisposed];
    let consumerIsCompleted = consumer[SinkLike_isCompleted];
    let consumerIsReady = consumer[FlowControllerLike_isReady];

    while (
      consumerIsReady &&
      isDataAvailable &&
      !consumerIsCompleted &&
      !isDisposed
    ) {
      this[EnumeratorLike_moveNext]();
      const next = this[EnumeratorLike_current] as T;
      this[ConsumerMixinLike_notify](next);

      const shouldYield = this[SchedulerLike_shouldYield];
      isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
      if (shouldYield && isDataAvailable) {
        yield;
      }

      // Need to reassign after the yield if the caller rescheduled
      isDataAvailable = this[FlowControllerEnumeratorLike_isDataAvailable];
      isDisposed = this[DisposableLike_isDisposed];
      consumerIsCompleted = consumer[SinkLike_isCompleted];
      consumerIsReady = consumer[FlowControllerLike_isReady];
    }

    // Only complete when we've exhausted our data. Prevents
    // completing if the loop was exited due to backpressure.
    if (!isDataAvailable && this[SinkLike_isCompleted]) {
      this[ConsumerMixinLike_complete]();
    }
  }

  function scheduleDrainQueue(this: TThis) {
    const consumer = this[ConsumerMixinLike_consumer];
    const isConsumerReady = consumer[FlowControllerLike_isReady];
    const isDrainScheduled =
      !this[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];

    if (isDrainScheduled || !isConsumerReady) {
      return;
    }

    this[ObserverMixin_schedulerSubscription] = this[SchedulerLike_schedule](
      bind(observerSchedulerContinuation, this),
    );
  }

  function onObserverDisposed(this: TProperties) {
    this[ObserverMixin_isCompleted] = true;
  }

  const ObserverMixin_schedulerSubscription = Symbol(
    "ObserverMixin_schedulerSubscription",
  );
  const ObserverMixin_isCompleted = Symbol("ObserverMixin_isCompleted");

  type TProperties = {
    [ConsumerMixinLike_consumer]: TConsumer;
    [ObserverMixin_isCompleted]: boolean;
    [ObserverMixin_schedulerSubscription]: DisposableLike;
  };

  type TThis = TProperties &
    ObserverLike<T> &
    FlowControllerQueueLike<T> &
    ConsumerMixinLike<TConsumer, T>;

  return returns(
    mix<
      TReturn<TConsumer, T>,
      ReturnType<typeof FlowControllerQueueMixin> &
        typeof DelegatingSchedulerMixin,
      TProperties,
      TPrototype<TConsumer, T>,
      DisposableLike,
      TConsumer,
      SchedulerLike,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(FlowControllerQueueMixin(), DelegatingSchedulerMixin),
      function ObserverMixin(
        this: TProperties & TPrototype<TConsumer, T> & DisposableLike,
        consumer: TConsumer,
        scheduler: SchedulerLike,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TConsumer, T> {
        init(FlowControllerQueueMixin<T>(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);

        this[ConsumerMixinLike_consumer] = consumer;

        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
          bind(scheduleDrainQueue, this),
        );

        pipe(
          this,
          DisposableContainer.onDisposed(onObserverDisposed),
          Disposable.add(
            consumer[FlowControllerLike_addOnReadyListener](
              bind(scheduleDrainQueue, this),
            ),
          ),
        );

        return this;
      },
      props<TProperties>({
        [ConsumerMixinLike_consumer]: none,
        [ObserverMixin_isCompleted]: false,
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
      }),
      proto<TPrototype<TConsumer, T>>({
        get [SinkLike_isCompleted]() {
          unsafeCast<TProperties>(this);
          return (
            this[ObserverMixin_isCompleted] ||
            this[ConsumerMixinLike_consumer][SinkLike_isCompleted]
          );
        },

        [EventListenerLike_notify](this: TThis, next: T) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];

          // Make queueing decisions based upon whether the root non-lifted observer
          // wants to apply back pressure, as lifted observers just pass through
          // notifications and never queue in practice.
          const consumer = this[ConsumerMixinLike_consumer];
          const isDelegateReady = consumer[FlowControllerLike_isReady];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          const shouldNotify =
            inSchedulerContinuation &&
            !isCompleted &&
            isDelegateReady &&
            !hasQueuedEvents;

          if (shouldNotify) {
            this[ConsumerMixinLike_notify](next);
          } else if (!isCompleted) {
            this[QueueLike_enqueue](next);
          }
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkLike_isCompleted];
          this[ObserverMixin_isCompleted] = true;

          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          if (isCompleted) {
            return;
          }

          if (inSchedulerContinuation && !hasQueuedEvents) {
            this[ConsumerMixinLike_complete]();
          } else {
            call(scheduleDrainQueue, this);
          }
        },

        [ConsumerMixinLike_notify](this: TThis, next: T) {
          this[ConsumerMixinLike_consumer][EventListenerLike_notify](next);
        },

        [ConsumerMixinLike_complete](this: TThis) {
          this[ConsumerMixinLike_consumer][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default ObserverMixin;
