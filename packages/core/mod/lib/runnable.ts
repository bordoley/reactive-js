export { compute } from "./internal/runnable/compute.ts";
export {
  concat,
  concatWith,
  endWith,
  startWith,
  concatAll,
  concatMap,
} from "./internal/runnable/concat.ts";
export { createRunnable } from "./internal/runnable/createRunnable.ts";
export { distinctUntilChanged } from "./internal/runnable/distinctUntilChanged.ts";
export { empty } from "./internal/runnable/empty.ts";
export { everySatisfy, noneSatisfy } from "./internal/runnable/everySatisfy.ts";
export { first } from "./internal/runnable/first.ts";
export { forEach } from "./internal/runnable/forEach.ts";
export { fromArray } from "./internal/runnable/fromArray.ts";
export { fromValue } from "./internal/runnable/fromValue.ts";
export { generate } from "./internal/runnable/generate.ts";
export {
  RunnableLike,
  RunnableFunction,
  SinkLike,
  SinkFunction,
  sinkDone,
} from "./internal/runnable/interfaces.ts";
export { lift } from "./internal/runnable/lift.ts";
export { keep, keepType } from "./internal/runnable/keep.ts";
export { last } from "./internal/runnable/last.ts";
export { map, mapTo } from "./internal/runnable/map.ts";
export { reduce } from "./internal/runnable/reduce.ts";
export { repeat } from "./internal/runnable/repeat.ts";
export { scan } from "./internal/runnable/scan.ts";
export { skipFirst } from "./internal/runnable/skipFirst.ts";
export { someSatisfy, contains } from "./internal/runnable/someSatisfy.ts";
export { AbstractDelegatingSink } from "./internal/runnable/sink.ts";
export { takeFirst } from "./internal/runnable/takeFirst.ts";
export { takeLast } from "./internal/runnable/takeLast.ts";
export { takeWhile } from "./internal/runnable/takeWhile.ts";
export { toArray } from "./internal/runnable/toArray.ts";

import { RunnableLike } from "./internal/runnable/interfaces.ts";
import { Function1, identity } from "./functions.ts";

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
  identity;
