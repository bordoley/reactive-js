import { Map } from "../container";
import { Function1 } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { AbstractDelegatingObserver, Observer } from "../observer";
import { createMapOperator } from "../source";
import { liftSynchronousT } from "./lift";

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => ObservableOperator<TA, TB> = createMapOperator(
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
