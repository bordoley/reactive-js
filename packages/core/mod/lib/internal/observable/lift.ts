import { pipe } from "../../functions.ts";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
  ObserverOperator,
} from "./interfaces.ts";
import { observe } from "./observable.ts";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: readonly ObserverOperator<any, any>[],
    readonly isSynchronous: boolean,
  ) {}

  observe(observer: ObserverLike<TOut>) {
    const liftedSubscrber = pipe(observer, ...this.operators) as ObserverLike<
      any
    >;

    observe(this.source, liftedSubscrber);
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export const lift = <TA, TB>(
  operator: ObserverOperator<TA, TB>,
): ObservableOperator<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allFunctions =
    source instanceof LiftedObservable
      ? [operator, ...source.operators]
      : [operator];

  const isSynchronous = source.isSynchronous && operator.isSynchronous;

  return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
};
