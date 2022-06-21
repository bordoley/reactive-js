import { Keep } from "../container";
import { Predicate } from "../functions";
import { RunnableLike, RunnableOperator } from "../runnable";
import { createKeepOperator } from "../sink";
import { liftT } from "./lift";
import { Sink } from "./sinks";

export const keep: <T>(predicate: Predicate<T>) => RunnableOperator<T, T> =
  createKeepOperator(
    liftT,
    class KeepSink<T> extends Sink<T> {
      constructor(
        readonly delegate: Sink<T>,
        readonly predicate: Predicate<T>,
      ) {
        super();
      }
    },
  );

export const keepT: Keep<RunnableLike<unknown>> = {
  keep,
};
