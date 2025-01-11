import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  DispatcherLike_complete,
  DispatcherLike_isCompleted,
  ObserverLike,
  ObserverLike_notify,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../../concurrent.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceLike_publisher,
} from "../../events/__mixins__/LazyInitEventSourceMixin.js";
import { EventListenerLike_notify } from "../../events.js";
import { SideEffect1, call, none, pipe, returns } from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";
import {
  DisposableContainerLike,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueLike,
  QueueLike_count,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import Observer_assertObserverState from "../Observer/__private__/Observer.assertObserverState.js";

const ObserverMixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  Pick<
    QueueableLike,
    typeof QueueableLike_capacity | typeof QueueableLike_backpressureStrategy
  >,
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  const ObserverMixin_dispatchSubscription = Symbol(
    "ObserverMixin_dispatchSubscription",
  );
  const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");

  type TProperties = {
    [DispatcherLike_isCompleted]: boolean;
    [ObserverMixin_dispatchSubscription]: DisposableLike;
    [ObserverMixin_scheduler]: SchedulerLike;
  };

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<T> &
      QueueLike<T> &
      LazyInitEventSourceLike<
        | typeof DispatcherLikeEvent_ready
        | typeof DispatcherLikeEvent_capacityExceeded
        | typeof DispatcherLikeEvent_completed
      >,
  ) => {
    if (
      observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
    ) {
      const continuation = (ctx: ContinuationContextLike) => {
        while (observer[QueueLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as T;
          observer[ObserverLike_notify](next);

          if (observer[QueueLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (observer[DispatcherLike_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[LazyInitEventSourceLike_publisher]?.[
            EventListenerLike_notify
          ](DispatcherLikeEvent_ready);
        }
      };

      observer[ObserverMixin_dispatchSubscription] = pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable.addTo(observer),
      );
    }
  };

  const indexedQueueProtoype = getPrototype(IndexedQueueMixin<T>());

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
      include(IndexedQueueMixin(), LazyInitEventSourceMixin()),
      function ObserverMixin(
        instance: Omit<SchedulerLike, keyof DisposableContainerLike> &
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
        init(IndexedQueueMixin<T>(), instance, config);

        init(LazyInitEventSourceMixin(), instance);

        instance[ObserverMixin_scheduler] = scheduler;

        return instance;
      },
      props<TProperties>({
        [DispatcherLike_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable.disposed,
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
            LazyInitEventSourceLike<
              | typeof DispatcherLikeEvent_ready
              | typeof DispatcherLikeEvent_capacityExceeded
              | typeof DispatcherLikeEvent_completed
            >,
          next: T,
        ): boolean {
          if (
            !this[DispatcherLike_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              next,
            );

            if (!result) {
              this[LazyInitEventSourceLike_publisher]?.[
                EventListenerLike_notify
              ](DispatcherLikeEvent_capacityExceeded);
            }

            scheduleDrainQueue(this);
            return result;
          }
          return true;
        },

        [DispatcherLike_complete](
          this: TProperties &
            ObserverLike<T> &
            QueueLike<T> &
            LazyInitEventSourceLike<
              | typeof DispatcherLikeEvent_ready
              | typeof DispatcherLikeEvent_capacityExceeded
              | typeof DispatcherLikeEvent_completed
            >,
        ) {
          const isCompleted = this[DispatcherLike_isCompleted];
          this[DispatcherLike_isCompleted] = true;

          if (!isCompleted) {
            this[LazyInitEventSourceLike_publisher]?.[EventListenerLike_notify](
              DispatcherLikeEvent_completed,
            );
          }

          if (
            this[ObserverMixin_dispatchSubscription][
              DisposableLike_isDisposed
            ] &&
            !isCompleted
          ) {
            this[DisposableLike_dispose]();
          }
        },

        [ObserverLike_notify](this: ObserverLike, _: T) {
          Observer_assertObserverState(this);
        },
      },
    ),
  );
})();

export default ObserverMixin;
