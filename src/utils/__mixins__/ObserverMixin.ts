import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import * as Publisher from "../../computations/Publisher.js";
import { PublisherLike } from "../../computations.js";
import {
  Method1,
  SideEffect1,
  bind,
  call,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DispatcherLike_complete,
  DispatcherLike_isCompleted,
  DispatcherLike_onReady,
  DisposableContainerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  EventListenerLike_notify,
  ObserverLike,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
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
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";
import * as DisposableContainer from "../DisposableContainer.js";

export const ObserverMixinBaseLike_notify = Symbol("ObserverLike_notify");

export interface ObserverMixinBaseLike<T = unknown> {
  [ObserverMixinBaseLike_notify](next: T): boolean;
}

const ObserverMixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
  ObserverMixinBaseLike<T> & DisposableLike
> = /*@__PURE__*/ (<T>() => {
  const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
  const ObserverMixin_rootScheduler = Symbol("ObserverMixin_rootScheduler");
  const ObserverMixin_schedulerCallback = Symbol(
    "ObserverMixin_schedulerCallback",
  );

  type TProperties = {
    [ObserverMixin_scheduler]: SchedulerLike;
    [ObserverMixin_rootScheduler]: SchedulerLike;
    [ObserverMixin_schedulerCallback]: Method1<
      SideEffect1<ContinuationContextLike>,
      ContinuationContextLike
    >;
    [DispatcherLike_isCompleted]: boolean;
    [DispatcherLike_onReady]: PublisherLike<void>;
    [SchedulerLike_inContinuation]: boolean;
  };

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<T> &
      QueueLike<T> &
      SerialDisposableLike,
  ) => {
    if (observer[SerialDisposableLike_current][DisposableLike_isDisposed]) {
      const continuation = (ctx: ContinuationContextLike) => {
        while (observer[QueueLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as T;
          observer[QueueableLike_enqueue](next);

          if (observer[QueueLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (observer[DispatcherLike_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[DispatcherLike_onReady][EventListenerLike_notify](none);
        }
      };

      observer[SerialDisposableLike_current] =
        observer[SchedulerLike_schedule](continuation);
    }
  };

  const queueProtoype = getPrototype(QueueMixin<T>());

  return returns(
    mix<
      ObserverLike<T>,
      TProperties,
      Omit<
        SchedulerLike,
        keyof DisposableContainerLike | typeof SchedulerLike_inContinuation
      > &
        Pick<
          ObserverLike<T>,
          | typeof QueueableLike_enqueue
          | typeof DispatcherLike_complete
          | typeof QueueableLike_enqueue
        >,
      ObserverMixinBaseLike<T> & DisposableLike,
      SchedulerLike,
      Pick<
        QueueableLike,
        | typeof QueueableLike_capacity
        | typeof QueueableLike_backpressureStrategy
      >
    >(
      include(QueueMixin(), SerialDisposableMixin()),
      function ObserverMixin(
        this: Omit<
          SchedulerLike,
          keyof DisposableContainerLike | typeof SchedulerLike_inContinuation
        > &
          DisposableLike &
          Pick<
            ObserverLike<T>,
            | typeof QueueableLike_enqueue
            | typeof DispatcherLike_complete
            | typeof QueueableLike_enqueue
          > &
          TProperties &
          ObserverMixinBaseLike<T>,
        scheduler: SchedulerLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(QueueMixin<T>(), this, {
          backpressureStrategy: config[QueueableLike_backpressureStrategy],
          capacity: config[QueueableLike_capacity],
        });

        init(SerialDisposableMixin(), this, Disposable.disposed);

        this[ObserverMixin_scheduler] = scheduler;
        this[ObserverMixin_rootScheduler] =
          (scheduler as unknown as TProperties)[ObserverMixin_rootScheduler] ??
          scheduler;

        this[DispatcherLike_onReady] = pipe(
          Publisher.create<void>(),
          Disposable.addTo(this),
        );

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const instance = this;

        this[ObserverMixin_schedulerCallback] =
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
          DisposableContainer.onDisposed(_ => {
            this[DispatcherLike_isCompleted] = true;
          }),
        );

        return this;
      },
      props<TProperties>({
        [ObserverMixin_scheduler]: none,
        [SchedulerLike_inContinuation]: false,
        [ObserverMixin_rootScheduler]: none,
        [ObserverMixin_schedulerCallback]: none,
        [DispatcherLike_isCompleted]: false,
        [DispatcherLike_onReady]: none,
      }),
      {
        get [SchedulerLike_maxYieldInterval]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_rootScheduler][
            SchedulerLike_maxYieldInterval
          ];
        },

        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_rootScheduler][SchedulerLike_now];
        },

        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_rootScheduler][SchedulerLike_shouldYield];
        },

        [SchedulerLike_requestYield](this: TProperties) {
          this[ObserverMixin_rootScheduler][SchedulerLike_requestYield]();
        },

        [SchedulerLike_schedule](
          this: TProperties & SchedulerLike & DisposableLike,
          continuation: SideEffect1<ContinuationContextLike>,
          options?: {
            readonly delay?: number;
          },
        ): DisposableLike {
          return pipe(
            this[ObserverMixin_scheduler][SchedulerLike_schedule](
              bind(this[ObserverMixin_schedulerCallback], continuation),
              options,
            ),
            Disposable.addToContainer(this),
          );
        },

        [QueueableLike_enqueue](
          this: TProperties &
            ObserverLike<T> &
            QueueLike<T> &
            SerialDisposableLike &
            ObserverMixinBaseLike<T>,
          next: T,
        ): boolean {
          let result = true;

          const isCompleted = this[DispatcherLike_isCompleted];
          const isDisposed = this[DisposableLike_isDisposed];
          const inSchedulerContinuation = this[SchedulerLike_inContinuation];

          if ((isCompleted && !inSchedulerContinuation) || isDisposed) {
            // noop
          } else if (inSchedulerContinuation) {
            result = this[ObserverMixinBaseLike_notify](next);
          } else {
            result = call(queueProtoype[QueueableLike_enqueue], this, next);

            scheduleDrainQueue(this);
          }

          return result;
        },

        [DispatcherLike_complete](
          this: TProperties &
            ObserverLike<T> &
            QueueLike<T> &
            SerialDisposableLike,
        ) {
          const isCompleted = this[DispatcherLike_isCompleted];
          this[DispatcherLike_isCompleted] = true;

          if (!isCompleted && this[QueueLike_count] > 0) {
            scheduleDrainQueue(this);
          } else {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
  );
})();

export default ObserverMixin;
