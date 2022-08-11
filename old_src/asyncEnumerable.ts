import { getDelay } from "./__internal__.optionalArgs";
import { lift } from "./asyncEnumerable/lift";
import { AsyncEnumeratorLike } from "./asyncEnumerator";
import {
  Generate,
  concatWith,
  fromValue,
} from "./container";
import { bindTo } from "./disposable";
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
  Updater,
  compose,
  newInstanceWith,
  pipe,
  pipeLazy,
} from "./functions";
import { FromIterable } from "./liftableContainer";
import {
  AsyncReducer,
  MulticastObservableLike,
  ScanAsync,
  concatT,
  fromArrayT as fromArrayTObs,
  getObserverCount,
  getReplay,
  map as mapObs,
  multicast,
  never,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeWhile as takeWhileObs,
  using,
  withLatestFrom,
} from "./observable";
import { ObserverLike } from "./observer";
import { sinkInto } from "./reactiveContainer";

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
