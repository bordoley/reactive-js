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
} from "../../functions";
import { ReactiveContainerLike } from "../../rx";
import {
  DispatcherLike,
  DispatcherLike_dispatch,
  DispatcherLike_scheduler,
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SchedulerLike,
} from "../../scheduling";
import { getScheduler } from "../../scheduling/ObserverLike";
import { __yield, schedule } from "../../scheduling/SchedulerLike";
import {
  DisposableLike,
  DisposableLike_exception,
  SinkLike_notify,
} from "../../util";
import {
  addTo,
  addToIgnoringChildErrors,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../../util/DisposableLike";
import { disposableMixin } from "../util/DisposableLikeMixins";
import {
  Class1,
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../util/Object";
import {
  decodeWithCharsetSinkMixin,
  distinctUntilChangedSinkMixin,
  forEachSinkMixin,
  keepSinkMixin,
  mapSinkMixin,
  pairwiseSinkMixin,
  reduceSinkMixin,
  scanSinkMixin,
  skipFirstSinkMixin,
  takeFirstSinkMixin,
  takeLastSinkMixin,
  takeWhileSinkMixin,
  throwIfEmptySinkMixin,
} from "../util/SinkLikeMixin";

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
    continuation: SideEffect;
    nextQueue: T[];
    observer: ObserverLike<T>;
    onContinuationDispose: SideEffect;
  } & PropertyTypeOf<[typeof disposableMixin]>;

  return pipe(
    clazz(
      function ObserverDispatcher(
        this: TProperties & DispatcherLike<T>,
        observer: ObserverLike<T>,
      ) {
        init(disposableMixin, this);
        this.observer = observer;
        this.nextQueue = [];

        this.continuation = () => {
          const { nextQueue } = this;

          const { observer } = this;
          while (getLength(nextQueue) > 0) {
            const next = nextQueue.shift() as T;
            observer[SinkLike_notify](next);
            __yield();
          }
        };

        this.onContinuationDispose = () => {
          if (isDisposed(this)) {
            pipe(observer, dispose(this[DisposableLike_exception]));
          }
        };

        pipe(
          this,
          onDisposed(e => {
            if (isEmpty(this.nextQueue)) {
              pipe(observer, dispose(e));
            }
          }),
        );

        return this;
      },
      {
        continuation: none,
        nextQueue: none,
        observer: none,
        onContinuationDispose: none,
      },
      {
        get [DispatcherLike_scheduler]() {
          const self = this as unknown as TProperties;
          return getScheduler(self.observer);
        },
        [DispatcherLike_dispatch](this: TProperties, next: T) {
          if (!isDisposed(this)) {
            this.nextQueue.push(next);
            scheduleDrainQueue(this);
          }
        },
      },
    ),
    mixWith(disposableMixin),
    createObjectFactory<DispatcherLike<T>, ObserverLike<T>>(),
  );
})();

type TObserverMixinReturn<T> = Omit<
  ObserverLike<T>,
  keyof DisposableLike | typeof SinkLike_notify
>;

export const observerMixin: <T>() => Class1<
  SchedulerLike,
  TObserverMixinReturn<T>,
  {
    [ObserverLike_scheduler]: SchedulerLike;
  },
  {
    get [ObserverLike_dispatcher](): DispatcherLike<T>;
  }
> = /*@__PURE__*/ (<T>() => {
  type TProperties = {
    [ObserverLike_scheduler]: SchedulerLike;
    dispatcher: Option<DispatcherLike>;
  };

  return pipe(
    clazz<
      (this: any, scheduler: SchedulerLike) => TObserverMixinReturn<T>,
      TObserverMixinReturn<T>,
      TProperties,
      {
        get [ObserverLike_dispatcher](): DispatcherLike<T>;
      }
    >(
      function ObserverMixin(
        this: TProperties & TObserverMixinReturn<T>,
        scheduler: SchedulerLike,
      ) {
        this[ObserverLike_scheduler] = scheduler;
        return this;
      },
      {
        [ObserverLike_scheduler]: none,
        dispatcher: none,
      },
      {
        get [ObserverLike_dispatcher](): DispatcherLike<T> {
          const self = this as unknown as ObserverLike<T> & TProperties;
          if (isNone(self.dispatcher)) {
            const dispatcher = pipe(
              createObserverDispatcher(self),
              addToIgnoringChildErrors(self),
            );

            self.dispatcher = dispatcher;
          }
          return self.dispatcher;
        },
      },
    ),
    returns,
  );
})();

