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
  SideEffect1,
  bind,
  bindMethod,
  call,
  isSome,
  none,
  pipe,
  raise,
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
  SinkLike_next,
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";

export const LiftedObserverLike_delegate = Symbol(
  "LiftedObserverLike_delegate",
);

export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");
export const LiftedObserverLike_notifyDelegate = Symbol(
  "LiftedObserverLike_notifyDelegate",
);
export const LiftedObserverLike_complete = Symbol(
  "LiftedObserverLike_complete",
);

export interface LiftedObserverLike<
  TA = unknown,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
> extends ObserverLike<TA> {
  readonly [LiftedObserverLike_delegate]: TDelegateObserver;

  [LiftedObserverLike_notify](next: TA): void;
  [LiftedObserverLike_notifyDelegate](next: TB): void;
  [LiftedObserverLike_complete](): void;
}

const LiftedObserverMixin: <
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => Mixin2<
  LiftedObserverLike<TA, TB, TDelegateObserver>,
  TDelegateObserver,
  Optional<{
    capacity?: number;
    backpressureStrategy?: BackpressureStrategy;
  }>,
  Pick<
    LiftedObserverLike<TA, TB, TDelegateObserver>,
    typeof LiftedObserverLike_notify | keyof DisposableLike
  >
> = /*@__PURE__*/ (<
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => {
  const LiftedObserverMixin_scheduler = Symbol("LiftedObserverMixin_scheduler");
  const LiftedObserverMixin_schedulerCallback = Symbol(
    "LiftedObserverMixin_schedulerCallback",
  );

  type TProperties = {
    [LiftedObserverLike_delegate]: TDelegateObserver;
    [LiftedObserverMixin_scheduler]: SchedulerLike;
    [LiftedObserverMixin_schedulerCallback]: Method1<
      SideEffect1<ContinuationContextLike>,
      ContinuationContextLike
    >;
    [SchedulerLike_inContinuation]: boolean;
    [LiftedObserverLike_notifyDelegate]: Function1<TB, void>;
  };

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<TA> &
      QueueLike<TA> &
      SerialDisposableLike &
      LiftedObserverLike<TA, TB, TDelegateObserver>,
  ) => {
    if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
      const continuation = (ctx: ContinuationContextLike) => {
        const delegate = observer[LiftedObserverLike_delegate];
        while (
          observer[QueueLike_count] > 0 &&
          !observer[DisposableLike_isDisposed]
        ) {
          if (!delegate[QueueableLike_isReady]) {
            observer[SchedulerLike_requestYield]();
            ctx[ContinuationContextLike_yield]();
          }

          const next = observer[QueueLike_dequeue]() as TA;
          observer[LiftedObserverLike_notify](next);

          if (observer[QueueLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (observer[SinkLike_isCompleted]) {
          observer[LiftedObserverLike_complete]();
        }
      };

      observer[SerialDisposableLike_current] =
        observer[SchedulerLike_schedule](continuation);
    }
  };

  const queueProtoype = getPrototype(QueueMixin<TA>());

  function notifyLiftedDelegate(this: TProperties, next: TB) {
    (this[LiftedObserverLike_delegate] as unknown as LiftedObserverLike<TB>)[
      LiftedObserverLike_notify
    ](next);
  }

  function enqueueDelegate(this: TProperties, next: TB) {
    this[LiftedObserverLike_delegate][SinkLike_next](next);
  }

  return returns(
    mix<
      LiftedObserverLike<TA, TB, TDelegateObserver>,
      TProperties,
      Omit<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
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
      >,
      Pick<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_complete
        | keyof DisposableLike
      >,
      TDelegateObserver,
      Optional<{
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
      }>
    >(
      include(QueueMixin(), SerialDisposableMixin()),
      function LiftedObserverMixin(
        this: TProperties &
          Omit<
            LiftedObserverLike<TA, TB, TDelegateObserver>,
            | typeof SchedulerLike_inContinuation
            | typeof QueueableLike_isReady
            | typeof SinkLike_isCompleted
            | typeof QueueableLike_onReady
            | typeof QueueableLike_backpressureStrategy
            | typeof QueueableLike_capacity
          >,
        delegate: TDelegateObserver,
        options: Optional<{
          capacity?: number;
          backpressureStrategy?: BackpressureStrategy;
        }>,
      ): LiftedObserverLike<TA, TB, TDelegateObserver> {
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

        // FIXME: We should add some inSchedulerContinuation checks
        // for the case when the delegate is lifted and notified
        // in dev
        this[LiftedObserverLike_notifyDelegate] = delegateIsLifted
          ? notifyLiftedDelegate
          : enqueueDelegate;

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
        [LiftedObserverLike_notifyDelegate]: none,
        [LiftedObserverLike_delegate]: none,
        [LiftedObserverMixin_scheduler]: none,
        [LiftedObserverMixin_schedulerCallback]: none,
      }),
      proto({
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

        [SinkLike_next](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB, TDelegateObserver>,
          next: TA,
        ): boolean {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];
          const isCompleted = this[SinkLike_isCompleted];

          // FIXME: Put this in a dev check
          if (isCompleted) {
            raise("observer is completed");
          }

          const shouldIgnore = isCompleted || this[DisposableLike_isDisposed];

          const delegate = this[LiftedObserverLike_delegate];
          const isDelegateReady = delegate[QueueableLike_isReady];
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
            call(queueProtoype[SinkLike_next], this, next);
          }

          return this[QueueableLike_isReady];
        },

        [SinkLike_complete](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB, TDelegateObserver>,
        ) {
          const isCompleted = this[SinkLike_isCompleted];

          call(queueProtoype[SinkLike_complete], this);

          if (isCompleted) {
            return;
          }

          scheduleDrainQueue(this);
        },

        [LiftedObserverLike_complete](this: TProperties) {
          this[LiftedObserverLike_delegate][SinkLike_complete]();
        },
      }),
    ),
  );
})();

export default LiftedObserverMixin;
