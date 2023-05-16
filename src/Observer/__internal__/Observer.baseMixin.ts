import Disposable_addTo from "../../Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../Disposable/__internal__/Disposable.disposed.js";
import EventSource_lazyInitPublisherMixin, {
  LazyInitEventMixin_eventPublisher,
  LazyInitEventSource,
} from "../../EventSource/__internal__/EventSource.lazyInitPublisherMixin.js";
import Queue_indexedQueueMixin from "../../Queue/__internal__/Queue.indexedQueueMixin.js";
import {
  Mixin1,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../__internal__/mixins.js";
import {
  __ObserverMixin_dispatchSubscription,
  __ObserverMixin_isCompleted,
} from "../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike_dequeue,
} from "../../__internal__/types.js";
import { Function2, call, pipe, returns, unsafeCast } from "../../functions.js";
import {
  BufferLike_capacity,
  CollectionLike_count,
  DispatcherLikeEventMap,
  DispatcherLikeEvent_capacityExceeded,
  DispatcherLikeEvent_completed,
  DispatcherLikeEvent_ready,
  DispatcherLike_complete,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  ObserverLike,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
  SchedulerLike,
  SchedulerLike_schedule,
  SchedulerLike_yield,
  SinkLike_notify,
} from "../../types.js";

type TObserverBaseMixin<T> = Omit<
  ObserverLike<T>,
  keyof SchedulerLike | typeof SinkLike_notify
>;

const Observer_baseMixin: <T>() => Mixin1<
  TObserverBaseMixin<T>,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  },
  DisposableLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [__ObserverMixin_isCompleted]: boolean;
    [__ObserverMixin_dispatchSubscription]: DisposableLike;
  };

  const scheduleDrainQueue = (
    observer: TProperties &
      ObserverLike<T> &
      IndexedQueueLike<T> &
      LazyInitEventSource<DispatcherLikeEventMap[keyof DispatcherLikeEventMap]>,
  ) => {
    if (
      observer[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
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

        if (observer[__ObserverMixin_isCompleted]) {
          observer[DisposableLike_dispose]();
        } else {
          observer[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](
            DispatcherLikeEvent_ready,
          );
        }
      };

      observer[__ObserverMixin_dispatchSubscription] = pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable_addTo(observer),
      );
    }
  };

  const indexedQueueProtoype = getPrototype(Queue_indexedQueueMixin<T>());

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
          readonly [BufferLike_capacity]: number;
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
      include(Queue_indexedQueueMixin(), EventSource_lazyInitPublisherMixin()),
      function ObserverMixin(
        instance: Pick<
          ObserverLike,
          typeof DispatcherLike_complete | typeof QueueableLike_enqueue
        > &
          DisposableLike,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverBaseMixin<T> {
        init(
          // FIXME: Change this to take a config
          Queue_indexedQueueMixin<T>(),
          instance,
          config[BufferLike_capacity],
          config[QueueableLike_backpressureStrategy],
        );

        init(EventSource_lazyInitPublisherMixin(), instance);

        return instance;
      },
      props<TProperties>({
        [__ObserverMixin_isCompleted]: false,
        [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
      }),
      {
        [QueueableLike_enqueue](
          this: TProperties &
            ObserverLike<T> &
            IndexedQueueLike<T> &
            LazyInitEventSource<
              DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
            >,
          next: T,
        ): boolean {
          if (
            !this[__ObserverMixin_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              indexedQueueProtoype[QueueableLike_enqueue],
              this,
              next,
            );

            if (!result) {
              this[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](
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
            LazyInitEventSource<
              DispatcherLikeEventMap[keyof DispatcherLikeEventMap]
            >,
        ) {
          const isCompleted = this[__ObserverMixin_isCompleted];
          this[__ObserverMixin_isCompleted] = true;

          if (!isCompleted) {
            this[LazyInitEventMixin_eventPublisher]?.[SinkLike_notify](
              DispatcherLikeEvent_completed,
            );
          }

          if (
            this[__ObserverMixin_dispatchSubscription][
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

export default Observer_baseMixin;