export const createDecodeWithCharsetObserver = (
  fromArray: (
    v: readonly string[],
  ) => ReactiveContainerLike<ObserverLike<string>>,
) => {
  const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(fromArray);
  const typedObserverMixin = observerMixin<ArrayBuffer>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedDecodeWithCharsetMixin]
  >;

  return pipe(
    clazz(function DecodeWithCharsetObserver(
      this: TProperties & ObserverLike<ArrayBuffer>,
      delegate: ObserverLike<string>,
      charset: string,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedDecodeWithCharsetMixin, this, delegate, charset);

      return this;
    }),
    mixWith(typedObserverMixin, typedDecodeWithCharsetMixin),
    createObjectFactory<
      ObserverLike<ArrayBuffer>,
      ObserverLike<string>,
      string
    >(),
  );
};

export const createDelegatingObserver: <T>(
  o: ObserverLike<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof disposableMixin, typeof typedObserverMixin]
  > & {
    delegate: ObserverLike<T>;
  };

  return pipe(
    clazz(
      function DelegatingObserver(
        this: TProperties & ObserverLike<T>,
        observer: ObserverLike<T>,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(observer));
        this.delegate = observer;

        return this;
      },
      {
        delegate: none,
      },
      {
        [SinkLike_notify](this: TProperties, next: T) {
          this.delegate[SinkLike_notify](next);
        },
      },
    ),
    mixWith(disposableMixin, typedObserverMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>>(),
  );
})();

export const createDistinctUntilChangedObserver: <T>(
  delegate: ObserverLike<T>,
  equality: Equality<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedDistinctUntilChangedSinkMixin = distinctUntilChangedSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedDistinctUntilChangedSinkMixin]
  >;

  return pipe(
    clazz(function DistinctUntilChangedObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      equality: Equality<T>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedDistinctUntilChangedSinkMixin, this, delegate, equality);

      return this;
    }),
    mixWith(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, Equality<T>>(),
  );
})();

export const createForEachObserver: <T>(
  delegate: ObserverLike<T>,
  effect: SideEffect1<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedForEachSinkMixin]
  >;

  return pipe(
    clazz(function ForEachObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      effect: SideEffect1<T>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedForEachSinkMixin, this, delegate, effect);

      return this;
    }),
    mixWith(typedObserverMixin, typedForEachSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, SideEffect1<T>>(),
  );
})();

export const createKeepObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedKeepSinkMixin]
  >;

  return pipe(
    clazz(function KeepObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedKeepSinkMixin, this, delegate, predicate);

      return this;
    }),
    mixWith(typedObserverMixin, typedKeepSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, Predicate<T>>(),
  );
})();

export const createMapObserver: <TA, TB>(
  delegate: ObserverLike<TB>,
  predicate: Function1<TA, TB>,
) => ObserverLike<TA> = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();
  const typedObserverMixin = observerMixin<TA>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedMapSinkMixin]
  >;

  return pipe(
    clazz(function MapObserver(
      this: TProperties & ObserverLike<TA>,
      delegate: ObserverLike<TB>,
      mapper: Function1<TA, TB>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedMapSinkMixin, this, delegate, mapper);

      return this;
    }),
    mixWith(typedObserverMixin, typedMapSinkMixin),
    createObjectFactory<
      ObserverLike<TA>,
      ObserverLike<TB>,
      Function1<TA, TB>
    >(),
  );
})();

