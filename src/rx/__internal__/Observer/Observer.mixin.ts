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
import Continuation_yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { DisposableLike, DisposableLike_error } from "../../../util";
import Disposable_addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable_dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable_isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable_mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable_onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Disposable_onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Observer_getsScheduler from "./Observer.getScheduler";
import Observer_schedule from "./Observer.schedule";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        observer,
        Observer_schedule(dispatcher.continuation),
        Disposable_onComplete(dispatcher.onContinuationDispose),
      );
    }
  };

  type TProperties = {
    readonly continuation: SideEffect;
    readonly nextQueue: T[];
    readonly observer: ObserverLike<T>;
    readonly onContinuationDispose: SideEffect;
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

        instance.observer = observer;
        instance.nextQueue = [];

        instance.continuation = () => {
          const { nextQueue, observer } = instance;

          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            Continuation_yield_();
          }
        };

        instance.onContinuationDispose = () => {
          if (Disposable_isDisposed(instance)) {
            pipe(observer, Disposable_dispose(instance[DisposableLike_error]));
          }
        };

        pipe(
          instance,
          Disposable_onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
              pipe(observer, Disposable_dispose(e));
            }
          }),
        );

        return instance;
      },
      props<TProperties>({
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
      }),
      {
        get [DispatcherLike_scheduler]() {
          unsafeCast<TProperties>(this);
          return Observer_getsScheduler(this.observer);
        },
        [DispatcherLike_dispatch](this: TProperties & DisposableLike, next: T) {
          if (!Disposable_isDisposed(this)) {
            this.nextQueue.push(next);
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
    type TProperties = {
      readonly [ObserverLike_scheduler]: SchedulerLike;
      dispatcher: Optional<DispatcherLike<T>>;
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
          dispatcher: none,
        }),
        {
          get [ObserverLike_dispatcher](): DispatcherLike<T> {
            unsafeCast<ObserverLike<T> & TProperties>(this);
            let { dispatcher } = this;
            if (isNone(dispatcher)) {
              dispatcher = pipe(
                createObserverDispatcher(this),
                Disposable_addToIgnoringChildErrors<DispatcherLike<T>>(this),
              );
              this.dispatcher = dispatcher;
            }
            return dispatcher;
          },
        },
      ),
      returns,
    );
  })();

export default Observer_mixin;
