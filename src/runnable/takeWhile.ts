import { Predicate } from "../functions";
import { RunnableOperator } from "../runnable";
import { createTakeWhileOperator } from "../source";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => RunnableOperator<T, T> = createTakeWhileOperator(
  liftT,
  class TakeWhileSink<T> extends Sink<T> {
    constructor(
      readonly delegate: Sink<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super();
    }
  },
);
