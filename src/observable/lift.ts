import { pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractSource, Lift } from "../source";
import { Observer, sink } from "./observer";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
export interface ObserverOperator<A, B> {
  readonly isSynchronous: boolean;

  (observer: Observer<B>): Observer<A>;
}

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

    pipe(this.source, sink(liftedSubscrber));
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export const lift =
  <TA, TB>(operator: ObserverOperator<TA, TB>): ObservableOperator<TA, TB> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];

    const isSynchronous = source.isSynchronous && operator.isSynchronous;

    return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  lift,
};
