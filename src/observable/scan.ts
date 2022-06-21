import { Factory, Reducer } from "../functions";
import { ObservableOperator } from "../observable";
import { Observer } from "./observer";
import { createScanOperator } from "../source";
import { liftT } from "./lift";

export const scan: <T, TAcc>(
  reducer: Reducer<T, TAcc>,
  initialValue: Factory<TAcc>,
) => ObservableOperator<T, TAcc> = createScanOperator(
  liftT,
  class ScanObserver<T, TAcc> extends Observer<T> {
    constructor(
      readonly delegate: Observer<TAcc>,
      readonly reducer: Reducer<T, TAcc>,
      public acc: TAcc,
    ) {
      super(delegate);
    }
  },
);
