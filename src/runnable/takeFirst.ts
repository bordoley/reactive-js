import { RunnableOperator } from "../runnable";
import { createTakeFirstOperator } from "../source";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const takeFirst: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createTakeFirstOperator(
  { ...fromArrayT, ...liftT },
  class TakeFirstSink<T> extends Sink<T> {
    count = 0;

    constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
      super();
    }
  },
);
