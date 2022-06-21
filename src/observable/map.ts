import { Map } from "../container";
import { bindDisposables } from "../disposable";
import { Function1 } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { notifyMap } from "../sink";
import { lift } from "./lift";
import { Observer } from "./observer";

class MapObserver<TA, TB> extends Observer<TA> {
  constructor(
    readonly delegate: Observer<TB>,
    readonly mapper: Function1<TA, TB>,
  ) {
    super(delegate);
  }
}
MapObserver.prototype.notify = notifyMap;

/**
 * Returns an `ObservableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
export const map = <TA, TB>(
  mapper: Function1<TA, TB>,
): ObservableOperator<TA, TB> => {
  const operator = (delegate: Observer<TB>) => {
    const observer = new MapObserver(delegate, mapper);
    bindDisposables(observer, delegate);
    return observer;
  };
  operator.isSynchronous = true;
  return lift(operator);
};

export const mapT: Map<ObservableLike<unknown>> = {
  map,
};
