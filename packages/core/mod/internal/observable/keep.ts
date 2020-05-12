import { Predicate, TypePredicate } from "../../functions.ts";
import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";
import { add } from "../../disposable.ts";

class KeepTypeSubscriber<
  TA,
  TB extends TA
> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly predicate: TypePredicate<TA, TB>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: TA) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed && this.predicate(next)) {
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keepType = <TA, TB extends TA>(
  predicate: TypePredicate<TA, TB>,
): ObservableOperator<unknown, TB> => {
  const operator = (subscriber: SubscriberLike<TB>) =>
    new KeepTypeSubscriber(subscriber, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): ObservableOperator<T, T> =>
  keepType(predicate as TypePredicate<T, T>);
