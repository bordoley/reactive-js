import { Function1, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Lift, sinkInto } from "../source";
import { AbstractObservable } from "./observable";
import { Observer } from "./observer";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
export type ObserverOperator<A, B> = Function1<Observer<B>, Observer<A>>;

class LiftedObservable<TIn, TOut> extends AbstractObservable<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly ObserverOperator<any, any>[],
    readonly isEnumerable: boolean,
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
    isEnumerable = false,
  ): ObservableOperator<TA, TB> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];

    isEnumerable = (source.isEnumerable ?? false) && isEnumerable;

    return new LiftedObservable(sourceSource, allFunctions, isEnumerable);
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  variance: "contravariant",
  lift,
};

export const liftSynchronousT: Lift<ObservableLike<unknown>> = {
  variance: "contravariant",
  lift: op => lift(op, true),
};
