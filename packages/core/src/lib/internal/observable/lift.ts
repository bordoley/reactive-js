import { pipe } from "../../functions";
import {
  ObservableLike,
  ObservableOperator,
  SubscriberLike,
  SubscriberOperator,
} from "./interfaces";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: ReadonlyArray<SubscriberOperator<any, any>>,
    readonly isSynchronous: boolean,
  ) {}

  subscribe(subscriber: SubscriberLike<TOut>) {
    const liftedSubscrber = pipe(
      subscriber,
      ...this.operators,
    ) as SubscriberLike<any>;

    this.source.subscribe(liftedSubscrber);
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * subscriber when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export const lift = <TA, TB>(
  operator: SubscriberOperator<TA, TB>,
): ObservableOperator<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allOperators =
    source instanceof LiftedObservable
      ? [operator, ...source.operators]
      : [operator];

  const isSynchronous = source.isSynchronous && operator.isSynchronous;

  return new LiftedObservable(sourceSource, allOperators, isSynchronous);
};
