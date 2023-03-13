import {
  Mixin1,
  Mutable,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import { QueueLike_pull } from "../../../__internal__/util.internal.js";
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
  QueueableLike_count,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof ObserverLike_notify
>;

const Observer_mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike> =
  /*@__PURE__*/ (<T>() => {
    const scheduleDrainQueue = (observer: TProperties & ObserverLike<T>) => {
      if (observer[QueueableLike_count] === 1) {
        pipe(
          observer,
          Observer_schedule(observer[ObserverMixin_continuation]),
          Disposable_onComplete(observer[ObserverMixin_onContinuationDispose]),
        );
      }
    };

    const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin<T>());

    const ObserverMixin_continuation = Symbol(
      "ObserverDispatcher_continuation",
    );
    const ObserverMixin_isCompleted = Symbol("ObserverDispatcher_observer");
    const ObserverMixin_onContinuationDispose = Symbol(
      "ObserverDispatcher_onContinuationDispose",
    );

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
        ): TObserverMixinReturn<T> {
          init(IndexedQueue_fifoQueueMixin<T>(), instance);

          instance[DispatcherLike_scheduler] = scheduler;

          instance[ObserverMixin_continuation] = (
            ctx: ContinuationContextLike,
          ) => {
            while (instance[QueueableLike_count] > 0) {
              unsafeCast<TProperties & ObserverLike<T>>(instance);
              const next = instance[QueueLike_pull]() as T;
              instance[ObserverLike_notify](next);

              if (instance[QueueableLike_count] > 0) {
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
          [QueueableLike_push](this: TProperties & ObserverLike<T>, next: T) {
            if (
              !this[ObserverMixin_isCompleted] &&
              !this[DisposableLike_isDisposed]
            ) {
              call(fifoQueueProtoype[QueueableLike_push], this, next);
              scheduleDrainQueue(this);
            }
          },
          [DispatcherLike_complete](this: TProperties & ObserverLike<T>) {
            const isCompleted = this[ObserverMixin_isCompleted];
            this[ObserverMixin_isCompleted] = true;

            if (this[QueueableLike_count] === 0 && !isCompleted) {
              this[DisposableLike_dispose]();
            }
          },
        },
      ),
      returns,
    );
  })();

export default Observer_mixin;
