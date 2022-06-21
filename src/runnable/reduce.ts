import { Factory, Reducer } from "../functions";
import { createReduceOperator } from "../sink";
import { Sink, sinkT } from "./sinks";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { RunnableOperator } from "../runnable";

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => RunnableOperator<T, TAcc> = createReduceOperator(
  { ...fromArrayT, ...liftT, ...sinkT },
  class ReducerSink<T, TAcc> extends Sink<T> {
    constructor(
      readonly delegate: Sink<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super();
    }
  },
);
