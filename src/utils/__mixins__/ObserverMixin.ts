import {
  Mixin3,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  Optional,
  bind,
  memoize,
  none,
  pipe,
  pipeLazy,
  returns,
} from "../../functions.js";
import {
  BackpressureStrategy,
  CollectionEnumeratorLike_count,
  ConsumerLike,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
  QueueableLike,
  QueueableLike_addOnReadyListener,
  QueueableLike_isReady,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_schedule,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import QueueMixin from "./QueueMixin.js";

export const ObserverMixinLike_notify = Symbol("ObserverMixinLike_notify");
export const ObserverMixinLike_complete = Symbol("ObserverMixinLike_complete");
export const ObserverMixinLike_consumer = Symbol("ObserverMixinLike_consumer");

export interface ObserverMixinLike<TConsumer extends ConsumerLike, T> {
  readonly [ObserverMixinLike_consumer]: TConsumer;
  [ObserverMixinLike_notify](next: T): void;
  [ObserverMixinLike_complete](): void;
}

type TReturn<TConsumer extends ConsumerLike, T> = ObserverMixinLike<
  TConsumer,
  T
> &
  Omit<ObserverLike<T>, keyof DisposableLike>;

const ObserverMixin: <TConsumer extends ConsumerLike, T>() => Mixin3<
  TReturn<TConsumer, T>,
  TConsumer,
  SchedulerLike,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>
> = /*@__PURE__*/ (<TConsumer extends ConsumerLike, T>() => {
  function observerSchedulerContinuation(
    this: TThis,
    ctx: ContinuationContextLike,
  ) {
    // This is the ultimate downstream consumer of events.
    const consumer = this[ObserverMixinLike_consumer];

    while (
      this[CollectionEnumeratorLike_count] > 0 &&
      !this[DisposableLike_isDisposed]
    ) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!consumer[QueueableLike_isReady]) {
        // Set up the onReady sink
        scheduleDrainQueue(this);
        break;
      }

      this[EnumeratorLike_moveNext]();
      const next = this[EnumeratorLike_current] as T;
      this[ObserverMixinLike_notify](next);

      if (this[CollectionEnumeratorLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    if (this[SinkLike_isCompleted]) {
      this[ObserverMixinLike_complete]();
    }
  }

  // memoize to avoid adding a local proper to track if
  // we already have a consumer lister setup. Not that performant.
  const setUpOnConsumerReadySinkMemoized = memoize((observer: TThis) => {
    const consumer = observer[ObserverMixinLike_consumer];
    return pipe(
      consumer[QueueableLike_addOnReadyListener](
        pipeLazy(observer, scheduleDrainQueue),
      ),
      Disposable.addTo(observer),
    );
  });

  const scheduleDrainQueue = (observer: TThis) => {
    const consumer = observer[ObserverMixinLike_consumer];
    const isConsumerReady = consumer[QueueableLike_isReady];
    const isConsumerDisposed = consumer[DisposableLike_isDisposed];
    const isDrainScheduled =
      !observer[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];

    if (!isDrainScheduled && isConsumerReady) {
      observer[ObserverMixin_schedulerSubscription] = observer[
        SchedulerLike_schedule
      ](bind(observerSchedulerContinuation, observer));
    } else if (!isConsumerReady && !isConsumerDisposed) {
      setUpOnConsumerReadySinkMemoized(observer);
    }
  };

  const ObserverMixin_schedulerSubscription = Symbol(
    "ObserverMixin_schedulerSubscription",
  );

  type TProperties = {
    [ObserverMixinLike_consumer]: TConsumer;
    [SinkLike_isCompleted]: boolean;
    [ObserverMixin_schedulerSubscription]: DisposableLike;
  };

  type TPrototype = Omit<
    ObserverLike<T> & ObserverMixinLike<TConsumer, T>,
    | keyof DisposableLike
    | keyof SchedulerLike
    | keyof QueueableLike
    | typeof SinkLike_isCompleted
    | typeof ObserverMixinLike_consumer
  >;

  type TThis = TProperties &
    ObserverLike<T> &
    QueueLike<T> &
    ObserverMixinLike<TConsumer, T>;

  return returns(
    mix(
      include(QueueMixin(), DelegatingSchedulerMixin),
      function ObserverMixin(
        this: TProperties & TPrototype,
        consumer: TConsumer,
        scheduler: SchedulerLike,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): TReturn<TConsumer, T> {
        init(QueueMixin<T>(), this, options);
        init(DelegatingSchedulerMixin, this, scheduler);

        this[ObserverMixinLike_consumer] = consumer;

        return this;
      },
      props<TProperties>({
        [ObserverMixinLike_consumer]: none,
        [SinkLike_isCompleted]: false,
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
      }),
      proto<TPrototype>({
        [EventListenerLike_notify](this: TThis, next: T) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];

          // Make queueing decisions based upon whether the root non-lifted observer
          // wants to apply back pressure, as lifted observers just pass through
          // notifications and never queue in practice.
          const consumer = this[ObserverMixinLike_consumer];
          const isDelegateReady = consumer[QueueableLike_isReady];
          const count = this[CollectionEnumeratorLike_count];

          const shouldNotify =
            inSchedulerContinuation &&
            !isCompleted &&
            isDelegateReady &&
            count == 0;

          if (shouldNotify) {
            this[ObserverMixinLike_notify](next);
          } else if (!isCompleted) {
            this[QueueLike_enqueue](next);
            scheduleDrainQueue(this);
          }
        },

        [SinkLike_complete](this: TThis) {
          const isCompleted = this[SinkLike_isCompleted];
          this[SinkLike_isCompleted] = true;

          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const count = this[CollectionEnumeratorLike_count];

          if (isCompleted) {
            return;
          }

          if (inSchedulerContinuation && count == 0) {
            this[ObserverMixinLike_complete]();
          } else {
            scheduleDrainQueue(this);
          }
        },

        [ObserverMixinLike_notify](_next: T) {},

        [ObserverMixinLike_complete]() {},
      }),
    ),
  );
})();

export default ObserverMixin;
