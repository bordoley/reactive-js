import { decorateMap } from "./__internal__.functions";
import {
  TReactive,
  createDistinctUntilChangedOperator,
  createKeepOperator,
  createPairwiseOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeFirstOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "./__internal__.liftable";
import { hasDelay } from "./__internal__.optionalArgs";
import {
  createCatchErrorOperator,
  createDecodeWithCharsetOperator,
  createEverySatisfyOperator,
  createFromDisposable,
  createOnSink,
  createReduceOperator,
  createSomeSatisfyOperator,
  createTakeLastOperator,
  decorateWithCatchErrorNotify,
  decorateWithDecodeWithCharsetNotify,
  decorateWithDistinctUntilChangedNotify,
  decorateWithEverySatisfyNotify,
  decorateWithKeepNotify,
  decorateWithPairwiseNotify,
  decorateWithReduceNotify,
  decorateWithScanNotify,
  decorateWithSkipFirstNotify,
  decorateWithSomeSatisfyNotify,
  decorateWithTakeFirstNotify,
  decorateWithTakeLastNotify,
  decorateWithTakeWhileNotify,
  decorateWithThrowIfEmptyNotify,
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
  DisposableLike,
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
import { lift, liftEnumerableT, liftT } from "./observable/lift";
import { mapT } from "./observable/map";
import { tagObservableType } from "./observable/observable";
import {
  AbstractDelegatingObserver,
  createDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observable/observer";
import { onNotify } from "./observable/onNotify";
import { Subject, publish, publishTo } from "./observable/subject";
import { subscribe } from "./observable/subscribe";
import { switchAll, switchAllT } from "./observable/switchAll";
import { using } from "./observable/using";
import { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
import { ObserverLike, getScheduler } from "./observer";
import { Option, isNone, isSome, none } from "./option";
import { ReactiveContainerLike, sourceFrom } from "./reactiveContainer";
import { notifySink } from "./reactiveSink";
import { RunnableLike, createRunnable } from "./runnable";
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
  readonly TLiftableContainerState: ObserverLike<this["T"]>;

  readonly observableType:
    | EnumerableObservable
    | RunnableObservable
    | DefaultObservable;

  sinkInto(this: ObservableLike<T>, sink: ObserverLike<T>): void;
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
    DisposableLike {
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
export { toEnumerable } from "./observable/toEnumerable";
export { toPromise } from "./observable/toPromise";
export { isEnumerable, isRunnable } from "./observable/observable";

export const catchError: CatchError<ObservableLike<unknown>>["catchError"] =
  /*@__PURE__*/ decorateMap(
    class CatchErrorObserver<T> extends AbstractDelegatingObserver<T, T> {},
    decorateWithCatchErrorNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createCatchErrorOperator(liftEnumerableT),
  );

export const catchErrorT: CatchError<ObservableLike<unknown>> = {
  catchError,
};

export const fromDisposable = /*@__PURE__*/ createFromDisposable(createT);

export const decodeWithCharset: DecodeWithCharset<
  ObservableLike<unknown>
>["decodeWithCharset"] = /*@__PURE__*/ decorateMap(
  class DecodeWithCharsetObserver extends AbstractDelegatingObserver<
    ArrayBuffer,
    string
  > {
    constructor(
      delegate: ObserverLike<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super(delegate);
    }
  },
  decorateWithDecodeWithCharsetNotify<ObservableLike<unknown>>(),
  decorateNotifyWithAssertions,
  createDecodeWithCharsetOperator({
    ...liftEnumerableT,
    ...fromArrayT,
  }),
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
export const distinctUntilChanged: DistinctUntilChanged<
  ObservableLike<unknown>
>["distinctUntilChanged"] = /*@__PURE__*/ (() => {
  class DistinctUntilChangedObserver<T> extends AbstractDelegatingObserver<
    T,
    T
  > {
    prev: Option<T> = none;
    hasValue = false;

    constructor(delegate: ObserverLike<T>, readonly equality: Equality<T>) {
      super(delegate);
    }
  }

  decorateWithDistinctUntilChangedNotify<ObservableLike<unknown>>(
    DistinctUntilChangedObserver,
  );
  decorateNotifyWithAssertions(DistinctUntilChangedObserver);
  return createDistinctUntilChangedOperator(
    liftEnumerableT,
    DistinctUntilChangedObserver,
  );
})();

export const distinctUntilChangedT: DistinctUntilChanged<
  ObservableLike<unknown>
> = {
  distinctUntilChanged,
};

export const everySatisfy: EverySatisfy<
  ObservableLike<unknown>
>["everySatisfy"] = /*@__PURE__*/ decorateMap(
  class EverySatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
    constructor(
      delegate: ObserverLike<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate);
    }
  },
  decorateWithEverySatisfyNotify<ObservableLike<unknown>>(),
  decorateNotifyWithAssertions,
  createEverySatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
);

export const everySatisfyT: EverySatisfy<ObservableLike<unknown>> = {
  everySatisfy,
};

export const fromObservable: FromObservable<
  ObservableLike<unknown>
>["fromObservable"] = <T>(): Function1<ObservableLike<T>, ObservableLike<T>> =>
  identity;
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

    return (observer: ObserverLike<T>) => {
      while (!isDisposed(observer)) {
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

export const keep: Keep<ObservableLike<unknown>>["keep"] =
  /*@__PURE__*/ (() => {
    class KeepObserver<T> extends AbstractDelegatingObserver<T, T> {
      constructor(delegate: ObserverLike<T>, readonly predicate: Predicate<T>) {
        super(delegate);
      }
    }
    decorateWithKeepNotify<ObservableLike<unknown>>(KeepObserver);
    decorateNotifyWithAssertions(KeepObserver);
    return createKeepOperator(liftEnumerableT, KeepObserver);
  })();

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

export const pairwise: Pairwise<ObservableLike<unknown>>["pairwise"] =
  /*@__PURE__*/ (() => {
    class PairwiseObserver<T> extends AbstractDelegatingObserver<
      T,
      [Option<T>, T]
    > {
      prev: Option<T>;
      hasPrev = false;
    }
    decorateWithPairwiseNotify<ObservableLike<unknown>>(PairwiseObserver);
    decorateNotifyWithAssertions(PairwiseObserver);
    return createPairwiseOperator<ObservableLike<unknown>, TReactive>(
      liftEnumerableT,
      PairwiseObserver,
    );
  })();

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

export const reduce: Reduce<ObservableLike<unknown>>["reduce"] =
  /*@__PURE__*/ decorateMap(
    class ReducerObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
      constructor(
        delegate: ObserverLike<TAcc>,
        readonly reducer: Reducer<T, TAcc>,
        public acc: TAcc,
      ) {
        super(delegate);
      }
    },
    decorateWithReduceNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createReduceOperator({ ...fromArrayT, ...liftEnumerableT }),
  );

export const reduceT: Reduce<ObservableLike<unknown>> = {
  reduce,
};

export const getReplay = <T>(observable: MulticastObservableLike<T>) =>
  observable.replay;

export const scan: Scan<ObservableLike<unknown>>["scan"] =
  /*@__PURE__*/ (() => {
    class ScanObserver<T, TAcc> extends AbstractDelegatingObserver<T, TAcc> {
      constructor(
        delegate: ObserverLike<TAcc>,
        readonly reducer: Reducer<T, TAcc>,
        public acc: TAcc,
      ) {
        super(delegate);
      }
    }
    decorateWithScanNotify<ObservableLike<unknown>>(ScanObserver);
    decorateNotifyWithAssertions(ScanObserver);
    return createScanOperator<ObservableLike<unknown>, TReactive>(
      liftEnumerableT,
      ScanObserver,
    );
  })();

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
export const scanAsync: ScanAsync<ObservableLike<unknown>>["scanAsync"] =
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
export const skipFirst: SkipFirst<ObservableLike<unknown>>["skipFirst"] =
  /*@__PURE__*/ (() => {
    class SkipFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
      count = 0;

      constructor(delegate: ObserverLike<T>, readonly skipCount: number) {
        super(delegate);
      }
    }
    decorateWithSkipFirstNotify<ObservableLike<unknown>>(SkipFirstObserver);
    decorateNotifyWithAssertions(SkipFirstObserver);
    return createSkipFirstOperator<ObservableLike<unknown>, TReactive>(
      liftEnumerableT,
      SkipFirstObserver,
    );
  })();

export const skipFirstT: SkipFirst<ObservableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: SomeSatisfy<ObservableLike<unknown>>["someSatisfy"] =
  /*@__PURE__*/ decorateMap(
    class SomeSatisfyObserver<T> extends AbstractDelegatingObserver<
      T,
      boolean
    > {
      constructor(
        delegate: ObserverLike<boolean>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
    decorateWithSomeSatisfyNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createSomeSatisfyOperator({ ...fromArrayT, ...liftEnumerableT }),
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

export const takeFirst: TakeFirst<ObservableLike<unknown>>["takeFirst"] =
  /*@__PURE__*/ (() => {
    class TakeFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
      count = 0;

      constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
        super(delegate);
      }
    }
    decorateWithTakeFirstNotify<ObservableLike<unknown>>(TakeFirstObserver);
    decorateNotifyWithAssertions(TakeFirstObserver);
    return createTakeFirstOperator<ObservableLike<unknown>, TReactive>(
      { ...fromArrayT, ...liftEnumerableT },
      TakeFirstObserver,
    );
  })();

export const takeFirstT: TakeFirst<ObservableLike<unknown>> = {
  takeFirst,
};

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast: TakeLast<ObservableLike<unknown>>["takeLast"] =
  /*@__PURE__*/ decorateMap(
    class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
      readonly last: T[] = [];

      constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
        super(delegate);
      }
    },
    decorateWithTakeLastNotify<ObservableLike<unknown>>(),
    decorateNotifyWithAssertions,
    createTakeLastOperator({ ...fromArrayT, ...liftEnumerableT }),
  );

export const takeLastT: TakeLast<ObservableLike<unknown>> = {
  takeLast,
};

export const takeUntil = <T>(
  notifier: ObservableLike<unknown>,
): ObservableOperator<T, T> => {
  const operator = (delegate: ObserverLike<T>) => {
    const takeUntilObserver: ObserverLike<T> = pipe(
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
export const takeWhile: TakeWhile<ObservableLike<unknown>>["takeWhile"] =
  /*@__PURE__*/ (() => {
    class TakeWhileObserver<T> extends AbstractDelegatingObserver<T, T> {
      constructor(
        delegate: ObserverLike<T>,
        readonly predicate: Predicate<T>,
        readonly inclusive: boolean,
      ) {
        super(delegate);
      }
    }

    decorateWithTakeWhileNotify<ObservableLike<unknown>>(TakeWhileObserver);
    decorateNotifyWithAssertions(TakeWhileObserver);
    return createTakeWhileOperator(liftEnumerableT, TakeWhileObserver);
  })();

export const takeWhileT: TakeWhile<ObservableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: ThrowIfEmpty<
  ObservableLike<unknown>
>["throwIfEmpty"] = /*@__PURE__*/ (() => {
  class ThrowIfEmptyObserver<T> extends AbstractDelegatingObserver<T, T> {
    isEmpty = true;
  }
  decorateWithThrowIfEmptyNotify<ObservableLike<unknown>>(ThrowIfEmptyObserver);
  decorateNotifyWithAssertions(ThrowIfEmptyObserver);
  return createThrowIfEmptyOperator<ObservableLike<unknown>, TReactive>(
    liftT,
    ThrowIfEmptyObserver,
  );
})();

export const throwIfEmptyT: ThrowIfEmpty<ObservableLike<unknown>> = {
  throwIfEmpty,
};

export const toObservable: ToObservable<
  ObservableLike<unknown>
>["toObservable"] = () => identity;

export const toObservableT: ToObservable<ObservableLike<unknown>> = {
  toObservable,
};

export const toRunnable =
  <T>(
    options: {
      readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
    } = {},
  ): Function1<
    ObservableLike<T> & {
      readonly observableType: RunnableObservable | EnumerableObservable;
    },
    RunnableLike<T>
  > =>
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

export const TContainerOf: ObservableLike<unknown> = undefined as any;
