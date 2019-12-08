import { ObservableLike, SubscriberLike } from "@reactive-js/rx";
import { ObservableOperatorLike, SubscriberOperatorLike } from "./interfaces";

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  readonly operators: ReadonlyArray<SubscriberOperatorLike<any, any>>;
  readonly source: ObservableLike<TSrc>;
  constructor(
    source: ObservableLike<TSrc>,
    operators: ReadonlyArray<SubscriberOperatorLike<any, any>>,
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
 * Converts a SubscriberOperatorLike to an ObservableOperatorLike.
 * @param operator
 */
export const lift = <TA, TB>(
  operator: SubscriberOperatorLike<TA, TB>,
): ObservableOperatorLike<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [...source.operators, operator]
      : [operator];

  return new LiftedObservable(sourceSource, allOperators);
};
