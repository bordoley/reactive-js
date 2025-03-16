import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
  super_,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Function1,
  Optional,
  bind,
  bindMethod,
  isSome,
  memoize,
  none,
  pipe,
  pipeLazy,
  raiseIf,
  returns,
} from "../../functions.js";
import {
  BackpressureStrategy,
  ConsumerLike_addOnReadyListener,
  ConsumerLike_backpressureStrategy,
  ConsumerLike_capacity,
  ConsumerLike_isReady,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SerialDisposableLike,
  SerialDisposableLike_current,
  SinkLike_complete,
  SinkLike_isCompleted,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import {
  LiftedConsumerLike,
  LiftedConsumerLike_consumer,
  LiftedConsumerLike_isReady,
} from "./LiftedConsumerMixin.js";
import {
  LiftedEventListenerLike_delegate,
  LiftedEventListenerLike_notify,
  LiftedEventListenerLike_notifyDelegate,
} from "./LiftedEventListenerMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
} from "./LiftedSinkMixin.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";

export interface LiftedObserverLike<TA = unknown, TB = TA>
  extends LiftedConsumerLike<TA, TB, ObserverLike<TB>, ObserverLike>,
    ObserverLike<TA> {}

interface LiftedObserverMixinModule {
  <TA, TB = TA>(): Mixin2<
    LiftedObserverLike<TA, TB>,
    ObserverLike<TB>,
    Optional<{
      capacity?: number;
      backpressureStrategy?: BackpressureStrategy;
    }>,
    Pick<LiftedObserverLike<TA, TB>, keyof DisposableLike>
  >;

  <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>(): Mixin2<
    LiftedObserverLike<T, T>,
    TDelegateObserver,
    Optional<{
      capacity?: number;
      backpressureStrategy?: BackpressureStrategy;
    }>,
    Pick<
      LiftedObserverLike<T, T>,
      keyof DisposableLike | typeof LiftedEventListenerLike_notify
    >
  >;
}

