import { ObservableOperator } from "../observable";
import { createTakeLastOperator } from "../sink";
import { fromArrayT } from "./fromArray";
import { lift } from "./lift";
import { Observer, sink } from "./observer";

class TakeLastObserver<T> extends Observer<T> {
  readonly last: T[] = [];

  constructor(readonly delegate: Observer<T>, readonly maxCount: number) {
    super(delegate);
  }
}

/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
export const takeLast: <T>(options?: {
  readonly count?: number;
}) => ObservableOperator<T, T> = createTakeLastOperator(
  { ...fromArrayT, lift, sink },
  TakeLastObserver,
);
