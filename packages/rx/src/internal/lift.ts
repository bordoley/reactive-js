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
export function liftObservable<TA, TB>(
  op1: SubscriberOperatorLike<TA, TB>,
): ObservableOperatorLike<TA, TB>;
export function liftObservable<TA, TB, TC>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
): ObservableOperatorLike<TA, TC>;
export function liftObservable<TA, TB, TC, TD>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
): ObservableOperatorLike<TA, TD>;
export function liftObservable<TA, TB, TC, TD, TE>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
): ObservableOperatorLike<TA, TE>;
export function liftObservable<TA, TB, TC, TD, TE, TF>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
): ObservableOperatorLike<TA, TF>;
export function liftObservable<TA, TB, TC, TD, TE, TF, TG>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
): ObservableOperatorLike<TA, TG>;
export function liftObservable<TA, TB, TC, TD, TE, TF, TG, TH>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
): ObservableOperatorLike<TA, TH>;
export function liftObservable<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
  op8: SubscriberOperatorLike<TH, TI>,
): ObservableOperatorLike<TA, TI>;
export function liftObservable(
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

class LiftedEnumerable<TIn, TOut> extends LiftedObservable<TIn, TOut>
  implements EnumerableLike<TOut> {
  readonly [Symbol.iterator] = enumerableMixin[Symbol.iterator];
  readonly enumerate = enumerableMixin.enumerate;
}

export function liftEnumerable<TA, TB>(
  op1: SubscriberOperatorLike<TA, TB>,
): ObservableOperatorLike<TA, TB>;
export function liftEnumerable<TA, TB, TC>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
): ObservableOperatorLike<TA, TC>;
export function liftEnumerable<TA, TB, TC, TD>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
): ObservableOperatorLike<TA, TD>;
export function liftEnumerable<TA, TB, TC, TD, TE>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
): ObservableOperatorLike<TA, TE>;
export function liftEnumerable<TA, TB, TC, TD, TE, TF>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
): ObservableOperatorLike<TA, TF>;
export function liftEnumerable<TA, TB, TC, TD, TE, TF, TG>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
): ObservableOperatorLike<TA, TG>;
export function liftEnumerable<TA, TB, TC, TD, TE, TF, TG, TH>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
): ObservableOperatorLike<TA, TH>;
export function liftEnumerable<TA, TB, TC, TD, TE, TF, TG, TH, TI>(
  op1: SubscriberOperatorLike<TA, TB>,
  op2: SubscriberOperatorLike<TB, TC>,
  op3: SubscriberOperatorLike<TC, TD>,
  op4: SubscriberOperatorLike<TD, TE>,
  op5: SubscriberOperatorLike<TE, TF>,
  op6: SubscriberOperatorLike<TF, TG>,
  op7: SubscriberOperatorLike<TG, TH>,
  op8: SubscriberOperatorLike<TH, TI>,
): ObservableOperatorLike<TA, TI>;
export function liftEnumerable(
  ...operators: SubscriberOperatorLike<unknown, unknown>[]
): ObservableOperatorLike<unknown, unknown> {
  return source => {
    const sourceSource =
      source instanceof LiftedObservable ? source.source : source;

    const allOperators =
      source instanceof LiftedObservable
        ? [...source.operators, ...operators]
        : operators;

    return isEnumerable(source)
      ? new LiftedEnumerable(sourceSource, allOperators)
      : new LiftedObservable(sourceSource, allOperators);
  };
}
