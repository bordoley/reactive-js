import { pipe } from "@reactive-js/pipe";
import {
  catchError,
  concatAll,
  empty,
  fromIterator,
  map,
  ObservableLike,
  takeFirst,
  throws,
  fromEnumerator,
  defer,
  concat,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const doneError = Symbol("IteratorDone");

const fromIterableAsyncEnumerator = <T>(
  iterable: Iterable<T>,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<number | void, T> => {
  const iterator = iterable[Symbol.iterator]();
  const enumerator = fromIterator(iterator).enumerate();

  const takeCountFromEnumerator = (count: number) =>
    concat(
      pipe(fromEnumerator(enumerator), takeFirst(count || 1)),
      defer(() => (enumerator.isDisposed ? throws(() => doneError) : empty())),
    );

  const operator = (obs: ObservableLike<number | void>) =>
    pipe(
      obs,
      map(takeCountFromEnumerator),
      concatAll<T>(),
      catchError(error => (error === doneError ? empty() : undefined)),
    );

  return createAsyncEnumerator(operator, scheduler, replayCount);
};

class FromIterableAsyncEnumerable<T>
  implements AsyncEnumerableLike<number | void, T> {
  constructor(private readonly iterable: Iterable<T>) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    return fromIterableAsyncEnumerator(this.iterable, scheduler, replayCount);
  }
}

/**
 * Returns an `AsyncEnumerableLike` from the provided iterable.
 *
 * @param iterable
 */
export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<number | void, T> =>
  new FromIterableAsyncEnumerable(iterable);
