import { Equality } from "../functions";
import { Option, none } from "../option";
import { RunnableOperator } from "../runnable";
import { createDistinctUntilChanged } from "../source";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => RunnableOperator<T, T> = createDistinctUntilChanged(
  liftT,
  class DistinctUntilChangedSink<T> extends Sink<T> {
    prev: Option<T> = none;
    hasValue = false;

    constructor(readonly delegate: Sink<T>, readonly equality: Equality<T>) {
      super();
    }
  },
);
