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
    const liftedSubscrber: SubscriberLike<any> = this.operators.reduceRight(
      (acc, next) => next(acc),
      subscriber,
    );

    this.source.subscribe(liftedSubscrber);
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * subscriber when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export function lift<TA, TB>(
  operator: SubscriberOperator<TA, TB>,
  operatorIsSynchronous = false,
): ObservableOperator<TA, TB> {
  return source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allOperators =
      source instanceof LiftedObservable
        ? [...source.operators, operator]
        : [operator];

    const isSynchronous = source.isSynchronous && operatorIsSynchronous;

    return new LiftedObservable(sourceSource, allOperators, isSynchronous);
  };
}
