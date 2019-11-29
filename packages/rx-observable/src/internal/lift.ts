import { SubscriberLike } from "./subscriber";
import { ObservableLike, ObservableOperator } from "./observable";

/**
 * A function with transforms a SubscriberLike<B> to a SubscriberLike<A>.
 */
export interface SubscriberOperator<A, B> {
  (subscriber: SubscriberLike<B>): SubscriberLike<A>;
}

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  readonly operators: ReadonlyArray<SubscriberOperator<any, any>>;
  readonly source: ObservableLike<TSrc>;

  constructor(
    source: ObservableLike<TSrc>,
    operators: ReadonlyArray<SubscriberOperator<any, any>>,
  ) {
    this.source = source;
    this.operators = operators;
  }

  subscribe(subscriber: SubscriberLike<T>) {
    const liftedSubscrber: SubscriberLike<any> = this.operators.reduceRight(
      (acc, next) => next(acc),
      subscriber,
    );

    this.source.subscribe(liftedSubscrber);
  }
}

/**
 * Converts a SubscriberOperator to an ObservableOperator.
 * @param operator
 */
export const lift = <TA, TB>(
  operator: SubscriberOperator<TA, TB>,
): ObservableOperator<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [...source.operators, operator]
      : [operator];

  return new LiftedObservable(sourceSource, allOperators);
};
