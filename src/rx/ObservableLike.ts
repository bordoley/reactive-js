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
import { MAX_SAFE_INTEGER } from "../__internal__/env";
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
import { isInContinuation } from "../__internal__/schedulingInternal";
import {
  DisposableRefLike,
  createDisposableRef,
  disposableMixin,
} from "../__internal__/util/DisposableLikeMixins";
import {
  MutableEnumeratorLike,
  enumeratorMixin,
} from "../__internal__/util/EnumeratorLikeMixin";
import { MutableRefLike_current } from "../__internal__/util/MutableRefLike";
import {
  PropertyTypeOf,
  __extends,
  clazz,
  createInstanceFactory,
  init,
} from "../__internal__/util/Object";
import { createEnumeratorSink } from "../__internal__/util/SinkLikeMixin";
import {
  Buffer,
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
  Zip,
} from "../containers";
import { keepType } from "../containers/ContainerLike";
import {
  toObservable as arrayToObservable,
  every,
  forEach as forEachArray,
  keepT as keepArrayT,
  map as mapArray,
  some,
} from "../containers/ReadonlyArrayLike";
import {
  Equality,
  Factory,
  Function1,
  Option,
  Predicate,
  Reducer,
  SideEffect1,
  compose,
  getLength,
  getOrRaise,
  isEmpty,
  isNone,
  isSome,
  isTrue,
  max,
  min,
  newInstance,
  none,
  pipe,
  pipeUnsafe,
  returns,
} from "../functions";
import { EnumerableLike, createEnumerable } from "../ix";
import {
  toObservable as enumerableToObservable,
  zip as enumerableZip,
  enumerate,
} from "../ix/EnumerableLike";
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
  neverEnumerableObservable,
  runnableObservableType,
} from "../rx";
import {
  ObserverLike,
  ObserverLike_dispatcher,
  SchedulerLike,
  SchedulerLike_inContinuation,
  SchedulerLike_now,
  SchedulerLike_requestYield,
  SchedulerLike_schedule,
  SchedulerLike_shouldYield,
} from "../scheduling";
import { dispatchTo } from "../scheduling/DispatcherLike";
import { getScheduler } from "../scheduling/ObserverLike";
import {
  ContinuationLike,
  DisposableLike,
  DisposableOrTeardown,
  EnumeratorLike,
  EnumeratorLike_current,
  SinkLike,
  SinkLike_notify,
  SourceLike_move,
  disposed,
} from "../util";
import { run } from "../util/ContinuationLike";
import {
  add,
  addTo,
  addToIgnoringChildErrors,
  bindTo,
  dispose,
  isDisposed,
  onComplete,
  onDisposed,
} from "../util/DisposableLike";
import { getCurrent, hasCurrent, move } from "../util/EnumeratorLike";
import { notify, notifySink, sourceFrom } from "../util/SinkLike";
import { getObserverCount } from "./MulticastObservableLike";
import { sinkInto } from "./ReactiveContainerLike";
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

