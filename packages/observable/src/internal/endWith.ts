import { concat } from "./concat";
import { fromArray } from "./fromArray";
import { ObservableOperator } from "./interfaces";

/**
 * Returns an `ObservableLike` that emits items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(
  value: T,
  ...values: T[]
): ObservableOperator<T, T>;
export function endWith<T>(...values: T[]): ObservableOperator<T, T> {
  return obs => concat(obs, fromArray(values));
}
