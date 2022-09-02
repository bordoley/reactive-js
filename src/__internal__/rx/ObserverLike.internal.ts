import {
  Option,
  SideEffect,
  getLength,
  isEmpty,
  isNone,
  none,
  pipe,
  returns,
  unsafeCast,
} from "../../functions";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SinkLike_notify,
} from "../../rx";
import { getScheduler, schedule } from "../../rx/ObserverLike";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../scheduling";
import { __yield } from "../../scheduling/SchedulerLike";
import { DisposableLike, DisposableLike_exception } from "../../util";
import {
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../util/DisposableLike";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../mixins";
import { disposableMixin } from "../util/DisposableLike.mixins";

const createObserverDispatcher = /*@__PURE__*/ (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        observer,
        schedule(dispatcher.continuation),
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
    mixin(
      disposableMixin,
      function ObserverDispatcher(
        instance: Pick<
          DispatcherLike,
          typeof DispatcherLike_scheduler | typeof DispatcherLike_dispatch
        > &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): DispatcherLike<T> {
        init(disposableMixin, instance);

        instance.observer = observer;
        instance.nextQueue = [];

        instance.continuation = () => {
          const { nextQueue, observer } = instance;

          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            __yield();
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
          return getScheduler(this.observer);
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

export const observerMixin: <T>() => Mixin1<
  TObserverMixinReturn<T>,
  SchedulerLike
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    readonly [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike<T>>;
  };

  return pipe(
    mixin(
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

export const createDelegatingObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  type TProperties = {
    delegate: ObserverLike<T>;
  };

  return createInstanceFactory(
    mixin(
      include(disposableMixin, typedObserverMixin),
      function DelegatingObserver(
        instance: Pick<ObserverLike<T>, typeof SinkLike_notify> &
          Mutable<TProperties>,
        observer: ObserverLike<T>,
      ): ObserverLike<T> {
        init(disposableMixin, instance);
        init(typedObserverMixin, instance, getScheduler(observer));

        instance.delegate = observer;

        return instance;
      },
      props<TProperties>({
        delegate: none,
      }),
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this.delegate[SinkLike_notify](next);
        },
      },
    ),
  );
})();

export const createObserver: <T>(scheduler: SchedulerLike) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = observerMixin<T>();

    return createInstanceFactory(
      mixin(
        include(disposableMixin, typedObserverMixin),
        function Observer(
          instance: Pick<ObserverLike<T>, typeof SinkLike_notify>,
          scheduler: SchedulerLike,
        ): ObserverLike<T> {
          init(disposableMixin, instance);
          init(typedObserverMixin, instance, scheduler);

          return instance;
        },
        {},
        {
          [SinkLike_notify](_: T) {},
        },
      ),
    );
  })();
