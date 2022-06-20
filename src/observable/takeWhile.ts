import { bindDisposables } from "../disposable";
import { Predicate } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifyTakeWhile } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class TakeWhileObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
    readonly predicate: Predicate<T>,
    readonly inclusive: boolean,
  ) {
    super(delegate);
  }
}
TakeWhileObserver.prototype.notify = notifyTakeWhile;

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
export const takeWhile = <T>(
  predicate: Predicate<T>,
  options: { readonly inclusive?: boolean } = {},
): ObservableOperator<T, T> => {
  const { inclusive = false } = options;
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new TakeWhileObserver(delegate, predicate, inclusive);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};
