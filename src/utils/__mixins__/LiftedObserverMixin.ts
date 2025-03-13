import {
  Mixin1,
  getPrototype,
  include,
  init,
  mix,
  props,
  proto,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  Method1,
  SideEffect1,
  bind,
  bindMethod,
  call,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_complete,
  QueueableLike_enqueue,
  QueueableLike_isCompleted,
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
} from "../../utils.js";
import * as Disposable from "../Disposable.js";
import * as DisposableContainer from "../DisposableContainer.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";

export const LiftedObserverLike_delegate = Symbol(
  "LiftedObserverLike_delegate",
);

export const LiftedObserverLike_notify = Symbol("LiftedObserverLike_notify");

export interface LiftedObserverLike<
  TA = unknown,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
> extends ObserverLike<TA> {
  readonly [LiftedObserverLike_delegate]: TDelegateObserver &
    Partial<LiftedObserverLike<TB>>;

  [LiftedObserverLike_notify](next: TA): boolean;
}

const LiftedObserverMixin: <
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => Mixin1<
  LiftedObserverLike<TA, TB, TDelegateObserver>,
  TDelegateObserver,
  Pick<
    LiftedObserverLike<TA, TB, TDelegateObserver>,
    keyof DisposableLike | typeof LiftedObserverLike_notify
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
        while (observer[QueueLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as TA;
          if (!observer[LiftedObserverLike_notify](next)) {
            observer[SchedulerLike_requestYield]();
          }

          if (observer[QueueLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (observer[QueueableLike_isCompleted]) {
          observer[DisposableLike_dispose]();
        }
      };

      observer[SerialDisposableLike_current] =
        observer[SchedulerLike_schedule](continuation);
    }
  };

  const queueProtoype = getPrototype(QueueMixin<TA>());

  return returns(
    mix<
      LiftedObserverLike<TA, TB, TDelegateObserver>,
      TProperties,
      Omit<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
        | keyof DisposableLike
        | typeof SchedulerLike_inContinuation
        | typeof QueueableLike_isReady
        | typeof QueueableLike_isCompleted
        | typeof QueueableLike_onReady
        | typeof QueueableLike_backpressureStrategy
        | typeof QueueableLike_capacity
        | typeof SchedulerLike_inContinuation
        | typeof LiftedObserverLike_notify
        | typeof LiftedObserverLike_delegate
      >,
      Pick<
        LiftedObserverLike<TA, TB, TDelegateObserver>,
        keyof DisposableLike | typeof LiftedObserverLike_notify
      >,
      TDelegateObserver
    >(
      include(QueueMixin(), SerialDisposableMixin()),
      function LiftedObserverMixin(
        this: TProperties &
          Omit<
            LiftedObserverLike<TA, TB, TDelegateObserver>,
            | typeof SchedulerLike_inContinuation
            | typeof QueueableLike_isReady
            | typeof QueueableLike_isCompleted
            | typeof QueueableLike_onReady
            | typeof QueueableLike_backpressureStrategy
            | typeof QueueableLike_capacity
          >,
        delegate: TDelegateObserver,
      ): LiftedObserverLike<TA, TB, TDelegateObserver> {
        init(QueueMixin<TA>(), this, {
          backpressureStrategy: delegate[QueueableLike_backpressureStrategy],
          capacity: delegate[QueueableLike_capacity],
        });

        init(SerialDisposableMixin(), this, Disposable.disposed);
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
          DisposableContainer.onDisposed(
            bindMethod(this, QueueableLike_complete),
          ),
        );

        return this;
      },
      props<TProperties>({
        [SchedulerLike_inContinuation]: false,
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
            this[LiftedObserverMixin_scheduler][SchedulerLike_schedule](
              bind(this[LiftedObserverMixin_schedulerCallback], continuation),
              options,
            ),
            Disposable.addToContainer(this),
          );
        },

        [QueueableLike_enqueue](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB, TDelegateObserver>,
          next: TA,
        ): boolean {
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];

          const shouldIgnore =
            this[QueueableLike_isCompleted] || this[DisposableLike_isDisposed];
          const shouldNotify = inSchedulerContinuation && !shouldIgnore;
          const shouldEnqueue = !inSchedulerContinuation && !shouldIgnore;

          const result =
            (shouldNotify && this[LiftedObserverLike_notify](next)) ||
            (shouldEnqueue &&
              (scheduleDrainQueue(this),
              call(queueProtoype[QueueableLike_enqueue], this, next)));

          return result && this[QueueableLike_isReady];
        },

        [QueueableLike_complete](
          this: TProperties &
            ObserverLike<TA> &
            QueueLike<TA> &
            SerialDisposableLike &
            LiftedObserverLike<TA, TB, TDelegateObserver>,
        ) {
          const isCompleted = this[QueueableLike_isCompleted];
          const isDisposed = this[DisposableLike_isDisposed];

          call(queueProtoype[QueueableLike_complete], this);

          if (!isCompleted && this[QueueLike_count] > 0 && !isDisposed) {
            scheduleDrainQueue(this);
          } else {
            this[DisposableLike_dispose]();
          }
        },
      }),
    ),
  );
})();

/*
const LiftedObserverMixin: <
  TA,
  TB = TA,
  TDelegateObserver extends ObserverLike<TB> = ObserverLike<TB>,
>() => Mixin1<
  LiftedObserverLike<TA, TB, TDelegateObserver>,
  TDelegateObserver,
  ObserverLike<TA>
> =  (<TA, TB, TObserver extends ObserverLike<TB>>() => {
  type TProperties = {
    [LiftedObserverLike_delegate]: TObserver;
  };

  return returns(
    mix(
      function LiftedObserverMixin(
        this: ObserverLike<TA> & TProperties,
        delegate: TObserver,
      ): LiftedObserverLike<TA, TB, TObserver> {
        this[LiftedObserverLike_delegate] = delegate;

        return this;
      },
      props<TProperties>({
        [LiftedObserverLike_delegate]: none,
      }),
    ),
  );
})();*/

export default LiftedObserverMixin;
