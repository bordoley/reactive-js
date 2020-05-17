import { Function1 } from "../../functions.ts";

const _sinkDone = Symbol("@reactive-js/core/lib/runnable/sinkDone");
export const sinkDone = _sinkDone;
export interface SinkLike<T> {
  readonly isDone: boolean;

  notify(next: T): void;
  done(): void;
}

export type SinkOperator<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;

export interface RunnableLike<T> {
  run(sink: SinkLike<T>): void;
}

export type RunnableOperator<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;
