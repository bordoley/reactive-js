import {
  Mixin2,
  getPrototype,
  include,
  init,
  mix,
  props,
  unsafeCast,
} from "../../__internal__/mixins.js";
import { CollectionLike_count } from "../../collections.js";
import {
  DispatcherLikeEventMap,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  DispatcherLike_complete,
  ObserverLike,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_maxYieldInterval,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
  SchedulerLike_yield,
} from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceMixin_publisher,
} from "../../events/__mixins__/LazyInitEventSourceMixin.js";
import {
  Function3,
  SideEffect1,
  call,
  none,
  pipe,
  returns,
} from "../../functions.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  IndexedQueueLike,
  QueueLike_dequeue,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../utils.js";
import * as Disposable from "../../utils/Disposable.js";
import IndexedQueueMixin from "../../utils/__mixins__/IndexedQueueMixin.js";

const ObserverMixin: <T>() => Mixin2<
  ObserverLike<T>,
  SchedulerLike,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [QueueableLike_capacity]: number;
  },
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  const ObserverMixin_isCompleted = Symbol("ObserverMixin_isCompleted");
  const ObserverMixin_dispatchSubscription = Symbol(
    "ObserverMixin_dispatchSubscription",
  );
  const ObserverMixin_scheduler = Symbol("ObserverMixin_scheduler");

  type TProperties = {
    [ObserverMixin_isCompleted]: boolean;
    [ObserverMixin_dispatchSubscription]: DisposableLike;
    [ObserverMixin_scheduler]: SchedulerLike;
  };

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<T> &
      IndexedQueueLike<T> &
      LazyInitEventSourceLike<
        DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
      >,
  ) => {
    if (
      observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
    ) {
      const continuation = (scheduler: SchedulerLike) => {
        unsafeCast<TProperties & ObserverLike<T>>(observer);

        while (observer[CollectionLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as T;
          observer[SinkLike_notify](next);

          if (observer[CollectionLike_count] > 0) {
            scheduler[SchedulerLike_yield]();
          }
        }

        if (observer[ObserverMixin_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](
            DispatcherLikeEvent_ready,
          );
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
      Function3<
        DisposableLike &
          SchedulerLike &
          Pick<
            ObserverLike<T>,
            | typeof SinkLike_notify
            | typeof DispatcherLike_complete
            | typeof QueueableLike_enqueue
          > &
          TProperties,
        ObserverLike,
        {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [QueueableLike_capacity]: number;
        },
        ObserverLike<T>
      >,
      ReturnType<typeof props<TProperties>>,
      SchedulerLike &
        Pick<
          ObserverLike<T>,
          | typeof SinkLike_notify
          | typeof DispatcherLike_complete
          | typeof QueueableLike_enqueue
        >,
      DisposableLike
    >(
      include(IndexedQueueMixin(), LazyInitEventSourceMixin()),
      function ObserverMixin(
        instance: SchedulerLike &
          DisposableLike &
          Pick<
            ObserverLike<T>,
            | typeof SinkLike_notify
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
        init(
          // FIXME: Change this to take a config
          IndexedQueueMixin<T>(),
          instance,
          config[QueueableLike_capacity],
          config[QueueableLike_backpressureStrategy],
        );

        init(LazyInitEventSourceMixin(), instance);

        instance[ObserverMixin_scheduler] = scheduler;

        return instance;
      },
      props<TProperties>({
        [ObserverMixin_isCompleted]: false,
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
          continuation: SideEffect1<SchedulerLike>,
          options?: {
            readonly delay?: number;
          },
        ): DisposableLike {
          return pipe(
            this[ObserverMixin_scheduler][SchedulerLike_schedule](
              continuation,
              options,
            ),
            Disposable.addTo(this, { ignoreChildErrors: true }),
          );
        },

        [SchedulerLike_yield](
          this: TProperties & SchedulerLike & DisposableLike,
          delay?: number,
        ) {
          this[ObserverMixin_scheduler][SchedulerLike_yield](delay);
        },

        [QueueableLike_enqueue](
          this: TProperties &
            ObserverLike<T> &
            IndexedQueueLike<T> &
            LazyInitEventSourceLike<
              DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
            >,
          next: T,
        ): boolean {
          if (
            !this[ObserverMixin_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              next,
            );

            if (!result) {
              this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](
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
            IndexedQueueLike<T> &
            LazyInitEventSourceLike<
              DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
            >,
        ) {
          const isCompleted = this[ObserverMixin_isCompleted];
          this[ObserverMixin_isCompleted] = true;

          if (!isCompleted) {
            this[LazyInitEventSourceMixin_publisher]?.[SinkLike_notify](
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

        [SinkLike_notify](this: ObserverLike, _: T) {},
      },
    ),
  );
})();

export default ObserverMixin;
