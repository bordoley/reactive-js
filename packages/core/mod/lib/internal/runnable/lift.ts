import { pipe } from "../../functions.ts";
import {
  RunnableFunction,
  RunnableLike,
  SinkFunction,
  SinkLike,
} from "./interfaces.ts";

class LiftedRunnable<T> implements RunnableLike<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: SinkFunction<any, any>[],
  ) {}

  run(sink: SinkLike<T>) {
    pipe(sink, ...this.operators) as RunnableLike<T>;
    this.src.run(sink);
  }
}

export const lift = <TA, TB>(
  operator: SinkFunction<TA, TB>,
): RunnableFunction<TA, TB> => runnable => {
  const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

  const allFunctions =
    runnable instanceof LiftedRunnable
      ? [...runnable.operators, operator]
      : [operator];

  return new LiftedRunnable(src, allFunctions);
};
