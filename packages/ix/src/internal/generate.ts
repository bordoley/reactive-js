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
import { createAsyncIteratorResource } from "./create";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

const generateAsyncIterator = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const f = (obs: ObservableLike<number>) =>
    pipe(
      obs,
      map(x =>
        pipe(
          generateObs(
            _ => undefined,
            () => undefined,
          ),
          takeFirst(x),
        ),
      ),
      concatAll(),
      scan(generateScanner(generator), initialValue),
    );

  return createAsyncIteratorResource(f, scheduler);
};


class GenerateAsyncIterable<T> implements AsyncIterableLike<number, T> {
  constructor(
    private readonly generator: (acc: T) => T,
    private readonly initialValue: () => T,
  ) {}

  getIXAsyncIterator(scheduler: SchedulerLike) {
    return generateAsyncIterator(this.generator, this.initialValue, scheduler);
  }
}

export const generate = <T>(generator: (acc: T) => T, initialValue: () => T): AsyncIterableLike<number, T> =>
  new GenerateAsyncIterable(generator, initialValue);
