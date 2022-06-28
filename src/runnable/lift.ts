import { dispose } from "../disposable";
import { Function1, pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { Lift, sourceFrom } from "../source";
import { AbstractRunnable } from "./runnable";
import { Sink } from "./sinks";

class LiftedRunnable<T> extends AbstractRunnable<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly Function1<Sink<any>, Sink<any>>[],
  ) {
    super();
  }

  sink(sink: Sink<T>) {
    pipe(
      pipe(sink, ...this.operators) as Sink<T>,
      sourceFrom(this.src),
      dispose(),
    );
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
  variance: "contravariant",
  lift,
};
