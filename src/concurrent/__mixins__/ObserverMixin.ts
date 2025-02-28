import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { ComputationLike_isSynchronous } from "../../computations.js";
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
import * as Publisher from "../../events/Publisher.js";
import {
  EventListenerLike,
  EventListenerLike_notify,
  EventSourceLike,
  EventSourceLike_addEventListener,
  PublisherLike,
} from "../../events.js";
import {
  Optional,
  SideEffect1,
  bind,
  call,
  none,
  pipe,
  returns,
} from "../../functions.js";
import * as Disposable from "../../utils/Disposable.js";
import * as DisposableContainer from "../../utils/DisposableContainer.js";
import QueueMixin from "../../utils/__mixins__/QueueMixin.js";
import SerialDisposableMixin from "../../utils/__mixins__/SerialDisposableMixin.js";
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
  SerialDisposableLike,
  SerialDisposableLike_current,
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
  const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");
  const ObserverMixin_publisher = Symbol("ObserverMixin_publisher");

  type TProperties = {
    [DispatcherLike_isCompleted]: boolean;
    [ObserverMixin_scheduler]: SchedulerLike;
    [ObserverMixin_publisher]: Optional<
      PublisherLike<
        | typeof DispatcherLikeEvent_ready
        | typeof DispatcherLikeEvent_capacityExceeded
        | typeof DispatcherLikeEvent_completed
      >
    >;
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

        if (observer[DispatcherLike_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[ObserverMixin_publisher]?.[EventListenerLike_notify](
            DispatcherLikeEvent_ready,
          );
        }
      };

      observer[SerialDisposableLike_current] =
        observer[SchedulerLike_schedule](continuation);
    }
  };

  const queueProtoype = getPrototype(QueueMixin<T>());

  function onPublisherDisposed(this: TProperties) {
    this[ObserverMixin_publisher] = none;
  }

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
          | typeof EventSourceLike_addEventListener
          | typeof ComputationLike_isSynchronous
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
        instance: Omit<SchedulerLike, keyof DisposableContainerLike> &
          DisposableLike &
          Pick<
            ObserverLike<T>,
            | typeof ObserverLike_notify
            | typeof DispatcherLike_complete
            | typeof QueueableLike_enqueue
            | typeof EventSourceLike_addEventListener
            | typeof ComputationLike_isSynchronous
          > &
          TProperties,
        scheduler: SchedulerLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): ObserverLike<T> {
        init(QueueMixin<T>(), instance, {
          backpressureStrategy: config[QueueableLike_backpressureStrategy],
          capacity: config[QueueableLike_capacity],
        });

        init(SerialDisposableMixin(), instance, Disposable.disposed);

        instance[ObserverMixin_scheduler] =
          (scheduler as unknown as TProperties)[ObserverMixin_scheduler] ??
          scheduler;

        return instance;
      },
      props<TProperties>({
        [DispatcherLike_isCompleted]: false,
        [ObserverMixin_scheduler]: none,
        [ObserverMixin_publisher]: none,
      }),
      {
        [ComputationLike_isSynchronous]: false as const,

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
          if (
            !this[DispatcherLike_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              queueProtoype[QueueableLike_enqueue],
              this,
              next,
            );

            if (!result) {
              this[ObserverMixin_publisher]?.[EventListenerLike_notify](
                DispatcherLikeEvent_capacityExceeded,
              );
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
            SerialDisposableLike,
        ) {
          const isCompleted = this[DispatcherLike_isCompleted];
          this[DispatcherLike_isCompleted] = true;

          if (!isCompleted) {
            this[ObserverMixin_publisher]?.[EventListenerLike_notify](
              DispatcherLikeEvent_completed,
            );
          }

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

        [EventSourceLike_addEventListener](
          this: EventSourceLike<
            | typeof DispatcherLikeEvent_ready
            | typeof DispatcherLikeEvent_capacityExceeded
            | typeof DispatcherLikeEvent_completed
          > &
            TProperties &
            DisposableLike,
          listener: EventListenerLike<
            | typeof DispatcherLikeEvent_ready
            | typeof DispatcherLikeEvent_capacityExceeded
            | typeof DispatcherLikeEvent_completed
          >,
        ): void {
          const publisher =
            this[ObserverMixin_publisher] ??
            (() => {
              const publisher = pipe(
                Publisher.create({ autoDispose: true }),
                Disposable.addTo(this),
                DisposableContainer.onDisposed(bind(onPublisherDisposed, this)),
              );
              this[ObserverMixin_publisher] = publisher;
              return publisher;
            })();

          publisher[EventSourceLike_addEventListener](listener);
        },
      },
    ),
  );
})();

export default ObserverMixin;
