import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class KeepTypeSubscriber<
  TA,
  TB extends TA
> extends AbstractDelegatingSubscriber<TA, TB> {
  constructor(
    delegate: SubscriberLike<TB>,
    private readonly predicate: (data: TA) => data is TB,
  ) {
    super(delegate);
    this.add(delegate);
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
  predicate: (data: TA) => data is TB,
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
export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperator<T, T> => keepType(predicate as (data: T) => data is T);
