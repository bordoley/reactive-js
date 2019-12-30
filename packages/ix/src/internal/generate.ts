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
import { AsyncIteratorResourceLike, AsyncIterableLike } from "./interfaces";
import { createAsyncIteratorResource } from "./createAsyncIterator";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

const generateAsyncIterator = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  scheduler: SchedulerLike,
  replayCount?: number,
): AsyncIteratorResourceLike<number, T> => {
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

  return createAsyncIteratorResource(operator, scheduler, replayCount);
};

class GenerateAsyncIterable<T> implements AsyncIterableLike<number | void, T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly initialValue: () => T,
  ) {}

  getIXAsyncIterator(scheduler: SchedulerLike, replayCount?: number) {
    return generateAsyncIterator(
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
): AsyncIterableLike<number | void, T> =>
  new GenerateAsyncIterable(generator, initialValue);
