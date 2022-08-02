import {
  Lift,
  TReactive,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createForEachOperator,
  createKeepOperator,
  createMapOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
  reactive,
} from "../__internal__/containers/StatefulContainerLikeInternal";
import { createOnSink } from "../__internal__/rx/ReactiveContainerLikeInternal";
import { observerMixin } from "../__internal__/scheduling/ObserverLikeMixin";
import { disposableMixin } from "../__internal__/util/DisposableLikeMixins";
import {
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
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
} from "../__internal__/util/SinkLikeMixin";
import {
  Concat,
  ContainerOf,
  ContainerOperator,
  DecodeWithCharset,
  DistinctUntilChanged,
  ForEach,
  Keep,
  Map,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
  ToPromise,
} from "../containers";
import {
  toObservable as arrayToObservable,
  map as mapArray,
} from "../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  getLength,
  isEmpty,
  isNone,
  isSome,
  min,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  returns,
} from "../functions";
import {
  EnumerableObservable,
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observableType,
  ObservableType,
  ReactiveContainerLike_sinkInto,
  RunnableObservable,
  RunnableObservableLike,
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
  createSubject,
} from "../rx";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  ObserverLike_scheduler,
  SchedulerLike,
} from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { getScheduler } from "../scheduling/ObserverLike";
import { DisposableLike, DisposableOrTeardown, SinkLike_notify } from "../util";
import {
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { sourceFrom } from "../util/SinkLike";
import { getObserverCount } from "./MulticastObservableLike";
import { publishTo } from "./SubjectLike";

const createDelegatingObserver: <T>(o: ObserverLike<T>) => ObserverLike<T> =
  /*@__PURE__*/ (<T>() => {
    const typedObserverMixin = observerMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof disposableMixin, typeof typedObserverMixin]
    > & {
      delegate: ObserverLike<T>;
    };

    return pipe(
      clazz(
        function DelegatingObserver(
          this: TProperties,
          observer: ObserverLike<T>,
        ) {
          init(disposableMixin, this);
          init(typedObserverMixin, this, getScheduler(observer));
          this.delegate = observer;
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

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  (obs as any)[ObservableLike_observableType] ?? 0;

const createLift = /*@__PURE__*/ (() => {
  class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
    [ObservableLike_observableType]: ObservableType;

    constructor(
      readonly source: ObservableLike<TIn>,
      readonly operators: readonly Function1<
        ObserverLike<any>,
        ObserverLike<any>
      >[],
      observableType: ObservableType,
    ) {
      this[ObservableLike_observableType] = observableType;
    }

    [ReactiveContainerLike_sinkInto](observer: ObserverLike<TOut>) {
      pipeUnsafe(
        observer,
        ...this.operators,
        sourceFrom(this.source),
      ) as ObserverLike<any>;
    }
  }

  return (observableType: ObservableType) =>
    <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): ContainerOperator<ObservableLike, TA, TB> =>
    source => {
      const sourceSource =
        source instanceof LiftedObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedObservable
          ? [operator, ...source.operators]
          : [operator];

      const type = min(
        observableType,
        (source as any)[ObservableLike_observableType] ?? 0,
        (sourceSource as any)[ObservableLike_observableType] ?? 0,
      );

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        type as ObservableType,
      );
    };
})();

const lift: Lift<ObservableLike, TReactive>["lift"] = createLift(0);

/*
const liftT: Lift<ObservableLike, TReactive> = {
  lift,
  variance: reactive,
};*/

const liftRunnableObservable: Lift<RunnableObservableLike, TReactive>["lift"] =
  createLift(1); /*
const liftRunnableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftRunnableObservable,
  variance: reactive,
};*/

const liftEnumerableObservable: Lift<ObservableLike, TReactive>["lift"] =
  createLift(2);
const liftEnumerableObservableT: Lift<EnumerableObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

interface ConcatObservable {
  <T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): ObservableLike<T>;
  <T>(
    fst: RunnableObservableLike<T>,
    snd: RunnableObservableLike<T>,
    ...tail: readonly RunnableObservableLike<T>[]
  ): RunnableObservableLike<T>;
  <T>(
    fst: EnumerableObservableLike<T>,
    snd: EnumerableObservableLike<T>,
    ...tail: readonly EnumerableObservableLike<T>[]
  ): EnumerableObservableLike<T>;
}
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
export const concat: ConcatObservable = (<T>() => {
  const createConcatObserver = <T>(
    delegate: ObserverLike<T>,
    observables: readonly ObservableLike<T>[],
    next: number,
  ) =>
    pipe(
      createDelegatingObserver(delegate),
      addTo(delegate),
      onComplete(() => {
        if (next < getLength(observables)) {
          pipe(
            createConcatObserver(delegate, observables, next + 1),
            sourceFrom(observables[next]),
          );
        } else {
          pipe(delegate, dispose());
        }
      }),
    );

  return (...observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      if (!isEmpty(observables)) {
        pipe(
          createConcatObserver(observer, observables, 1),
          sourceFrom(observables[0]),
        );
      } else {
        pipe(observer, dispose());
      }
    };

    const type = pipe(
      observables,
      mapArray(obs => (obs as any)[ObservableLike_observableType] ?? 0),
      x => min(...x),
    ) as ObservableType;

    switch (type) {
      case EnumerableObservable:
        return createEnumerableObservable(onSink);
      case RunnableObservable:
        return createRunnableObservable(onSink);
      default:
        return createObservable(onSink);
    }
  };
})();

