import { referenceEquals, Equality } from "../../functions";
import { Option } from "../../option";
import { ObservableOperator, SubscriberLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingSubscriber,
  assertSubscriberNotifyInContinuation,
} from "./subscriber";
import { add } from "../../disposable";

class DistinctUntilChangedSubscriber<T> extends AbstractDelegatingSubscriber<
  T,
  T
> {
  private prev: Option<T>;
  private hasValue = false;

  constructor(
    delegate: SubscriberLike<T>,
    private readonly equals: Equality<T>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertSubscriberNotifyInContinuation(this);

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

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
export const distinctUntilChanged = <T>(
  equals: Equality<T> = referenceEquals,
): ObservableOperator<T, T> => {
  const operator = (subscriber: SubscriberLike<T>) =>
    new DistinctUntilChangedSubscriber(subscriber, equals);
  operator.isSynchronous = true;
  return lift(operator);
};
