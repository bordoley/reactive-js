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
import {
  creatReduceObserver,
  creatScanObserver,
  createDecodeWithCharsetObserver,
  createDelegatingObserver,
  createDistinctUntilChangedObserver,
  createForEachObserver,
  createKeepObserver,
  createMapObserver,
  createPairwiseObserver,
  createSkipFirstObserver,
  createTakeFirstObserver,
  createTakeLastObserver,
  createTakeWhileObserver,
  createThrowIfEmptyObserver,
  observerMixin,
} from "../__internal__/scheduling/ObserverLikeMixin";
import {
  DisposableRefLike,
  createDisposableRef,
  disposableMixin,
} from "../__internal__/util/DisposableLikeMixins";
import { MutableRefLike_current } from "../__internal__/util/MutableRefLike";
import {
  PropertyTypeOf,
  clazz,
  createObjectFactory,
  init,
  mixWith,
} from "../__internal__/util/Object";
import {
  Concat,
  ConcatAll,
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
  EnumerableObservableLike,
  MulticastObservableLike,
  ObservableLike,
  ObservableLike_observableType,
  ObservableType,
  ReactiveContainerLike_sinkInto,
  RunnableObservableLike,
  createEnumerableObservable,
  createObservable,
  createRunnableObservable,
  createSubject,
  enumerableObservableType,
  runnableObservableType,
} from "../rx";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  SchedulerLike,
} from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { getScheduler } from "../scheduling/ObserverLike";
import {
  DisposableLike,
  DisposableOrTeardown,
  SinkLike_notify,
  disposed,
} from "../util";
import {
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { notifySink, sourceFrom } from "../util/SinkLike";
import { getObserverCount } from "./MulticastObservableLike";
import { publishTo } from "./SubjectLike";

export const getObservableType = (obs: ObservableLike): 0 | 1 | 2 =>
  obs[ObservableLike_observableType];

const createLift: (
  observableType: 0 | 1 | 2,
) => Lift<ObservableLike, TReactive>["lift"] = /*@__PURE__*/ (() => {
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
      pipeUnsafe(observer, ...this.operators, sourceFrom(this.source));
    }
  }

  return (observableType: ObservableType) =>
    <TA, TB>(
      operator: Function1<ObserverLike<TB>, ObserverLike<TA>>,
    ): Function1<ObservableLike<TA>, ObservableLike<TB>> =>
    source => {
      const sourceSource =
        source instanceof LiftedObservable ? source.source : source;

      const allFunctions =
        source instanceof LiftedObservable
          ? [operator, ...source.operators]
          : [operator];

      const type = min(
        observableType,
        getObservableType(source),
        getObservableType(sourceSource),
      );

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        type as ObservableType,
      );
    };
})();

const liftObservable = createLift(0);
const liftRunnableObservable = createLift(1);
const liftEnumerableObservable = createLift(2);
const liftEnumerableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

type ConcattedObservable<TObs extends unknown[]> = TObs extends [infer F]
  ? F
  : TObs extends [infer F, ...infer R]
  ? F extends EnumerableObservableLike
    ? ConcattedObservable<R>
    : F extends RunnableObservableLike
    ? ConcattedObservable<R> extends EnumerableObservableLike
      ? F
      : ConcattedObservable<R> extends RunnableObservableLike
      ? F
      : R
    : F
  : never;

