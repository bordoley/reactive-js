import { add, dispose } from "../../disposable";
import { pipe } from "../../functions";
import { empty } from "./empty";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class TakeFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
  private count = 0;

  constructor(delegate: ObserverLike<T>, private readonly maxCount: number) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    if (!this.isDisposed) {
      this.count++;
      this.delegate.notify(next);
      if (this.count >= this.maxCount) {
        dispose(this);
      }
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(count = 1): ObservableFunction<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new TakeFirstObserver(observer, count);
  operator.isSynchronous = true;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
