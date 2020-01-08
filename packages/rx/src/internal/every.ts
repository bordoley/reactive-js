import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { ofValue } from "./ofValue";
import { SubscriberOperator } from "./subscriberOperator";

class EverySubscriber<T> extends AbstractDelegatingSubscriber<T, boolean> {
  constructor(
    delegate: SubscriberLike<boolean>,
    private readonly predicate: (next: T) => boolean,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined) {
        ofValue(true).subscribe(this.delegate);
      } else {
        this.delegate.dispose(error);
      }
    });
  }

  notify(next: T) {
    const failedPredicate = !this.predicate(next);
    if (failedPredicate) {
      this.delegate.notify(false);
      this.delegate.dispose();
    }
  }
}

export const every = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, boolean> => {
  const call = (subscriber: SubscriberLike<boolean>) =>
    new EverySubscriber(subscriber, predicate);
  return lift(new SubscriberOperator(true, call));
};

export const none = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, boolean> => every(next => !predicate(next));
