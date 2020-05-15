import { add } from "../../disposable";
import { SideEffect1 } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";

class OnNotifyObserver<T> extends AbstractDelegatingObserver<T, T> {
  constructor(
    delegate: ObserverLike<T>,
    private readonly onNotify: SideEffect1<T>,
  ) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: T) {
    assertObserverState(this);

    if (!this.isDisposed) {
      this.onNotify(next);
      this.delegate.notify(next);
    }
  }
}

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export function onNotify<T>(
  onNotify: SideEffect1<T>,
): ObservableFunction<T, T> {
  const operator = (observer: ObserverLike<T>) =>
    new OnNotifyObserver(observer, onNotify);
  operator.isSynchronous = true;
  return lift(operator);
}
