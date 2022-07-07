import { hasDelay } from "./__internal__.optionalArgs";
import {
  createCatchErrorOperator,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createEverySatisfyOperator,
  createFromDisposable,
  createKeepOperator,
  createOnSink,
  createPairwiseOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createSomeSatisfyOperator,
  createTakeFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "./__internal__.reactiveContainer";
import {
  Container,
  ContainerLike,
  ContainerOf,
  ContainerOperator,
  DistinctUntilChanged,
  EverySatisfy,
  Generate,
  Keep,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  SomeSatisfy,
  TakeFirst,
  TakeLast,
  TakeWhile,
  concatMap,
} from "./container";
import { dispatch, dispatchTo } from "./dispatcher";
import {
  Disposable,
  addTo,
  bindTo,
  dispose,
  isDisposed,
  onDisposed,
  toErrorHandler,
} from "./disposable";
import { forEach } from "./enumerator";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Predicate,
  Reducer,
  Updater,
  identity,
  ignore,
  instanceFactory,
  newInstance,
  pipe,
} from "./functions";
import {
  CatchError,
  DecodeWithCharset,
  ThrowIfEmpty,
} from "./liftableContainer";
import { createObservable, createT } from "./observable/createObservable";
import { defer } from "./observable/defer";
import { fromArrayT } from "./observable/fromArray";
import { lift, liftSynchronousT } from "./observable/lift";
import { mapT } from "./observable/map";
import { tagObservableType } from "./observable/observable";
import {
  AbstractDelegatingObserver,
  createDelegatingObserver,
} from "./observable/observer";
import { onNotify } from "./observable/onNotify";
import { Subject, publish, publishTo } from "./observable/subject";
import { subscribe } from "./observable/subscribe";
import { switchAll, switchAllT } from "./observable/switchAll";
import { using } from "./observable/using";
import { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
import { Observer, getScheduler } from "./observer";
import { Option, isNone, isSome, none } from "./option";
import { ReactiveContainerLike, sourceFrom } from "./reactiveContainer";
import { notifySink } from "./reactiveSink";
import { RunnableLike, ToRunnable, createRunnable } from "./runnable";
import {
  SchedulerLike,
  VirtualTimeSchedulerLike,
  __yield,
  createVirtualTimeScheduler,
} from "./scheduler";

export type DefaultObservable = 0;
export type RunnableObservable = 1;
export type EnumerableObservable = 2;

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> extends ReactiveContainerLike {
  readonly T: unknown;
  readonly TContainerOf: ObservableLike<this["T"]>;
  readonly TLiftableContainerState: Observer<this["T"]>;

  readonly observableType:
    | EnumerableObservable
    | RunnableObservable
    | DefaultObservable;

  sinkInto(this: ObservableLike<T>, sink: Observer<T>): void;
}

export interface EnumerableObservableLike<T> extends ObservableLike<T> {
  readonly TContainerOf: EnumerableObservableLike<this["T"]>;

  readonly observableType: EnumerableObservable;
}

export interface RunnableObservableLike<T> extends ObservableLike<T> {
  readonly TContainerOf: RunnableObservableLike<this["T"]>;

  readonly observableType: RunnableObservable;
}

export interface FromObservable<C extends ContainerLike> extends Container<C> {
  fromObservable<T>(): Function1<ObservableLike<T>, ContainerOf<C, T>>;
}

export interface ToObservable<C extends ContainerLike> extends Container<C> {
  toObservable: <T>() => Function1<ContainerOf<C, T>, ObservableLike<T>>;
}

/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
export type ObservableOperator<A, B> = Function1<
  ObservableLike<A>,
  ObservableLike<B>
>;

/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */
export interface MulticastObservableLike<T>
  extends ObservableLike<T>,
    Disposable {
  /**
   * The number of observers currently observing.
   */
  readonly observerCount: number;
  readonly replay: number;
}

export type AsyncReducer<T, TAcc> = Function2<TAcc, T, ObservableLike<TAcc>>;
export type ObservableEffectMode = "batched" | "combine-latest";

/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
export type ThrottleMode = "first" | "last" | "interval";

export {
  observable,
  __currentScheduler,
  __do,
  __memo,
  __observe,
  __using,
} from "./observable/effects";
export {
  combineLatest,
  combineLatestT,
  forkCombineLatest,
  forkZipLatest,
  zipLatest,
  zipLatestT,
} from "./observable/latest";
export { concat, concatT } from "./observable/concat";
export { createObservable, createT } from "./observable/createObservable";
export { Subject, publish, publishTo } from "./observable/subject";
export { fromArray, fromArrayT } from "./observable/fromArray";
export {
  fromEnumerable,
  fromEnumerableT,
  fromIterable,
  fromIterableT,
  fromIterator,
  fromIteratorT,
} from "./observable/fromEnumerable";
export { forkMerge, merge, mergeT } from "./observable/merge";
export { never, neverT } from "./observable/never";
export { subscribe } from "./observable/subscribe";
export { using, usingT } from "./observable/using";
export { defer, deferT } from "./observable/defer";
export { buffer, bufferT } from "./observable/buffer";
export { map, mapT } from "./observable/map";
export {
  concatAll,
  concatAllT,
  exhaust,
  exhaustT,
  mergeAll,
  mergeAllT,
} from "./observable/mergeAll";
export { onNotify } from "./observable/onNotify";
export { repeat, repeatT, retry } from "./observable/repeat";
export { switchAll, switchAllT } from "./observable/switchAll";
export { throttle } from "./observable/throttle";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zip, zipT } from "./observable/zip";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
export { toEnumerable, toEnumerableT } from "./observable/toEnumerable";
export { toPromise } from "./observable/toPromise";
export { isEnumerable, isRunnable } from "./observable/observable";

