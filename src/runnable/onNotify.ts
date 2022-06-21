import { bindDisposables } from "../disposable";
import { SideEffect1 } from "../functions";
import { RunnableOperator } from "../runnable";
import { notifyOnNotify } from "../sink";
import { lift } from "./lift";
import { Sink } from "./sinks";

class OnNotifySink<T> extends Sink<T> {
  constructor(readonly delegate: Sink<T>, readonly onNotify: SideEffect1<T>) {
    super();
  }
}
OnNotifySink.prototype.notify = notifyOnNotify;

/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
export function onNotify<T>(onNotify: SideEffect1<T>): RunnableOperator<T, T> {
  const operator = (delegate: Sink<T>) => {
    const sink = new OnNotifySink(delegate, onNotify);
    bindDisposables(sink, delegate);
    return sink;
  };
  return lift(operator);
}
