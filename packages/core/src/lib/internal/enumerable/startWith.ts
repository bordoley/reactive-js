import { concat } from "./concat";
import { fromArray } from "./fromArray";
import { EnumerableOperator } from "./interfaces";

/**
 * Returns an EnumerableLike that yields the values followed by items from the source.
 */
export function startWith<T>(
  value: T,
  ...values: T[]
): EnumerableOperator<T, T>;
export function startWith<T>(...values: T[]): EnumerableOperator<T, T> {
  return obs => concat(fromArray<T>()(values), obs);
}
