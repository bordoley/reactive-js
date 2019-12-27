import { pipe } from "@reactive-js/pipe";
import {
  concatAll,
  createSubject,
  fromArray as fromArrayObs,
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

const fromArrayScanner = (
  acc: {
    startIndex: number,
    count: number,
  }, 
  count: number
): { startIndex: number, count: number } => ({
  startIndex: acc.startIndex + acc.count,
  count,
});

export const fromArray = <T>(
  values: readonly T[],
  scheduler: SchedulerLike,
): AsyncIteratorResourceLike<number, T> => {
  const dispatcher: SubjectResourceLike<number> = createSubject();

  const observable = pipe(
    dispatcher,
    scan(fromArrayScanner, () => ({
      startIndex: 0,
      count: 0,
    })),
    map(options => fromArrayObs<T>(values, options)),
    concatAll<T>(),
    takeFirst(values.length),
    share(scheduler),
  );

  return createAsyncIteratorResource(
    dispatcher.onNext.bind(dispatcher),
    observable,
    dispatcher,
  ).add(pipe(observable, subscribe(scheduler)));
}