import { SideEffect1 } from "../functions";
import { ObservableOperator } from "../observable";
import { createOnNotifyOperator } from "../source";
import { liftT } from "./lift";
import { Observer } from "./observer";

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export const onNotify: <T>(
  onNotify: SideEffect1<T>,
) => ObservableOperator<T, T> = createOnNotifyOperator(
  liftT,
  class OnNotifyObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<T>,
      readonly onNotify: SideEffect1<T>,
    ) {
      super(delegate);
    }
  },
);
