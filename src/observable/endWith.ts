import { ObservableOperator } from "../observable";
import { concatWith } from "./concat";
import { fromArray } from "./fromArray";

/**
 * Returns an `ObservableLike` that emits items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(
  value: T,
  ...values: readonly T[]
): ObservableOperator<T, T>;
export function endWith<T>(...values: readonly T[]): ObservableOperator<T, T> {
  return concatWith(fromArray()(values));
}
