import { pipe } from "@reactive-js/pipe";
import {
  catchError,
  empty,
  fromIterator,
  map,
  ObservableLike,
} from "@reactive-js/observable";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const doneError = Symbol("IteratorDone");

const fromIterableAsyncEnumerator = <T>(
  iterable: Iterable<T>,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorLike<void, T> => {
  const iterator = iterable[Symbol.iterator]();
  const enumerator = fromIterator(iterator).enumerate();

  const operator = (obs: ObservableLike<void>) =>
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
    );

  return createAsyncEnumerator(operator, scheduler, replayCount);
};

class FromIterableAsyncEnumerable<T> implements AsyncEnumerableLike<void, T> {
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
): AsyncEnumerableLike<void, T> => new FromIterableAsyncEnumerable(iterable);
