import { pipe } from "@reactive-js/pipe";
import {
  concatAll,
  fromArray as fromArrayObs,
  map,
  scan,
  takeFirst,
  ObservableLike,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncIteratorResourceLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const fromArrayScanner = (
  acc: {
    startIndex: number;
    count: number;
  },
  count: number,
): { startIndex: number; count: number } => ({
  startIndex: acc.startIndex + acc.count,
  count,
});

const fromArrayAsyncIterator = <T>(
  values: readonly T[],
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const f = (obs: ObservableLike<number>) =>
    pipe(
      obs,
      scan(fromArrayScanner, () => ({
        startIndex: 0,
        count: 0,
      })),
      map(options => fromArrayObs<T>(values, options)),
      concatAll<T>(),
      takeFirst(values.length),
    );

  return createAsyncIteratorResource(f, scheduler);
};

class FromArrayAsyncIterator<T> implements AsyncIterableLike<number, T> {
  constructor(private readonly values: readonly T[]) {}

  getIXAsyncIterator(scheduler: SchedulerLike) {
    return fromArrayAsyncIterator(this.values, scheduler);
  }
}

export const fromArray = <T>(values: readonly T[]): AsyncIterableLike<number, T> =>
  new FromArrayAsyncIterator(values);
