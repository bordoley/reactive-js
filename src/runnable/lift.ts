import { contraVariant } from "../__internal__.liftable";
import { Lift } from "../__internal__.reactive";
import { dispose } from "../disposable";
import { Function1, newInstance, pipe } from "../functions";
import { sourceFrom } from "../reactive";
import { RunnableLike, RunnableOperator } from "../runnable";
import { RunnableSink } from "../runnableSink";
import { AbstractRunnable } from "./runnable";

class LiftedRunnable<T> extends AbstractRunnable<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly Function1<
      RunnableSink<any>,
      RunnableSink<any>
    >[],
  ) {
    super();
  }

  sink(sink: RunnableSink<T>) {
    pipe(
      pipe(sink, ...this.operators) as RunnableSink<T>,
      sourceFrom(this.src),
      dispose(),
    );
  }
}

export const lift =
  <TA, TB>(
    operator: Function1<RunnableSink<TB>, RunnableSink<TA>>,
  ): RunnableOperator<TA, TB> =>
  runnable => {
    const src = runnable instanceof LiftedRunnable ? runnable.src : runnable;

    const allFunctions =
      runnable instanceof LiftedRunnable
        ? [operator, ...runnable.operators]
        : [operator];

    return newInstance(LiftedRunnable, src, allFunctions);
  };

export const liftT: Lift<RunnableLike<unknown>> = {
  variance: contraVariant,
  lift,
};