export const createPairwiseObserver: <T>(
  delegate: ObserverLike<readonly [T, T]>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedPairwiseSinkMixin = pairwiseSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedPairwiseSinkMixin]
  >;

  return pipe(
    clazz(function PairwiseObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<readonly [T, T]>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedPairwiseSinkMixin, this, delegate);

      return this;
    }),
    mixWith(typedObserverMixin, typedPairwiseSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<readonly [T, T]>>(),
  );
})();

export const createReduceObserver = <
  C extends ReactiveContainerLike<ObserverLike<TAcc>>,
  T,
  TAcc,
>(
  fromArray: (v: readonly unknown[]) => C,
) => {
  const typedReduceSinkMixin = reduceSinkMixin<C, ObserverLike<TAcc>, T, TAcc>(
    fromArray,
  );

  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedReduceSinkMixin]
  >;

  return pipe(
    clazz(function ReduceObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedReduceSinkMixin, this, delegate, reducer, initialValue);

      return this;
    }),
    mixWith(typedObserverMixin, typedReduceSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
  );
};

export const createScanObserver: <T, TAcc>(
  delegat: ObserverLike<TAcc>,
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObserverLike<T> = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedScanSinkMixin]
  >;

  return pipe(
    clazz(function ScanObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedScanSinkMixin, this, delegate, reducer, initialValue);

      return this;
    }),
    mixWith(typedObserverMixin, typedScanSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
  );
})();

export const createSkipFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedSkipFirstSinkMixin = skipFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedSkipFirstSinkMixin]
  >;

  return pipe(
    clazz(function SkipFirstObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      skipCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedSkipFirstSinkMixin, this, delegate, skipCount);

      return this;
    }),
    mixWith(typedObserverMixin, typedSkipFirstSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
  );
})();

export const createTakeFirstObserver: <T>(
  delegate: ObserverLike<T>,
  count: number,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeFirstSinkMixin]
  >;

  return pipe(
    clazz(function TakeFirstObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      takeCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeFirstSinkMixin, this, delegate, takeCount);

      return this;
    }),
    mixWith(typedObserverMixin, typedTakeFirstSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
  );
})();

export const createTakeLastObserver = <
  C extends ReactiveContainerLike<ObserverLike<T>>,
  T,
>(
  fromArray: (v: readonly unknown[]) => C,
) => {
  const typedTakeLastSinkMixin = takeLastSinkMixin<C, ObserverLike<T>, T>(
    fromArray,
  );
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeLastSinkMixin]
  >;
  return pipe(
    clazz(function TakeLastObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      takeCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeLastSinkMixin, this, delegate, takeCount);

      return this;
    }),
    mixWith(typedObserverMixin, typedTakeLastSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
  );
};

export const createTakeWhileObserver: <T>(
  delegate: ObserverLike<T>,
  predicate: Predicate<T>,
  inclusive: boolean,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedTakeWhileSinkMixin = takeWhileSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeWhileSinkMixin]
  >;

  return pipe(
    clazz(function TakeWhileObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeWhileSinkMixin, this, delegate, predicate, inclusive);

      return this;
    }),
    mixWith(typedObserverMixin, typedTakeWhileSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<T>,
      Predicate<T>,
      boolean
    >(),
  );
})();

export const createThrowIfEmptyObserver: <T>(
  delegate: ObserverLike<T>,
  factory: Factory<unknown>,
) => ObserverLike<T> = /*@__PURE__*/ (<T>() => {
  const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedThrowIfEmptySinkMixin]
  >;

  return pipe(
    clazz(function ThrowIfEmptyObserver(
      this: TProperties & ObserverLike<T>,
      delegate: ObserverLike<T>,
      factory: Factory<unknown>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedThrowIfEmptySinkMixin, this, delegate, factory);
      return this;
    }),
    mixWith(typedObserverMixin, typedThrowIfEmptySinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, Factory<unknown>>(),
  );
})();
