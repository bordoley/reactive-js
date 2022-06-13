import { ContainerLike, Container, ContainerOf } from "./container";
import { Function1, identity } from "./functions";

export interface SinkLike<T> {
  readonly isDone: boolean;

  notify(this: SinkLike<T>, next: T): void;
  done(this: SinkLike<T>): void;
}

export type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;

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
export { distinctUntilChanged } from "./runnable/distinctUntilChanged";
export { everySatisfy, noneSatisfy } from "./runnable/everySatisfy";
export { first } from "./runnable/first";
export { forEach } from "./runnable/forEach";
export { fromArray, fromArrayT } from "./runnable/fromArray";
export { generate } from "./runnable/generate";
export { lift } from "./runnable/lift";
export { keep, keepT } from "./runnable/keep";
export { last } from "./runnable/last";
export { map } from "./runnable/map";
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

export const type: RunnableLike<unknown> = undefined as any;