interface ConcatOperator {
  <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, T>(
    c1: C1,
    c2: C2,
  ): ConcattedObservable<[C1, C2]>;

  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
  ): ConcattedObservable<[C1, C2, C3]>;

  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    C4 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
  ): ConcattedObservable<[C1, C2, C3, C4]>;
  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    C4 extends ObservableLike<T>,
    C5 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
    c5: C5,
  ): ConcattedObservable<[C1, C2, C3, C4, C5]>;
  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    C4 extends ObservableLike<T>,
    C5 extends ObservableLike<T>,
    C6 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
    c5: C5,
    c6: C6,
  ): ConcattedObservable<[C1, C2, C3, C4, C5, C6]>;

  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    C4 extends ObservableLike<T>,
    C5 extends ObservableLike<T>,
    C6 extends ObservableLike<T>,
    C7 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
    c5: C5,
    c6: C6,
    c7: C7,
  ): ConcattedObservable<[C1, C2, C3, C4, C5, C6, C7]>;

  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    C4 extends ObservableLike<T>,
    C5 extends ObservableLike<T>,
    C6 extends ObservableLike<T>,
    C7 extends ObservableLike<T>,
    C8 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
    c4: C4,
    c5: C5,
    c6: C6,
    c7: C7,
    c8: C8,
  ): ConcattedObservable<[C1, C2, C3, C4, C5, C6, C7, C8]>;
}
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 * @hidden
 */
export const concat: ConcatOperator = (<T>() => {
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

    const type = pipe(observables, mapArray(getObservableType), x =>
      min(...x),
    ) as ObservableType;

    switch (type) {
      case enumerableObservableType:
        return createEnumerableObservable(onSink);
      case runnableObservableType:
        return createRunnableObservable(onSink);
      default:
        return createObservable(onSink);
    }
  };
})();
export const concatT: Concat<ObservableLike> = {
  concat,
};

interface DecodeWithCharsetOperator {
  <C extends ObservableLike = ObservableLike>(
    charset?: string | undefined,
  ): ContainerOperator<C, ArrayBuffer, string>;
}
export const decodeWithCharset: DecodeWithCharsetOperator = /*@__PURE__*/ (() =>
  pipe(
    createDecodeWithCharsetObserver(arrayToObservable()),
    createDecodeWithCharsetOperator<ObservableLike, TReactive>(
      liftEnumerableObservableT,
    ),
  ))() as DecodeWithCharsetOperator;
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

interface DistinctUntilChangedOperator {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly equality?: Equality<T> | undefined;
  }): ContainerOperator<C, T, T>;
}
export const distinctUntilChanged: DistinctUntilChangedOperator =
  /*@__PURE__*/ (<T>() =>
    pipe(
      createDistinctUntilChangedObserver,
      createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
        liftEnumerableObservableT,
      ),
    ) as DistinctUntilChangedOperator)();
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface ForEachOperator {
  <T, C extends ObservableLike = ObservableLike>(
    effect: SideEffect1<T>,
  ): ContainerOperator<C, T, T>;
  <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const forEach: ForEachOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createForEachObserver,
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();
export const forEachT: ForEach<ObservableLike> = { forEach };

interface KeepOperator {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
  ): ContainerOperator<C, T, T>;
  <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const keep: KeepOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createKeepObserver,
    createKeepOperator<ObservableLike, T, TReactive>(liftEnumerableObservableT),
  ))();
export const keepT: Keep<ObservableLike> = { keep };

interface MapOperator {
  <TA, TB, C extends ObservableLike = ObservableLike>(
    mapper: Function1<TA, TB>,
  ): ContainerOperator<C, TA, TB>;
}
export const map: MapOperator = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    createMapObserver,
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as MapOperator)();
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

    const type = pipe(observables, mapArray(getObservableType), x =>
      min(...x),
    ) as ObservableType;

    switch (type) {
      case enumerableObservableType:
        return createEnumerableObservable(onSink);
      case runnableObservableType:
        return createRunnableObservable(onSink);
      default:
        return createObservable(onSink);
    }
  };
})();

interface ForkMergeOperator {
  <TIn, TOut, C extends ObservableLike = ObservableLike>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}
export const forkMerge: ForkMergeOperator = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      mapArray(op => op(obs)),
      mergeImpl,
    )) as ForkMergeOperator;

/** @hidden */
export const merge: ConcatOperator = (<T>(
  ...observables: ObservableLike<T>[]
) => mergeImpl(observables)) as ConcatOperator;
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
      forEach<T>(publishTo(subject)),
      subscribe(scheduler),
      bindTo(subject),
    );

    return subject;
  };

