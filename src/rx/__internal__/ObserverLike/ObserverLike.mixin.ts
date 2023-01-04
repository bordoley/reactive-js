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
import { yield_ } from "../../../scheduling/ContinuationLike";
import { DisposableLike, DisposableLike_exception } from "../../../util";
import {
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../../util/DisposableLike";
import DisposableLike__mixin from "../../../util/__internal__/DisposableLike/DisposableLike.mixin";
import ObserverLike__getsScheduler from "./ObserverLike.getScheduler";
import ObserverLike__schedule from "./ObserverLike.schedule";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        observer,
        ObserverLike__schedule(dispatcher.continuation),
        onComplete(dispatcher.onContinuationDispose),
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
            yield_();
          }
        };

        instance.onContinuationDispose = () => {
          if (isDisposed(instance)) {
            pipe(observer, dispose(instance[DisposableLike_exception]));
          }
        };

        pipe(
          instance,
          onDisposed(e => {
            if (isEmpty(instance.nextQueue)) {
              pipe(observer, dispose(e));
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
          if (!isDisposed(this)) {
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
              addToIgnoringChildErrors<DispatcherLike<T>>(this),
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
