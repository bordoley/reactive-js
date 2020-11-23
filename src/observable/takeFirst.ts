import { dispose } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { empty } from "./empty";
import { lift } from "./lift";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer";

class TakeFirstObserver<T> extends AbstractAutoDisposingDelegatingObserver<
  T,
  T
> {
  private count = 0;

  constructor(delegate: ObserverLike<T>, private readonly maxCount: number) {
    super(delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    this.count++;
    this.delegate.notify(next);
    if (this.count >= this.maxCount) {
      pipe(this, dispose());
    }
  }
}

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (observer: ObserverLike<T>) =>
    new TakeFirstObserver(observer, count);
  operator.isSynchronous = true;
  return observable => (count > 0 ? pipe(observable, lift(operator)) : empty());
};
