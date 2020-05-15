import { add } from "../../disposable";
import { strictEquality, Equality } from "../../functions";
import { Option } from "../../option";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverState,
} from "./observer";
import { notifyDistinctUntilChanged } from "../notifyMixins";

class DistinctUntilChangedObserver<T> extends AbstractDelegatingObserver<T, T> {
  prev: Option<T>;
  hasValue = false;

  constructor(
    delegate: ObserverLike<T>,
    readonly equality: Equality<T>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverState(this);
    notifyDistinctUntilChanged(this, next);
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
