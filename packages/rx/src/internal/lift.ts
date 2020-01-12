import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
  EnumerableLike,
} from "./interfaces";
import { enumerableMixin, isEnumerable } from "./enumerable";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: ReadonlyArray<SubscriberOperatorLike<any, any>>,
  ) {}

  subscribe(subscriber: SubscriberLike<TOut>) {
    const liftedSubscrber: SubscriberLike<any> = this.operators.reduceRight(
      (acc, next) => next.call(acc),
      subscriber,
    );

    this.source.subscribe(liftedSubscrber);
  }
}

class LiftedEnumerable<TIn, TOut> extends LiftedObservable<TIn, TOut>
  implements EnumerableLike<TOut> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
}

/**
 * Creates a new observable which applies the provided the operator function to
 * subscriber when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export function lift<TA, TB>(
  operator: SubscriberOperatorLike<TA, TB>,
): ObservableOperatorLike<TA, TB> {
  return source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allOperators =
      source instanceof LiftedObservable
        ? [...source.operators, operator]
        : [operator];

    return isEnumerable(source) && operator.isSynchronous
      ? new LiftedEnumerable(sourceSource, allOperators)
      : new LiftedObservable(sourceSource, allOperators);
  };
}
