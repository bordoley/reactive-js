import { pipe } from "../../functions.ts";
import {
  ObservableLike,
  ObservableFunction,
  SubscriberLike,
  SubscriberFunction,
} from "./interfaces.ts";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: ReadonlyArray<SubscriberFunction<any, any>>,
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
  operator: SubscriberFunction<TA, TB>,
): ObservableFunction<TA, TB> => source => {
  const sourceSource =
    source instanceof LiftedObservable ? source.source : source;

  const allFunctions =
    source instanceof LiftedObservable
      ? [operator, ...source.operators]
      : [operator];

  const isSynchronous = source.isSynchronous && operator.isSynchronous;

  return new LiftedObservable(sourceSource, allFunctions, isSynchronous);
};
