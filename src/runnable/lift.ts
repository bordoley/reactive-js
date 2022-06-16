import { pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { SinkLike, SinkOperator } from "../sink";

class LiftedRunnable<T> implements RunnableLike<T> {
  readonly type = this;
  readonly T = undefined as any;

  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly SinkOperator<any, any>[],
  ) {}

  run(sink: SinkLike<T>) {
    const liftedSink = pipe(sink, ...this.operators) as SinkLike<T>;
    this.src.run(liftedSink);
    liftedSink.dispose();
  }
}

export const lift =
  <TA, TB>(operator: SinkOperator<TA, TB>): RunnableOperator<TA, TB> =>
  runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

    const allFunctions =
      runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];

    return new LiftedRunnable(src, allFunctions);
  };
