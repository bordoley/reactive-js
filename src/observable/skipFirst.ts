import { ObservableOperator } from "../observable";
import { createSkipFirstOperator } from "../source";
import { liftT } from "./lift";
import { Observer } from "./observer";

/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
export const skipFirst: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = createSkipFirstOperator(
  liftT,
  class SkipFirstObserver<T> extends Observer<T> {
    count = 0;

    constructor(readonly delegate: Observer<T>, readonly skipCount: number) {
      super(delegate);
    }
  },
);
