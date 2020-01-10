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

/**
 * Returns an observable that emits a single true value if the predicate is satisfied for
 * every value produced, or if the observable is empty, otherwise false.
 *
 * @param predicate The predicate function.
 */
export const every = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, boolean> => {
  const call = (subscriber: SubscriberLike<boolean>) =>
    new EverySubscriber(subscriber, predicate);
  return lift(new SubscriberOperator(true, call));
};

/**
 * Returns an observable that emits a single true value if the predicate does not satisfy
 * every value produced, or if the observable is empty, otherwise false.
 *
 * @param predicate The predicate function.
 */
export const none = <T>(
  predicate: (next: T) => boolean,
): ObservableOperatorLike<T, boolean> => every(next => !predicate(next));
