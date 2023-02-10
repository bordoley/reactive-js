import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  init,
  mix,
  props,
} from "../../../__internal__/mixins";
import {
  Optional,
  SideEffect,
  getLength,
  isEmpty,
  isNone,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../../functions";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SinkLike_notify,
} from "../../../rx";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../../scheduling";
import Continuation_yield_ from "../../../scheduling/Continuation/__internal__/Continuation.yield";
import { DisposableLike, DisposableLike_error } from "../../../util";
import Disposable_addToIgnoringChildErrors from "../../../util/Disposable/__internal__/Disposable.addToIgnoringChildErrors";
import Disposable_dispose from "../../../util/Disposable/__internal__/Disposable.dispose";
import Disposable_isDisposed from "../../../util/Disposable/__internal__/Disposable.isDisposed";
import Disposable_mixin from "../../../util/Disposable/__internal__/Disposable.mixin";
import Disposable_onComplete from "../../../util/Disposable/__internal__/Disposable.onComplete";
import Disposable_onDisposed from "../../../util/Disposable/__internal__/Disposable.onDisposed";
import Observer_getsScheduler from "./Observer.getScheduler";
import Observer_schedule from "./Observer.schedule";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher[ObserverDispatcher_nextQueue]) === 1) {
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
          typeof DispatcherLike_scheduler | typeof DispatcherLike_dispatch
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

          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            Continuation_yield_();
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
            if (isEmpty(instance[ObserverDispatcher_nextQueue])) {
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
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return Observer_getsScheduler(this[ObserverDispatcher_observer]);
        },
        [DispatcherLike_dispatch](this: TProperties & DisposableLike, next: T) {
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
