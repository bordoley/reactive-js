import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";

class ThrowIfEmptySubscriber<T> extends AbstractDelegatingSubscriber<T, T> {
  private isEmpty = true;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly factory: () => unknown,
  ) {
    super(delegate);
    this.add(error => {
      if (error === undefined && this.isEmpty) {
        const cause = this.factory();
        error = { cause };
      }
      this.delegate.dispose(error);
    });
  }

  notify(next: T) {
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
): ObservableOperatorLike<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new ThrowIfEmptySubscriber(subscriber, factory);
  return lift(operator, true);
};
