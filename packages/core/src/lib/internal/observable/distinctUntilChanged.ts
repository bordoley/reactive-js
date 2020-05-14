import { add } from "../../disposable";
import { strictEquality, Equality } from "../../functions";
import { Option } from "../../option";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer";

class DistinctUntilChangedObserver<T> extends AbstractDelegatingObserver<T, T> {
  private prev: Option<T>;
  private hasValue = false;

  constructor(
    delegate: ObserverLike<T>,
    private readonly equality: Equality<T>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

    const shouldEmit =
      !this.isDisposed &&
      (!this.hasValue || !this.equality(this.prev as T, next));

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
  equality: Equality<T> = strictEquality,
): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new DistinctUntilChangedObserver(observer, equality);
  operator.isSynchronous = true;
  return lift(operator);
};
