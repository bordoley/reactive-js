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
        source[ObservableLike_observableType] ?? 0,
        sourceSource[ObservableLike_observableType] ?? 0,
      );

      return newInstance(
        LiftedObservable,
        sourceSource,
        allFunctions,
        type as ObservableType,
      );
    };
})();

const liftHotObservable = createLift(0);
const liftRunnableObservable = createLift(1);
const liftEnumerableObservable = createLift(2);
const liftEnumerableObservableT: Lift<ObservableLike, TReactive> = {
  lift: liftEnumerableObservable,
  variance: reactive,
};

type ConcatObservableType<TObs extends unknown[]> = TObs extends [infer F]
  ? F
  : TObs extends [infer F, ...infer R]
  ? F extends EnumerableObservableLike
    ? ConcatObservableType<R>
    : F extends RunnableObservableLike
    ? ConcatObservableType<R> extends EnumerableObservableLike
      ? F
      : ConcatObservableType<R> extends RunnableObservableLike
      ? F
      : R
    : F
  : unknown;

interface ConcatObservable {
  <C1 extends ObservableLike<T>, C2 extends ObservableLike<T>, T>(
    c1: C1,
    c2: C2,
  ): ConcatObservableType<[C1, C2]>;

  <
    C1 extends ObservableLike<T>,
    C2 extends ObservableLike<T>,
    C3 extends ObservableLike<T>,
    T,
  >(
    c1: C1,
    c2: C2,
    c3: C3,
  ): ConcatObservableType<[C1, C2, C3]>;

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
  ): ConcatObservableType<[C1, C2, C3, C4]>;
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
  ): ConcatObservableType<[C1, C2, C3, C4, C5]>;
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
  ): ConcatObservableType<[C1, C2, C3, C4, C5, C6]>;

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
  ): ConcatObservableType<[C1, C2, C3, C4, C5, C6, C7]>;

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
  ): ConcatObservableType<[C1, C2, C3, C4, C5, C6, C7, C8]>;
}
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 * @hidden
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

  return (...observables: readonly ObservableLike<T>[]): any => {
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
      mapArray(obs => obs[ObservableLike_observableType] ?? 0),
      x => min(...x),
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

interface DecodeWithCharsetObservable {
  <C extends ObservableLike = ObservableLike>(
    charset?: string | undefined,
  ): ContainerOperator<C, ArrayBuffer, string>;
}
export const decodeWithCharset: DecodeWithCharsetObservable =
  /*@__PURE__*/ (() =>
    pipe(
      createDecodeWithCharsetObserver(arrayToObservable()),
      createDecodeWithCharsetOperator<ObservableLike, TReactive>(
        liftEnumerableObservableT,
      ),
    ))() as DecodeWithCharsetObservable;
export const decodeWithCharsetT: DecodeWithCharset<ObservableLike> = {
  decodeWithCharset,
};

interface DistinctUntilChangedObservable {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly equality?: Equality<T> | undefined;
  }): ContainerOperator<C, T, T>;
}
export const distinctUntilChanged: DistinctUntilChangedObservable =
  /*@__PURE__*/ (<T>() =>
    pipe(
      createDistinctUntilChangedObserver,
      createDistinctUntilChangedOperator<ObservableLike, T, TReactive>(
        liftEnumerableObservableT,
      ),
    ) as DistinctUntilChangedObservable)();
export const distinctUntilChangedT: DistinctUntilChanged<ObservableLike> = {
  distinctUntilChanged,
};

interface ForEachObservable {
  <T, C extends ObservableLike = ObservableLike>(
    effect: SideEffect1<T>,
  ): ContainerOperator<C, T, T>;
  <T>(effect: SideEffect1<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const forEach: ForEachObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createForEachObserver,
    createForEachOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ))();
export const forEachT: ForEach<ObservableLike> = { forEach };

interface KeepObservable {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
  ): ContainerOperator<C, T, T>;
  <T>(predicate: Predicate<T>): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const keep: KeepObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createKeepObserver,
    createKeepOperator<ObservableLike, T, TReactive>(liftEnumerableObservableT),
  ))();
export const keepT: Keep<ObservableLike> = { keep };

interface MapObservable {
  <TA, TB, C extends ObservableLike = ObservableLike>(
    mapper: Function1<TA, TB>,
  ): ContainerOperator<C, TA, TB>;
}
export const map: MapObservable = /*@__PURE__*/ (<TA, TB>() =>
  pipe(
    createMapObserver,
    createMapOperator<ObservableLike, TA, TB, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as MapObservable)();
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
      case enumerableObservableType:
        return createEnumerableObservable(onSink);
      case runnableObservableType:
        return createRunnableObservable(onSink);
      default:
        return createObservable(onSink);
    }
  };
})();

interface ForkMergeObservable {
  <TIn, TOut, C extends ObservableLike = ObservableLike>(
    fst: ContainerOperator<C, TIn, TOut>,
    snd: ContainerOperator<C, TIn, TOut>,
    ...tail: readonly ContainerOperator<C, TIn, TOut>[]
  ): ContainerOperator<C, TIn, TOut>;
}
export const forkMerge: ForkMergeObservable = (<TIn, TOut>(
    ...ops: readonly ContainerOperator<ObservableLike, TIn, TOut>[]
  ) =>
  (obs: ObservableLike<TIn>) => {
    const observables = pipe(
      ops,
      mapArray(op => op(obs)),
    );
    return mergeImpl(observables);
  }) as ForkMergeObservable;

