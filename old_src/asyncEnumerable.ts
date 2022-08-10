import { createFromArray } from "./__internal__.container";
import { getDelegate } from "./__internal__.delegating";
import {
  createKeepOperator,
  createMapOperator,
  createScanOperator,
  createTakeWhileOperator,
} from "./__internal__.liftable";
import { getDelay } from "./__internal__.optionalArgs";
import { lift, liftT } from "./asyncEnumerable/lift";
import { AsyncEnumeratorLike } from "./asyncEnumerator";
import {
  FromArray,
  Generate,
  Keep,
  Map,
  Scan,
  TakeWhile,
  concatMap,
  concatWith,
  fromValue,
} from "./container";
import { dispatch, getScheduler as getDispatcherScheduler } from "./dispatcher";
import { add, addTo, bindTo } from "./disposable";
import {
  EnumerableLike,
  FromEnumerable,
  enumerate,
  fromIterable as fromIterableEnumerable,
} from "./enumerable";
import { EnumeratorLike, getCurrent, move } from "./enumerator";
import {
  Factory,
  Function1,
  Predicate,
  Reducer,
  Updater,
  compose,
  increment,
  newInstanceWith,
  pipe,
  pipeLazy,
  returns,
} from "./functions";
import { FromIterable } from "./liftableContainer";
import {
  AsyncReducer,
  DefaultObservable,
  MulticastObservableLike,
  ObservableLike,
  ObservableOperator,
  ScanAsync,
  Subject,
  ToObservable,
  concatAllT,
  concatT,
  createObservable,
  fromArrayT as fromArrayTObs,
  getObserverCount,
  getReplay,
  keep as keepObs,
  map as mapObs,
  mapT as mapTObs,
  multicast,
  never,
  onNotify,
  onSubscribe,
  publish,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeFirst,
  takeWhile as takeWhileObs,
  using,
  withLatestFrom,
} from "./observable";
import { ObserverLike, getScheduler } from "./observer";
import { none } from "./option";
import { sinkInto } from "./reactiveContainer";
import { SchedulerLike } from "./scheduler";
import { StreamLike } from "./stream";
import { stream } from "./streamable";

const _fromEnumerable = <T>(
  enumerable: EnumerableLike<T>,
): AsyncEnumerableLike<T> =>
  createLiftedAsyncEnumerable(
    withLatestFrom<void, EnumeratorLike<T>, EnumeratorLike<T>>(
      using(
        pipeLazy(enumerable, enumerate),
        compose(fromValue(fromArrayTObs), concatWith(concatT, never())),
      ),
      (_, enumerator) => enumerator,
    ),
    takeWhileObs(move),
    mapObs(getCurrent),
  );

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromEnumerable = <T>(): Function1<
  EnumerableLike<T>,
  AsyncEnumerableLike<T>
> => _fromEnumerable;

export const fromEnumerableT: FromEnumerable<AsyncEnumerableLike<unknown>> = {
  fromEnumerable,
};

const _fromIterable = <T>(iterable: Iterable<T>): AsyncEnumerableLike<T> =>
  pipe(iterable, fromIterableEnumerable(), fromEnumerable());

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(): Function1<
  Iterable<T>,
  AsyncEnumerableLike<T>
> => _fromIterable;

export const fromIterableT: FromIterable<AsyncEnumerableLike<unknown>> = {
  fromIterable,
};

const generateScanner =
  <T>(generator: Updater<T>) =>
  (acc: T, _: unknown) =>
    generator(acc);

const asyncGeneratorScanner = <T>(
  generator: Updater<T>,
  options?: { readonly delay?: number },
) => {
  const fromValueWithDelay = fromValue(fromArrayTObs, options);
  return (acc: T, _: unknown) => pipe(acc, generator, fromValueWithDelay);
};

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: Updater<T>,
  initialValue: Factory<T>,
  options?: { readonly delay?: number },
): AsyncEnumerableLike<T> => {
  const delay = getDelay(options);

  return createLiftedAsyncEnumerable(
    delay > 0
      ? scanAsyncObs<void, T>(
          asyncGeneratorScanner(generator, options),
          initialValue,
        )
      : scanObs(generateScanner(generator), initialValue),
  );
};

