import { pipe } from "@reactive-js/pipe";
import {
  catchError,
  concatAll,
  empty,
  fromIterator,
  map,
  ObservableLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncIteratorResourceLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const doneError = Symbol("IteratorDone");

const fromIterableAsyncIterator = <T>(
  iterable: Iterable<T>,
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const iterator = iterable[Symbol.iterator]();
  const f = (obs: ObservableLike<number>) =>
    pipe(
      obs,
      map(count => fromIterator(iterator, scheduler, { count, doneError })),
      concatAll<T>(),
      catchError(error => (error === doneError ? empty() : undefined)),
    );

  return createAsyncIteratorResource(f, scheduler);
};

class FromIterableAsyncIterable<T> implements AsyncIterableLike<number, T> {
  constructor(private readonly iterable: Iterable<T>) {}

  getIXAsyncIterator(scheduler: SchedulerLike) {
    return fromIterableAsyncIterator(this.iterable, scheduler);
  }
}

export const fromIterable = <T>(
  iterable: Iterable<T>,
): AsyncIterableLike<number, T> => new FromIterableAsyncIterable(iterable);