export const buffer: <T>(options?: {
  readonly duration?: number | Function1<T, ObservableLike>;
  readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]> = /*@__PURE__*/ (<
  T,
>() => {
  const typedObserverMixin = observerMixin<ArrayBuffer>();

  type TBufferObserverProperties = {
    buffer: T[];
    delegate: ObserverLike<readonly T[]>;
    durationFunction: Function1<T, ObservableLike>;
    durationSubscription: DisposableRefLike;
    maxBufferSize: number;
  };

  const createBufferObserver = createInstanceFactory(
    clazz(
      __extends(typedObserverMixin, disposableMixin),
      function BufferObserver(
        this: TBufferObserverProperties & ObserverLike<T>,
        delegate: ObserverLike<readonly T[]>,
        durationFunction: Function1<T, ObservableLike>,
        maxBufferSize: number,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.buffer = [];
        this.delegate = delegate;
        this.durationFunction = durationFunction;
        this.durationSubscription = createDisposableRef(disposed);
        this.maxBufferSize = maxBufferSize;

        return pipe(
          this,
          onComplete(() => {
            const { buffer } = this;
            this.buffer = [];

            if (isEmpty(buffer)) {
              pipe(delegate, dispose());
            } else {
              pipe([buffer], arrayToObservable(), sinkInto(delegate));
            }
          }),
        );
      },
      {
        buffer: none,
        delegate: none,
        durationFunction: none,
        durationSubscription: none,
        maxBufferSize: 0,
      },
      {
        [SinkLike_notify](
          this: TBufferObserverProperties & ObserverLike<T>,
          next: T,
        ) {
          const { buffer, maxBufferSize } = this;

          buffer.push(next);

          const doOnNotify = () => {
            this.durationSubscription[MutableRefLike_current] = disposed;

            const buffer = this.buffer;
            this.buffer = [];

            pipe(this.delegate, notify(buffer));
          };

          if (getLength(buffer) === maxBufferSize) {
            doOnNotify();
          } else if (
            isDisposed(this.durationSubscription[MutableRefLike_current])
          ) {
            this.durationSubscription[MutableRefLike_current] = pipe(
              next,
              this.durationFunction,
              forEach<unknown>(doOnNotify),
              subscribe(getScheduler(this)),
            );
          }
        },
      },
    ),
  );

  return (
    options: {
      readonly duration?: Function1<T, ObservableLike> | number;
      readonly maxBufferSize?: number;
    } = {},
  ) => {
    const durationOption = options.duration ?? MAX_SAFE_INTEGER;
    const durationFunction =
      durationOption === MAX_SAFE_INTEGER
        ? neverEnumerableObservable
        : typeof durationOption === "number"
        ? (_: T) => pipe([none], arrayToObservable())
        : durationOption;

    const maxBufferSize = max(options.maxBufferSize ?? MAX_SAFE_INTEGER, 1);

    const operator = (delegate: ObserverLike<readonly T[]>) => {
      return pipe(
        createBufferObserver(delegate, durationFunction, maxBufferSize),
        addTo(delegate),
      );
    };

    return durationOption === MAX_SAFE_INTEGER
      ? liftEnumerableObservable(operator)
      : liftObservable(operator);
  };
})();
export const bufferT: Buffer<ObservableLike> = {
  buffer,
};

interface combineLatest {
  <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<
    [TA, TB]
  >;
  <TA, TB, TC, T>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): ObservableLike<[TA, TB, TC]>;
  <TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): ObservableLike<[TA, TB, TC, TD]>;
  <TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): ObservableLike<[TA, TB, TC, TD, TE]>;
  <TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
  <TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
  <TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
  <TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
    i: ObservableLike<TI>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
export const combineLatest: combineLatest = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> =>
  latest(observables, LatestMode.Combine);
export const combineLatestT: Zip<ObservableLike> = {
  zip: combineLatest,
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
export const concat: concat = /*@__PURE__*/ (<T>() => {
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

interface forkCombineLatest {
  <T, TA, TB>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
  ): ContainerOperator<ObservableLike, T, [TA, TB]>;
  <T, TA, TB, TC>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC]>;
  <T, TA, TB, TC, TD>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD]>;
  <T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE]>;
  <T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF]>;
  <T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG]>;
  <T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
    h: ContainerOperator<ObservableLike, T, TH>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG, TH]>;
  <T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
    h: ContainerOperator<ObservableLike, T, TH>,
    i: ContainerOperator<ObservableLike, T, TI>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
export const forkCombineLatest =
  <T>(
    ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
  ): ContainerOperator<ObservableLike, T, readonly unknown[]> =>
  (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        mapArray(op => pipe(obs, op)),
      ),
      LatestMode.Combine,
    );
