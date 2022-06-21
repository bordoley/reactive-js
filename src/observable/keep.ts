import { Keep } from "../container";
import { bindDisposables } from "../disposable";
import { Predicate } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { notifyKeep } from "../sink";
import { lift } from "./lift";
import { Observer } from "./observer";

class KeepObserver<T> extends Observer<T> {
  constructor(
    readonly delegate: Observer<T>,
    readonly predicate: Predicate<T>,
  ) {
    super(delegate);
  }
}
KeepObserver.prototype.notify = notifyKeep;

/**
 * Returns an `ObservableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
export const keep = <T>(predicate: Predicate<T>): ObservableOperator<T, T> => {
  const operator = (delegate: Observer<T>) => {
    const observer = new KeepObserver(delegate, predicate);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};

export const keepT: Keep<ObservableLike<unknown>> = {
  keep,
};
