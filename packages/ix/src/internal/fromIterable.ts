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
import { AsyncIteratorResourceLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./createAsyncIterator";

const doneError = Symbol("IteratorDone");

const identity = <T>(x: T) => x;

const fromIterableAsyncIterator = <T>(
  iterable: Iterable<T>,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncIteratorResourceLike<number | void, T> => {
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

  return createAsyncIteratorResource(operator, scheduler, replayCount);
};

class FromIterableAsyncIterable<T>
  implements AsyncIterableLike<number | void, T> {
  constructor(private readonly iterable: Iterable<T>) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    return fromIterableAsyncIterator(this.iterable, scheduler, replayCount);
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncIterableLike<number | void, T> =>
  new FromIterableAsyncIterable(iterable);
