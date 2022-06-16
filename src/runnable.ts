import { Function1, identity } from "./functions";

export interface SinkLike<T> {
  readonly isDone: boolean;

  notify(this: SinkLike<T>, next: T): void;
  done(this: SinkLike<T>): void;
}

export type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;

export interface RunnableLike<T> {
  run(this: RunnableLike<T>, sink: SinkLike<T>): void;
}

export type RunnableOperator<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;

export { compute } from "./runnable/compute";
export {
  concat,
  concatWith,
  endWith,
  startWith,
  concatAll,
  concatMap,
} from "./runnable/concat";
export { createRunnable } from "./runnable/createRunnable";
export { distinctUntilChanged } from "./runnable/distinctUntilChanged";
export { empty } from "./runnable/empty";
export { everySatisfy, noneSatisfy } from "./runnable/everySatisfy";
export { first } from "./runnable/first";
export { forEach } from "./runnable/forEach";
export { fromArray } from "./runnable/fromArray";
export { fromValue } from "./runnable/fromValue";
export { generate } from "./runnable/generate";
export { lift } from "./runnable/lift";
export { keep, keepType } from "./runnable/keep";
export { last } from "./runnable/last";
export { map, mapTo } from "./runnable/map";
export { reduce } from "./runnable/reduce";
export { repeat } from "./runnable/repeat";
export { scan } from "./runnable/scan";
export { skipFirst } from "./runnable/skipFirst";
export { someSatisfy, contains } from "./runnable/someSatisfy";
export { AbstractDelegatingSink, sinkDone } from "./runnable/sink";
export { takeFirst } from "./runnable/takeFirst";
export { takeLast } from "./runnable/takeLast";
export { takeWhile } from "./runnable/takeWhile";
export { toArray } from "./runnable/toArray";

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
  identity;
