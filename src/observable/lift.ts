import { reactive } from "../__internal__.liftable";
import { Lift } from "../__internal__.reactiveContainer";
import { Function1, newInstance, pipe } from "../functions";
import {
  DefaultObservable,
  EnumerableObservable,
  ObservableLike,
  ObservableOperator,
  RunnableObservable,
} from "../observable";
import { Observer } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { AbstractObservable, isEnumerable } from "./observable";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
type ObserverOperator<A, B> = Function1<Observer<B>, Observer<A>>;

class LiftedObservable<TIn, TOut> extends AbstractObservable<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly ObserverOperator<any, any>[],
    readonly observableType:
      | DefaultObservable
      | RunnableObservable
      | EnumerableObservable,
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
      isEnumerableOperator
        ? (2 as EnumerableObservable)
        : (0 as DefaultObservable),
    );
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  lift,
  variance: reactive,
};

export const liftSynchronousT: Lift<ObservableLike<unknown>> = {
  lift: op => lift(op, true),
  variance: reactive,
};
