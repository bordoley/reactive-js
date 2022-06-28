import {
  DecodeWithCharset,
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
  ThrowIfEmpty,
  concatMap,
} from "./container";
import { DispatcherLike, dispatchTo } from "./dispatcher";
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
  ignore,
  pipe,
} from "./functions";
import { createObservable, createT } from "./observable/createObservable";
import { createSubject } from "./observable/createSubject";
import { defer } from "./observable/defer";
import { fromArrayT } from "./observable/fromArray";
import { lift, liftSynchronousT } from "./observable/lift";
import { mapT } from "./observable/map";
import { onNotify } from "./observable/onNotify";
import { subscribe } from "./observable/subscribe";
import { switchAll, switchAllT } from "./observable/switchAll";
import { using } from "./observable/using";
import { zipWithLatestFrom } from "./observable/zipWithLatestFrom";
import { Observer, createDelegatingObserver } from "./observer";
import { Option, isNone, isSome, none } from "./option";
import { RunnableLike, ToRunnable, createRunnable } from "./runnable";
import {
  SchedulerLike,
  VirtualTimeSchedulerLike,
  __yield,
  createVirtualTimeScheduler,
} from "./scheduler";
import {
  SourceLike,
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
  notifySink,
  sourceFrom,
} from "./source";

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> extends SourceLike {
  readonly T: unknown;
  readonly type: ObservableLike<this["T"]>;
  readonly liftedStateType: Observer<this["T"]>;

  readonly isEnumerable?: boolean;

  sink(this: ObservableLike<T>, sink: Observer<T>): void;
}

export const type: ObservableLike<unknown> = undefined as any;

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
}

/**
 * Represents a duplex stream
 *
 * @noInheritDoc
 */
export interface StreamLike<TReq, T>
  extends DispatcherLike<TReq>,
    MulticastObservableLike<T> {}

/** @noInheritDoc */
export interface SubjectLike<T> extends StreamLike<T, T> {}

export type AsyncReducer<TAcc, T> = Function2<TAcc, T, ObservableLike<TAcc>>;
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
  combineLatestWith,
  forkCombineLatest,
  forkZipLatest,
  zipLatest,
  zipLatestWith,
} from "./observable/latest";
export { concat, concatT } from "./observable/concat";
export { createObservable, createT } from "./observable/createObservable";
export { createSubject } from "./observable/createSubject";
export { fromArray, fromArrayT } from "./observable/fromArray";
export { fromEnumerable } from "./observable/fromEnumerable";
export {
  fromIterable,
  fromIterableT,
  fromIterator,
  fromIteratorT,
} from "./observable/fromIterable";
export { forkMerge, merge, mergeT } from "./observable/merge";
export { never } from "./observable/never";
export { subscribe } from "./observable/subscribe";
export { using, usingT } from "./observable/using";
export { defer } from "./observable/defer";
export {
  AbstractObservable,
  AbstractDisposableObservable,
} from "./observable/observable";
export { buffer } from "./observable/buffer";
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

export const catchError: <T>(
  onError: Function1<unknown, ObservableLike<T> | void>,
) => ObservableOperator<T, T> = createCatchErrorOperator(
  liftSynchronousT,
  class CatchErrorObserver<T> extends Observer<T> {
    constructor(public readonly delegate: Observer<T>) {
      super(delegate.scheduler);
    }
  },
);

export const fromDisposable = createFromDisposable(createT);

export const decodeWithCharset: (
  charset?: string,
) => ObservableOperator<ArrayBuffer, string> = createDecodeWithCharsetOperator(
  { ...liftSynchronousT, ...fromArrayT },
  class DecodeWithCharsetObserver extends Observer<ArrayBuffer> {
    constructor(
      readonly delegate: Observer<string>,
      readonly textDecoder: TextDecoder,
    ) {
      super(delegate.scheduler);
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
}) => ObservableOperator<T, T> = createDistinctUntilChangedOperator(
  liftSynchronousT,
  class DistinctUntilChangedObserver<T> extends Observer<T> {
    prev: Option<T> = none;
    hasValue = false;

    constructor(
      readonly delegate: Observer<T>,
      readonly equality: Equality<T>,
    ) {
      super(delegate.scheduler);
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
) => ObservableOperator<T, boolean> = createEverySatisfyOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class EverySatisfyObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate.scheduler);
    }
  },
);

export const everySatisfyT: EverySatisfy<ObservableLike<unknown>> = {
  everySatisfy,
};

