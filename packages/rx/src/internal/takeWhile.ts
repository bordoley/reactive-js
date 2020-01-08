import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class TakeWhileSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    if (!this.isDisposed) {
      if (this.predicate(next)) {
        this.delegate.notify(next);
      } else {
        this.dispose();
      }
    }
  }
}

export const takeWhile = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new TakeWhileSubscriber(subscriber, predicate);
  return lift(new SubscriberOperator(true, call));
};
