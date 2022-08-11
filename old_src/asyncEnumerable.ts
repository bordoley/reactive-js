import { getDelay } from "./__internal__.optionalArgs";
import { Generate, concatWith, fromValue } from "./container";
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
  pipe,
  pipeLazy,
} from "./functions";
import { FromIterable } from "./liftableContainer";
import {
  concatT,
  fromArrayT as fromArrayTObs,
  map as mapObs,
  never,
  scanAsync as scanAsyncObs,
  scan as scanObs,
  takeWhile as takeWhileObs,
  using,
  withLatestFrom,
} from "./observable";

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
