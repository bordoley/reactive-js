import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class TakeWhileSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (next: T) => boolean,
    private readonly inclusive: boolean,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed) {
      const satisfiesPredicate = this.predicate(next);

      if (satisfiesPredicate || this.inclusive) {
        this.delegate.notify(next);
      }

      if (!satisfiesPredicate) {
        this.dispose();
      }
    }
  }
}

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
export const takeWhile = <T>(
  predicate: (next: T) => boolean,
  { inclusive } = { inclusive: false },
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new TakeWhileSubscriber(subscriber, predicate, inclusive);
  operator.isSynchronous = true;
  return lift(operator);
};