export const concatT: Concat<ObservableLike> = {
  concat,
};

interface DecodeWithCharsetObservable {
  (charset?: string | undefined): ContainerOperator<
    ObservableLike,
    ArrayBuffer,
    string
  >;
  (charset?: string | undefined): ContainerOperator<
    RunnableObservableLike,
    ArrayBuffer,
    string
  >;
  (charset?: string | undefined): ContainerOperator<
    EnumerableObservableLike,
    ArrayBuffer,
    string
  >;
}
export const decodeWithCharset: DecodeWithCharsetObservable =
  /*@__PURE__*/ (() => {
    const typedDecodeWithCharsetMixin = decodeWithCharsetSinkMixin(
      arrayToObservable(),
    );
    const typedObserverMixin = observerMixin<ArrayBuffer>();

    type TProperties = PropertyTypeOf<
      [typeof typedObserverMixin, typeof typedDecodeWithCharsetMixin]
    >;

    return pipe(
      clazz(function DecodeWithCharsetObserver(
        this: TProperties & DisposableLike,
        delegate: ObserverLike<string>,
        charset: string,
      ) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDecodeWithCharsetMixin, this, delegate, charset);
      }),
      mixWith(typedObserverMixin, typedDecodeWithCharsetMixin),
      createObjectFactory<
        ObserverLike<ArrayBuffer>,
        ObserverLike<string>,
        string
      >(),
      createDecodeWithCharsetOperator(liftEnumerableObservableT),
    );
  })();
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

