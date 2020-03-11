import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";
import { observableMixin } from "./observable";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  readonly enumerate = observableMixin.enumerate;

  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: ReadonlyArray<SubscriberOperatorLike<any, any>>,
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
  operator: SubscriberOperatorLike<TA, TB>,
  operatorIsSynchronous = false,
): ObservableOperatorLike<TA, TB> {
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
