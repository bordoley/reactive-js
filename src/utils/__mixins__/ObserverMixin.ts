import {
  Mixin3,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import { Optional, bind, call, pipe, returns } from "../../functions.js";
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
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import FlowControllerQueueMixin from "./FlowControllerQueueMixin.js";
import SinkMixin, {
  SinkMixinLike,
  SinkMixinLike_delegate,
  SinkMixinLike_doComplete,
  SinkMixinLike_doNotify,
  SinkMixinLike_isCompleted,
} from "./SinkMixin.js";

type TReturn<TObserver extends ConsumerLike, T> = SinkMixinLike<TObserver, T> &
  Omit<ObserverLike<T>, keyof DisposableLike>;

type TPrototype<TObserver extends ConsumerLike, T> = Omit<
  ObserverLike<T> & SinkMixinLike<TObserver, T>,
  | keyof DisposableLike
  | keyof SchedulerLike
  | keyof FlowControllerLike
  | typeof SinkMixinLike_delegate
  | typeof SinkLike_isCompleted
  | typeof SinkMixinLike_doNotify
  | typeof SinkMixinLike_doComplete
  | typeof SinkMixinLike_isCompleted
>;

const ObserverMixin: <TObserver extends ConsumerLike, T>() => Mixin3<
  TReturn<TObserver, T>,
  TObserver,
  SchedulerLike,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  TPrototype<TObserver, T>,
  DisposableLike
> = /*@__PURE__*/ (<TObserver extends ConsumerLike, T>() => {
  function* observerSchedulerContinuation(this: TThis) {
    // This is the ultimate downstream consumer of events.
    const consumer = this[SinkMixinLike_delegate];

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
      this[SinkMixinLike_doNotify](next);

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
      this[SinkMixinLike_doComplete]();
    }
  }

  function scheduleDrainQueue(this: TThis) {
    const consumer = this[SinkMixinLike_delegate];
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

  const ObserverMixin_schedulerSubscription = Symbol(
    "ObserverMixin_schedulerSubscription",
  );

  type TProperties = {
    [ObserverMixin_schedulerSubscription]: DisposableLike;
  };

  type TThis = TProperties &
    ObserverLike<T> &
    FlowControllerQueueLike<T> &
    SinkMixinLike<TObserver, T>;

  return returns(
    mix<
      TReturn<TObserver, T>,
      ReturnType<typeof FlowControllerQueueMixin> &
        typeof DelegatingSchedulerMixin,
      TProperties,
      TPrototype<TObserver, T>,
      DisposableLike,
      TObserver,
      SchedulerLike,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(
        FlowControllerQueueMixin(),
        DelegatingSchedulerMixin,
        SinkMixin(),
      ),
      function ObserverMixin(
        this: TProperties & TPrototype<TObserver, T> & DisposableLike,
        consumer: TObserver,
        scheduler: SchedulerLike,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TObserver, T> {
        init(FlowControllerQueueMixin<T>(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);
        init(SinkMixin<TObserver, T>(), this, consumer);

        this[FlowControllerEnumeratorLike_addOnDataAvailableListener](
          bind(scheduleDrainQueue, this),
        );

        pipe(
          this,
          Disposable.add(
            consumer[FlowControllerLike_addOnReadyListener](
              bind(scheduleDrainQueue, this),
            ),
          ),
        );

        return this;
      },
      props<TProperties>({
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
      }),
      proto<TPrototype<TObserver, T>>({
        [EventListenerLike_notify](this: TThis, next: T) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];

          // Make queueing decisions based upon whether the root non-lifted observer
          // wants to apply back pressure, as lifted observers just pass through
          // notifications and never queue in practice.
          const consumer = this[SinkMixinLike_delegate];
          const isDelegateReady = consumer[FlowControllerLike_isReady];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          const shouldNotify =
            inSchedulerContinuation &&
            !isCompleted &&
            isDelegateReady &&
            !hasQueuedEvents;

          if (shouldNotify) {
            this[SinkMixinLike_doNotify](next);
          } else if (!isCompleted) {
            this[QueueLike_enqueue](next);
          }
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkMixinLike_isCompleted] = true;

          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const hasQueuedEvents =
            this[FlowControllerEnumeratorLike_isDataAvailable];

          if (isCompleted) {
            return;
          }

          if (inSchedulerContinuation && !hasQueuedEvents) {
            this[SinkMixinLike_doComplete]();
          } else {
            call(scheduleDrainQueue, this);
          }
        },
      }),
    ),
  );
})();

export default ObserverMixin;