interface OnSubscribeOperator {
  <T, C extends ObservableLike = ObservableLike>(
    f: Factory<DisposableOrTeardown | void>,
  ): Function1<C, ContainerOf<C, T>>;
}
export const onSubscribe: OnSubscribeOperator = (<T>(
    f: Factory<DisposableOrTeardown | void>,
  ) =>
  (obs: ObservableLike<T>) => {
    const type = getObservableType(obs);
    switch (type) {
      case enumerableObservableType:
        return createOnSink(createEnumerableObservable, obs, f);
      case runnableObservableType:
        return createOnSink(createRunnableObservable, obs, f);
      default:
        return createOnSink(createObservable, obs, f);
    }
  }) as OnSubscribeOperator;

interface PairwiseOperator {
  <T, C extends ObservableLike = ObservableLike>(): ContainerOperator<
    C,
    T,
    readonly [T, T]
  >;
}
export const pairwise: PairwiseOperator = /*@__PURE__*/ (() =>
  pipe(
    liftEnumerableObservable(createPairwiseObserver),
    returns,
  ) as PairwiseOperator)();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

interface ReduceOperator {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const reduce: ReduceOperator = /*@__PURE__*/ (<T, TAcc>() =>
  pipe(
    creatReduceObserver<ObservableLike, T, TAcc>(arrayToObservable()),
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ReduceOperator)();
export const reduceT: Reduce<ObservableLike> = { reduce };

interface ScanOperator {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const scan: ScanOperator = /*@__PURE__*/ (<T, TAcc>() =>
  pipe(
    creatScanObserver,
    createScanOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ScanOperator)();
export const scanT: Scan<ObservableLike> = { scan };

interface ShareOperator {
  /**
   * Returns an `ObservableLike` backed by a shared refcounted subscription to the
   * source. When the refcount goes to 0, the underlying subscription
   * to the source is disposed.
   *
   * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
   * @param replay The number of events that should be replayed when the `ObservableLike`
   * is subscribed to.
   */
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const share: ShareOperator =
  <T>(scheduler: SchedulerLike, options?: { readonly replay?: number }) =>
  (source: ObservableLike<T>) => {
    let multicasted: Option<MulticastObservableLike<T>> = none;

    // FIXME: Type test scheduler for VTS
    return createObservable<T>(observer => {
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

interface SkipFirstOperator {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const skipFirst: SkipFirstOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createSkipFirstObserver,
    createSkipFirstOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as SkipFirstOperator)();
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

interface SwitchAllOperator {
  <T>(): Function1<ObservableLike<ObservableLike<T>>, ObservableLike<T>>;

  <
    C extends RunnableObservableLike<CInner>,
    CInner extends EnumerableObservableLike<T>,
    T,
  >(): Function1<C, RunnableObservableLike<T>>;
  <
    C extends RunnableObservableLike<CInner>,
    CInner extends RunnableObservableLike<T>,
    T,
  >(): Function1<C, RunnableObservableLike<T>>;

  <
    C extends EnumerableObservableLike<CInner>,
    CInner extends EnumerableObservableLike<T>,
    T,
  >(): Function1<C, EnumerableObservableLike<T>>;
  <
    C extends EnumerableObservableLike<CInner>,
    CInner extends RunnableObservableLike<T>,
    T,
  >(): Function1<C, RunnableObservableLike<T>>;
}
export const switchAll: SwitchAllOperator = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  type TProperties = {
    currentRef: DisposableRefLike;
    delegate: ObserverLike<T>;
  } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

  function onDispose(this: TProperties & DisposableLike) {
    if (isDisposed(this.currentRef[MutableRefLike_current])) {
      pipe(this.delegate, dispose());
    }
  }

  return pipe(
    clazz(
      function SwitchAllObserver(
        this: TProperties & ObserverLike<ObservableLike<T>>,
        delegate: ObserverLike<T>,
      ): ObserverLike<ObservableLike<T>> {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.delegate = delegate;
        this.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));

        pipe(this, addTo(delegate), onComplete(onDispose));

        return this;
      },
      {
        currentRef: none,
        delegate: none,
      },
      {
        [SinkLike_notify](
          this: TProperties & ObserverLike<T> & DisposableRefLike,
          next: ObservableLike<T>,
        ) {
          this.currentRef[MutableRefLike_current] = pipe(
            next,
            forEach<T>(notifySink(this.delegate)),
            subscribe(getScheduler(this)),
            onComplete(() => {
              if (isDisposed(this)) {
                pipe(this.delegate, dispose());
              }
            }),
          );
        },
      },
    ),
    mixWith(disposableMixin, typedObserverMixin),
    createObjectFactory<ObserverLike<ObservableLike<T>>, ObserverLike<T>>(),
    liftEnumerableObservable,
    returns,
  ) as SwitchAllOperator;
})();
export const switchAllT: ConcatAll<ObservableLike> = {
  concatAll: switchAll,
};

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  const createObserver = pipe(
    clazz(
      function SubscribeObserver(
        this: ObserverLike<T>,
        scheduler: SchedulerLike,
      ): ObserverLike<T> {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);

        return this;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
    mixWith(disposableMixin, typedObserverMixin),
    createObjectFactory<ObserverLike<T>, SchedulerLike>(),
  );
  return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
    pipe(
      scheduler,
      createObserver,
      addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );
})();

interface SubscribeOnOperator {
  <T>(scheduler: SchedulerLike): Function1<
    ObservableLike<T>,
    ObservableLike<T>
  >;
}
export const subscribeOn: SubscribeOnOperator =
  <T>(scheduler: SchedulerLike) =>
  (observable: ObservableLike<T>) =>
    // FIXME: type test for VTS
    createObservable<T>(({ [ObserverLike_dispatcher]: dispatcher }) =>
      pipe(
        observable,
        forEach<T>(dispatchTo(dispatcher)),
        subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

interface TakeFirstOperator {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeFirst: TakeFirstOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeFirstObserver,
    createTakeFirstOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeFirstOperator)();
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

interface TakeLastOperator {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeLast: TakeLastOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeLastObserver(arrayToObservable()),
    createTakeLastOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeLastOperator)();
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

interface TakeUntilOperator {
  <C extends RunnableObservableLike<T>, T>(
    notifier: RunnableObservableLike | EnumerableObservableLike,
  ): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
  <C extends EnumerableObservableLike<T>, T>(
    notifier: RunnableObservableLike | EnumerableObservableLike,
  ): Function1<ContainerOf<C, T>, RunnableObservableLike<T>>;
  <T>(notifier: ObservableLike): Function1<
    ObservableLike<T>,
    ObservableLike<T>
  >;
}
export const takeUntil: TakeUntilOperator = (<T>(notifier: ObservableLike) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );

  return getObservableType(notifier) === 0
    ? liftObservable(operator)
    : liftRunnableObservable(operator);
}) as TakeUntilOperator;

interface TakeWhileOperator {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<C, T, T>;
}
export const takeWhile: TakeWhileOperator = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeWhileObserver,
    createTakeWhileOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeWhileOperator)();
export const takeWhileT: TakeWhile<ObservableLike> = { takeWhile };

interface ThrowIfEmptyOpreator {
  <T, C extends ObservableLike = ObservableLike>(
    factory: Factory<unknown>,
  ): ContainerOperator<C, T, T>;
}
export const throwIfEmpty: ThrowIfEmptyOpreator = /*@__PURE__*/ (<T>() =>
  pipe(
    createThrowIfEmptyObserver,
    createThrowIfEmptyOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ThrowIfEmptyOpreator)();
export const throwIfEmptyT: ThrowIfEmpty<ObservableLike> = {
  throwIfEmpty,
};

/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
export const toPromise =
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
        forEach<T>(next => {
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
