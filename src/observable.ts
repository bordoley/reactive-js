import {
  DecodeWithCharset,
  DistinctUntilChanged,
  Keep,
  Pairwise,
  Reduce,
  Scan,
  SkipFirst,
  TakeLast,
  TakeWhile,
  ThrowIfEmpty,
} from "./container";
import { DisposableLike } from "./disposable";
import {
  Equality,
  Factory,
  Function1,
  Function2,
  Predicate,
  Reducer,
} from "./functions";
import { fromArrayT } from "./observable/fromArray";
import { liftT } from "./observable/lift";
import {
  Observer,
  createDelegatingObserver as createDelegatingSink,
} from "./observable/observer";
import { Option, none } from "./option";
import {
  SourceLike,
  createCatchErrorOperator,
  createDecodeWithCharsetOperator,
  createDistinctUntilChangedOperator,
  createKeepOperator,
  createPairwiseOperator,
  createReduceOperator,
  createScanOperator,
  createSkipFirstOperator,
  createTakeLastOperator,
  createTakeWhileOperator,
  createThrowIfEmptyOperator,
} from "./source";

/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
export interface ObservableLike<T> extends SourceLike {
  readonly T: unknown;
  readonly type: ObservableLike<this["T"]>;
  readonly sinkType: Observer<this["T"]>;

  readonly isSynchronous: boolean;

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

/** @noInheritDoc */
export interface DispatcherLike<T> extends DisposableLike {
  /**
   * Dispatches the next request
   * @param req
   */
  dispatch(this: DispatcherLike<T>, req: T): void;
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

export { dispatchTo } from "./observable/dispatcher";
export {
  observable,
  __currentScheduler,
  __do,
  __memo,
  __observe,
  __using,
} from "./observable/effects";
export { combineLatest, combineLatestWith } from "./observable/combineLatest";
export { concat, concatT } from "./observable/concat";
export { createObservable } from "./observable/createObservable";
export { createSubject } from "./observable/createSubject";
export { fromArray, fromArrayT } from "./observable/fromArray";
export { fromDisposable } from "./observable/fromDisposable";
export { fromEnumerable } from "./observable/fromEnumerable";
export {
  fromIterable,
  fromIterator,
  fromIteratorT,
} from "./observable/fromIterable";
export { fromPromise } from "./observable/fromPromise";
export { generate } from "./observable/generate";
export { merge, mergeWith } from "./observable/merge";
export { never } from "./observable/never";
export { subscribe } from "./observable/subscribe";
export { using } from "./observable/using";
export { defer } from "./observable/observable";
export { Observer } from "./observable/observer";
export { buffer } from "./observable/buffer";
export { map, mapT } from "./observable/map";
export { mapAsync } from "./observable/mapAsync";
export {
  concatAll,
  concatAllT,
  exhaust,
  exhaustT,
  mergeAll,
  mergeAllT,
} from "./observable/mergeAll";
export { onNotify } from "./observable/onNotify";
export { onSubscribe } from "./observable/onSubscribe";
export { publish } from "./observable/publish";
export { repeat, retry } from "./observable/repeat";
export { scanAsync } from "./observable/scanAsync";
export { share } from "./observable/share";
export { subscribeOn } from "./observable/subscribeOn";
export { switchAll, switchAllT } from "./observable/switchAll";
export { takeFirst, takeFirstT } from "./observable/takeFirst";
export { takeUntil } from "./observable/takeUntil";
export { throttle } from "./observable/throttle";
export { timeout, timeoutError } from "./observable/timeout";
export { withLatestFrom } from "./observable/withLatestFrom";
export { zip, zipT } from "./observable/zip";
export { zipLatest, zipLatestWith } from "./observable/zipLatest";
export { zipWithLatestFrom } from "./observable/zipWithLatestFrom";

export { toEnumerable } from "./observable/toEnumerable";
export { toRunnable } from "./observable/toRunnable";
export { toPromise } from "./observable/toPromise";

export const catchError: <T>(
  onError: Function1<unknown, ObservableLike<T> | void>,
) => ObservableOperator<T, T> = createCatchErrorOperator({
  ...liftT,
  createDelegatingSink,
});

export const decodeWithCharset: (
  charset?: string,
) => ObservableOperator<ArrayBuffer, string> = createDecodeWithCharsetOperator(
  { ...liftT, ...fromArrayT },
  class DecodeWithCharsetObserver extends Observer<ArrayBuffer> {
    constructor(
      readonly delegate: Observer<string>,
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
}) => ObservableOperator<T, T> = createDistinctUntilChangedOperator(
  liftT,
  class DistinctUntilChangedObserver<T> extends Observer<T> {
    prev: Option<T> = none;
    hasValue = false;

    constructor(
      readonly delegate: Observer<T>,
      readonly equality: Equality<T>,
    ) {
      super(delegate);
    }
  },
);

export const distinctUntilChangedT: DistinctUntilChanged<
  ObservableLike<unknown>
> = {
  distinctUntilChanged,
};

export const keep: <T>(predicate: Predicate<T>) => ObservableOperator<T, T> =
  createKeepOperator(
    liftT,
    class KeepObserver<T> extends Observer<T> {
      constructor(
        readonly delegate: Observer<T>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
  );

export const keepT: Keep<ObservableLike<unknown>> = {
  keep,
};

export const pairwise: <T>() => ObservableOperator<T, [Option<T>, T]> =
  createPairwiseOperator(
    liftT,
    class PairwiseObserver<T> extends Observer<T> {
      prev: Option<T>;
      hasPrev = false;

      constructor(readonly delegate: Observer<[Option<T>, T]>) {
        super(delegate);
      }
    },
  );

export const pairwiseT: Pairwise<ObservableLike<unknown>> = {
  pairwise,
};

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createReduceOperator(
  { ...fromArrayT, ...liftT },
  class ReducerObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
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

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createScanOperator(
  liftT,
  class ScanObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
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

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = createSkipFirstOperator(
  liftT,
  class SkipFirstObserver<T> extends Observer<T> {
    count = 0;

    constructor(readonly delegate: Observer<T>, readonly skipCount: number) {
      super(delegate);
    }
  },
);

export const skipFirstT: SkipFirst<ObservableLike<unknown>> = {
  skipFirst,
};

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, ...liftT },
  class TakeLastObserver<T> extends Observer<T> {
    readonly last: T[] = [];

    constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
      super(delegate);
    }
  },
);

export const takeLastT: TakeLast<ObservableLike<unknown>> = {
  takeLast,
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
  liftT,
  class TakeWhileObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<T>,
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
) => ObservableOperator<T, T> = createThrowIfEmptyOperator(
  liftT,
  class ThrowIfEmptyObserver<T> extends Observer<T> {
    isEmpty = true;

    constructor(readonly delegate: Observer<T>) {
      super(delegate);
    }
  },
);

export const throwIfEmptyT: ThrowIfEmpty<ObservableLike<unknown>> = {
  throwIfEmpty,
};
