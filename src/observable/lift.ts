import { contraVariant } from "../__internal__.liftable";
import { Lift } from "../__internal__.source";
import { Function1, newInstance, pipe } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer } from "../observer";
import { sourceFrom } from "../source";
import { AbstractObservable, isEnumerable } from "./observable";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
type ObserverOperator<A, B> = Function1<Observer<B>, Observer<A>>;

class LiftedObservable<TIn, TOut> extends AbstractObservable<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly ObserverOperator<any, any>[],
    readonly isEnumerable: boolean,
  ) {
    super();
  }

  sink(observer: Observer<TOut>) {
    pipe(observer, ...this.operators, sourceFrom(this.source)) as Observer<any>;
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
    isEnumerableOperator = false,
  ): ObservableOperator<TA, TB> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];

    isEnumerableOperator = isEnumerable(source) && isEnumerableOperator;

    return newInstance(
      LiftedObservable,
      sourceSource,
      allFunctions,
      isEnumerableOperator,
    );
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  variance: contraVariant,
  lift,
};

export const liftSynchronousT: Lift<ObservableLike<unknown>> = {
  variance: contraVariant,
  lift: op => lift(op, true),
};
