import { SideEffect1 } from "../functions";
import { RunnableOperator } from "../runnable";
import {
  AbstractAutoDisposingDelegatingSink,
  SinkLike,
  notifyOnNotify,
} from "../sink";
import { lift } from "./lift";

class OnNotifySink<T> extends AbstractAutoDisposingDelegatingSink<T, T> {
  constructor(delegate: SinkLike<T>, readonly onNotify: SideEffect1<T>) {
    super(delegate);
  }
}
OnNotifySink.prototype.notify = notifyOnNotify;

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export function onNotify<T>(onNotify: SideEffect1<T>): RunnableOperator<T, T> {
  const operator = (observer: SinkLike<T>) =>
    new OnNotifySink(observer, onNotify);
  return lift(operator);
}
