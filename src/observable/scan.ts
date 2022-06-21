import { bindDisposables } from "../disposable";
import { Factory, Reducer } from "../functions";
import { ObservableOperator } from "../observable";
import { notifyScan } from "../sink";
import { lift } from "./lift";
import { Observer } from "./observer";

class ScanObserver<T, TAcc> extends Observer<T> {
  constructor(
    readonly delegate: Observer<TAcc>,
    readonly reducer: Reducer<T, TAcc>,
    public acc: TAcc,
  ) {
    super(delegate);
  }
}
ScanObserver.prototype.notify = notifyScan;

/**
 * Returns an `ObservableLike` that applies an accumulator function over the source,
 * and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
export const scan = <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
): ObservableOperator<T, TAcc> => {
  const operator = (delegate: Observer<TAcc>) => {
    const observer = new ScanObserver(delegate, reducer, initialValue());
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};
