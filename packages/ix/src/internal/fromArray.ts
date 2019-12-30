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
import { createAsyncIteratorResource } from "./createAsyncIterator";

const fromArrayScanner = (
  acc: {
    startIndex: number;
    count: number;
  },
  count: number | void,
): { startIndex: number; count: number } => ({
  startIndex: acc.startIndex + acc.count,
  count: count || 1,
});

const fromArrayAsyncIterator = <T>(
  values: readonly T[],
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncIteratorResourceLike<number | void, T> => {
  const operator = (obs: ObservableLike<number>) =>
    pipe(
      obs,
      scan(fromArrayScanner, () => ({
        startIndex: 0,
        count: 0,
      })),
      map(options =>
        pipe(fromArrayObs<T>(values, options), takeFirst(options.count)),
      ),
      concatAll<T>(),
      takeFirst(values.length),
    );

  return createAsyncIteratorResource(operator, scheduler, replayCount);
};

class FromArrayAsyncIterable<T> implements AsyncIterableLike<number | void, T> {
  constructor(private readonly values: readonly T[]) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    return fromArrayAsyncIterator(this.values, scheduler, replayCount);
  }
}

export const fromArray = <T>(
  values: readonly T[],
): AsyncIterableLike<number | void, T> => new FromArrayAsyncIterable(values);
