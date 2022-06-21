import { Equality } from "../functions";
import { ObservableOperator } from "../observable";
import { none, Option } from "../option";
import { createDistinctUntilChangedOperator } from "../source";
import { liftT } from "./lift";
import { Observer } from "./observer";

/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
export const distinctUntilChanged: <T>(options?: {
  readonly equality?: Equality<T>;
}) => ObservableOperator<T, T> = createDistinctUntilChangedOperator(
  liftT,
  class DistinctUntilChangedObserver<T> extends Observer<T> {
    prev: Option<T> = none;
    hasValue = false;

    constructor(
      readonly delegate: Observer<T>,
      readonly equality: Equality<T>,
    ) {
      super(delegate);
    }
  },
);
