import {
  Mixin1,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  __ObserverMixin_dispatchSubscription,
  __ObserverMixin_isCompleted,
} from "../../../__internal__/symbols.js";
import {
  IndexedQueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.js";
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
  SchedulerLike_schedule,
} from "../../../scheduling.js";
import {
  BufferLike_capacity,
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
    [__ObserverMixin_isCompleted]: boolean;
    [__ObserverMixin_dispatchSubscription]: DisposableLike;
  };

  const scheduleDrainQueue = (
    observer: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
  ) => {
    if (
      observer[__ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
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

        if (observer[__ObserverMixin_isCompleted]) {
          observer[DisposableLike_dispose]();
        }
      };

      observer[__ObserverMixin_dispatchSubscription] = pipe(
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
        [__ObserverMixin_isCompleted]: false,
        [__ObserverMixin_dispatchSubscription]: Disposable_disposed,
      }),
      {
        [QueueableLike_enqueue](
          this: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
          next: T,
        ): boolean {
          if (
            !this[__ObserverMixin_isCompleted] &&
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
          this: TProperties & ObserverLike<T> & IndexedQueueLike<T>,
        ) {
          const isCompleted = this[__ObserverMixin_isCompleted];
          this[__ObserverMixin_isCompleted] = true;

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
