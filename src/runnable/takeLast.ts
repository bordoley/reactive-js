import { RunnableOperator } from "../runnable";
import { createTakeLastOperator } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Sink, sink } from "./sinks";

export const takeLast: <T>(options?: {
  readonly count?: number;
}) => RunnableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, lift, sink },
  class TakeLastSink<T> extends Sink<T> {
    readonly last: T[] = [];

    constructor(readonly delegate: Sink<T>, readonly maxCount: number) {
      super();
    }
  },
);
