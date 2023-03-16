import {
  Mixin2,
  Mutable,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  ObserverMixin_continuation,
  ObserverMixin_isCompleted,
  ObserverMixin_onContinuationDispose,
} from "../../../__internal__/symbols.js";
import {
  QueueLike,
  QueueLike_count,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  SideEffect,
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
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_isDisposed,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof ObserverLike_notify
>;

const Observer_mixin: <T>() => Mixin2<
  TObserverMixinReturn<T>,
  SchedulerLike,
  number
> = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (
    observer: TProperties & ObserverLike<T> & QueueLike<T>,
  ) => {
    if (observer[QueueLike_count] === 1) {
      pipe(
        observer,
        Observer_schedule(observer[ObserverMixin_continuation]),
        Disposable_onComplete(observer[ObserverMixin_onContinuationDispose]),
      );
    }
  };

  const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin<T>());

  type TProperties = {
    readonly [DispatcherLike_scheduler]: SchedulerLike;
    [ObserverMixin_continuation]: SideEffect1<ContinuationContextLike>;
    [ObserverMixin_onContinuationDispose]: SideEffect;
    [ObserverMixin_isCompleted]: boolean;
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
        maxBufferSize: number,
      ): TObserverMixinReturn<T> {
        init(IndexedQueue_fifoQueueMixin<T>(), instance, maxBufferSize);

        instance[DispatcherLike_scheduler] = scheduler;

        instance[ObserverMixin_continuation] = (
          ctx: ContinuationContextLike,
        ) => {
          unsafeCast<TProperties & ObserverLike<T>>(instance);

          while (instance[QueueLike_count] > 0) {
            const next = instance[QueueLike_pull]() as T;
            instance[ObserverLike_notify](next);

            if (instance[QueueLike_count] > 0) {
              ctx[ContinuationContextLike_yield]();
            }
          }
        };

        instance[ObserverMixin_onContinuationDispose] = () => {
          unsafeCast<TProperties & ObserverLike<T>>(instance);
          if (instance[ObserverMixin_isCompleted]) {
            instance[DisposableLike_dispose]();
          }
        };

        return instance;
      },
      props<TProperties>({
        [DispatcherLike_scheduler]: none,
        [ObserverMixin_continuation]: none,
        [ObserverMixin_onContinuationDispose]: none,
        [ObserverMixin_isCompleted]: false,
      }),
      {
        [QueueableLike_push](
          this: TProperties & ObserverLike<T> & QueueLike<T>,
          next: T,
        ): boolean {
          if (
            !this[ObserverMixin_isCompleted] &&
            !this[DisposableLike_isDisposed]
          ) {
            const result = call(
              fifoQueueProtoype[QueueableLike_push],
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

          if (this[QueueLike_count] === 0 && !isCompleted) {
            this[DisposableLike_dispose]();
          }
        },
      },
    ),
    returns,
  );
})();

export default Observer_mixin;
