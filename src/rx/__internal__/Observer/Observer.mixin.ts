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
import Continuation$yield_ from "../../../scheduling/__internal__/Continuation/Continuation.yield";
import { DisposableLike, DisposableLike_error } from "../../../util";
import Disposable$addToIgnoringChildErrors from "../../../util/__internal__/Disposable/Disposable.addToIgnoringChildErrors";
import Disposable$dispose from "../../../util/__internal__/Disposable/Disposable.dispose";
import Disposable$isDisposed from "../../../util/__internal__/Disposable/Disposable.isDisposed";
import Disposable$mixin from "../../../util/__internal__/Disposable/Disposable.mixin";
import Disposable$onComplete from "../../../util/__internal__/Disposable/Disposable.onComplete";
import Disposable$onDisposed from "../../../util/__internal__/Disposable/Disposable.onDisposed";
import Observer$getsScheduler from "./Observer.getScheduler";
import Observer$schedule from "./Observer.schedule";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        observer,
        Observer$schedule(dispatcher.continuation),
        Disposable$onComplete(dispatcher.onContinuationDispose),
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
      Disposable$mixin,
      function ObserverDispatcher(
        instance: Pick<
          DispatcherLike,
          typeof DispatcherLike_scheduler | typeof DispatcherLike_dispatch
        > &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): DispatcherLike<T> {
        init(Disposable$mixin, instance);

        instance.observer = observer;
        instance.nextQueue = [];

        instance.continuation = () => {
          const { nextQueue, observer } = instance;

          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            Continuation$yield_();
          }
        };

        instance.onContinuationDispose = () => {
          if (Disposable$isDisposed(instance)) {
            pipe(observer, Disposable$dispose(instance[DisposableLike_error]));
          }
        };

        pipe(
          instance,
          Disposable$onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
              pipe(observer, Disposable$dispose(e));
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
          return Observer$getsScheduler(this.observer);
        },
        [DispatcherLike_dispatch](this: TProperties & DisposableLike, next: T) {
          if (!Disposable$isDisposed(this)) {
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

const Observer$mixin: <T>() => Mixin1<TObserverMixinReturn<T>, SchedulerLike> =
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
                Disposable$addToIgnoringChildErrors<DispatcherLike<T>>(this),
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

export default Observer$mixin;
