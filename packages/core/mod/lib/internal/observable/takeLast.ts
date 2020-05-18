import { addTeardown, addOnDisposedWithError, addOnDisposedWithoutErrorTeardown } from "../../disposable.ts";
import { pipe } from "../../functions.ts";
import { empty } from "./empty.ts";
import { fromArray } from "./fromArray.ts";
import { ObservableOperator, ObserverLike } from "./interfaces.ts";
import { lift } from "./lift.ts";
import { AbstractDelegatingObserver, assertObserverState } from "./observer.ts";
import { observeWith } from "./observable.ts";

class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly last: T[] = [];

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
    const last = this.last;
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      pipe(last, fromArray(), observeWith(delegate));
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
