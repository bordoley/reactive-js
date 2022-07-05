import { createMapOperator } from "../__internal__.reactiveContainer";
import { Map } from "../container";
import { Function1 } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer } from "../observer";
import { liftSynchronousT } from "./lift";
import { AbstractDelegatingObserver } from "./observer";

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => ObservableOperator<TA, TB> = /*@__PURE__*/ createMapOperator(
  liftSynchronousT,
  class MapObserver<TA, TB> extends AbstractDelegatingObserver<TA, TB> {
    constructor(delegate: Observer<TB>, readonly mapper: Function1<TA, TB>) {
      super(delegate);
    }
  },
);

export const mapT: Map<ObservableLike<unknown>> = {
  map,
};
