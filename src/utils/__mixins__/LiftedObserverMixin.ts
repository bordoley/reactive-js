import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin2,
  include,
  init,
  mix,
  props,
  proto,
} from "../../__internal__/mixins.js";
import {
  Function1,
  Optional,
  bind,
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
  CollectionEnumeratorLike_count,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_isDisposed,
  EnumeratorLike_current,
  EnumeratorLike_moveNext,
  ListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_enqueue,
  QueueableLike_addOnReadyListener,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
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
import DelegatingSchedulerMixin from "./DelegatingSchedulerMixin.js";
import LiftedConsumerMixin, {
  LiftedConsumerLike,
  LiftedConsumerLike_consumer,
  LiftedConsumerLike_isReady,
} from "./LiftedConsumerMixin.js";
import {
  LiftedListenerLike_delegate,
  LiftedListenerLike_notify,
  LiftedListenerLike_notifyDelegate,
} from "./LiftedListenerMixin.js";
import {
  LiftedSinkLike_complete,
  LiftedSinkLike_completeDelegate,
  LiftedSinkLike_isDelegateCompleted,
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
    }>
  >;

  <T, TDelegateObserver extends ObserverLike<T> = ObserverLike<T>>(): Mixin2<
    LiftedObserverLike<T, T>,
    TDelegateObserver,
    Optional<{
      capacity?: number;
      backpressureStrategy?: BackpressureStrategy;
    }>
  >;
}

const LiftedObserverMixin: LiftedObserverMixinModule = /*@__PURE__*/ (<
  TA,
  TB = TA,
>() => {
  type TProperties = {
    [LiftedListenerLike_notifyDelegate]: Function1<TB, void>;
  };

  function liftedObserverSchedulerContinuation(
    this: QueueLike<TA> & SerialDisposableLike & LiftedObserverLike<TA, TB>,
    ctx: ContinuationContextLike,
  ) {
    // This is the ultimate downstream consumer of events.
    const consumer = this[LiftedConsumerLike_consumer];

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
      const next = this[EnumeratorLike_current] as TA;
      this[LiftedListenerLike_notify](next);

      if (this[CollectionEnumeratorLike_count] > 0) {
        ctx[ContinuationContextLike_yield]();
      }
    }

    if (this[SinkLike_isCompleted]) {
      this[LiftedSinkLike_complete]();
    }
  }

  // memoize to avoid adding a local proper to track if
  // we already have a consumer lister setup. Not that performant.
  const setUpOnConsumerReadySinkMemoized = memoize(
    (
      observer: QueueLike<TA> &
        SerialDisposableLike &
        LiftedObserverLike<TA, TB>,
    ) => {
      const consumer = observer[LiftedConsumerLike_consumer];
      return pipe(
        consumer[QueueableLike_addOnReadyListener](
          pipeLazy(observer, scheduleDrainQueue),
        ),
        Disposable.addTo(observer),
      );
    },
  );

  const scheduleDrainQueue = (
    observer: QueueLike<TA> & SerialDisposableLike & LiftedObserverLike<TA, TB>,
  ) => {
    const consumer = observer[LiftedConsumerLike_consumer];
    const isConsumerReady = consumer[QueueableLike_isReady];
    const isConumerDisposed = consumer[DisposableLike_isDisposed];
    const isDrainScheduled =
      !observer[SerialDisposableLike_current][DisposableLike_isDisposed];

    if (!isDrainScheduled && isConsumerReady) {
      observer[SerialDisposableLike_current] = observer[SchedulerLike_schedule](
        bind(liftedObserverSchedulerContinuation, observer),
      );
    } else if (!isConsumerReady && !isConumerDisposed) {
      setUpOnConsumerReadySinkMemoized(observer);
    }
  };

  function notifyLiftedDelegate(this: LiftedObserverLike<TA, TB>, next: TB) {
    const delegate = this[
      LiftedListenerLike_delegate
    ] as unknown as LiftedObserverLike<TB>;

    if (__DEV__) {
      raiseIf(
        !delegate[SchedulerLike_inContinuation],
        "Observer can only be notified from within a Scheduler continuation",
      );
      raiseIf(delegate[SinkLike_isCompleted], "Observer is completed");
      raiseIf(delegate[DisposableLike_isDisposed], "Observer is disposed");
    }

    delegate[LiftedListenerLike_notify](next);
  }

  function pushDelegate(this: LiftedObserverLike<TA, TB>, next: TB) {
    this[LiftedListenerLike_delegate][ListenerLike_notify](next);
  }

  return returns(
    mix(
      include(
        LiftedConsumerMixin(),
        QueueMixin(),
        SerialDisposableMixin(),
        DelegatingSchedulerMixin,
      ),
      function LiftedObserverMixin(
        this: TProperties &
          Omit<
            LiftedObserverLike<TA, TB>,
            | keyof DisposableLike
            | typeof LiftedListenerLike_notify
            | typeof LiftedListenerLike_delegate
            | typeof ListenerLike_notify
            | typeof LiftedListenerLike_notifyDelegate
            | typeof SinkLike_isCompleted
            | typeof SinkLike_complete
            | typeof LiftedSinkLike_isDelegateCompleted
            | typeof LiftedSinkLike_complete
            | typeof LiftedSinkLike_completeDelegate
            | typeof LiftedConsumerLike_consumer
            | typeof QueueableLike_isReady
            | typeof LiftedConsumerLike_isReady
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
        init(
          LiftedConsumerMixin<TA, TB, ObserverLike<TB>, ObserverLike>(),
          this,
          delegate,
        );
        init(QueueMixin<TA>(), this, {
          backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
          capacity: delegate[QueueableLike_capacity],
          ...(options ?? {}),
        });
        init(SerialDisposableMixin(), this, Disposable.disposed);
        init(DelegatingSchedulerMixin, this, delegate);

        const delegateIsLifted = isSome(
          (delegate as Partial<LiftedObserverLike<TB>>)[
            LiftedListenerLike_notify
          ],
        );

        this[LiftedListenerLike_notifyDelegate] = delegateIsLifted
          ? notifyLiftedDelegate
          : pushDelegate;

        return this;
      },
      props<TProperties>({
        [LiftedListenerLike_notifyDelegate]: none,
      }),
      proto({
        [ListenerLike_notify](
          this: QueueLike<TA> &
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
          const consumer = this[LiftedConsumerLike_consumer];
          const isDelegateReady = consumer[QueueableLike_isReady];
          const count = this[CollectionEnumeratorLike_count];
          const capacity = this[QueueableLike_capacity];

          const shouldNotify =
            inSchedulerContinuation &&
            !shouldIgnore &&
            isDelegateReady &&
            count == 0 &&
            capacity > 0;

          if (shouldNotify) {
            this[LiftedListenerLike_notify](next);
          } else if (!shouldIgnore) {
            this[QueueLike_enqueue](next);
            scheduleDrainQueue(this);
          }
        },

        [SinkLike_complete](
          this: QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB>,
        ) {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];
          const count = this[CollectionEnumeratorLike_count];

          if (isCompleted) {
            return;
          }

          if (inSchedulerContinuation && count == 0) {
            this[LiftedSinkLike_complete]();
          } else {
            scheduleDrainQueue(this);
          }
        },
      }),
    ),
  );
})();

export default LiftedObserverMixin;
