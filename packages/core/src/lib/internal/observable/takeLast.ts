import { addTeardown, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown } from "../../disposable";
import { pipe } from "../../functions";
import { empty } from "./empty";
import { fromArray } from "./fromArray";
import { ObservableOperator, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly last: T[] = [];

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
    const last = this.last;
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      fromArray()(last).observe(delegate);
    });
    addTeardown(delegate, () => {
      last.length = 0;
    });
  }

  notify(next: T) {
    assertObserverState(this);
    const last = this.last;

    last.push(next);

    if (last.length > this.maxCount) {
      last.shift();
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast = <T>(count = 1): ObservableOperator<T, T> => {
  const operator = (observer: ObserverLike<T>) =>
    new TakeLastObserver(observer, count);
  operator.isSynchronous = false;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
