import { Option } from "../option";
import { RunnableOperator } from "../runnable";
import { createPairwiseOperator } from "../source";
import { liftT } from "./lift";
import { Sink } from "./sinks";

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
