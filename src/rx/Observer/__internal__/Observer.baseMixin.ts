import {
  Mixin1,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  BufferLike_capacity,
  ObserverMixin_dispatchSubscription,
  ObserverMixin_isCompleted,
  SchedulerLike_schedule,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
import { call, pipe, returns, unsafeCast } from "../../../functions.js";
import {
  DispatcherLike_complete,
  ObserverLike,
  ObserverLike_notify,
} from "../../../rx.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike,
} from "../../../scheduling.js";
import {
  CollectionLike_count,
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike,
  QueueableLike_backpressureStrategy,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_addTo from "../../../util/Disposable/__internal__/Disposable.addTo.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";

type TObserverBaseMixin<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | keyof SchedulerLike | typeof ObserverLike_notify
>;

const Observer_baseMixin: <T>() => Mixin1<
  TObserverBaseMixin<T>,
  {
    readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly [BufferLike_capacity]: number;
  }
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [ObserverMixin_isCompleted]: boolean;
    [ObserverMixin_dispatchSubscription]: DisposableLike;
  };

  const scheduleDrainQueue = (
    observer: TProperties & ObserverLike<T> & QueueLike<T>,
  ) => {
    if (
      observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
    ) {
      const continuation = (ctx: ContinuationContextLike) => {
        unsafeCast<TProperties & ObserverLike<T>>(observer);

        while (observer[CollectionLike_count] > 0) {
          const next = observer[QueueLike_dequeue]() as T;
          observer[ObserverLike_notify](next);

          if (observer[CollectionLike_count] > 0) {
            ctx[ContinuationContextLike_yield]();
          }
        }

        if (observer[ObserverMixin_isCompleted]) {
          observer[DisposableLike_dispose]();
        }
      };

      observer[ObserverMixin_dispatchSubscription] = pipe(
        observer[SchedulerLike_schedule](continuation),
        Disposable_addTo(observer),
      );
    }
  };

  const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin<T>());

  return returns(
    mix(
      include(IndexedQueue_fifoQueueMixin()),
      function ObserverMixin(
        instance: Pick<ObserverLike, typeof DispatcherLike_complete>,
        config: {
          readonly [QueueableLike_backpressureStrategy]: QueueableLike[typeof QueueableLike_backpressureStrategy];
          readonly [BufferLike_capacity]: number;
        },
      ): TObserverBaseMixin<T> {
        init(
          // FIXME: Change this to take a config
          IndexedQueue_fifoQueueMixin<T>(),
          instance,
          config[BufferLike_capacity],
          config[QueueableLike_backpressureStrategy],
        );

        return instance;
      },
      props<TProperties>({
        [ObserverMixin_isCompleted]: false,
        [ObserverMixin_dispatchSubscription]: Disposable_disposed,
      }),
      {
        [QueueableLike_enqueue](
          this: TProperties & ObserverLike<T> & QueueLike<T>,
          next: T,
        ): boolean {
          if (
            !this[ObserverMixin_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              fifoQueueProtoype[QueueableLike_enqueue],
              this,
              next,
            );
            scheduleDrainQueue(this);
            return result;
          }
          return true;
        },

        [DispatcherLike_complete](
          this: TProperties & ObserverLike<T> & QueueLike<T>,
        ) {
          const isCompleted = this[ObserverMixin_isCompleted];
          this[ObserverMixin_isCompleted] = true;

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

export default Observer_baseMixin;