export const catchError: <T>(
  onError: Function1<unknown, ObservableLike<T> | void>,
) => ObservableOperator<T, T> = /*@__PURE__*/ createCatchErrorOperator(
  liftSynchronousT,
  class CatchErrorObserver<T> extends AbstractDelegatingObserver<T, T> {},
);

export const catchErrorT: CatchError<ObservableLike<unknown>> = {
  catchError,
};

export const fromDisposable = /*@__PURE__*/ createFromDisposable(createT);

export const decodeWithCharset: (
  charset?: string,
) => ObservableOperator<ArrayBuffer, string> =
  /*@__PURE__*/ createDecodeWithCharsetOperator(
    { ...liftSynchronousT, ...fromArrayT },
    class DecodeWithCharsetObserver extends AbstractDelegatingObserver<
      ArrayBuffer,
      string
    > {
      constructor(
        delegate: Observer<string>,
        readonly textDecoder: TextDecoder,
      ) {
        super(delegate);
      }
    },
  );

export const decodeWithCharsetT: DecodeWithCharset<ObservableLike<unknown>> = {
  decodeWithCharset,
};

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => ObservableOperator<T, T> =
  /*@__PURE__*/ createDistinctUntilChangedOperator(
    liftSynchronousT,
    class DistinctUntilChangedObserver<T> extends AbstractDelegatingObserver<
      T,
      T
    > {
      prev: Option<T> = none;
      hasValue = false;

      constructor(delegate: Observer<T>, readonly equality: Equality<T>) {
        super(delegate);
      }
    },
  );

export const distinctUntilChangedT: DistinctUntilChanged<
  ObservableLike<unknown>
> = {
  distinctUntilChanged,
};

export const everySatisfy: <T>(
  predicate: Predicate<T>,
) => ObservableOperator<T, boolean> = /*@__PURE__*/ createEverySatisfyOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class EverySatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
    constructor(delegate: Observer<boolean>, readonly predicate: Predicate<T>) {
      super(delegate);
    }
  },
);

export const everySatisfyT: EverySatisfy<ObservableLike<unknown>> = {
  everySatisfy,
};

export const fromObservable = <T>(): Function1<
  ObservableLike<T>,
  ObservableLike<T>
> => identity;
export const fromObservableT: FromObservable<ObservableLike<unknown>> = {
  fromObservable,
};

export const fromPromise = <T>(
  factory: Factory<Promise<T>>,
): ObservableLike<T> =>
  /*@__PURE__*/ createObservable(({ dispatcher }) => {
    factory().then(next => {
      if (!isDisposed(dispatcher)) {
        pipe(dispatcher, dispatch(next), dispose());
      }
    }, toErrorHandler(dispatcher));
  });

/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number; readonly delayStart?: boolean },
): ObservableLike<T> => {
  const { delayStart = true } = options ?? {};

  const factory = () => {
    let acc = initialValue();

    return (observer: Observer<T>) => {
      while (true) {
        acc = generator(acc);
        observer.notify(acc);
        __yield(options);
      }
    };
  };

  return pipe(
    defer(factory, delayStart ? options : none),
    tagObservableType(hasDelay(options) ? 1 : 2),
  );
};

export const generateT: Generate<ObservableLike<unknown>> = {
  generate,
};

export const keep: <T>(predicate: Predicate<T>) => ObservableOperator<T, T> =
  /*@__PURE__*/ createKeepOperator(
    liftSynchronousT,
    class KeepObserver<T> extends AbstractDelegatingObserver<T, T> {
      constructor(delegate: Observer<T>, readonly predicate: Predicate<T>) {
        super(delegate);
      }
    },
  );

export const keepT: Keep<ObservableLike<unknown>> = {
  keep,
};

export const mapAsync = <TA, TB>(
  f: Function1<TA, Promise<TB>>,
): ObservableOperator<TA, TB> =>
  concatMap({ ...switchAllT, ...mapT }, (a: TA) => fromPromise(() => f(a)));

export const onSubscribe = /*@__PURE__*/ createOnSink(createT);

export const getObserverCount = <T>(observable: MulticastObservableLike<T>) =>
  observable.observerCount;

export const pairwise: <T>() => ObservableOperator<T, [Option<T>, T]> =
  /*@__PURE__*/ createPairwiseOperator(
    liftSynchronousT,
    class PairwiseObserver<T> extends AbstractDelegatingObserver<
      T,
      [Option<T>, T]
    > {
      prev: Option<T>;
      hasPrev = false;
    },
  );

