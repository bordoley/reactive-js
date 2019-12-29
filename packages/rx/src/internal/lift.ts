import {
  ObservableLike,
  ObservableOperatorLike,
  SubscriberLike,
  SubscriberOperatorLike,
} from "./interfaces";

class LiftedObservable<TSrc, T> implements ObservableLike<T> {
  constructor(
    readonly source: ObservableLike<TSrc>,
    readonly operators: ReadonlyArray<SubscriberOperatorLike<any, any>>,
  ) {}

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
export function lift<TA, TB>(
  op1: SubscriberOperatorLike<TA, TB>,
): ObservableOperatorLike<TA, TB>;
export function lift<TA, TB, TC>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
): ObservableOperatorLike<TA, TC>;
export function lift<TA, TB, TC, TD>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
): ObservableOperatorLike<TA, TD>;
export function lift<TA, TB, TC, TD, TE>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
): ObservableOperatorLike<TA, TE>;
export function lift<TA, TB, TC, TD, TE, TF>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
): ObservableOperatorLike<TA, TF>;
export function lift<TA, TB, TC, TD, TE, TF, TG>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
): ObservableOperatorLike<TA, TG>;
export function lift<TA, TB, TC, TD, TE, TF, TG, TH>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
): ObservableOperatorLike<TA, TH>;
export function lift<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
  op8: SubscriberOperatorLike<TH, TI>,
): ObservableOperatorLike<TA, TI>;
export function lift(
  ...operators: SubscriberOperatorLike<unknown, unknown>[]
): ObservableOperatorLike<unknown, unknown> {
  return source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allOperators =
      source instanceof LiftedObservable
        ? [...source.operators, ...operators]
        : operators;

    return new LiftedObservable(sourceSource, allOperators);
  };
}