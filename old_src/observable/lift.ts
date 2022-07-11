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
import { ObserverLike } from "../observer";
import { sourceFrom } from "../reactiveContainer";
import { AbstractObservable } from "./observable";

/**
 * A function which transforms a `ObserverLike<B>` to a `ObserverLike<A>`.
 */
type ObserverOperator<A, B> = Function1<ObserverLike<B>, ObserverLike<A>>;

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

  sinkInto(observer: ObserverLike<TOut>) {
    pipe(
      observer,
      ...this.operators,
      sourceFrom(this.source),
    ) as ObserverLike<any>;
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
    operatorType:
      | EnumerableObservable
      | RunnableObservable
      | DefaultObservable = 0,
  ): ObservableOperator<TA, TB> =>
  source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allFunctions =
      source instanceof LiftedObservable
        ? [operator, ...source.operators]
        : [operator];

    const observableType = Math.min(source.observableType, operatorType);

    return newInstance(
      LiftedObservable,
      sourceSource,
      allFunctions,
      observableType as
        | EnumerableObservable
        | RunnableObservable
        | DefaultObservable,
    );
  };

export const liftT: Lift<ObservableLike<unknown>> = {
  lift,
  variance: reactive,
};

export const liftEnumerableT: Lift<ObservableLike<unknown>> = {
  lift: op => lift(op, 2),
  variance: reactive,
};
