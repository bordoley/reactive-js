import { dispose } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { empty } from "./empty.ts";
import { ObservableFunction, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractAutoDisposingDelegatingObserver, assertObserverState } from "./observer.ts";

class TakeFirstObserver<T> extends AbstractAutoDisposingDelegatingObserver<T, T> {
  private count = 0;

  constructor(delegate: ObserverLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      dispose(this);
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
