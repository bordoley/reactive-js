import { ObservableLike, ObservableOperator, SubscriberLike, SubscriberOperator } from "@reactive-js/rx";

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
