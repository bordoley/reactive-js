import { Keep } from "../container";
import { Predicate } from "../functions";
import { ObservableLike, ObservableOperator } from "../observable";
import { createKeepOperator } from "../source";
import { liftT } from "./lift";
import { Observer } from "./observer";

export const keep: <T>(predicate: Predicate<T>) => ObservableOperator<T, T> =
  createKeepOperator(
    liftT,
    class KeepObserver<T> extends Observer<T> {
      constructor(
        readonly delegate: Observer<T>,
        readonly predicate: Predicate<T>,
      ) {
        super(delegate);
      }
    },
  );

export const keepT: Keep<ObservableLike<unknown>> = {
  keep,
};
