import { RunnableOperator } from "../runnable";
import { createSkipFirstOperator } from "../sink";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createSkipFirstOperator(
  liftT,
  class SkipFirstSink<T> extends Sink<T> {
    count = 0;

    constructor(readonly delegate: Sink<T>, readonly skipCount: number) {
      super();
    }
  },
);
