import { Map } from "../container";
import { Function1 } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { Observer } from "../observer";
import { createMapOperator } from "../source";
import { liftSynchronousT } from "./lift";

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => ObservableOperator<TA, TB> = createMapOperator(
  liftSynchronousT,
  class MapObserver<TA, TB> extends Observer<TA> {
    constructor(
      readonly delegate: Observer<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super(delegate.scheduler);
    }
  },
);

export const mapT: Map<ObservableLike<unknown>> = {
  map,
};
