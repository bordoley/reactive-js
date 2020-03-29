import {
  catchError,
  empty,
  fromIterable as fromIterableObs,
  map,
  ObservableLike,
  using,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { AsyncEnumerableLike } from "./interfaces";

const doneError = Symbol("IteratorDone");

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<void, T> => {
  const enumerable = fromIterableObs(iterable);
  const operator = (obs: ObservableLike<void>) =>
    using(
      () => enumerable.enumerate(),
      enumerator =>
        pipe(
          obs,
          map(_ => {
            if (enumerator.move()) {
              return enumerator.current;
            } else {
              throw doneError;
            }
          }),
          catchError(error => (error === doneError ? empty() : undefined)),
        ),
    );

  return createAsyncEnumerable(operator);
};
