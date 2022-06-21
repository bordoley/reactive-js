import { empty } from "../container";
import { bindDisposables } from "../disposable";
import { pipe } from "../functions";
import { ObservableOperator } from "../observable";
import { notifyTakeFirst } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer } from "./observer";

class TakeFirstObserver<T> extends Observer<T> {
  count = 0;

  constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
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
  const operator = (delegate: Observer<T>) => {
    const observer = new TakeFirstObserver(delegate, count);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return observable =>
    count > 0 ? pipe(observable, lift(operator)) : empty(fromArrayT);
};
