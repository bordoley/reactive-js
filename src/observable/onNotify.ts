import { AbstractDelegatingObserver } from "../__internal__.observer";
import { createOnNotifyOperator } from "../__internal__.reactive";
import { SideEffect1 } from "../functions";
import { ObservableOperator } from "../observable";
import { Observer } from "../observer";
import { liftSynchronousT } from "./lift";

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => ObservableOperator<T, T> = /*@__PURE__*/ createOnNotifyOperator(
  liftSynchronousT,
  class OnNotifyObserver<T> extends AbstractDelegatingObserver<T, T> {
    constructor(delegate: Observer<T>, readonly onNotify: SideEffect1<T>) {
      super(delegate);
    }
  },
);
