import { add, dispose } from "../../disposable";
import { Predicate } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class TakeWhileObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly predicate: Predicate<T>,
    private readonly inclusive: boolean,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    if (!this.isDisposed) {
      const satisfiesPredicate = this.predicate(next);

      if (satisfiesPredicate || this.inclusive) {
        this.delegate.notify(next);
      }

      if (!satisfiesPredicate) {
        dispose(this);
      }
    }
  }
}

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
export const takeWhile = <T>(
  predicate: Predicate<T>,
  { inclusive } = { inclusive: false },
): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new TakeWhileObserver(observer, predicate, inclusive);
  operator.isSynchronous = true;
  return lift(operator);
};
