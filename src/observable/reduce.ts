import { Factory, Reducer } from "../functions";
import { ObservableOperator } from "../observable";
import { createReduceOperator } from "../source";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Observer, sinkT } from "./observer";

export const reduce: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createReduceOperator(
  { ...fromArrayT, ...liftT, ...sinkT },
  class ReducerObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
);
