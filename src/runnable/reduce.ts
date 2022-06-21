import { Factory, Reducer } from "../functions";
import { RunnableOperator } from "../runnable";
import { createReduceOperator } from "../source";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Sink, sinkT } from "./sinks";

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
