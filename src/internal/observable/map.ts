import { returns, Function1 } from "../../functions";
import { ObservableOperator, ObserverLike } from "../../observable";
import { lift } from "./lift";
import {
  AbstractAutoDisposingDelegatingObserver,
  assertObserverState,
} from "./observer";

class MapObserver<TA, TB> extends AbstractAutoDisposingDelegatingObserver<
  TA,
  TB
> {
  constructor(delegate: ObserverLike<TB>, readonly mapper: Function1<TA, TB>) {
    super(delegate);
  }

  notify(next: TA) {
    assertObserverState(this);
    const mapped = this.mapper(next);
    this.delegate.notify(mapped);
  }
}

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

export const mapTo = <TA, TB>(value: TB): ObservableOperator<TA, TB> =>
  map(returns(value));