export const generateT: Generate<AsyncEnumerableLike<unknown>> = {
  generate,
};

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => AsyncEnumerableOperator<TA, TB> = /*@__PURE__*/ createMapOperator(
  liftT,
  class MapAsyncEnumerator<TA, TB> extends AbstractDelegatingAsyncEnumerator<
    TA,
    TB
  > {
    readonly op: ObservableOperator<TA, TB>;

    constructor(
      delegate: AsyncEnumeratorLike<TA>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate);
      this.op = mapObs(this.mapper);
    }

    sinkInto(observer: ObserverLike<TB>): void {
      pipe(this, getDelegate, this.op, sinkInto(observer));
    }
  },
);

export const mapT: Map<AsyncEnumerableLike<unknown>> = {
  map,
};

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => AsyncEnumerableOperator<T, TAcc> = /*@__PURE__*/ createScanOperator(
  liftT,
  class ScanAsyncEnumerator<T, TAcc> extends AbstractDelegatingAsyncEnumerator<
    T,
    TAcc
  > {
    readonly op: ObservableOperator<T, TAcc>;

    constructor(
      delegate: AsyncEnumeratorLike<T>,
      reducer: Reducer<T, TAcc>,
      acc: TAcc,
    ) {
      super(delegate);
      this.op = scanObs(reducer, returns(acc));
    }

    sinkInto(observer: ObserverLike<TAcc>): void {
      pipe(this, getDelegate, this.op, sinkInto(observer));
    }
  },
);

export const scanT: Scan<AsyncEnumerableLike<unknown>> = {
  scan,
};

class ScanAsyncAsyncEnumerator<
  T,
  TAcc,
> extends AbstractDelegatingAsyncEnumerator<T, TAcc> {
  readonly obs: MulticastObservableLike<TAcc>;

  constructor(
    delegate: AsyncEnumeratorLike<T>,
    reducer: AsyncReducer<T, TAcc>,
    initialValue: Factory<TAcc>,
  ) {
    super(delegate);

    this.obs = pipe(
      delegate,
      scanAsyncObs(reducer, initialValue),
      multicast(delegate.scheduler),
    );
  }

  get observerCount() {
    return getObserverCount(this.obs);
  }

  get replay(): number {
    return getReplay(this.obs);
  }

  sinkInto(observer: ObserverLike<TAcc>): void {
    pipe(this.obs, sinkInto(observer));
  }
}

export const scanAsync = <T, TAcc>(
  reducer: AsyncReducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): AsyncEnumerableOperator<T, TAcc> =>
  pipe(
    (delegate: AsyncEnumeratorLike<T>) =>
      pipe(
        ScanAsyncAsyncEnumerator,
        newInstanceWith<
          ScanAsyncAsyncEnumerator<T, TAcc>,
          AsyncEnumeratorLike<T>,
          AsyncReducer<T, TAcc>,
          Factory<TAcc>
        >(delegate, reducer, initialValue),
        bindTo(delegate),
      ),
    lift,
  );

export const scanAsyncT: ScanAsync<AsyncEnumerableLike<unknown>> = {
  scanAsync,
};

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => AsyncEnumerableOperator<T, T> = /*@__PURE__*/ createTakeWhileOperator(
  liftT,
  class TakeWhileAsyncEnumerator<T> extends AbstractDelegatingAsyncEnumerator<
    T,
    T
  > {
    readonly obs: MulticastObservableLike<T>;

    constructor(
      delegate: AsyncEnumeratorLike<T>,
      predicate: Predicate<T>,
      inclusive: boolean,
    ) {
      super(delegate);

      this.obs = pipe(
        delegate,
        takeWhileObs(predicate, { inclusive }),
        multicast(delegate.scheduler),
        add(this),
      );
    }

    get observerCount() {
      return getObserverCount(this.obs);
    }

    get replay(): number {
      return getReplay(this.obs);
    }

    sinkInto(observer: ObserverLike<T>): void {
      pipe(this.obs, sinkInto(observer));
    }
  },
);

export const takeWhileT: TakeWhile<AsyncEnumerableLike<unknown>> = {
  takeWhile,
};
