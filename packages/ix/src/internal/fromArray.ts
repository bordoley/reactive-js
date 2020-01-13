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

const fromArrayScanner = (acc: number, _: void): number => acc + 1;

class FromArrayAsyncEnumerable<T> implements AsyncEnumerableLike<void, T> {
  constructor(private readonly values: readonly T[]) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const values = this.values;
    const operator = (obs: ObservableLike<void>) =>
      pipe(
        obs,
        scan(fromArrayScanner, () => -1),
        map(startIndex =>
          pipe(
            fromArrayObs<T>(values, { startIndex }),
            takeFirst(),
          ),
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
): AsyncEnumerableLike<void, T> => new FromArrayAsyncEnumerable(values);
