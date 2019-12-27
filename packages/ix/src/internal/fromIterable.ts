import { pipe } from "@reactive-js/pipe";
import {
  concatAll,
  fromIterator,
  map,
  ObservableLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AsyncIteratorResourceLike,
} from "./interfaces";
import { createAsyncIteratorResource } from "./create";

export const fromIterable = <T>(
  iterable:  Iterable<T>,
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const iterator = iterable[Symbol.iterator]();
  const f = (obs: ObservableLike<number>) => pipe(
    obs,
    map(count => fromIterator(iterator, scheduler, { count })),
    concatAll<T>(),
  );

  return createAsyncIteratorResource(f, scheduler);
}