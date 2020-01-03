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
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumeratorResource } from "./createAsyncEnumerator";

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

const fromArrayAsyncEnumerator = <T>(
  values: readonly T[],
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorResourceLike<number | void, T> => {
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

  return createAsyncEnumeratorResource(operator, scheduler, replayCount);
};

class FromArrayAsyncEnumerable<T>
  implements AsyncEnumerableLike<number | void, T> {
  constructor(private readonly values: readonly T[]) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    return fromArrayAsyncEnumerator(this.values, scheduler, replayCount);
  }
}

export const fromArray = <T>(
  values: readonly T[],
): AsyncEnumerableLike<number | void, T> =>
  new FromArrayAsyncEnumerable(values);