interface forkZipLatest {
  <T, TA, TB>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
  ): ContainerOperator<ObservableLike, T, [TA, TB]>;
  <T, TA, TB, TC>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC]>;
  <T, TA, TB, TC, TD>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD]>;
  <T, TA, TB, TC, TD, TE>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE]>;
  <T, TA, TB, TC, TD, TE, TF>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF]>;
  <T, TA, TB, TC, TD, TE, TF, TG>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG]>;
  <T, TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
    h: ContainerOperator<ObservableLike, T, TH>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG, TH]>;
  <T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ContainerOperator<ObservableLike, T, TA>,
    b: ContainerOperator<ObservableLike, T, TB>,
    c: ContainerOperator<ObservableLike, T, TC>,
    d: ContainerOperator<ObservableLike, T, TD>,
    e: ContainerOperator<ObservableLike, T, TE>,
    f: ContainerOperator<ObservableLike, T, TF>,
    g: ContainerOperator<ObservableLike, T, TG>,
    h: ContainerOperator<ObservableLike, T, TH>,
    i: ContainerOperator<ObservableLike, T, TI>,
  ): ContainerOperator<ObservableLike, T, [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
export function forkZipLatest<T>(
  ...ops: readonly ContainerOperator<ObservableLike, T, unknown>[]
): ContainerOperator<ObservableLike, T, readonly unknown[]> {
  return (obs: ObservableLike<T>) =>
    latest(
      pipe(
        ops,
        mapArray(op => pipe(obs, op)),
      ),
      LatestMode.Zip,
    );
}

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

const enum LatestMode {
  Combine = 1,
  Zip = 2,
}
const latest = /*@__PURE__*/ (() => {
  const typedObserverMixin = observerMixin();
  type LatestCtx = {
    delegate: ObserverLike<readonly unknown[]>;
    mode: LatestMode;
    completedCount: number;
    observers: TLatestObserverProperties[];
  };

  const add = (self: LatestCtx, observer: TLatestObserverProperties): void => {
    self.observers.push(observer);
  };

  const onNotify = (self: LatestCtx) => {
    const { mode, observers } = self;

    const isReady = observers.every(x => x.ready);

    if (isReady) {
      const result = pipe(
        observers,
        mapArray(observer => observer.latest),
      );
      pipe(self.delegate, notify(result));

      if (mode === LatestMode.Zip) {
        for (const sub of observers) {
          sub.ready = false;
          sub.latest = none as any;
        }
      }
    }
  };

  const onCompleted = (self: LatestCtx) => {
    self.completedCount++;

    if (self.completedCount === getLength(self.observers)) {
      pipe(self.delegate, dispose());
    }
  };

  type TLatestObserverProperties = {
    ready: boolean;
    latest: unknown;
    ctx: LatestCtx;
  };

  const createLatestObserver = createInstanceFactory(
    clazz(
      __extends(typedObserverMixin, disposableMixin),
      function LatestObserver(
        this: TLatestObserverProperties & ObserverLike,
        scheduler: SchedulerLike,
        ctx: LatestCtx,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, scheduler);
        this.ctx = ctx;
        return this;
      },
      {
        ready: false,
        latest: none,
        ctx: none,
      },
      {
        [SinkLike_notify](this: TLatestObserverProperties, next: unknown) {
          const { ctx } = this;
          this.latest = next;
          this.ready = true;

          onNotify(ctx);
        },
      },
    ),
  );

  return (
    observables: readonly ObservableLike<any>[],
    mode: LatestMode,
  ): ObservableLike<readonly unknown[]> => {
    const onSink = (delegate: ObserverLike<readonly unknown[]>) => {
      const ctx: LatestCtx = {
        completedCount: 0,
        observers: [],
        delegate,
        mode,
      };

      const onCompleteCb = () => {
        onCompleted(ctx);
      };

      const scheduler = getScheduler(delegate);

      for (const observable of observables) {
        const innerObserver = pipe(
          createLatestObserver(scheduler, ctx),
          addTo(delegate),
          onComplete(onCompleteCb),
          sourceFrom(observable),
        );

        add(ctx, innerObserver);
      }
    };

    const enumerableObservables = pipe(
      observables,
      mapArray(toEnumerableObservable()),
      keepType(keepArrayT, isSome),
    );

    const runnableObservables = pipe(
      observables,
      mapArray(toRunnableObservable()),
      keepType(keepArrayT, isSome),
    );

    return getLength(enumerableObservables) === getLength(observables)
      ? createEnumerableObservable(onSink)
      : getLength(runnableObservables) === getLength(observables)
      ? createRunnableObservable(onSink)
      : createObservable(onSink);
  };
})();

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

export const toEnumerable: <T>() => Function1<
  ObservableLike<T>,
  Option<EnumerableLike<T>>
