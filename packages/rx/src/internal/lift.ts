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

    return isEnumerable(source) && allOperators.every(x => x.isSynchronous)
      ? new LiftedEnumerable(sourceSource, allOperators)
      : new LiftedObservable(sourceSource, allOperators);
  };
}
