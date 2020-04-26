import { ObservableOperator, SubscriberLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber.ts";

class OnNotifySubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  constructor(
    delegate: SubscriberLike<T>,
    private readonly onNotify: (next: T) => void,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.onNotify(next);
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export function onNotify<T>(
  onNotify: (next: T) => void,
): ObservableOperator<T, T> {
  const operator = (subscriber: SubscriberLike<T>) =>
    new OnNotifySubscriber(subscriber, onNotify);
  operator.isSynchronous = true;
  return lift(operator);
}
