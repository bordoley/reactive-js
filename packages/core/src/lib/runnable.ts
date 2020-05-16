export { compute } from "./internal/runnable/compute";
export {
  concat,
  concatWith,
  endWith,
  startWith,
  concatAll,
  concatMap,
} from "./internal/runnable/concat";
export { createRunnable } from "./internal/runnable/createRunnable";
export { distinctUntilChanged } from "./internal/runnable/distinctUntilChanged";
export { empty } from "./internal/runnable/empty";
export { everySatisfy, noneSatisfy } from "./internal/runnable/everySatisfy";
export { first } from "./internal/runnable/first";
export { forEach } from "./internal/runnable/forEach";
export { fromArray } from "./internal/runnable/fromArray";
export { fromValue } from "./internal/runnable/fromValue";
export { generate } from "./internal/runnable/generate";
export {
  RunnableLike,
  RunnableFunction,
  SinkLike,
  SinkFunction,
  sinkDone,
} from "./internal/runnable/interfaces";
export { lift } from "./internal/runnable/lift";
export { keep, keepType } from "./internal/runnable/keep";
export { last } from "./internal/runnable/last";
export { map, mapTo } from "./internal/runnable/map";
export { reduce } from "./internal/runnable/reduce";
export { repeat } from "./internal/runnable/repeat";
export { scan } from "./internal/runnable/scan";
export { skipFirst } from "./internal/runnable/skipFirst";
export { someSatisfy, contains } from "./internal/runnable/someSatisfy";
export { AbstractDelegatingSink } from "./internal/runnable/sink";
export { takeFirst } from "./internal/runnable/takeFirst";
export { takeLast } from "./internal/runnable/takeLast";
export { takeWhile } from "./internal/runnable/takeWhile";
export { toArray } from "./internal/runnable/toArray";

import { RunnableLike } from "./internal/runnable/interfaces";
import { Function, identity } from "./functions";

export const toRunnable = <T>(): Function<RunnableLike<T>, RunnableLike<T>> =>
  identity;
