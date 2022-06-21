import { AbstractContainer } from "../container";
import { Function1, pipe } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { Sink } from "./sinks";

class LiftedRunnable<T> extends AbstractContainer implements RunnableLike<T> {
  constructor(
    readonly src: RunnableLike<any>,
    readonly operators: readonly Function1<Sink<any>, Sink<any>>[],
  ) {
    super();
  }

  get sinkType(): Sink<T> {
    return undefined as any;
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
