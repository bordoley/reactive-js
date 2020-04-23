import {
  map,
  ObservableLike,
  using,
  onNotify,
  takeWhile,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { AsyncEnumerableLike } from "./interfaces";
import { EnumeratorLike, fromIterable as fromIterableEnumerable } from "@reactive-js/enumerable";
import { DisposableLike } from "@reactive-js/disposable";

const createFactory = <T>(obs: ObservableLike<void>) => (
  enumerator: EnumeratorLike<void, T> & DisposableLike,
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
  const operator = (obs: ObservableLike<void>) =>
    using(() => fromIterableEnumerable(iterable).enumerate(), createFactory<T>(obs));

  return createAsyncEnumerable(operator);
};
