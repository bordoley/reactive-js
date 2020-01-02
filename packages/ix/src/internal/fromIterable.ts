import { pipe } from "@reactive-js/pipe";
import {
  catchError,
  concatAll,
  empty,
  fromIterator,
  map,
  ObservableLike,
  using,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumeratorResource } from "./createAsyncEnumerator";

const doneError = Symbol("IteratorDone");

const identity = <T>(x: T) => x;

const fromIterableAsyncEnumerator = <T>(
  iterable: Iterable<T>,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorResourceLike<number | void, T> => {
  const iterator = iterable[Symbol.iterator]();
  const makeIteratorObservable = (count: number) =>
    using(
      () => fromIterator(iterator, scheduler, { count: count || 1, doneError }),
      identity,
    );
  const operator = (obs: ObservableLike<number | void>) =>
    pipe(
      obs,
      map(makeIteratorObservable),
      concatAll<T>(),
      catchError(error => (error === doneError ? empty() : undefined)),
    );

  return createAsyncEnumeratorResource(operator, scheduler, replayCount);
};

class FromIterableAsyncEnumerable<T>
  implements AsyncEnumerableLike<number | void, T> {
  constructor(private readonly iterable: Iterable<T>) {}

  getIXAsyncEnumerator(scheduler: SchedulerLike, replayCount?: number) {
    return fromIterableAsyncEnumerator(this.iterable, scheduler, replayCount);
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncEnumerableLike<number | void, T> =>
  new FromIterableAsyncEnumerable(iterable);
