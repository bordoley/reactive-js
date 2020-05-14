import { add } from "../../disposable";
import { pipe } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverNotifyInContinuation,
} from "./observer";

class SkipFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
  private count = 0;

  constructor(delegate: ObserverLike<T>, private readonly skipCount: number) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverNotifyInContinuation(this);

    if (!this.isDisposed) {
      this.count++;

      if (this.count > this.skipCount) {
        this.delegate.notify(next);
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(count = 1): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new SkipFirstObserver(observer, count);
  operator.isSynchronous = false;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : observable;
};
