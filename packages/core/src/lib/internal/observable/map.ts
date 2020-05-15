import { add } from "../../disposable";
import { returns, Function } from "../../functions";
import { ObservableFunction, ObserverLike } from "./interfaces";
import { lift } from "./lift";
import { AbstractDelegatingObserver, assertObserverState } from "./observer";
import { notifyMap } from "../notifyMixins";

class MapObserver<TA, TB> extends AbstractDelegatingObserver<TA, TB> {
  constructor(delegate: ObserverLike<TB>, readonly mapper: Function<TA, TB>) {
    super(delegate);
    add(this, delegate);
  }

  notify(next: TA) {
    assertObserverState(this);
    notifyMap(this, next);
  }
}

/**
 * Returns an `ObservableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
export const map = <TA, TB>(
  mapper: Function<TA, TB>,
): ObservableFunction<TA, TB> => {
  const operator = (observer: ObserverLike<TB>) =>
    new MapObserver(observer, mapper);
  operator.isSynchronous = true;
  return lift(operator);
};

export const mapTo = <TA, TB>(value: TB): ObservableFunction<TA, TB> =>
  map(returns(value));
