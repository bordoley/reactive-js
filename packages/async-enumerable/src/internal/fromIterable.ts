import {
  createObservable,
  map,
  ObservableLike,
  onNotify,
  takeWhile,
} from "@reactive-js/observable";
import { pipe } from "@reactive-js/pipe";
import { createAsyncEnumerable } from "./createAsyncEnumerable";
import { AsyncEnumerableLike } from "./interfaces";
import { fromIterable as fromIterableEnumerable } from "@reactive-js/enumerable";

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<void, T> => {
  const operator = (obs: ObservableLike<void>) => 
    createObservable(
      subscriber => {
        const enumerator = fromIterableEnumerable(iterable).enumerate();

        pipe(
          obs,
          onNotify(() => enumerator.move()),
          takeWhile(_ => enumerator.hasCurrent),
          map(_ => enumerator.current),
        ).subscribe(subscriber);
      }
    );

  return createAsyncEnumerable(operator);
};
