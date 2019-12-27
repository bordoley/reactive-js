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
import { AsyncIteratorResourceLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const doneError = Symbol("IteratorDone");

export const fromIterable = <T>(
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
