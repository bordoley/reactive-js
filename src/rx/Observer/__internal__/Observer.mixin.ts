import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  getPrototype,
  include,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import {
  QueueLike,
  QueueLike_pull,
} from "../../../__internal__/util.internal.js";
import {
  Optional,
  SideEffect,
  SideEffect1,
  call,
  isNone,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_notify,
  ObserverLike_scheduler,
} from "../../../rx.js";
import {
  ContinuationContextLike,
  ContinuationContextLike_yield,
  SchedulerLike,
} from "../../../scheduling.js";
import {
  DisposableLike,
  DisposableLike_dispose,
  DisposableLike_error,
  DisposableLike_isDisposed,
  QueueableLike_count,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import IndexedQueue_fifoQueueMixin from "../../../util/Queue/__internal__/IndexedQueue.fifoQueueMixin.js";
import Observer_schedule from "./Observer.schedule.js";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties & QueueLike<T>) => {
    if (dispatcher[QueueableLike_count] === 1) {
      const { [ObserverDispatcher_observer]: observer } = dispatcher;
      pipe(
        observer,
        Observer_schedule(dispatcher[ObserverDispatcher_continuation]),
        Disposable_onComplete(
          dispatcher[ObserverDispatcher_onContinuationDispose],
        ),
      );
    }
  };

  const ObserverDispatcher_continuation = Symbol(
    "ObserverDispatcher_continuation",
  );
  const ObserverDispatcher_observer = Symbol("ObserverDispatcher_observer");
  const ObserverDispatcher_onContinuationDispose = Symbol(
    "ObserverDispatcher_onContinuationDispose",
  );

  type TProperties = {
    readonly [ObserverDispatcher_continuation]: SideEffect1<ContinuationContextLike>;
    readonly [ObserverDispatcher_observer]: ObserverLike<T>;
    readonly [ObserverDispatcher_onContinuationDispose]: SideEffect;
  };

  const fifoQueueProtoype = getPrototype(IndexedQueue_fifoQueueMixin<T>());

  return createInstanceFactory(
    mix(
      include(Disposable_mixin, IndexedQueue_fifoQueueMixin()),
      function ObserverDispatcher(
        instance: Pick<DispatcherLike, typeof DispatcherLike_scheduler> &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): DispatcherLike<T> {
        init(Disposable_mixin, instance);
        init(IndexedQueue_fifoQueueMixin<T>(), instance);

        instance[ObserverDispatcher_observer] = observer;

        instance[ObserverDispatcher_continuation] = (
          ctx: ContinuationContextLike,
        ) => {
          const { [ObserverDispatcher_observer]: observer } = instance;

          while (instance[QueueableLike_count] > 0) {
            const next = instance[QueueLike_pull]() as T;
            observer[ObserverLike_notify](next);

            if (instance[QueueableLike_count] > 0) {
              ctx[ContinuationContextLike_yield]();
            }
          }
        };

        instance[ObserverDispatcher_onContinuationDispose] = () => {
          if (instance[DisposableLike_isDisposed]) {
            observer[DisposableLike_dispose](instance[DisposableLike_error]);
          }
        };

        pipe(
          instance,
          Disposable_onDisposed(e => {
            if (instance[QueueableLike_count] === 0) {
              observer[DisposableLike_dispose](e);
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ObserverDispatcher_continuation]: none,
        [ObserverDispatcher_observer]: none,
        [ObserverDispatcher_onContinuationDispose]: none,
      }),
      {
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return this[ObserverDispatcher_observer][ObserverLike_scheduler];
        },
        [QueueableLike_push](
          this: TProperties & DisposableLike & QueueLike<T>,
          next: T,
        ) {
          if (!this[DisposableLike_isDisposed]) {
            call(fifoQueueProtoype[QueueableLike_push], this, next);
            scheduleDrainQueue(this);
          }
        },
      },
    ),
  );
})();

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof ObserverLike_notify
>;

const Observer_mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike> =
  /*@__PURE__*/ (<T>() => {
    const ObserverMixin_dispatcher = Symbol("ObserverMixin_dispatcher");

    type TProperties = {
      readonly [ObserverLike_scheduler]: SchedulerLike;
      [ObserverMixin_dispatcher]: Optional<DispatcherLike<T>>;
    };

    return pipe(
      mix(
        function ObserverMixin(
          instance: Pick<ObserverLike, typeof ObserverLike_dispatcher> &
            Mutable<TProperties>,
          scheduler: SchedulerLike,
        ): TObserverMixinReturn<T> {
          instance[ObserverLike_scheduler] = scheduler;

          return instance;
        },
        props<TProperties>({
          [ObserverLike_scheduler]: none,
          [ObserverMixin_dispatcher]: none,
        }),
        {
          get [ObserverLike_dispatcher](): DispatcherLike<T> {
            unsafeCast<ObserverLike<T> & TProperties>(this);
            let { [ObserverMixin_dispatcher]: dispatcher } = this;
            if (isNone(dispatcher)) {
              dispatcher = pipe(
                createObserverDispatcher(this),
                Disposable_addToIgnoringChildErrors<DispatcherLike<T>>(this),
              );
              this[ObserverMixin_dispatcher] = dispatcher;
            }
            return dispatcher;
          },
        },
      ),
      returns,
    );
  })();

export default Observer_mixin;