export const fromPromise = <T>(
  factory: Factory<Promise<T>>,
): ObservableLike<T> =>
  createObservable(({ dispatcher }) => {
    factory().then(next => {
      if (!isDisposed(dispatcher)) {
        dispatcher.dispatch(next);
        pipe(dispatcher, dispose());
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
  options: { readonly delay?: number } = {},
): ObservableLike<T> => {
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

  const observable = defer(factory, options);
  (observable as any).isEnumerable = Math.max(options.delay ?? 0, 0) === 0;
  return observable;
};

export const generateT: Generate<ObservableLike<unknown>> = {
  generate,
};

export const keep: <T>(predicate: Predicate<T>) => ObservableOperator<T, T> =
  createKeepOperator(
    liftSynchronousT,
    class KeepObserver<T> extends Observer<T> {
      constructor(
        readonly delegate: Observer<T>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate.scheduler);
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

export const onSubscribe = createOnSink(createT);

export const pairwise: <T>() => ObservableOperator<T, [Option<T>, T]> =
  createPairwiseOperator(
    liftSynchronousT,
    class PairwiseObserver<T> extends Observer<T> {
      prev: Option<T>;
      hasPrev = false;

      constructor(readonly delegate: Observer<[Option<T>, T]>) {
        super(delegate.scheduler);
      }
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
export const publish =
  <T>(
    scheduler: SchedulerLike,
    options?: { readonly replay?: number },
  ): Function1<ObservableLike<T>, MulticastObservableLike<T>> =>
  observable => {
    const subject = createSubject<T>(options);
    pipe(
      observable,
      onNotify(dispatchTo(subject)),
      subscribe(scheduler),
      bindTo(subject),
    );

    return subject;
  };

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createReduceOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class ReducerObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate.scheduler);
    }
  },
);

export const reduceT: Reduce<ObservableLike<unknown>> = {
  reduce,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createScanOperator(
  liftSynchronousT,
  class ScanObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate.scheduler);
    }
  },
);

export const scanT: Scan<ObservableLike<unknown>> = {
  scan,
};

/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scanAsync =
  <T, TAcc>(
    scanner: AsyncReducer<TAcc, T>,
    initialValue: Factory<TAcc>,
  ): ObservableOperator<T, TAcc> =>
  observable =>
    using(
      () => createSubject<TAcc>(),
      accFeedbackStream =>
        pipe(
          observable,
          zipWithLatestFrom<T, TAcc, ObservableLike<TAcc>>(
            accFeedbackStream,
            (next, acc) => pipe(scanner(acc, next), takeFirst()),
          ),
          switchAll<TAcc>(),
          onNotify(dispatchTo(accFeedbackStream)),
          onSubscribe(() => {
            accFeedbackStream.dispatch(initialValue());
          }),
        ),
    );

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
    let multicast: Option<MulticastObservableLike<T>> = none;

    return createObservable(observer => {
      if (isNone(multicast)) {
        multicast = pipe(source, publish(scheduler, options));
      }

      pipe(
        observer,
        sourceFrom(multicast),
        onDisposed(() => {
          if (isSome(multicast) && multicast.observerCount === 0) {
            pipe(multicast, dispose());
            multicast = none;
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
}) => ObservableOperator<T, T> = createSkipFirstOperator(
  liftSynchronousT,
  class SkipFirstObserver<T> extends Observer<T> {
    count = 0;

    constructor(readonly delegate: Observer<T>, readonly skipCount: number) {
      super(delegate.scheduler);
    }
  },
);

export const skipFirstT: SkipFirst<ObservableLike<unknown>> = {
  skipFirst,
};

export const someSatisfy: <T>(
  predicate: Predicate<T>,
) => ObservableOperator<T, boolean> = createSomeSatisfyOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class SomeSatisfyObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<boolean>,
      readonly predicate: Predicate<T>,
    ) {
      super(delegate.scheduler);
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
}) => ObservableOperator<T, T> = createTakeFirstOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class TakeFirstObserver<T> extends Observer<T> {
    count = 0;

    constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
      super(delegate.scheduler);
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
}) => ObservableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, ...liftSynchronousT },
  class TakeLastObserver<T> extends Observer<T> {
    readonly last: T[] = [];

    constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
      super(delegate.scheduler);
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
      bindTo(pipe(notifier, takeFirst(), subscribe(delegate.scheduler))),
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
) => ObservableOperator<T, T> = createTakeWhileOperator(
  liftSynchronousT,
  class TakeWhileObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super(delegate.scheduler);
    }
  },
);

export const takeWhileT: TakeWhile<ObservableLike<unknown>> = {
  takeWhile,
};

export const throwIfEmpty: <T>(
  factory: Factory<unknown>,
) => ObservableOperator<T, T> = createThrowIfEmptyOperator(
  liftSynchronousT,
  class ThrowIfEmptyObserver<T> extends Observer<T> {
    isEmpty = true;

    constructor(readonly delegate: Observer<T>) {
      super(delegate.scheduler);
    }
  },
);

export const throwIfEmptyT: ThrowIfEmpty<ObservableLike<unknown>> = {
  throwIfEmpty,
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
