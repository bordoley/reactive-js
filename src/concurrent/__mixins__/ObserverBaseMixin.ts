import {
  Mixin1,
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
  SchedulerLike_schedule,
  SchedulerLike_yield,
} from "../../concurrent.js";
import { SinkLike_notify } from "../../events.js";
import LazyInitEventSourceMixin, {
  LazyInitEventSourceLike,
  LazyInitEventSourceMixin_publisher,
} from "../../events/__mixins__/LazyInitEventSourceMixin.js";
import { Function2, call, pipe, returns } from "../../functions.js";
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

type TObserverBaseMixin<T> = Omit<
  ObserverLike<T>,
  keyof SchedulerLike | typeof SinkLike_notify
>;

const ObserverBaseMixin: <T>() => Mixin1<
  TObserverBaseMixin<T>,
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

  type TProperties = {
    [ObserverMixin_isCompleted]: boolean;
    [ObserverMixin_dispatchSubscription]: DisposableLike;
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
      Function2<
        Pick<
          ObserverLike,
          typeof DispatcherLike_complete | typeof QueueableLike_enqueue
        > &
          DisposableLike,
        {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [QueueableLike_capacity]: number;
        },
        TObserverBaseMixin<T>
      >,
      ReturnType<typeof props<TProperties>>,
      Pick<
        ObserverLike,
        typeof DispatcherLike_complete | typeof QueueableLike_enqueue
      >,
      DisposableLike
    >(
      include(IndexedQueueMixin(), LazyInitEventSourceMixin()),
      function ObserverMixin(
        instance: Pick<
          ObserverLike,
          typeof DispatcherLike_complete | typeof QueueableLike_enqueue
        > &
          DisposableLike,
        config: Pick<
          QueueableLike,
          | typeof QueueableLike_capacity
          | typeof QueueableLike_backpressureStrategy
        >,
      ): TObserverBaseMixin<T> {
        init(
          // FIXME: Change this to take a config
          IndexedQueueMixin<T>(),
          instance,
          config[QueueableLike_capacity],
          config[QueueableLike_backpressureStrategy],
        );

        init(LazyInitEventSourceMixin(), instance);

        return instance;
      },
      props<TProperties>({
        [ObserverMixin_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable.disposed,
      }),
      {
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
      },
    ),
  );
})();

export default ObserverBaseMixin;
