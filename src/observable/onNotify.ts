import { bindDisposables } from "../disposable";
import { SideEffect1 } from "../functions";
import { ObservableOperator, ObserverLike } from "../observable";
import { notifyOnNotify } from "../sink";
import { lift } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

class OnNotifyObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(delegate: ObserverLike<T>, readonly onNotify: SideEffect1<T>) {
    super(delegate);
  }
}
OnNotifyObserver.prototype.notify = notifyOnNotify;

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export function onNotify<T>(
  onNotify: SideEffect1<T>,
): ObservableOperator<T, T> {
  const operator = (delegate: ObserverLike<T>) => {
    const observer = new OnNotifyObserver(delegate, onNotify);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
}