export const pairwiseT: Pairwise<ObservableLike<unknown>> = {
  pairwise,
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
    const subject = newInstance<Subject<T>, number>(Subject, replay);
    pipe(
      observable,
      onNotify(publishTo(subject)),
      subscribe(scheduler),
      bindTo(subject),
    );

    return subject;
  };

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = /*@__PURE__*/ createReduceOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class ReducerObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
    constructor(
      delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
);

export const reduceT: Reduce<ObservableLike<unknown>> = {
  reduce,
};

export const getReplay = <T>(observable: MulticastObservableLike<T>) =>
  observable.replay;

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = /*@__PURE__*/ createScanOperator(
  liftSynchronousT,
  class ScanObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
    constructor(
      delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
);

export const scanT: Scan<ObservableLike<unknown>> = {
  scan,
};

export interface ScanAsync<C extends ContainerLike> extends Container<C> {
  scanAsync: <T, TAcc>(
    scanner: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) => ContainerOperator<C, T, TAcc>;
}
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync =
  <T, TAcc>(
    scanner: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ): ObservableOperator<T, TAcc> =>
  observable =>
    using(instanceFactory<Subject<TAcc>>(Subject), accFeedbackStream =>
      pipe(
        observable,
        zipWithLatestFrom<T, TAcc, ObservableLike<TAcc>>(
          accFeedbackStream,
          (next, acc) => pipe(scanner(acc, next), takeFirst()),
        ),
        switchAll<TAcc>(),
        onNotify(publishTo(accFeedbackStream)),
        onSubscribe(() => pipe(accFeedbackStream, publish(initialValue()))),
      ),
    );

export const scanAsyncT: ScanAsync<ObservableLike<unknown>> = {
  scanAsync,
};

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
  ): ObservableOperator<T, T> =>
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

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = /*@__PURE__*/ createSkipFirstOperator(
  liftSynchronousT,
  class SkipFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
    count = 0;

    constructor(delegate: Observer<T>, readonly skipCount: number) {
      super(delegate);
    }
  },
);

export const skipFirstT: SkipFirst<ObservableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: <T>(
  predicate: Predicate<T>,
) => ObservableOperator<T, boolean> = /*@__PURE__*/ createSomeSatisfyOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class SomeSatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
    constructor(delegate: Observer<boolean>, readonly predicate: Predicate<T>) {
      super(delegate);
    }
  },
);

export const someSatisfyT: SomeSatisfy<ObservableLike<unknown>> = {
  someSatisfy,
};

export const subscribeOn =
  <T>(scheduler: SchedulerLike): ObservableOperator<T, T> =>
  observable =>
    createObservable(({ dispatcher }) =>
      pipe(
        observable,
        onNotify(dispatchTo(dispatcher)),
        subscribe(scheduler),
        bindTo(dispatcher),
      ),
    );

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = /*@__PURE__*/ createTakeFirstOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class TakeFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
    count = 0;

    constructor(delegate: Observer<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeFirstT: TakeFirst<ObservableLike<unknown>> = {
  takeFirst,
};

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = /*@__PURE__*/ createTakeLastOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
    readonly last: T[] = [];

    constructor(delegate: Observer<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeLastT: TakeLast<ObservableLike<unknown>> = {
  takeLast,
};

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (delegate: Observer<T>) => {
    const takeUntilObserver: Observer<T> = pipe(
      createDelegatingObserver(delegate),
      bindTo(delegate),
      bindTo(pipe(notifier, takeFirst(), subscribe(getScheduler(delegate)))),
    );

    return takeUntilObserver;
  };
  return lift(operator);
};

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ObservableOperator<T, T> = /*@__PURE__*/ createTakeWhileOperator(
  liftSynchronousT,
  class TakeWhileObserver<T> extends AbstractDelegatingObserver<T, T> {
    constructor(
      delegate: Observer<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super(delegate);
    }
  },
);

export const takeWhileT: TakeWhile<ObservableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => ObservableOperator<T, T> = /*@__PURE__*/ createThrowIfEmptyOperator(
  liftSynchronousT,
  class ThrowIfEmptyObserver<T> extends AbstractDelegatingObserver<T, T> {
    isEmpty = true;
  },
);

export const throwIfEmptyT: ThrowIfEmpty<ObservableLike<unknown>> = {
  throwIfEmpty,
};

export const toObservable = <T>(): Function1<
  ObservableLike<T>,
  ObservableLike<T>
> => identity;

export const toObservableT: ToObservable<ObservableLike<unknown>> = {
  toObservable,
};

export const toRunnable =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<ObservableLike<T>, RunnableLike<T>> =>
  source =>
    createRunnable(sink => {
      const { schedulerFactory = createVirtualTimeScheduler } = options;
      const scheduler = schedulerFactory();
      pipe(
        source,
        onNotify(notifySink(sink)),
        subscribe(scheduler),
        addTo(sink),
      );

      pipe(scheduler, addTo(sink), forEach(ignore), dispose());
    });

export const toRunnableT: ToRunnable<ObservableLike<unknown>> = {
  toRunnable,
};

export const TContainerOf: ObservableLike<unknown> = undefined as any;
