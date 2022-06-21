import { Map } from "../container";
import { Function1 } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { createMapOperator } from "../source";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const map: <TA, TB>(
  mapper: Function1<TA, TB>,
) => RunnableOperator<TA, TB> = createMapOperator(
  liftT,
  class MapSink<TA, TB> extends Sink<TA> {
    constructor(
      readonly delegate: Sink<TB>,
      readonly mapper: Function1<TA, TB>,
    ) {
      super();
    }
  },
);

export const mapT: Map<RunnableLike<unknown>> = {
  map,
};
