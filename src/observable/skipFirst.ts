import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator } from "../observable";
import { notifySkipFirst } from "../sink";
import { lift } from "./lift";
import { Observer } from "./observer";

class SkipFirstObserver<T> extends Observer<T> {
  count = 0;

  constructor(readonly delegate: Observer<T>, readonly skipCount: number) {
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
  const operator = (delegate: Observer<T>) => {
    const observer = new SkipFirstObserver(delegate, count);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : observable;
};
