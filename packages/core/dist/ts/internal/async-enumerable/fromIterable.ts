import {
  createObservable,
  map,
  ObservableLike,
  onNotify,
  takeWhile,
} from "../../observable.ts";
import { pipe } from "../../pipe.ts";
import { createAsyncEnumerable } from "./createAsyncEnumerable.ts";
import { AsyncEnumerableLike } from "./interfaces.ts";
import { fromIterable as fromIterableEnumerable } from "../../enumerable.ts";

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
