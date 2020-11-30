import {
  addOnDisposedWithError,
  addOnDisposedWithoutErrorTeardown,
  addTeardown,
} from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { empty } from "./empty";
import { fromArray } from "./fromArray";
import { lift } from "./lift";
import {
  AbstractDelegatingObserver,
  assertObserverState,
  observe,
} from "./observer";

class TakeLastObserver<T> extends AbstractDelegatingObserver<T, T> {
  readonly last: T[] = [];

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
    const last = this.last;
    addOnDisposedWithError(this, delegate);
    addOnDisposedWithoutErrorTeardown(this, () => {
      pipe(last, fromArray(), observe(delegate));
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
export const takeLast = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new TakeLastObserver(observer, count);
  operator.isSynchronous = false;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
