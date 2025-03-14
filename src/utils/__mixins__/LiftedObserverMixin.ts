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
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
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
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";

export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");
export const LiftedObserverLike_notifyDelegate = Symbol(
  "LiftedObserverLike_notifyDelegate",
);
export const LiftedObserverLike_complete = Symbol(
  "LiftedObserverLike_complete",
);
export const LiftedObserverLike_completeDelegate = Symbol(
  "LiftedObserverLike_complete",
);
export const LiftedObserverLike_delegate = Symbol(
  "LiftedObserverLike_delegate",
);
export const LiftedObserverLike_isReady = Symbol("LiftedObserverLike_isReady");

export interface LiftedObserverLike<TA = unknown, TB = TA>
  extends ObserverLike<TA> {
  readonly [LiftedObserverLike_delegate]: ObserverLike<TB>;
  readonly [LiftedObserverLike_isReady]: boolean;

  [LiftedObserverLike_notify](next: TA): void;
  [LiftedObserverLike_complete](): void;

  [LiftedObserverLike_notifyDelegate](next: TB): void;
  [LiftedObserverLike_completeDelegate](): void;
}

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
      keyof DisposableLike | typeof LiftedObserverLike_notify
    >
  >;
}

const LiftedObserverMixin: LiftedObserverMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
>() => {
  const LiftedObserverMixin_consumer = Symbol("LiftedObserverMixin_consumer");

  type TProperties = {
    [LiftedObserverLike_delegate]: ObserverLike<TB>;
    [LiftedObserverMixin_consumer]: ObserverLike;
    [LiftedObserverLike_notifyDelegate]: Function1<TB, void>;
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
    const scheduler = this[LiftedObserverMixin_consumer];

    while (this[QueueLike_count] > 0 && !this[DisposableLike_isDisposed]) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!scheduler[QueueableLike_isReady]) {
        // Set up the onReady listener
        scheduleDrainQueue(this);
        break;
      }

      const next = this[QueueLike_dequeue]() as TA;
      this[LiftedObserverLike_notify](next);

      if (this[QueueLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    if (this[SinkLike_isCompleted]) {
      this[LiftedObserverLike_complete]();
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
      const consumer = observer[LiftedObserverMixin_consumer];
      return pipe(
        consumer[QueueableLike_addOnReadyListener](
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
    const consumer = observer[LiftedObserverMixin_consumer];
    const isConsumerReady = consumer[QueueableLike_isReady];
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
      LiftedObserverLike_delegate
    ] as unknown as LiftedObserverLike<TB>;

    if (__DEV__) {
      raiseIf(
        !delegate[SchedulerLike_inContinuation],
        "Observer can only be notified from within a Scheduler continuation",
      );
      raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
      raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
    }

    delegate[LiftedObserverLike_notify](next);
  }

  function pushDelegate(this: TProperties, next: TB) {
    this[LiftedObserverLike_delegate][EventListenerLike_notify](next);
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
        | typeof QueueableLike_isReady
        | typeof SinkLike_isCompleted
        | typeof QueueableLike_addOnReadyListener
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
        | typeof SchedulerLike_inContinuation
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_complete
        | typeof LiftedObserverLike_delegate
        | typeof LiftedObserverLike_notifyDelegate
      >,
      Pick<
        LiftedObserverLike<TA, TB>,
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_complete
        | typeof LiftedObserverLike_completeDelegate
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
            | typeof QueueableLike_isReady
            | typeof SinkLike_isCompleted
            | typeof QueueableLike_addOnReadyListener
            | typeof QueueableLike_backpressureStrategy
            | typeof QueueableLike_capacity
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
          backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
          capacity: delegate[QueueableLike_capacity],
          ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(DelegatingSchedulerMixin, this, delegate);

        const delegateIsLifted = isSome(
          (delegate as Partial<LiftedObserverLike<TB>>)[
            LiftedObserverLike_notify
          ],
        );

        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
          ? notifyLiftedDelegate
          : pushDelegate;

        this[LiftedObserverLike_delegate] = delegate;
        this[LiftedObserverMixin_consumer] =
          (delegate as unknown as TProperties)[LiftedObserverMixin_consumer] ??
          delegate;

        pipe(
          this,
          DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
        );

        return this;
      },
      props<TProperties>({
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_consumer]: none,
        [LiftedObserverLike_notifyDelegate]: none,
      }),
      proto({
        get [LiftedObserverLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedObserverMixin_consumer][QueueableLike_isReady];
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
          const scheduler = this[LiftedObserverMixin_consumer];
          const isDelegateReady = scheduler[QueueableLike_isReady];
          const count = this[QueueLike_count];
          const capacity = this[QueueableLike_capacity];

          const shouldNotify =
            inSchedulerContinuation &&
            !shouldIgnore &&
            isDelegateReady &&
            count == 0 &&
            capacity > 0;

          if (shouldNotify) {
            this[LiftedObserverLike_notify](next);
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
            this[LiftedObserverLike_complete]();
          } else {
            scheduleDrainQueue(this);
          }
        },

        [LiftedObserverLike_completeDelegate](this: TProperties) {
          // We always want to call SinkLike_complete to ensure
          // cleanup code is invoked.
          this[LiftedObserverLike_delegate][SinkLike_complete]();
        },

        [LiftedObserverLike_notify](this: TProperties, next: TA) {
          this[LiftedObserverLike_notifyDelegate](next as unknown as TB);
        },

        [LiftedObserverLike_complete](this: LiftedObserverLike) {
          this[LiftedObserverLike_completeDelegate]();
        },
      }),
    ),
  );
})();

export default LiftedObserverMixin;
