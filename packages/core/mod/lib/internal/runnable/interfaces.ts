import { Function1 } from "../../functions.ts";

export const sinkDone = Symbol("@reactive-js/core/lib/runnable/sinkDone");
export interface SinkLike<T> {
  readonly isDone: boolean;

  notify(next: T): void;
  done(): void;
}

export type SinkFunction<TA, TB> = Function1<SinkLike<TB>, SinkLike<TA>>;

export interface RunnableLike<T> {
  run(sink: SinkLike<T>): void;
}

export type RunnableFunction<TA, TB> = Function1<
  RunnableLike<TA>,
  RunnableLike<TB>
>;
