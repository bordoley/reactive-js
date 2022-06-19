import { Container, ContainerLike, ContainerOf } from "./container";
import { Function1, identity } from "./functions";
import { SinkLike } from "./sink";

export interface RunnableLike<T> extends ContainerLike {
  readonly T: unknown;
  readonly type: RunnableLike<this["T"]>;

  run(this: RunnableLike<T>, sink: SinkLike<T>): void;
}

export type RunnableOperator<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;

export interface ToRunnable<C extends ContainerLike> extends Container<C> {
  toRunnable<T>(): Function1<ContainerOf<C, T>, RunnableLike<T>>;
}

export { concat, concatAll } from "./runnable/concat";
export { createRunnable } from "./runnable/createRunnable";
export { decodeWithCharset } from "./runnable/decodeWithCharset";
export { distinctUntilChanged } from "./runnable/distinctUntilChanged";
export { everySatisfy, noneSatisfy } from "./runnable/everySatisfy";
export { first } from "./runnable/first";
export { forEach } from "./runnable/forEach";
export { fromArray, fromArrayT } from "./runnable/fromArray";
export { generate } from "./runnable/generate";
export { keep, keepT } from "./runnable/keep";
export { last } from "./runnable/last";
export { map } from "./runnable/map";
export { onNotify } from "./runnable/onNotify";
export { pairwise } from "./runnable/pairwise";
export { reduce } from "./runnable/reduce";
export { repeat } from "./runnable/repeat";
export { scan } from "./runnable/scan";
export { skipFirst } from "./runnable/skipFirst";
export { someSatisfy, contains } from "./runnable/someSatisfy";
export { takeFirst } from "./runnable/takeFirst";
export { takeLast } from "./runnable/takeLast";
export { takeWhile } from "./runnable/takeWhile";
export { toArray } from "./runnable/toArray";
export { using } from "./runnable/using";

export const toRunnable = <T>(): Function1<RunnableLike<T>, RunnableLike<T>> =>
  identity;

export const type: RunnableLike<unknown> = undefined as any;
