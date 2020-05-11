import { isNone } from "../../option";
import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { dispose } from "../../disposable";

class ThrowIfEmptySubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private isEmpty = true;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly factory: () => unknown,
  ) {
    super(delegate);
    this.add(error => {
      if (isNone(error) && this.isEmpty) {
        const cause = this.factory();
        error = { cause };
      }
      dispose(this.delegate, error);
    });
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

    this.isEmpty = false;
    this.delegate.notify(next);
  }
}

/**
 * Returns an `ObservableLike` that emits an error if the source completes without emitting a value.
 *
 * @param factory A factory function invoked to produce the error to be thrown.
 */
export const throwIfEmpty = <T>(
  factory: () => unknown,
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ThrowIfEmptySubscriber(subscriber, factory);
  operator.isSynchronous = true;
  return lift(operator);
};
