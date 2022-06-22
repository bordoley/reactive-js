import { Function1, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractSource, Lift, sinkInto } from "../source";
import { Observer } from "./observer";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
export type ObserverOperator<A, B> = Function1<Observer<B>, Observer<A>>;

class LiftedObservable<TIn, TOut>
  extends AbstractSource<TOut, Observer<TOut>>
  implements ObservableLike<TOut>
{
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly ObserverOperator<any, any>[],
    readonly isSynchronous: boolean,
  ) {
    super();
  }

  sink(observer: Observer<TOut>) {
    const liftedSubscrber = pipe(observer, ...this.operators) as Observer<any>;

    pipe(this.source, sinkInto(liftedSubscrber));
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export const lift =
  <TA, TB>(
    operator: ObserverOperator<TA, TB>,
    isSynchronous = false,
  ): ObservableOperator<TA, TB> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];

    isSynchronous = (source.isSynchronous ?? false) && isSynchronous;

    return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  lift,
};

export const liftSynchronousT: Lift<ObservableLike<unknown>> = {
  lift: op => lift(op, true),
};
