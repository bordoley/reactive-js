import {
  pipe as subscriberPipe,
  SubscriberLike,
  SubscriberOperator,
} from "@reactive-js/rx-subscriber";
import { ObservableLike, ObservableOperator } from "./observable";

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
    const liftedSubscrber = subscriberPipe.apply(undefined, [
      subscriber,
      ...this.operators,
    ] as any);

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