import { Function1, pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { AbstractSource, Lift } from "../source";
import { Sink } from "./sinks";

class LiftedRunnable<T>
  extends AbstractSource<T, Sink<T>>
  implements RunnableLike<T>
{
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly Function1<Sink<any>, Sink<any>>[],
  ) {
    super();
  }

  run(sink: Sink<T>) {
    const liftedSink = pipe(sink, ...this.operators) as Sink<T>;
    this.src.run(liftedSink);
    liftedSink.dispose();
  }
}

export const lift =
  <TA, TB>(operator: Function1<Sink<TB>, Sink<TA>>): RunnableOperator<TA, TB> =>
  runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

    const allFunctions =
      runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];

    return new LiftedRunnable(src, allFunctions);
  };

export const liftT: Lift<RunnableLike<unknown>> = {
  lift,
};
