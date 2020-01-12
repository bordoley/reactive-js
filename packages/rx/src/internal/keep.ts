import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class KeepSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (data: T) => boolean,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    const shouldKeep = !this.isDisposed && this.predicate(next);
    if (shouldKeep) {
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an observable that only emits items produced by the
 * source that satisfy the specified predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(
  predicate: (data: T) => boolean,
): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new KeepSubscriber(subscriber, predicate);
  return lift(new SubscriberOperator(true, call));
};
