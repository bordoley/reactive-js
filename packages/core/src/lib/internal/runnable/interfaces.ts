import { Function } from "../../functions";

export interface SinkLike<T> {
  readonly isDone: boolean;

  push(next: T): void;
  done(): void;
}

export type SinkFunction<TA, TB> = Function<SinkLike<TB>, SinkLike<TA>>;

export interface RunnableLike<T> {
  run(sink: SinkLike<T>): void;
}

export type RunnableFunction<TA, TB> = Function<
  RunnableLike<TA>,
  RunnableLike<TB>
>;