> = /*@__PURE__*/ (<T>() => {
  const typedEnumeratorMixin = enumeratorMixin<T>();
  const typedObserverMixin = observerMixin<T>();

  type TEnumeratorSchedulerProperties = {
    [SchedulerLike_inContinuation]: boolean;
    continuations: ContinuationLike[];
  } & PropertyTypeOf<[typeof disposableMixin, typeof typedEnumeratorMixin]>;

  type EnumeratorScheduler = SchedulerLike & MutableEnumeratorLike<T>;

  const createEnumeratorScheduler = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedEnumeratorMixin),
      function EnumeratorScheduler(
        this: EnumeratorScheduler & TEnumeratorSchedulerProperties,
      ) {
        init(disposableMixin, this);
        init(typedEnumeratorMixin, this);

        this.continuations = [];

        return this;
      },
      {
        [SchedulerLike_inContinuation]: false,
        continuations: none,
      },
      {
        [SchedulerLike_now]: 0,
        get [SchedulerLike_shouldYield](): boolean {
          const self = this as unknown as TEnumeratorSchedulerProperties;
          return isInContinuation(self);
        },
        [SchedulerLike_requestYield](): void {
          // No-Op: We yield whenever the continuation is running.
        },
        [SourceLike_move](
          this: TEnumeratorSchedulerProperties & MutableEnumeratorLike<T>,
        ) {
          if (!isDisposed(this)) {
            const { continuations } = this;

            const continuation = continuations.shift();
            if (isSome(continuation)) {
              this[SchedulerLike_inContinuation] = true;
              run(continuation);
              this[SchedulerLike_inContinuation] = false;
            } else {
              pipe(this, dispose());
            }
          }
        },
        [SchedulerLike_schedule](
          this: TEnumeratorSchedulerProperties & DisposableLike,
          continuation: ContinuationLike,
          _?: { readonly delay?: number },
        ): void {
          pipe(this, add(continuation));

          if (!isDisposed(continuation)) {
            this.continuations.push(continuation);
          }
        },
      },
    ),
  );

  type TEnumeratorObserverProperties = {
    enumerator: EnumeratorScheduler;
  } & PropertyTypeOf<[typeof disposableMixin, typeof typedObserverMixin]>;

  const createEnumeratorObserver = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedObserverMixin),
      function EnumeratorObserver(
        this: TEnumeratorObserverProperties & ObserverLike<T>,
        enumerator: EnumeratorScheduler,
      ) {
        init(disposableMixin, this);
        init(typedObserverMixin, this, enumerator);
        this.enumerator = enumerator;

        return this;
      },
      {
        enumerator: none,
      },
      {
        [SinkLike_notify](this: TEnumeratorObserverProperties, next: T) {
          this.enumerator[EnumeratorLike_current] = next;
        },
      },
    ),
  );

  return () =>
    (obs: ObservableLike<T>): Option<EnumerableLike<T>> =>
      getObservableType(obs) === enumerableObservableType
        ? createEnumerable(() => {
            const scheduler = createEnumeratorScheduler();

            pipe(
              createEnumeratorObserver(scheduler),
              addTo(scheduler),
              sourceFrom(obs),
            );

            return scheduler;
          })
        : none;
})();

export const toEnumerableObservable =
  <T>() =>
  (obs: ObservableLike<T>): Option<EnumerableObservableLike<T>> =>
    getObservableType(obs) === enumerableObservableType
      ? (obs as EnumerableObservableLike<T>)
      : none;

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

export const toRunnableObservable =
  <T>() =>
  (obs: ObservableLike<T>): Option<RunnableObservableLike<T>> =>
    getObservableType(obs) === runnableObservableType ||
    getObservableType(obs) === enumerableObservableType
      ? (obs as RunnableObservableLike<T>)
      : none;

