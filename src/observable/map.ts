import { Map } from "../container";
import { Function1 } from "../functions";
import {
  ObservableLike,
  ObservableOperator,
  ObserverLike,
} from "../observable";
import { notifyMap } from "../sink";
import { lift } from "./lift";
import { AbstractAutoDisposingDelegatingObserver } from "./observer";

class MapObserver<TA, TB> extends AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> {
  constructor(delegate: ObserverLike<TB>, readonly mapper: Function1<TA, TB>) {
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
  const operator = (observer: ObserverLike<TB>) =>
    new MapObserver(observer, mapper);
  operator.isSynchronous = true;
  return lift(operator);
};

export const mapT: Map<ObservableLike<unknown>> = {
  map,
};
