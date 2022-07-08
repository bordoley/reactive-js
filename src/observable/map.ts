import { TReactive, createMapOperator } from "../__internal__.liftable";
import { decorateWithMapNotify } from "../__internal__.reactiveContainer";
import { Map } from "../container";
import { Function1 } from "../functions";
import { ObservableLike } from "../observable";
import { ObserverLike } from "../observer";
import { liftSynchronousT } from "./lift";
import {
  AbstractDelegatingObserver,
  decorateNotifyWithAssertions,
} from "./observer";

export const map: Map<ObservableLike<unknown>>["map"] = /*@__PURE__*/ (() => {
  class MapObserver<TA, TB> extends AbstractDelegatingObserver<TA, TB> {
    constructor(
      delegate: ObserverLike<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate);
    }
  }
  decorateWithMapNotify<ObservableLike<unknown>>(MapObserver);
  decorateNotifyWithAssertions(MapObserver);
  return createMapOperator<ObservableLike<unknown>, TReactive>(
    liftSynchronousT,
    MapObserver,
  );
})();

export const mapT: Map<ObservableLike<unknown>> = {
  map,
};
