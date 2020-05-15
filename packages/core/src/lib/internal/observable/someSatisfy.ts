import { add, dispose } from "../../disposable";
import {
  strictEquality,
  Equality,
  Predicate,
  isEqualTo,
} from "../../functions";
import { isNone } from "../../option";
import { fromValue } from "./fromValue";
import { ObserverLike, ObservablePredicate } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverState,
} from "./observer";

class SomeSatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
  constructor(
    delegate: ObserverLike<boolean>,
    private readonly predicate: Predicate<T>,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error)) {
        fromValue()(false).observe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertObserverState(this);

    const passesPredicate = this.predicate(next);
    if (passesPredicate) {
      const delegate = this.delegate;
      delegate.notify(true);
      dispose(delegate);
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the source
 * emits any items which satisfy the predicate, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const someSatisfy = <T>(
  predicate: Predicate<T>,
): ObservablePredicate<T> => {
  const operator = (observer: ObserverLike<boolean>) =>
    new SomeSatisfyObserver(observer, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits a single `true` value if the source
 * emits any item equal to `value`, otherwise `false`.
 *
 * @param value
 * @param equals
 */
export const contains = <T>(
  value: T,
  equality: Equality<T> = strictEquality,
): ObservablePredicate<T> => someSatisfy(isEqualTo(value, equality));