export const zip: Zip<ObservableLike>["zip"] = /*@__PURE__*/ (() => {
  const typedObserverMixin = observerMixin();

  const shouldEmit = compose(
    mapArray((x: EnumeratorLike) => hasCurrent(x) || move(x)),
    every(isTrue),
  );

  const shouldComplete = compose(
    forEachArray<EnumeratorLike>(move),
    some(isDisposed),
  );

  type TZipObserverProperties = {
    delegate: ObserverLike<readonly unknown[]>;
    enumerators: readonly EnumeratorLike<any>[];
    sinkEnumerator: EnumeratorLike & SinkLike;
  };

  const createZipObserver = createInstanceFactory(
    clazz(
      __extends(disposableMixin, typedObserverMixin),
      function ZipObserver(
        this: ObserverLike & TZipObserverProperties,
        delegate: ObserverLike<readonly unknown[]>,
        enumerators: readonly EnumeratorLike<any>[],
        sinkEnumerator: EnumeratorLike & SinkLike,
      ): ObserverLike {
        init(disposableMixin, this);
        init(typedObserverMixin, this, getScheduler(delegate));

        this.delegate = delegate;
        this.sinkEnumerator = sinkEnumerator;
        this.enumerators = enumerators;

        return pipe(
          this,
          onComplete(() => {
            if (
              isDisposed(sinkEnumerator) ||
              (!hasCurrent(sinkEnumerator) && !move(sinkEnumerator))
            ) {
              pipe(delegate, dispose());
            }
          }),
        );
      },
      {
        delegate: none,
        enumerators: none,
        sinkEnumerator: none,
      },
      {
        [SinkLike_notify](
          this: ObserverLike & TZipObserverProperties,
          next: unknown,
        ) {
          const { sinkEnumerator, enumerators } = this;
          if (isDisposed(this)) {
            return;
          }

          pipe(sinkEnumerator, notify(next));

          if (!shouldEmit(enumerators)) {
            return;
          }

          const zippedNext = pipe(enumerators, mapArray(getCurrent));
          pipe(this.delegate, notify(zippedNext));

          if (shouldComplete(enumerators)) {
            pipe(this, dispose());
          }
        },
      },
    ),
  );

  const onSink =
    (observables: readonly ObservableLike[]) => (observer: ObserverLike) => {
      const enumerators: EnumeratorLike[] = [];

      for (const next of observables) {
        if (getObservableType(next) === enumerableObservableType) {
          const enumerator = pipe(
            next,
            toEnumerable(),
            getOrRaise(),
            enumerate(),
            addTo(observer),
          );

          move(enumerator);
          enumerators.push(enumerator);
        } else {
          const enumerator = pipe(createEnumeratorSink(), addTo(observer));
          enumerators.push(enumerator);

          pipe(
            createZipObserver(observer, enumerators, enumerator),
            addTo(observer),
            sourceFrom(next),
          );
        }
      }
    };

  return (
    ...observables: readonly ObservableLike<any>[]
  ): ObservableLike<readonly any[]> => {
    const enumerableObservables = pipe(
      observables,
      mapArray(toEnumerableObservable()),
      keepType(keepArrayT, isSome),
    );

    const runnableObservables = pipe(
      observables,
      mapArray(toRunnableObservable()),
      keepType(keepArrayT, isSome),
    );

    return getLength(enumerableObservables) === getLength(observables)
      ? pipe(
          enumerableObservables,
          mapArray(toEnumerable()),
          keepType(keepArrayT, isSome),
          enumerables =>
            (
              enumerableZip as unknown as (...v: any[]) => EnumerableLike<any[]>
            )(...enumerables),
          enumerableToObservable(),
        )
      : getLength(runnableObservables) === getLength(observables)
      ? createRunnableObservable(onSink(observables))
      : createObservable(onSink(observables));
  };
})();
export const zipT: Zip<ObservableLike> = {
  zip: zip as unknown as Zip<ObservableLike>["zip"],
};

interface zipLatest {
  <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<
    [TA, TB]
  >;
  <TA, TB, TC, T>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
  ): ObservableLike<[TA, TB, TC]>;
  <TA, TB, TC, TD>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
  ): ObservableLike<[TA, TB, TC, TD]>;
  <TA, TB, TC, TD, TE>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
  ): ObservableLike<[TA, TB, TC, TD, TE]>;
  <TA, TB, TC, TD, TE, TF>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF]>;
  <TA, TB, TC, TD, TE, TF, TG>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG]>;
  <TA, TB, TC, TD, TE, TF, TG, TH>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH]>;
  <TA, TB, TC, TD, TE, TF, TG, TH, TI>(
    a: ObservableLike<TA>,
    b: ObservableLike<TB>,
    c: ObservableLike<TC>,
    d: ObservableLike<TD>,
    e: ObservableLike<TE>,
    f: ObservableLike<TF>,
    g: ObservableLike<TG>,
    h: ObservableLike<TH>,
    i: ObservableLike<TI>,
  ): ObservableLike<[TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
}
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
export const zipLatest: zipLatest = (
  ...observables: readonly ObservableLike<any>[]
): ObservableLike<readonly unknown[]> => latest(observables, LatestMode.Zip);
export const zipLatestT: Zip<ObservableLike> = {
  zip: zipLatest,
};
