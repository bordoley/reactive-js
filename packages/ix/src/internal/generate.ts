import { pipe } from "@reactive-js/pipe";
import {
  ObservableLike,
  scan,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

class GenerateAsyncEnumerable<T>
  implements AsyncEnumerableLike<void, T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly initialValue: () => T,
  ) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const operator = (obs: ObservableLike<void>) =>
      pipe(
        obs,
        scan(generateScanner(this.generator), this.initialValue),
      );

    return createAsyncEnumerator(operator, scheduler, replayCount);
  }
}

/**
 * Generates an `AsyncEnumerableLike` sequence from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator The generator function.
 * @param initialValue Factory function to generate the initial accumulator.
 */
export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): AsyncEnumerableLike<void, T> =>
  new GenerateAsyncEnumerable(generator, initialValue);
