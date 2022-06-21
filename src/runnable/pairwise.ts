import { Option } from "../option";
import { Sink } from "./sinks";
import { createPairwiseOperator } from "../source";
import { liftT } from "./lift";
import { RunnableOperator } from "../runnable";

export const pairwise: <T>() => RunnableOperator<T, [Option<T>, T]> =
  createPairwiseOperator(
    liftT,
    class PairwiseSink<T> extends Sink<T> {
      prev: Option<T>;
      hasPrev = false;

      constructor(readonly delegate: Sink<[Option<T>, T]>) {
        super();
      }
    },
  );
