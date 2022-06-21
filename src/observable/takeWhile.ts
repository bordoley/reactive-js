import { Predicate } from "../functions";
import { ObservableOperator } from "../observable";
import { createTakeWhileOperator } from "../source";
import { liftT } from "./lift";
import { Observer } from "./observer";

/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
export const takeWhile: <T>(
  predicate: Predicate<T>,
  options?: { readonly inclusive?: boolean },
) => ObservableOperator<T, T> = createTakeWhileOperator(
  liftT,
  class TakeWhileObserver<T> extends Observer<T> {
    constructor(
      readonly delegate: Observer<T>,
      readonly predicate: Predicate<T>,
      readonly inclusive: boolean,
    ) {
      super(delegate);
    }
  },
);