const LiftedObserverMixin: LiftedObserverMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
>() => {
  type TProperties = {
    [LiftedEventListenerLike_delegate]: ObserverLike<TB>;
    [LiftedConsumerLike_consumer]: ObserverLike;
    [LiftedEventListenerLike_notifyDelegate]: Function1<TB, void>;
  };

  function liftedObserverSchedulerContinuation(
    this: TProperties &
      ObserverLike<TA> &
      QueueLike<TA> &
      SerialDisposableLike &
      LiftedObserverLike<TA, TB>,
    ctx: ContinuationContextLike,
  ) {
    // This is the ultimate downstream consumer of events.
    const consumer = this[LiftedConsumerLike_consumer];

    while (this[QueueLike_count] > 0 && !this[DisposableLike_isDisposed]) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!consumer[ConsumerLike_isReady]) {
        // Set up the onReady listener
        scheduleDrainQueue(this);
        break;
      }

      const next = this[QueueLike_dequeue]() as TA;
      this[LiftedEventListenerLike_notify](next);

      if (this[QueueLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    if (this[SinkLike_isCompleted]) {
      this[LiftedSinkLike_complete]();
    }
  }

  // memoize to avoid adding a local proper to track if
  // we already have a consumer lister setup. Not that performant.
  const setUpOnConsumerReadyListenerMemoized = memoize(
    (
      observer: TProperties &
        ObserverLike<TA> &
        QueueLike<TA> &
        SerialDisposableLike &
        LiftedObserverLike<TA, TB>,
    ) => {
      const consumer = observer[LiftedConsumerLike_consumer];
      return pipe(
        consumer[ConsumerLike_addOnReadyListener](
          pipeLazy(observer, scheduleDrainQueue),
        ),
        Disposable.addTo(observer),
      );
    },
  );

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<TA> &
      QueueLike<TA> &
      SerialDisposableLike &
      LiftedObserverLike<TA, TB>,
  ) => {
    const consumer = observer[LiftedConsumerLike_consumer];
    const isConsumerReady = consumer[ConsumerLike_isReady];
    const isConumerDisposed = consumer[DisposableLike_isDisposed];
    const isDrainScheduled =
      !observer[SerialDisposableLike_current][DisposableLike_isDisposed];

    if (!isDrainScheduled && isConsumerReady) {
      observer[SerialDisposableLike_current] = observer[SchedulerLike_schedule](
        bind(liftedObserverSchedulerContinuation, observer),
      );
    } else if (!isConsumerReady && !isConumerDisposed) {
      setUpOnConsumerReadyListenerMemoized(observer);
    }
  };

  function notifyLiftedDelegate(this: TProperties, next: TB) {
    const delegate = this[
      LiftedEventListenerLike_delegate
    ] as unknown as LiftedObserverLike<TB>;

    if (__DEV__) {
      raiseIf(
        !delegate[SchedulerLike_inContinuation],
        "Observer can only be notified from within a Scheduler continuation",
      );
      raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
      raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
    }

    delegate[LiftedEventListenerLike_notify](next);
  }

  function pushDelegate(this: TProperties, next: TB) {
    this[LiftedEventListenerLike_delegate][EventListenerLike_notify](next);
  }

  return returns(
    mix<
      LiftedObserverLike<TA, TB>,
      TProperties,
      Omit<
        LiftedObserverLike<TA, TB>,
        | keyof DisposableLike
        | keyof SchedulerLike
        | typeof SchedulerLike_inContinuation
        | typeof ConsumerLike_isReady
        | typeof SinkLike_isCompleted
        | typeof ConsumerLike_addOnReadyListener
        | typeof ConsumerLike_backpressureStrategy
        | typeof ConsumerLike_capacity
        | typeof SchedulerLike_inContinuation
        | typeof LiftedEventListenerLike_notify
        | typeof LiftedSinkLike_complete
        | typeof LiftedEventListenerLike_delegate
        | typeof LiftedEventListenerLike_notifyDelegate
        | typeof LiftedConsumerLike_consumer
      >,
      Pick<
        LiftedObserverLike<TA, TB>,
        | typeof LiftedEventListenerLike_notify
        | typeof LiftedSinkLike_complete
        | typeof LiftedSinkLike_completeDelegate
        | keyof DisposableLike
      >,
      ObserverLike<TB>,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(QueueMixin(), SerialDisposableMixin(), DelegatingSchedulerMixin),
      function LiftedObserverMixin(
        this: TProperties &
          Omit<
            LiftedObserverLike<TA, TB>,
            | typeof ConsumerLike_isReady
            | typeof SinkLike_isCompleted
            | typeof ConsumerLike_addOnReadyListener
            | typeof ConsumerLike_backpressureStrategy
            | typeof ConsumerLike_capacity
            | typeof SchedulerLike_maxYieldInterval
            | typeof SchedulerLike_inContinuation
            | typeof SchedulerLike_now
            | typeof SchedulerLike_shouldYield
            | typeof SchedulerLike_requestYield
            | typeof SchedulerLike_schedule
          >,
        delegate: ObserverLike<TB>,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): LiftedObserverLike<TA, TB> {
        init(QueueMixin<TA>(), this, {
          backpressureStrategy: delegate[ConsumerLike_backpressureStrategy],
          capacity: delegate[ConsumerLike_capacity],
          ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(DelegatingSchedulerMixin, this, delegate);

        const delegateIsLifted = isSome(
          (delegate as Partial<LiftedObserverLike<TB>>)[
            LiftedEventListenerLike_notify
          ],
        );

        this[LiftedEventListenerLike_notifyDelegate] = delegateIsLifted
          ? notifyLiftedDelegate
          : pushDelegate;

        this[LiftedEventListenerLike_delegate] = delegate;
        this[LiftedConsumerLike_consumer] =
          (delegate as unknown as TProperties)[LiftedConsumerLike_consumer] ??
          delegate;

        pipe(
          this,
          DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
        );

        return this;
      },
      props<TProperties>({
        [LiftedEventListenerLike_delegate]: none,
        [LiftedConsumerLike_consumer]: none,
        [LiftedEventListenerLike_notifyDelegate]: none,
      }),
      proto({
        get [LiftedConsumerLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedConsumerLike_consumer][ConsumerLike_isReady];
        },

        [EventListenerLike_notify](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB>,
          next: TA,
        ) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];
          const shouldIgnore = isCompleted || this[DisposableLike_isDisposed];

          // Make queueing decisions based upon whether the root non-lifted observer
          // wants to apply back pressure, as lifted observers just pass through
          // notifications and never queue in practice.
          const scheduler = this[LiftedConsumerLike_consumer];
          const isDelegateReady = scheduler[ConsumerLike_isReady];
          const count = this[QueueLike_count];
          const capacity = this[ConsumerLike_capacity];

          const shouldNotify =
            inSchedulerContinuation &&
            !shouldIgnore &&
            isDelegateReady &&
            count == 0 &&
            capacity > 0;

          if (shouldNotify) {
            this[LiftedEventListenerLike_notify](next);
          } else if (!shouldIgnore) {
            super_(QueueMixin<TA>(), this, EventListenerLike_notify, next);
            scheduleDrainQueue(this);
          }
        },

        [SinkLike_complete](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB>,
        ) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];
          const count = this[QueueLike_count];

          if (isCompleted) {
            return;
          }

          super_(QueueMixin<TA>(), this, SinkLike_complete);

          if (inSchedulerContinuation && count == 0) {
            this[LiftedSinkLike_complete]();
          } else {
            scheduleDrainQueue(this);
          }
        },

        [LiftedSinkLike_completeDelegate](this: TProperties) {
          // We always want to call SinkLike_complete to ensure
          // cleanup code is invoked.
          this[LiftedEventListenerLike_delegate][SinkLike_complete]();
        },

        [LiftedEventListenerLike_notify](this: TProperties, next: TA) {
          this[LiftedEventListenerLike_notifyDelegate](next as unknown as TB);
        },

        [LiftedSinkLike_complete](this: LiftedObserverLike) {
          this[LiftedSinkLike_completeDelegate]();
        },
      }),
    ),
  );
})();

export default LiftedObserverMixin;
