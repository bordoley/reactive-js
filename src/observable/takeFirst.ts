import { empty } from "../container";
import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifyTakeFirst } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class TakeFirstObserver<T> extends AbstractDelegatingObserver<T, T> {
  count = 0;

  constructor(delegate: ObserverLike<T>, readonly maxCount: number) {
    super(delegate);
  }
}
TakeFirstObserver.prototype.notify = notifyTakeFirst;

/**
 * Returns an `ObservableLike` that only emits the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeFirst = <T>(
  options: { readonly count?: number } = {},
): ObservableOperator<T, T> => {
  const { count = 1 } = options;
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new TakeFirstObserver(delegate, count);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
