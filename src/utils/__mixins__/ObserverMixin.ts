import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import * as WritableStore from "../../computations/WritableStore.js";
import { StoreLike_value, WritableStoreLike } from "../../computations.js";
import { SideEffect1, call, none, pipe, returns } from "../../functions.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DispatcherLike_complete,
  DispatcherLike_state,
  DispatcherState,
  DispatcherState_capacityExceeded,
  DispatcherState_completed,
  DispatcherState_ready,
  DisposableContainerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  ObserverLike_notify,
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
import * as DisposableContainer from "../DisposableContainer.js";
import Observer_assertObserverState from "../Observer/__internal__/Observer.assertObserverState.js";
import QueueMixin from "./QueueMixin.js";
import SerialDisposableMixin from "./SerialDisposableMixin.js";

const ObserverMixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");

  type TProperties = {
    [ObserverMixin_scheduler]: SchedulerLike;
    [DispatcherLike_state]: WritableStoreLike<DispatcherState>;
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
          observer[ObserverLike_notify](next);

          if (observer[QueueLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (
          observer[DispatcherLike_state][StoreLike_value] ===
          DispatcherState_completed
        ) {
          observer[DisposableLike_dispose]();
        } else {
          observer[DispatcherLike_state][StoreLike_value] =
            DispatcherState_ready;
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
      Omit<SchedulerLike, keyof DisposableContainerLike> &
        Pick<
          ObserverLike<T>,
          | typeof ObserverLike_notify
          | typeof DispatcherLike_complete
          | typeof QueueableLike_enqueue
        >,
      DisposableLike,
      SchedulerLike,
      Pick<
        QueueableLike,
        | typeof QueueableLike_capacity
        | typeof QueueableLike_backpressureStrategy
      >
    >(
      include(QueueMixin(), SerialDisposableMixin()),
      function ObserverMixin(
        this: Omit<SchedulerLike, keyof DisposableContainerLike> &
          DisposableLike &
          Pick<
            ObserverLike<T>,
            | typeof ObserverLike_notify
            | typeof DispatcherLike_complete
            | typeof QueueableLike_enqueue
          > &
          TProperties,
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

        this[ObserverMixin_scheduler] =
          (scheduler as unknown as TProperties)[ObserverMixin_scheduler] ??
          scheduler;

        this[DispatcherLike_state] = pipe(
          WritableStore.create<DispatcherState>(DispatcherState_ready),
          Disposable.addTo(this),
        );

        pipe(
          this,
          DisposableContainer.onDisposed(_ => {
            this[DispatcherLike_state][StoreLike_value] =
              DispatcherState_completed;
          }),
        );

        return this;
      },
      props<TProperties>({
        [DispatcherLike_state]: none,
        [ObserverMixin_scheduler]: none,
      }),
      {
        get [SchedulerLike_inContinuation]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_inContinuation];
        },

        get [SchedulerLike_maxYieldInterval]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_maxYieldInterval];
        },

        get [SchedulerLike_now]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_now];
        },

        get [SchedulerLike_shouldYield]() {
          unsafeCast<TProperties>(this);
          return this[ObserverMixin_scheduler][SchedulerLike_shouldYield];
        },

        [SchedulerLike_requestYield](this: TProperties) {
          this[ObserverMixin_scheduler][SchedulerLike_requestYield]();
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
              continuation,
              options,
            ),
            Disposable.addToContainer(this),
          );
        },

        [QueueableLike_enqueue](
          this: TProperties &
            ObserverLike<T> &
            QueueLike<T> &
            SerialDisposableLike,
          next: T,
        ): boolean {
          let result = true;
          if (
            !(
              this[DispatcherLike_state][StoreLike_value] ===
              DispatcherState_completed
            ) &&
            !this[DisposableLike_isDisposed]
          ) {
            result = call(queueProtoype[QueueableLike_enqueue], this, next);

            if (!result) {
              this[DispatcherLike_state][StoreLike_value] =
                DispatcherState_capacityExceeded;
            }

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
          const isCompleted =
            this[DispatcherLike_state][StoreLike_value] ===
            DispatcherState_completed;
          this[DispatcherLike_state][StoreLike_value] =
            DispatcherState_completed;

          if (
            this[SerialDisposableLike_current][DisposableLike_isDisposed] &&
            !isCompleted
          ) {
            this[DisposableLike_dispose]();
          }
        },

        [ObserverLike_notify]: Observer_assertObserverState(function (
          this: ObserverLike,
          _: T,
        ) {}),
      },
    ),
  );
})();

export default ObserverMixin;