interface DistinctUntilChangedObservable {
  <T>(
    options?: Option<{
      readonly equality?: Equality<T>;
    }>,
  ): ContainerOperator<ObservableLike, T, T>;
  <T>(
    options?: Option<{
      readonly equality?: Equality<T>;
    }>,
  ): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(
    options?: Option<{
      readonly equality?: Equality<T>;
    }>,
  ): ContainerOperator<EnumerableObservableLike, T, T>;
}
export const distinctUntilChanged: DistinctUntilChangedObservable =
  /*@__PURE__*/ (<T>() => {
    const typedDistinctUntilChangedSinkMixin =
      distinctUntilChangedSinkMixin<T>();
    const typedObserverMixin = observerMixin<T>();

    type TProperties = PropertyTypeOf<
      [typeof typedObserverMixin, typeof typedDistinctUntilChangedSinkMixin]
    >;

    return pipe(
      clazz(function DistinctUntilChangedObserver(
        this: TProperties & DisposableLike,
        delegate: ObserverLike<T>,
        equality: Equality<T>,
      ) {
        init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
        init(typedDistinctUntilChangedSinkMixin, this, delegate, equality);
      }),
      mixWith(typedObserverMixin, typedDistinctUntilChangedSinkMixin),
      createObjectFactory<ObserverLike<T>, ObserverLike<T>, Equality<T>>(),
      createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
        liftEnumerableObservableT,
      ),
    );
  })();
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface ForEachObservable {
  <T>(effect: SideEffect1<T>): ContainerOperator<ObservableLike, T, T>;
  <T>(effect: SideEffect1<T>): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(effect: SideEffect1<T>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const forEach: ForEachObservable = /*@__PURE__*/ (<T>() => {
  const typedForEachSinkMixin = forEachSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedForEachSinkMixin]
  >;

  return pipe(
    clazz(function ForEachObserver(
      this: TProperties & DisposableLike,
      delegate: ObserverLike<T>,
      effect: SideEffect1<T>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedForEachSinkMixin, this, delegate, effect);
    }),
    mixWith(typedObserverMixin, typedForEachSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, SideEffect1<T>>(),
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const forEachT: ForEach<ObservableLike> = { forEach };

interface KeepObservable {
  <T>(predicate: Predicate<T>): ContainerOperator<ObservableLike, T, T>;
  <T>(predicate: Predicate<T>): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(predicate: Predicate<T>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const keep: KeepObservable = /*@__PURE__*/ (<T>() => {
  const typedKeepSinkMixin = keepSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedKeepSinkMixin]
  >;

  return pipe(
    clazz(function KeepObserver(
      this: TProperties & DisposableLike,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedKeepSinkMixin, this, delegate, predicate);
    }),
    mixWith(typedObserverMixin, typedKeepSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, Predicate<T>>(),
    createKeepOperator<ObservableLike, T, TReactive>(liftEnumerableObservableT),
  );
})();
export const keepT: Keep<ObservableLike> = { keep };

interface MapObservable {
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    ObservableLike,
    TA,
    TB
  >;
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    RunnableObservableLike,
    TA,
    TB
  >;
  <TA, TB>(mapper: Function1<TA, TB>): ContainerOperator<
    EnumerableObservableLike,
    TA,
    TB
  >;
}
export const map: MapObservable = /*@__PURE__*/ (<TA, TB>() => {
  const typedMapSinkMixin = mapSinkMixin<TA, TB>();
  const typedObserverMixin = observerMixin<TA>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedMapSinkMixin]
  >;

  return pipe(
    clazz(function MapObserver(
      this: TProperties,
      delegate: ObserverLike<TB>,
      mapper: Function1<TA, TB>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedMapSinkMixin, this, delegate, mapper);
    }),
    mixWith(typedObserverMixin, typedMapSinkMixin),
    createObjectFactory<
      ObserverLike<TA>,
      ObserverLike<TB>,
      Function1<TA, TB>
    >(),
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const mapT: Map<ObservableLike> = { map };

const mergeImpl = /*@__PURE__*/ (() => {
  const createMergeObserver = <T>(
    delegate: ObserverLike<T>,
    count: number,
    ctx: {
      completedCount: number;
    },
  ) =>
    pipe(
      createDelegatingObserver(delegate),
      addTo(delegate),
      onComplete(() => {
        ctx.completedCount++;
        if (ctx.completedCount >= count) {
          pipe(delegate, dispose());
        }
      }),
    );

  return <T>(observables: readonly ObservableLike<T>[]): ObservableLike<T> => {
    const onSink = (observer: ObserverLike<T>) => {
      const count = getLength(observables);
      const ctx = { completedCount: 0 };

      for (const observable of observables) {
        pipe(createMergeObserver(observer, count, ctx), sourceFrom(observable));
      }
    };

    const type = pipe(
      observables,
      mapArray(obs => (obs as any)[ObservableLike_observableType] ?? 0),
      x => min(...x),
    ) as ObservableType;

    switch (type) {
      case EnumerableObservable:
        return createEnumerableObservable(onSink);
      case RunnableObservable:
        return createRunnableObservable(onSink);
      default:
        return createObservable(onSink);
    }
  };
})();

interface ForkMergeObservable {
  <TIn, TOut>(
    fst: ContainerOperator<ObservableLike, TIn, TOut>,
    snd: ContainerOperator<ObservableLike, TIn, TOut>,
    ...tail: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ): ContainerOperator<ObservableLike, TIn, TOut>;
  <TIn, TOut>(
    fst: ContainerOperator<RunnableObservableLike, TIn, TOut>,
    snd: ContainerOperator<RunnableObservableLike, TIn, TOut>,
    ...tail: readonly ContainerOperator<RunnableObservableLike, TIn, TOut>[]
  ): ContainerOperator<RunnableObservableLike, TIn, TOut>;
  <TIn, TOut>(
    fst: ContainerOperator<EnumerableObservableLike, TIn, TOut>,
    snd: ContainerOperator<EnumerableObservableLike, TIn, TOut>,
    ...tail: readonly ContainerOperator<EnumerableObservableLike, TIn, TOut>[]
  ): ContainerOperator<EnumerableObservableLike, TIn, TOut>;
}

export const forkMerge: ForkMergeObservable =
  <TIn, TOut>(
    ...ops: readonly (
      | ContainerOperator<ObservableLike, TIn, TOut>
      | ContainerOperator<RunnableObservableLike, TIn, TOut>
      | ContainerOperator<EnumerableObservableLike, TIn, TOut>
    )[]
  ) =>
  (obs: ObservableLike<TIn>) => {
    const observables = pipe(
      ops,
      mapArray(op => pipe(obs, op)),
    );
    return mergeImpl(observables);
  };

interface MergeObservable {
  <T>(
    fst: ObservableLike<T>,
    snd: ObservableLike<T>,
    ...tail: readonly ObservableLike<T>[]
  ): ObservableLike<T>;
  <T>(
    fst: RunnableObservableLike<T>,
    snd: RunnableObservableLike<T>,
    ...tail: readonly RunnableObservableLike<T>[]
  ): ObservableLike<T>;
  <T>(
    fst: EnumerableObservableLike<T>,
    snd: EnumerableObservableLike<T>,
    ...tail: readonly EnumerableObservableLike<T>[]
  ): ObservableLike<T>;
}
export const merge: MergeObservable = <T>(
  ...observables: (
    | ObservableLike<T>
    | RunnableObservableLike<T>
    | EnumerableObservableLike<T>
  )[]
) => mergeImpl(observables);
export const mergeT: Concat<ObservableLike<unknown>> = {
  concat: merge,
};

/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export const multicast =
  <T>(
    scheduler: SchedulerLike,
    options: { readonly replay?: number } = {},
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const { replay = 0 } = options;
    const subject = createSubject({ replay });
    pipe(
      observable,
      forEach(publishTo(subject)),
      subscribe(scheduler),
      bindTo(subject),
    );

    return subject;
  };

interface OnSubscribe {
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(f: Factory<DisposableOrTeardown | void>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const onSubscribe: OnSubscribe =
  <T>(f: Factory<DisposableOrTeardown | void>) =>
  (obs: ObservableLike<T>) => {
    const type = (obs as any)[ObservableLike_observableType] ?? 0;
    switch (type) {
      case EnumerableObservable:
        return createOnSink(createEnumerableObservable, obs, f);
      case RunnableObservable:
        return createOnSink(createRunnableObservable, obs, f);
      default:
        return createOnSink(createObservable, obs, f);
    }
  };

interface PairwiseObservable {
  <T>(): ContainerOperator<ObservableLike, T, readonly [T, T]>;
  <T>(): ContainerOperator<RunnableObservableLike, T, readonly [T, T]>;
  <T>(): ContainerOperator<EnumerableObservableLike, T, readonly [T, T]>;
}
export const pairwise: PairwiseObservable = /*@__PURE__*/ (<T>() => {
  const typedPairwiseSinkMixin = pairwiseSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedPairwiseSinkMixin]
  >;

  return pipe(
    clazz(function PairwiseObserver(
      this: TProperties,
      delegate: ObserverLike<readonly [T, T]>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedPairwiseSinkMixin, this, delegate);
    }),
    mixWith(typedObserverMixin, typedPairwiseSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<readonly [T, T]>>(),
    liftEnumerableObservable,
    returns,
  );
})();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

interface ReduceObservable {
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<ObservableLike, T, TAcc>;
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<RunnableObservableLike, T, TAcc>;
  <T, TAcc>(
    reducer: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
export const reduce: ReduceObservable = /*@__PURE__*/ (<T, TAcc>() => {
  const typedReduceSinkMixin = reduceSinkMixin<
    ObservableLike,
    ObserverLike<TAcc>,
    T,
    TAcc
  >(arrayToObservable());

  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedReduceSinkMixin]
  >;

  return pipe(
    clazz(function ReduceObserver(
      this: TProperties,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedReduceSinkMixin, this, delegate, reducer, initialValue);
    }),
    mixWith(typedObserverMixin, typedReduceSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const reduceT: Reduce<ObservableLike> = { reduce };

interface ScanObservable {
  <T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<ObservableLike, T, TAcc>;
  <T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<RunnableObservableLike, T, TAcc>;
  <T, TAcc>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<EnumerableObservableLike, T, TAcc>;
}
export const scan: ScanObservable = /*@__PURE__*/ (<T, TAcc>() => {
  const typedScanSinkMixin = scanSinkMixin<T, TAcc>();

  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedScanSinkMixin]
  >;

  return pipe(
    clazz(function ScanObserver(
      this: TProperties,
      delegate: ObserverLike<TAcc>,
      reducer: Reducer<T, TAcc>,
      initialValue: Factory<TAcc>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedScanSinkMixin, this, delegate, reducer, initialValue);
    }),
    mixWith(typedObserverMixin, typedScanSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<TAcc>,
      Reducer<T, TAcc>,
      Factory<TAcc>
    >(),
    createScanOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const scanT: Scan<ObservableLike> = { scan };

/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export const share =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): ContainerOperator<ObservableLike, T, T> =>
  source => {
    let multicasted: Option<MulticastObservableLike<T>> = none;

    return createObservable(observer => {
      if (isNone(multicasted)) {
        multicasted = pipe(source, multicast(scheduler, options));
      }

      pipe(
        observer,
        sourceFrom(multicasted),
        onDisposed(() => {
          if (isSome(multicasted) && getObserverCount(multicasted) === 0) {
            pipe(multicasted, dispose());
            multicasted = none;
          }
        }),
      );
    });
  };

interface SkipFirstObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const skipFirst: SkipFirstObservable = /*@__PURE__*/ (<T>() => {
  const typedSkipFirstSinkMixin = skipFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedSkipFirstSinkMixin]
  >;

  return pipe(
    clazz(function SkipFirstObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      skipCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedSkipFirstSinkMixin, this, delegate, skipCount);
    }),
    mixWith(typedObserverMixin, typedSkipFirstSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
    createSkipFirstOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  const createObserver = pipe(
    clazz(
      function SubscribeObserver(this, scheduler: SchedulerLike) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
    mixWith(disposableMixin, typedObserverMixin),
    createObjectFactory<ObserverLike, SchedulerLike>(),
  );
  return (scheduler: SchedulerLike) => observable =>
    pipe(
      scheduler,
      createObserver,
      addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );
})();

export const subscribeOn =
  <T>(scheduler: SchedulerLike): ContainerOperator<ObservableLike, T, T> =>
  observable =>
    createObservable(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        forEach(dispatchTo(dispatcher)),
        subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

interface TakeFirstObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const takeFirst: TakeFirstObservable = /*@__PURE__*/ (<T>() => {
  const typedTakeFirstSinkMixin = takeFirstSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeFirstSinkMixin]
  >;

  return pipe(
    clazz(function TakeFirstObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      takeCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeFirstSinkMixin, this, delegate, takeCount);
    }),
    mixWith(typedObserverMixin, typedTakeFirstSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
    createTakeFirstOperator<ObservableLike, T, TReactive>({
      ...liftEnumerableObservableT,
    }),
  );
})();
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

interface TakeLastObservable {
  <T>(options?: { readonly count?: number }): ContainerOperator<
    ObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(options?: { readonly count?: number }): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const takeLast: TakeLastObservable = /*@__PURE__*/ (<T>() => {
  const typedTakeLastSinkMixin = takeLastSinkMixin<
    ObservableLike<T>,
    ObserverLike<T>,
    T
  >(arrayToObservable());
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeLastSinkMixin]
  >;
  return pipe(
    clazz(function TakeLastObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      takeCount: number,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeLastSinkMixin, this, delegate, takeCount);
    }),
    mixWith(typedObserverMixin, typedTakeLastSinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, number>(),
    createTakeLastOperator<ObservableLike, T, TReactive>({
      ...liftEnumerableObservableT,
    }),
  );
})();
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

interface TakeUntilObservable {
  <T>(notifier: ObservableLike): ContainerOperator<ObservableLike, T, T>;
  <T>(notifier: RunnableObservableLike | EnumerableObservableLike): Function1<
    | ContainerOf<RunnableObservableLike, T>
    | ContainerOf<EnumerableObservableLike, T>,
    ContainerOf<RunnableObservableLike, T>
  >;
}
export const takeUntil: TakeUntilObservable = <T>(
  notifier: ObservableLike,
): ContainerOperator<ObservableLike, T, T> => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))),
    );

  return (notifier as any)[ObservableLike_observableType] === 0
    ? lift(operator)
    : liftRunnableObservable(operator);
};

interface TakeWhileObservable {
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<ObservableLike, T, T>;
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<RunnableObservableLike, T, T>;
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<EnumerableObservableLike, T, T>;
}
export const takeWhile: TakeWhileObservable = /*@__PURE__*/ (<T>() => {
  const typedTakeWhileSinkMixin = takeWhileSinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedTakeWhileSinkMixin]
  >;

  return pipe(
    clazz(function TakeWhileObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedTakeWhileSinkMixin, this, delegate, predicate, inclusive);
    }),
    mixWith(typedObserverMixin, typedTakeWhileSinkMixin),
    createObjectFactory<
      ObserverLike<T>,
      ObserverLike<T>,
      Predicate<T>,
      boolean
    >(),
    createTakeWhileOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const takeWhileT: TakeWhile<ObservableLike> = { takeWhile };

interface ThrowIfEmptyObservable {
  <T>(factory: Factory<unknown>): ContainerOperator<ObservableLike, T, T>;
  <T>(factory: Factory<unknown>): ContainerOperator<
    RunnableObservableLike,
    T,
    T
  >;
  <T>(factory: Factory<unknown>): ContainerOperator<
    EnumerableObservableLike,
    T,
    T
  >;
}
export const throwIfEmpty: ThrowIfEmptyObservable = /*@__PURE__*/ (<T>() => {
  const typedThrowIfEmptySinkMixin = throwIfEmptySinkMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TProperties = PropertyTypeOf<
    [typeof typedObserverMixin, typeof typedThrowIfEmptySinkMixin]
  >;

  return pipe(
    clazz(function TakeWhileObserver(
      this: TProperties,
      delegate: ObserverLike<T>,
      factory: Factory<unknown>,
    ) {
      init(typedObserverMixin, this, delegate[ObserverLike_scheduler]);
      init(typedThrowIfEmptySinkMixin, this, delegate, factory);
    }),
    mixWith(typedObserverMixin, typedThrowIfEmptySinkMixin),
    createObjectFactory<ObserverLike<T>, ObserverLike<T>, Factory<unknown>>(),
    createThrowIfEmptyOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  );
})();
export const throwIfEmptyT: ThrowIfEmpty<ObservableLike> = {
  throwIfEmpty,
};

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise: ToPromise<ObservableLike, SchedulerLike>["toPromise"] =
  <T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, Promise<T>> =>
  observable =>
    newInstance<
      Promise<T>,
      (
        resolve: (value: T | PromiseLike<T>) => void,
        reject: (ex: unknown) => void,
      ) => void
    >(Promise, (resolve, reject) => {
      let result: Option<T> = none;
      let hasResult = false;

      pipe(
        observable,
        forEach(next => {
          hasResult = true;
          result = next;
        }),
        subscribe(scheduler),
        onDisposed(err => {
          if (isSome(err)) {
            const { cause } = err;
            reject(cause);
          } else if (!hasResult) {
            reject(
              newInstance(
                Error,
                "Observable completed without producing a value",
              ),
            );
          } else {
            resolve(result as T);
          }
        }),
      );
    });
