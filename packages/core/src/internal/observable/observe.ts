import { ObservableOperator, ObserverLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";

class ObserveSubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly observer: ObserverLike<T>,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.observer.onNotify(next);
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an observable that forwards notifications to the provided observer.
 *
 * @param observer The observer that observes notifications.
 */
export function observe<T>(
  observer: ObserverLike<T>,
): ObservableOperator<T, T> {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ObserveSubscriber(subscriber, observer);
  operator.isSynchronous = true;
  return lift(operator);
}
