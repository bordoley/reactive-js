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
  createDecodeWithCharsetObserver,
  createDelegatingObserver,
  createDistinctUntilChangedObserver,
  createForEachObserver,
  createKeepObserver,
  createMapObserver,
  createPairwiseObserver,
  createReduceObserver,
  createScanObserver,
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
  __extends,
  clazz,
  createInstanceFactory,
  init,
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

interface concat {
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
export const concat: concat = (<T>() => {
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

interface decodeWithCharset {
  <C extends ObservableLike = ObservableLike>(
    charset?: string | undefined,
  ): ContainerOperator<C, ArrayBuffer, string>;
}
export const decodeWithCharset: decodeWithCharset = /*@__PURE__*/ (() =>
  pipe(
    createDecodeWithCharsetObserver(arrayToObservable()),
    createDecodeWithCharsetOperator<ObservableLike, TReactive>(
      liftEnumerableObservableT,
    ),
  ))() as decodeWithCharset;
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

interface distinctUntilChanged {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly equality?: Equality<T> | undefined;
  }): ContainerOperator<C, T, T>;
}
export const distinctUntilChanged: distinctUntilChanged = /*@__PURE__*/ (<
  T,
>() =>
  pipe(
    createDistinctUntilChangedObserver,
    createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as distinctUntilChanged)();
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface forEach {
  <T, C extends ObservableLike = ObservableLike>(
    effect: SideEffect1<T>,
  ): ContainerOperator<C, T, T>;
  <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const forEach: forEach = /*@__PURE__*/ (<T>() =>
  pipe(
    createForEachObserver,
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();
export const forEachT: ForEach<ObservableLike> = { forEach };

interface keep {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
  ): ContainerOperator<C, T, T>;
  <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const keep: keep = /*@__PURE__*/ (<T>() =>
  pipe(
    createKeepObserver,
    createKeepOperator<ObservableLike, T, TReactive>(liftEnumerableObservableT),
  ))();
export const keepT: Keep<ObservableLike> = { keep };

interface map {
  <TA, TB, C extends ObservableLike = ObservableLike>(
    mapper: Function1<TA, TB>,
  ): ContainerOperator<C, TA, TB>;
}
export const map: map = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    createMapObserver,
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as map)();
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

interface forkMerge {
  <TIn, TOut, C extends ObservableLike = ObservableLike>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}
export const forkMerge: forkMerge = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) =>
    pipe(
      ops,
      mapArray(op => op(obs)),
      mergeImpl,
    )) as forkMerge;

/** @hidden */
export const merge: concat = (<T>(...observables: ObservableLike<T>[]) =>
  mergeImpl(observables)) as concat;
export const mergeT: Concat<ObservableLike> = {
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

interface onSubscribe {
  <T, C extends ObservableLike = ObservableLike>(
    f: Factory<DisposableOrTeardown | void>,
  ): Function1<C, ContainerOf<C, T>>;
}
export const onSubscribe: onSubscribe = (<T>(
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
  }) as onSubscribe;

interface pairwise {
  <T, C extends ObservableLike = ObservableLike>(): ContainerOperator<
    C,
    T,
    readonly [T, T]
  >;
}
export const pairwise: pairwise = /*@__PURE__*/ (() =>
  pipe(
    liftEnumerableObservable(createPairwiseObserver),
    returns,
  ) as pairwise)();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

interface reduce {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const reduce: reduce = /*@__PURE__*/ (<T, TAcc>() =>
  pipe(
    createReduceObserver<ObservableLike, T, TAcc>(arrayToObservable()),
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as reduce)();
export const reduceT: Reduce<ObservableLike> = { reduce };

interface scan {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const scan: scan = /*@__PURE__*/ pipe(
  createScanObserver,
  createScanOperator(liftEnumerableObservableT),
) as scan;
export const scanT: Scan<ObservableLike> = { scan };

interface share {
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
export const share: share =
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

interface skipFirst {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const skipFirst: skipFirst =
  /*@__PURE__*/
  pipe(
    createSkipFirstObserver,
    createSkipFirstOperator(liftEnumerableObservableT),
  ) as skipFirst;
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

interface switchAll {
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
export const switchAll: switchAll = /*@__PURE__*/ (<T>() => {
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
    createInstanceFactory(
      clazz(
        __extends(disposableMixin, typedObserverMixin),
        function SwitchAllObserver(
          this: TProperties & ObserverLike<ObservableLike<T>>,
          delegate: ObserverLike<T>,
        ) {
          init(disposableMixin, this);
          init(typedObserverMixin, this, getScheduler(delegate));

          this.delegate = delegate;
          this.currentRef = pipe(
            createDisposableRef(disposed),
            addTo(delegate),
          );

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
    ),
    liftEnumerableObservable,
    returns,
  ) as switchAll;
})();
export const switchAllT: ConcatAll<ObservableLike> = {
  concatAll: switchAll,
};

export const subscribe: <T>(
  scheduler: SchedulerLike,
) => Function1<ObservableLike<T>, DisposableLike> = /*@__PURE__*/ (<T>() => {
  const typedObserverMixin = observerMixin<T>();

  const createObserver = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedObserverMixin),
      function SubscribeObserver(
        this: ObserverLike<T>,
        scheduler: SchedulerLike,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);

        return this;
      },
      {},
      {
        [SinkLike_notify](_: T) {},
      },
    ),
  );
  return (scheduler: SchedulerLike) => (observable: ObservableLike<T>) =>
    pipe(
      scheduler,
      createObserver,
      addToIgnoringChildErrors(scheduler),
      sourceFrom(observable),
    );
})();

interface subscribeOn {
  <T>(scheduler: SchedulerLike): Function1<
    ObservableLike<T>,
    ObservableLike<T>
  >;
}
export const subscribeOn: subscribeOn =
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

interface takeFirst {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeFirst: takeFirst = /*@__PURE__*/ pipe(
  createTakeFirstObserver,
  createTakeFirstOperator(liftEnumerableObservableT),
) as takeFirst;
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

interface takeLast {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeLast: takeLast = /*@__PURE__*/ pipe(
  createTakeLastObserver(arrayToObservable()),
  createTakeLastOperator(liftEnumerableObservableT),
) as takeLast;
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

interface takeUntil {
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
export const takeUntil: takeUntil = (<T>(notifier: ObservableLike) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );

  return getObservableType(notifier) === 0
    ? liftObservable(operator)
    : liftRunnableObservable(operator);
}) as takeUntil;

interface takeWhile {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<C, T, T>;
}
export const takeWhile: takeWhile =
  /*@__PURE__*/
  pipe(
    createTakeWhileObserver,
    createTakeWhileOperator(liftEnumerableObservableT),
  ) as takeWhile;
export const takeWhileT: TakeWhile<ObservableLike> = { takeWhile };

interface throwIfEmpty {
  <T, C extends ObservableLike = ObservableLike>(
    factory: Factory<unknown>,
  ): ContainerOperator<C, T, T>;
}
export const throwIfEmpty: throwIfEmpty = /*@__PURE__*/ pipe(
  createThrowIfEmptyObserver,
  createThrowIfEmptyOperator(liftEnumerableObservableT),
) as throwIfEmpty;
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
