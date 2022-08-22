import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect,
  SideEffect1,
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
import { getScheduler } from "../../rx/ObserverLike";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  SchedulerLike,
} from "../../scheduling";
import { __yield, schedule } from "../../scheduling/SchedulerLike";
import { DisposableLike, DisposableLike_exception } from "../../util";
import {
  addTo,
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../util/DisposableLike";
import {
  distinctUntilChangedSinkMixin,
  forEachSinkMixin,
  keepSinkMixin,
  mapSinkMixin,
  pairwiseSinkMixin,
  scanSinkMixin,
  skipFirstSinkMixin,
  takeFirstSinkMixin,
  takeWhileSinkMixin,
  throwIfEmptySinkMixin,
} from "../rx/__internal__Sinks";
import { disposableMixin } from "../util/__internal__Disposables";
import {
  Mixin1,
  Mutable,
  createInstanceFactory,
  include,
  init,
  mixin,
  props,
} from "../util/__internal__Objects";

const createObserverDispatcher = (<T>() => {
  const scheduleDrainQueue = (dispatcher: TProperties) => {
    if (getLength(dispatcher.nextQueue) === 1) {
      const { observer } = dispatcher;
      pipe(
        getScheduler(observer),
        schedule(dispatcher.continuation),
        addTo(observer),
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

export const createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
      function DistinctUntilChangedObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedDistinctUntilChangedSinkMixin, instance, delegate, equality);

        return instance;
      },
    ),
  );
})();

export const createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedForEachSinkMixin),
      function ForEachObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        effect: SideEffect1<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedForEachSinkMixin, instance, delegate, effect);

        return instance;
      },
    ),
  );
})();

export const createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedKeepSinkMixin),
      function KeepObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedKeepSinkMixin, instance, delegate, predicate);

        return instance;
      },
    ),
  );
})();

export const createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  predicate: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();
  const typedObserverMixin = observerMixin<TA>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedMapSinkMixin),
      function MapObserver(
        instance: unknown,
        delegate: ObserverLike<TB>,
        mapper: Function1<TA, TB>,
      ): ObserverLike<TA> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedMapSinkMixin, instance, delegate, mapper);

        return instance;
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

export const createPairwiseObserver: <T>(
  delegate: ObserverLike<readonly [T, T]>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedPairwiseSinkMixin = pairwiseSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedPairwiseSinkMixin),
      function PairwiseObserver(
        instance: unknown,
        delegate: ObserverLike<readonly [T, T]>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedPairwiseSinkMixin, instance, delegate);

        return instance;
      },
    ),
  );
})();

export const createScanObserver: <T, TAcc>(
  delegat: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedScanSinkMixin),
      function ScanObserver(
        instance: unknown,
        delegate: ObserverLike<TAcc>,
        reducer: Reducer<T, TAcc>,
        initialValue: Factory<TAcc>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedScanSinkMixin, instance, delegate, reducer, initialValue);

        return instance;
      },
    ),
  );
})();

export const createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedSkipFirstSinkMixin = skipFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedSkipFirstSinkMixin),
      function SkipFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        skipCount: number,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedSkipFirstSinkMixin, instance, delegate, skipCount);

        return instance;
      },
    ),
  );
})();

export const createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedTakeFirstSinkMixin),
      function TakeFirstObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        takeCount: number,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeFirstSinkMixin, instance, delegate, takeCount);

        return instance;
      },
    ),
  );
})();

export const createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedTakeWhileSinkMixin = takeWhileSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedTakeWhileSinkMixin),
      function TakeWhileObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        predicate: Predicate<T>,
        inclusive: boolean,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedTakeWhileSinkMixin, instance, delegate, predicate, inclusive);

        return instance;
      },
    ),
  );
})();

export const createThrowIfEmptyObserver: <T>(
  delegate: ObserverLike<T>,
  factory: Factory<unknown>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  return createInstanceFactory(
    mixin(
      include(typedObserverMixin, typedThrowIfEmptySinkMixin),
      function ThrowIfEmptyObserver(
        instance: unknown,
        delegate: ObserverLike<T>,
        factory: Factory<unknown>,
      ): ObserverLike<T> {
        init(typedObserverMixin, instance, delegate[ObserverLike_scheduler]);
        init(typedThrowIfEmptySinkMixin, instance, delegate, factory);

        return instance;
      },
    ),
  );
})();
