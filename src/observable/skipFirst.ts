import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifySkipFirst } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class SkipFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
  count = 0;

  constructor(delegate: ObserverLike<T>, readonly skipCount: number) {
    super(delegate);
  }
}
SkipFirstObserver.prototype.notify = notifySkipFirst;

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new SkipFirstObserver(delegate, count);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : observable;
};
