import { AbstractContainer } from "../container";
import { Function1, pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { SinkLike } from "../sink";

class LiftedRunnable<T> extends AbstractContainer implements RunnableLike<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly Function1<SinkLike<any>, SinkLike<any>>[],
  ) {
    super();
  }

  run(sink: SinkLike<T>) {
    const liftedSink = pipe(sink, ...this.operators) as SinkLike<T>;
    this.src.run(liftedSink);
    liftedSink.dispose();
  }
}

export const lift =
  <TA, TB>(
    operator: Function1<SinkLike<TB>, SinkLike<TA>>,
  ): RunnableOperator<TA, TB> =>
  runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

    const allFunctions =
      runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];

    return new LiftedRunnable(src, allFunctions);
  };
