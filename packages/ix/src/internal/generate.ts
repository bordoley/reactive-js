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
import { AsyncEnumeratorResourceLike, AsyncEnumerableLike } from "./interfaces";
import { createAsyncEnumeratorResource } from "./createAsyncEnumerator";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

const generateAsyncEnumerator = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncEnumeratorResourceLike<number, T> => {
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
      scan(generateScanner(generator), initialValue),
    );

  return createAsyncEnumeratorResource(operator, scheduler, replayCount);
};

class GenerateAsyncEnumerable<T> implements AsyncEnumerableLike<number | void, T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly initialValue: () => T,
  ) {}

  getIXAsyncEnumerator(scheduler: SchedulerLike, replayCount?: number) {
    return generateAsyncEnumerator(
      this.generator,
      this.initialValue,
      scheduler,
      replayCount,
    );
  }
}

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
): AsyncEnumerableLike<number | void, T> =>
  new GenerateAsyncEnumerable(generator, initialValue);
