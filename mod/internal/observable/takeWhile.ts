import { dispose } from "../../disposable.ts";
import { Predicate, pipe } from "../../functions.ts";
import { ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer.ts";

class TakeWhileObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly predicate: Predicate<T>,
    private readonly inclusive: boolean,
  ) {
    super(delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    const satisfiesPredicate = this.predicate(next);

    if (satisfiesPredicate || this.inclusive) {
      this.delegate.notify(next);
    }

    if (!satisfiesPredicate) {
      pipe(this, dispose());
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
  options: { readonly inclusive?: boolean } = {},
): ObservableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (observer: ObserverLike<T>) =>
    new TakeWhileObserver(observer, predicate, inclusive);
  operator.isSynchronous = true;
  return lift(operator);
};
