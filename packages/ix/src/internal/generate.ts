import { pipe } from "@reactive-js/pipe";
import {
  concatAll,
  generate as generateObs,
  map,
  ObservableLike,
  scan,
  takeFirst,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import { AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumerator } from "./createAsyncEnumerator";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

class GenerateAsyncEnumerable<T>
  implements AsyncEnumerableLike<number | void, T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly initialValue: () => T,
  ) {}

  enumerateAsync(scheduler: SchedulerLike, replayCount?: number) {
    const operator = (obs: ObservableLike<number | void>) =>
      pipe(
        obs,
        map(x =>
          pipe(
            generateObs(
              _ => undefined,
              () => undefined,
            ),
            takeFirst(x || 1),
          ),
        ),
        concatAll(),
        scan(generateScanner(this.generator), this.initialValue),
      );

  return createAsyncEnumerator(operator, scheduler, replayCount);
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): AsyncEnumerableLike<number | void, T> =>
  new GenerateAsyncEnumerable(generator, initialValue);
