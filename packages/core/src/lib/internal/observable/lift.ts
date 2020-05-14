import { pipe } from "../../functions";
import {
  ObservableLike,
  ObservableFunction,
  ObserverLike,
  ObserverFunction,
} from "./interfaces";

class LiftedObservable<TIn, TOut> implements ObservableLike<TOut> {
  constructor(
    readonly source: ObservableLike<TIn>,
    readonly operators: ReadonlyArray<ObserverFunction<any, any>>,
    readonly isSynchronous: boolean,
  ) {}

  observe(observer: ObserverLike<TOut>) {
    const liftedSubscrber = pipe(
      observer,
      ...this.operators,
    ) as ObserverLike<any>;

    this.source.observe(liftedSubscrber);
  }
}

/**
 * Creates a new `ObservableLike` which applies the provided the operator function to
 * observer when the source is subscribed to.
 *
 * @param operator The operator function to apply.
 */
export const lift = <TA, TB>(
  operator: ObserverFunction<TA, TB>,
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
