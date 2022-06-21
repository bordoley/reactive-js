import { ObservableOperator } from "../observable";
import { Option } from "../option";
import { createPairwiseOperator } from "../sink";
import { liftT } from "./lift";
import { Observer } from "./observer";

export const pairwise: <T>() => ObservableOperator<T, [Option<T>, T]> =
  createPairwiseOperator(
    liftT,
    class PairwiseObserver<T> extends Observer<T> {
      prev: Option<T>;
      hasPrev = false;

      constructor(readonly delegate: Observer<[Option<T>, T]>) {
        super(delegate);
      }
    },
  );
