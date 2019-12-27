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
import { AsyncIteratorResourceLike } from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

export const generate = <T>(
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
