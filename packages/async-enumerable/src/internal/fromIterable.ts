import {
  fromIterable as fromIterableObs,
  map,
  ObservableLike,
  using,
  onNotify,
  takeWhile,
  toEnumerable,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { AsyncEnumerableLike } from "./interfaces";
import { EnumeratorLike } from "@reactive-js/enumerable";

const createFactory = <T>(obs: ObservableLike<void>) => (
  enumerator: EnumeratorLike<void, T>,
) =>
  pipe(
    obs,
    onNotify(() => enumerator.move()),
    takeWhile(_ => enumerator.hasCurrent),
    map(_ => enumerator.current),
  );

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<void, T> => {
  const observable = fromIterableObs(iterable);
  const operator = (obs: ObservableLike<void>) =>
    using(() => toEnumerable(observable).enumerate(), createFactory<T>(obs));

  return createAsyncEnumerable(operator);
};
