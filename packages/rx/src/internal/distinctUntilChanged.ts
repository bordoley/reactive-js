import { ObservableOperatorLike, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingSubscriber } from "./subscriber";
import { SubscriberOperator } from "./subscriberOperator";

class DistinctUntilChangedSubscriber<T> extends AbstractDelegatingSubscriber<
  T,
  T
> {
  private prev: T | undefined;
  private hasValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly equals: (a: T, b: T) => boolean,
  ) {
    super(delegate);
    this.add(delegate);
  }

  notify(next: T) {
    const shouldEmit =
      !this.isDisposed &&
      (!this.hasValue || !this.equals(this.prev as T, next));

    if (shouldEmit) {
      this.prev = next;
      this.hasValue = true;
      this.delegate.notify(next);
    }
  }
}

const referenceEquality = <T>(a: T, b: T): boolean => a === b;

export const distinctUntilChanged = <T>(
  equals: (a: T, b: T) => boolean = referenceEquality,
): ObservableOperatorLike<T, T> => {
  const call = (subscriber: SubscriberLike<T>) =>
    new DistinctUntilChangedSubscriber(subscriber, equals);
  return lift(new SubscriberOperator(true, call));
};