/** @hidden */
export const merge: ConcatObservable = (<T>(
  ...observables: ObservableLike<T>[]
) => mergeImpl(observables)) as ConcatObservable;
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

interface OnSubscribeObservable {
  <T, C extends ObservableLike = ObservableLike>(
    f: Factory<DisposableOrTeardown | void>,
  ): Function1<C, ContainerOf<C, T>>;
}
export const onSubscribe: OnSubscribeObservable = (<T>(
    f: Factory<DisposableOrTeardown | void>,
  ) =>
  (obs: ObservableLike<T>) => {
    const type = (obs as any)[ObservableLike_observableType] ?? 0;
    switch (type) {
      case enumerableObservableType:
        return createOnSink(createEnumerableObservable, obs, f);
      case runnableObservableType:
        return createOnSink(createRunnableObservable, obs, f);
      default:
        return createOnSink(createObservable, obs, f);
    }
  }) as OnSubscribeObservable;

interface PairwiseObservable {
  <T, C extends ObservableLike = ObservableLike>(): ContainerOperator<
    C,
    T,
    readonly [T, T]
  >;
}
export const pairwise: PairwiseObservable = /*@__PURE__*/ (() =>
  pipe(
    liftEnumerableObservable(createPairwiseObserver),
    returns,
  ) as PairwiseObservable)();
export const pairwiseT: Pairwise<ObservableLike> = { pairwise };

interface ReduceObservable {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const reduce: ReduceObservable = /*@__PURE__*/ (<T, TAcc>() =>
  pipe(
    creatReduceObserver<ObservableLike, T, TAcc>(arrayToObservable()),
    createReduceOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ReduceObservable)();
export const reduceT: Reduce<ObservableLike> = { reduce };

interface ScanObservable {
  <T, TAcc, C extends ObservableLike = ObservableLike>(
    scanner: Reducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ContainerOperator<C, T, TAcc>;
}
export const scan: ScanObservable = /*@__PURE__*/ (<T, TAcc>() =>
  pipe(
    creatScanObserver,
    createScanOperator<ObservableLike, T, TAcc, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ScanObservable)();
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
interface Share {
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, ObservableLike<T>>;
}
export const share: Share =
  <T>(scheduler: SchedulerLike, options?: { readonly replay?: number }) =>
  (source: ObservableLike<T>) => {
    let multicasted: Option<MulticastObservableLike<T>> = none;

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

interface SkipFirstObservable {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const skipFirst: SkipFirstObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createSkipFirstObserver,
    createSkipFirstOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as SkipFirstObservable)();
export const skipFirstT: SkipFirst<ObservableLike> = { skipFirst };

interface SwitchAllObservable {
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
export const switchAll: SwitchAllObservable = /*@__PURE__*/ (<T>() => {
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

  const switchAllOperator = pipe(
    clazz(
      function SwitchAllObserver(
        this: TProperties & DisposableLike,
        delegate: ObserverLike<T>,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.delegate = delegate;
        this.currentRef = pipe(createDisposableRef(disposed), addTo(delegate));

        pipe(this, addTo(delegate), onComplete(onDispose));
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
  );

  return (() =>
    liftEnumerableObservable(switchAllOperator)) as SwitchAllObservable;
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

interface SubscribeOn {
  <T>(scheduler: SchedulerLike): Function1<
    ObservableLike<T>,
    ObservableLike<T>
  >;
}
export const subscribeOn: SubscribeOn =
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

interface TakeFirstObservable {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeFirst: TakeFirstObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeFirstObserver,
    createTakeFirstOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeFirstObservable)();
export const takeFirstT: TakeFirst<ObservableLike> = { takeFirst };

interface TakeLastObservable {
  <T, C extends ObservableLike = ObservableLike>(options?: {
    readonly count?: number;
  }): ContainerOperator<C, T, T>;
}
export const takeLast: TakeLastObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeLastObserver(arrayToObservable()),
    createTakeLastOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeLastObservable)();
export const takeLastT: TakeLast<ObservableLike> = { takeLast };

interface TakeUntilObservable {
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
export const takeUntil: TakeUntilObservable = (<T>(
  notifier: ObservableLike,
) => {
  const operator = (delegate: ObserverLike<T>) =>
    pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst<T>(), subscribe(getScheduler(delegate)))),
    );

  return notifier[ObservableLike_observableType] === 0
    ? liftHotObservable(operator)
    : liftRunnableObservable(operator);
}) as TakeUntilObservable;

interface TakeWhileObservable {
  <T, C extends ObservableLike = ObservableLike>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean;
    },
  ): ContainerOperator<C, T, T>;
}
export const takeWhile: TakeWhileObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createTakeWhileObserver,
    createTakeWhileOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as TakeWhileObservable)();
export const takeWhileT: TakeWhile<ObservableLike> = { takeWhile };

interface ThrowIfEmptyObservable {
  <T, C extends ObservableLike = ObservableLike>(
    factory: Factory<unknown>,
  ): ContainerOperator<C, T, T>;
}
export const throwIfEmpty: ThrowIfEmptyObservable = /*@__PURE__*/ (<T>() =>
  pipe(
    createThrowIfEmptyObserver,
    createThrowIfEmptyOperator<ObservableLike, T, TReactive>(
      liftEnumerableObservableT,
    ),
  ) as ThrowIfEmptyObservable)();
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
