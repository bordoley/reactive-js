import { createOnNotifyOperator } from "../__internal__.liftable";
import { decorateWithOnNotifyNotify } from "../__internal__.reactiveContainer";
import { SideEffect1 } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { ObserverLike } from "../observer";
import { liftSynchronousT } from "./lift";
import {
  AbstractDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observer";

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => ObservableOperator<T, T> = /*@__PURE__*/ (() => {
  class OnNotifyObserver<T> extends AbstractDelegatingObserver<T, T> {
    constructor(delegate: ObserverLike<T>, readonly onNotify: SideEffect1<T>) {
      super(delegate);
    }
  }
  decorateWithOnNotifyNotify<ObservableLike<unknown>>(OnNotifyObserver);
  decorateNotifyWithAssertions(OnNotifyObserver);
  return createOnNotifyOperator(liftSynchronousT, OnNotifyObserver);
})();
