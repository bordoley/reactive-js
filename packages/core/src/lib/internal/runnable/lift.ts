import { pipe } from "../../functions";
import {
  RunnableFunction,
  RunnableLike,
  SinkFunction,
  SinkLike,
} from "./interfaces";

class LiftedRunnable<T> implements RunnableLike<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: SinkFunction<any, any>[],
  ) {}

  runUnsafe(sink: SinkLike<T>) {
    const liftedSink = pipe(sink, ...this.operators) as SinkLike<T>;
    this.src.runUnsafe(liftedSink);
  }

  run(sink: SinkLike<T>) {
    const liftedSink = pipe(sink, ...this.operators) as SinkLike<T>;
    this.src.run(liftedSink);
  }
}

export const lift = <TA, TB>(
  operator: SinkFunction<TA, TB>,
): RunnableFunction<TA, TB> => runnable => {
  const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

  const allFunctions =
    runnable instanceof LiftedRunnable
      ? [operator, ...runnable.operators]
      : [operator];

  return new LiftedRunnable(src, allFunctions);
};
