import { RunnableOperator } from "../runnable";
import { createTakeLastOperator } from "../sink";
import { fromArrayT } from "./fromArray";
import { liftT } from "./lift";
import { Sink, sink } from "./sinks";

export const takeLast: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, ...liftT, sink },
  class TakeLastSink<T> extends Sink<T> {
    readonly last: T[] = [];

    constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
      super();
    }
  },
);
