import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import { createScanOperator } from "../sink";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = createScanOperator(
  liftT,
  class ScanSink<T, TAcc> extends Sink<T> {
    constructor(
      readonly delegate: Sink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super();
    }
  },
);
