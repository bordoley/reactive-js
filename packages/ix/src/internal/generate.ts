import { pipe } from "@reactive-js/pipe";
import {
  concatAll,
  createSubject,
  generate as generateObs,
  map,
  scan,
  share,
  SubjectResourceLike,
  subscribe,
  takeFirst,
} from "@reactive-js/rx";
import { SchedulerLike } from "@reactive-js/scheduler";
import {
  AsyncIteratorResourceLike,
} from "./interfaces";
import { createAsyncIteratorResource } from "./create";

const generateScanner = <T>(generator: (acc: T) => T) => (acc: T, _: unknown) =>
  generator(acc);

export const generate = <T>(
  generator: (acc: T) => T,
  initialValue: () => T,
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const dispatcher: SubjectResourceLike<number> = createSubject();
  
  const observable = pipe(
    dispatcher,
    map(x => pipe(generateObs(_ => undefined, () => undefined), takeFirst(x))),
    concatAll(),
    scan(generateScanner(generator), initialValue),
    share(scheduler),
  );

  return createAsyncIteratorResource(
    dispatcher.onNext.bind(dispatcher),
    observable,
    dispatcher,
  ).add(pipe(observable, subscribe(scheduler)));
}