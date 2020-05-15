import { dispose, add } from "../../disposable.ts";
import { Predicate, compose, negate } from "../../functions.ts";
import { isNone } from "../../option.ts";
import { fromValue } from "./fromValue.ts";
import { ObserverLike, ObservablePredicate } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";

class EverySatisfyObserver<T> extends AbstractDelegatingObserver<T, boolean> {
  constructor(
    delegate: ObserverLike<boolean>,
    private readonly predicate: Predicate<T>,
  ) {
    super(delegate);
    add(this, error => {
      if (isNone(error)) {
        fromValue()(true).observe(delegate);
      } else {
        dispose(delegate, error);
      }
    });
  }

  notify(next: T) {
    assertObserverState(this);

    const failedPredicate = !this.predicate(next);
    if (failedPredicate) {
      const delegate = this.delegate;

      delegate.notify(false);
      dispose(delegate);
    }
  }
}

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate is satisfied for
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const everySatisfy = <T>(
  predicate: Predicate<T>,
): ObservablePredicate<T> => {
  const operator = (observer: ObserverLike<boolean>) =>
    new EverySatisfyObserver(observer, predicate);
  operator.isSynchronous = true;
  return lift(operator);
};

/**
 * Returns an `ObservableLike` that emits a single `true` value if the predicate does not satisfy
 * every value produced by the source, or if the source is empty, otherwise `false`.
 *
 * @param predicate The predicate function.
 */
export const noneSatisfy = <T>(
  predicate: Predicate<T>,
): ObservablePredicate<T> => everySatisfy(compose(predicate, negate));
