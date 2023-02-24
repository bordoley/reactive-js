import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  init,
  mix,
  props,
} from "../../../__internal__/mixins.js";
import ReadonlyArray_getLength from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.getLength.js";
import ReadonlyArray_isEmpty from "../../../containers/ReadonlyArray/__internal__/ReadonlyArray.isEmpty.js";
import {
  Optional,
  SideEffect,
  isNone,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions.js";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SinkLike_notify,
} from "../../../rx.js";
import {
  DispatcherLike,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling.js";
import { Continuation__yield } from "../../../scheduling/Continuation/__internal__/Continuation.create.js";
import {
  DisposableLike,
  DisposableLike_error,
  QueueableLike_count,
  QueueableLike_push,
} from "../../../util.js";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors.js";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose.js";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed.js";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin.js";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete.js";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed.js";
import Observer_getsScheduler from "./Observer.getScheduler.js";
import Observer_schedule from "./Observer.schedule.js";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (
      ReadonlyArray_getLength(dispatcher[ObserverDispatcher_nextQueue]) === 1
    ) {
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
  const ObserverDispatcher_nextQueue = Symbol("ObserverDispatcher_nextQueue");
  const ObserverDispatcher_observer = Symbol("ObserverDispatcher_observer");
  const ObserverDispatcher_onContinuationDispose = Symbol(
    "ObserverDispatcher_onContinuationDispose",
  );

  type TProperties = {
    readonly [ObserverDispatcher_continuation]: SideEffect;
    readonly [ObserverDispatcher_nextQueue]: T[];
    readonly [ObserverDispatcher_observer]: ObserverLike<T>;
    readonly [ObserverDispatcher_onContinuationDispose]: SideEffect;
  };

  return createInstanceFactory(
    mix(
      Disposable_mixin,
      function ObserverDispatcher(
        instance: Pick<
          DispatcherLike,
          | typeof DispatcherLike_scheduler
          | typeof QueueableLike_push
          | typeof QueueableLike_count
        > &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): DispatcherLike<T> {
        init(Disposable_mixin, instance);

        instance[ObserverDispatcher_observer] = observer;
        instance[ObserverDispatcher_nextQueue] = [];

        instance[ObserverDispatcher_continuation] = () => {
          const {
            [ObserverDispatcher_nextQueue]: nextQueue,
            [ObserverDispatcher_observer]: observer,
          } = instance;

          while (ReadonlyArray_getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            Continuation__yield();
          }
        };

        instance[ObserverDispatcher_onContinuationDispose] = () => {
          if (Disposable_isDisposed(instance)) {
            pipe(observer, Disposable_dispose(instance[DisposableLike_error]));
          }
        };

        pipe(
          instance,
          Disposable_onDisposed(e => {
            if (ReadonlyArray_isEmpty(instance[ObserverDispatcher_nextQueue])) {
              pipe(observer, Disposable_dispose(e));
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        [ObserverDispatcher_continuation]: none,
        [ObserverDispatcher_nextQueue]: none,
        [ObserverDispatcher_observer]: none,
        [ObserverDispatcher_onContinuationDispose]: none,
      }),
      {
        get [QueueableLike_count]() {
          unsafeCast<TProperties>(this);
          return this[ObserverDispatcher_nextQueue].length;
        },
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return Observer_getsScheduler(this[ObserverDispatcher_observer]);
        },
        [QueueableLike_push](this: TProperties & DisposableLike, next: T) {
          if (!Disposable_isDisposed(this)) {
            this[ObserverDispatcher_nextQueue].push(next);
            scheduleDrainQueue(this);
          }
        },
      },
    ),
  );
})();

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof SinkLike_notify
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
