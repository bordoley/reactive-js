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
import ContinuationLike__yield_ from "../../../scheduling/__internal__/ContinuationLike/ContinuationLike.yield";
import { DisposableLike, DisposableLike_exception } from "../../../util";
import DisposableLike__addToIgnoringChildErrors from "../../../util/__internal__/DisposableLike/DisposableLike.addToIgnoringChildErrors";
import DisposableLike__dispose from "../../../util/__internal__/DisposableLike/DisposableLike.dispose";
import DisposableLike__isDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.isDisposed";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import DisposableLike__onComplete from "../../../util/__internal__/DisposableLike/DisposableLike.onComplete";
import DisposableLike__onDisposed from "../../../util/__internal__/DisposableLike/DisposableLike.onDisposed";
import ObserverLike__getsScheduler from "./ObserverLike.getScheduler";
import ObserverLike__schedule from "./ObserverLike.schedule";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        observer,
        ObserverLike__schedule(dispatcher.continuation),
        DisposableLike__onComplete(dispatcher.onContinuationDispose),
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
      DisposableLike__mixin,
      function ObserverDispatcher(
        instance: Pick<
          DispatcherLike,
          typeof DispatcherLike_scheduler | typeof DispatcherLike_dispatch
        > &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): DispatcherLike<T> {
        init(DisposableLike__mixin, instance);

        instance.observer = observer;
        instance.nextQueue = [];

        instance.continuation = () => {
          const { nextQueue, observer } = instance;

          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            ContinuationLike__yield_();
          }
        };

        instance.onContinuationDispose = () => {
          if (DisposableLike__isDisposed(instance)) {
            pipe(
              observer,
              DisposableLike__dispose(instance[DisposableLike_exception]),
            );
          }
        };

        pipe(
          instance,
          DisposableLike__onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
              pipe(observer, DisposableLike__dispose(e));
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
          return ObserverLike__getsScheduler(this.observer);
        },
        [DispatcherLike_dispatch](this: TProperties & DisposableLike, next: T) {
          if (!DisposableLike__isDisposed(this)) {
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

const ObserverLike__mixin: <T>() => Mixin1<
  TObserverMixinReturn<T>,
  SchedulerLike
> = /*@__PURE__*/ (<T>() => {
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
              DisposableLike__addToIgnoringChildErrors<DispatcherLike<T>>(this),
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

export default ObserverLike__mixin;
