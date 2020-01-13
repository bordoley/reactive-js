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
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

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

class FromArrayAsyncEnumerable<T>
  implements AsyncEnumerableLike<number | void, T> {
  constructor(private readonly values: readonly T[]) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const values = this.values;
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

    return createAsyncEnumerator(operator, scheduler, replayCount);
  }
}

/**
 * Returns an `AsyncEnumerableLike` from the provided array.
 *
 * @param values The array.
 */
export const fromArray = <T>(
  values: readonly T[],
): AsyncEnumerableLike<number | void, T> =>
  new FromArrayAsyncEnumerable(values);
