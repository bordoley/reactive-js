import { ObservableOperator } from "../observable";
import { concat } from "./concat";
import { fromArray } from "./fromArray";

/**
 * Returns an `ObservableLike` that emits the values specified as arguments,
 * concatenated with items from the source.
 */
export function startWith<T>(
  value: T,
  ...values: readonly T[]
): ObservableOperator<T, T>;
export function startWith<T>(
  ...values: readonly T[]
): ObservableOperator<T, T> {
  return obs => concat(fromArray()(values), obs);
}
