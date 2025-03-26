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
  call,
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
  QueueEnumeratorLike_addOnDataReadyListener,
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

type TPrototype<TConsumer extends ConsumerLike, T> = Omit<
  ObserverLike<T> & ObserverMixinLike<TConsumer, T>,
  | keyof DisposableLike
  | keyof SchedulerLike
  | keyof QueueableLike
  | typeof SinkLike_isCompleted
  | typeof ObserverMixinLike_consumer
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
        call(scheduleDrainQueue, this);
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

  function scheduleDrainQueue(this: TThis) {
    const consumer = this[ObserverMixinLike_consumer];
    const isConsumerReady = consumer[QueueableLike_isReady];
    const isConsumerDisposed = consumer[DisposableLike_isDisposed];
    const isDrainScheduled =
      !this[ObserverMixin_schedulerSubscription][DisposableLike_isDisposed];

    if (!isDrainScheduled && isConsumerReady) {
      this[ObserverMixin_schedulerSubscription] = this[SchedulerLike_schedule](
        bind(observerSchedulerContinuation, this),
      );
    } else if (!isConsumerReady && !isConsumerDisposed) {
      setUpOnConsumerReadySinkMemoized(this);
    }
  }

  const ObserverMixin_schedulerSubscription = Symbol(
    "ObserverMixin_schedulerSubscription",
  );

  type TProperties = {
    [ObserverMixinLike_consumer]: TConsumer;
    [SinkLike_isCompleted]: boolean;
    [ObserverMixin_schedulerSubscription]: DisposableLike;
  };

  type TThis = TProperties &
    ObserverLike<T> &
    QueueLike<T> &
    ObserverMixinLike<TConsumer, T>;

  return returns(
    mix<
      TReturn<TConsumer, T>,
      ReturnType<typeof QueueMixin> & typeof DelegatingSchedulerMixin,
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
      include(QueueMixin(), DelegatingSchedulerMixin),
      function ObserverMixin(
        this: TProperties & TPrototype<TConsumer, T> & DisposableLike,
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

        this[QueueEnumeratorLike_addOnDataReadyListener](
          bind(scheduleDrainQueue, this),
        );

        return this;
      },
      props<TProperties>({
        [ObserverMixinLike_consumer]: none,
        [SinkLike_isCompleted]: false,
        [ObserverMixin_schedulerSubscription]: Disposable.disposed,
      }),
      proto<TPrototype<TConsumer, T>>({
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
            call(scheduleDrainQueue, this);
          }
        },

        [ObserverMixinLike_notify](_next: T) {},

        [ObserverMixinLike_complete]() {},
      }),
    ),
  );
})();

export default ObserverMixin;
