import {
  Mixin3,
  Mutable,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObserverMixin_continuation,
  ObserverMixin_dispatchSubscription,
  ObserverMixin_isCompleted,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_dequeue,
} from "../../../__internal__/util.internal.js";
import {
  Optional,
  SideEffect1,
  call,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike_complete,
  DispatcherLike_scheduler,
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
  QueueableLike_capacity,
  QueueableLike_enqueue,
} from "../../../util.js";
import Disposable_disposed from "../../../util/Disposable/__internal__/Disposable.disposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof ObserverLike_notify
>;

const Observer_mixin: <T>() => Mixin3<
  TObserverMixinReturn<T>,
  SchedulerLike,
  number,
  QueueableLike[typeof QueueableLike_backpressureStrategy]
> = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (
    observer: TProperties & ObserverLike<T> & QueueLike<T>,
  ) => {
    if (
      observer[ObserverMixin_dispatchSubscription][DisposableLike_isDisposed]
    ) {
      const continuation =
        observer[ObserverMixin_continuation] ??
        ((ctx: ContinuationContextLike) => {
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
        });
      observer[ObserverMixin_continuation] = continuation;

      observer[ObserverMixin_dispatchSubscription] = pipe(
        observer,
        Observer_schedule(continuation),
      );
    }
  };

  const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin<T>());

  type TProperties = {
    readonly [DispatcherLike_scheduler]: SchedulerLike;
    [ObserverMixin_continuation]: Optional<
      SideEffect1<ContinuationContextLike>
    >;
    [ObserverMixin_isCompleted]: boolean;
    [ObserverMixin_dispatchSubscription]: DisposableLike;
  };

  return pipe(
    mix(
      include(IndexedQueue_fifoQueueMixin()),
      function ObserverMixin(
        instance: Pick<
          ObserverLike,
          typeof DispatcherLike_scheduler | typeof DispatcherLike_complete
        > &
          Mutable<TProperties>,
        scheduler: SchedulerLike,
        capacity: number,
        backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy],
      ): TObserverMixinReturn<T> {
        init(
          IndexedQueue_fifoQueueMixin<T>(),
          instance,
          capacity,
          backpressureStrategy,
        );

        instance[DispatcherLike_scheduler] = scheduler;

        return instance;
      },
      props<TProperties>({
        [DispatcherLike_scheduler]: none,
        [ObserverMixin_continuation]: none,
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
    returns,
  );
})();

export function initObserverMixinFromDelegate<T>(
  instance: unknown,
  delegate: ObserverLike,
): asserts instance is TObserverMixinReturn<T> {
  init(
    Observer_mixin<T>(),
    instance,
    delegate[DispatcherLike_scheduler],
    delegate[QueueableLike_capacity],
    delegate[QueueableLike_backpressureStrategy],
  );
}

export default Observer_mixin;
