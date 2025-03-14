import { __DEV__ } from "../../__internal__/constants.js";
import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Function1,
  Method1,
  Optional,
  SideEffect,
  SideEffect1,
  bind,
  bindMethod,
  call,
  isSome,
  none,
  pipe,
  raiseIf,
  returns,
} from "../../functions.js";
import {
  BackpressureStrategy,
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_isReady,
  QueueableLike_onReady,
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
  SinkLike_push,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
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
  const LiftedObserverMixin_scheduler = Symbol("LiftedObserverMixin_scheduler");
  const LiftedObserverMixin_schedulerCallback = Symbol(
    "LiftedObserverMixin_schedulerCallback",
  );

  type TProperties = {
    [LiftedObserverLike_delegate]: ObserverLike<TB>;
    [LiftedObserverMixin_scheduler]: ObserverLike;
    [LiftedObserverMixin_schedulerCallback]: Method1<
      SideEffect1<ContinuationContextLike>,
      ContinuationContextLike
    >;
    [SchedulerLike_inContinuation]: boolean;
    [LiftedObserverLike_notifyDelegate]: Function1<TB, void>;
    [LiftedObserverLike_completeDelegate]: SideEffect;
  };

  function liftedObserverSchedulerContinuation(
    this: LiftedObserverLike<TA, TB> & TProperties & QueueLike<TA>,
    ctx: ContinuationContextLike,
  ) {
    // This is the ultimate downstream consumer of events.
    const scheduler = this[LiftedObserverMixin_scheduler];

    while (this[QueueLike_count] > 0 && !this[DisposableLike_isDisposed]) {
      // Avoid dequeing values if the downstream consumer
      // is applying backpressure.
      if (!scheduler[QueueableLike_isReady]) {
        scheduler[SchedulerLike_requestYield]();
        ctx[ContinuationContextLike_yield]();
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

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<TA> &
      QueueLike<TA> &
      SerialDisposableLike &
      LiftedObserverLike<TA, TB>,
  ) => {
    if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
      observer[SerialDisposableLike_current] = observer[SchedulerLike_schedule](
        bind(liftedObserverSchedulerContinuation, observer),
      );
    }
  };

  const queueProtoype = getPrototype(QueueMixin<TA>());

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

  function completeLiftedDelegate(this: TProperties) {
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

    delegate[LiftedObserverLike_complete]();
  }

  function pushDelegate(this: TProperties, next: TB) {
    this[LiftedObserverLike_delegate][SinkLike_push](next);
  }

  function sinkCompleteDelegate(this: TProperties) {
    this[LiftedObserverLike_delegate][SinkLike_complete]();
  }

  return returns(
    mix<
      LiftedObserverLike<TA, TB>,
      TProperties,
      Omit<
        LiftedObserverLike<TA, TB>,
        | keyof DisposableLike
        | typeof SchedulerLike_inContinuation
        | typeof QueueableLike_isReady
        | typeof SinkLike_isCompleted
        | typeof QueueableLike_onReady
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
        | typeof SchedulerLike_inContinuation
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_complete
        | typeof LiftedObserverLike_delegate
        | typeof LiftedObserverLike_notifyDelegate
        | typeof LiftedObserverLike_completeDelegate
      >,
      Pick<
        LiftedObserverLike<TA, TB>,
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_complete
        | keyof DisposableLike
      >,
      ObserverLike<TB>,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(QueueMixin(), SerialDisposableMixin()),
      function LiftedObserverMixin(
        this: TProperties &
          Omit<
            LiftedObserverLike<TA, TB>,
            | typeof SchedulerLike_inContinuation
            | typeof QueueableLike_isReady
            | typeof SinkLike_isCompleted
            | typeof QueueableLike_onReady
            | typeof QueueableLike_backpressureStrategy
            | typeof QueueableLike_capacity
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

        const delegateIsLifted = isSome(
          (delegate as Partial<LiftedObserverLike<TB>>)[
            LiftedObserverLike_notify
          ],
        );

        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
          ? notifyLiftedDelegate
          : pushDelegate;

        this[LiftedObserverLike_completeDelegate] = delegateIsLifted
          ? completeLiftedDelegate
          : sinkCompleteDelegate;

        this[LiftedObserverLike_delegate] = delegate;
        this[LiftedObserverMixin_scheduler] =
          (delegate as unknown as TProperties)[LiftedObserverMixin_scheduler] ??
          delegate;

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;
        this[LiftedObserverMixin_schedulerCallback] =
          function ObserverMixinSchedulerCallback(
            this: SideEffect1<ContinuationContextLike>,
            ctx: ContinuationContextLike,
          ) {
            instance[SchedulerLike_inContinuation] = true;
            this(ctx);
            instance[SchedulerLike_inContinuation] = false;
          };

        pipe(
          this,
          DisposableContainer.onDisposed(bindMethod(this, SinkLike_complete)),
        );

        return this;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_scheduler]: none,
        [LiftedObserverMixin_schedulerCallback]: none,
        [LiftedObserverLike_notifyDelegate]: none,
        [LiftedObserverLike_completeDelegate]: none,
      }),
      proto({
        get [LiftedObserverLike_isReady]() {
          unsafeCast<TProperties>(this);
          return this[LiftedObserverMixin_scheduler][QueueableLike_isReady];
        },

        get [SchedulerLike_maxYieldInterval]() {
          unsafeCast<TProperties>(this);
          return this[LiftedObserverMixin_scheduler][
            SchedulerLike_maxYieldInterval
          ];
        },

        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[LiftedObserverMixin_scheduler][SchedulerLike_now];
        },

        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[LiftedObserverMixin_scheduler][SchedulerLike_shouldYield];
        },

        [SchedulerLike_requestYield](this: TProperties) {
          this[LiftedObserverMixin_scheduler][SchedulerLike_requestYield]();
        },

        [SchedulerLike_schedule](
          this: TProperties & SchedulerLike & DisposableLike,
          continuation: SideEffect1<ContinuationContextLike>,
          options?: {
            readonly delay?: number;
          },
        ): DisposableLike {
          return pipe(
            this[LiftedObserverLike_delegate][SchedulerLike_schedule](
              bind(this[LiftedObserverMixin_schedulerCallback], continuation),
              options,
            ),
            Disposable.addToContainer(this),
          );
        },

        [SinkLike_push](
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
          const scheduler = this[LiftedObserverMixin_scheduler];
          const isDelegateReady = scheduler[QueueableLike_isReady];
          const count = this[QueueLike_count];

          const shouldNotify =
            inSchedulerContinuation &&
            !shouldIgnore &&
            isDelegateReady &&
            count == 0;

          if (shouldNotify) {
            this[LiftedObserverLike_notify](next);
          } else if (!shouldIgnore) {
            scheduleDrainQueue(this);
            call(queueProtoype[SinkLike_push], this, next);
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

          call(queueProtoype[SinkLike_complete], this);

          if (isCompleted) {
            return;
          }

          if (inSchedulerContinuation && count == 0) {
            this[LiftedObserverLike_complete]();
          } else {
            scheduleDrainQueue(this);
          }
        },

        [LiftedObserverLike_notify](this: TProperties, next: TA) {
          this[LiftedObserverLike_notifyDelegate](next as unknown as TB);
        },

        [LiftedObserverLike_complete](this: TProperties) {
          this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedObserverMixin;
