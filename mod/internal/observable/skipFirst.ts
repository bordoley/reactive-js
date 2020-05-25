import { pipe } from "../../functions.ts";
import { ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer.ts";

class SkipFirstObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  private count = 0;

  constructor(delegate: ObserverLike<T>, readonly skipCount: number) {
    super(delegate);
  }

  notify(next: T) {
    assertObserverState(this);
    this.count++;
    if (this.count > this.skipCount) {
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new SkipFirstObserver(observer, count);
  operator.isSynchronous = false;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : observable;
};
