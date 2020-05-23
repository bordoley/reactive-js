import { concat } from "./concat.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableOperator } from "./interfaces.ts";

/**
 * Returns an EnumerableLike that yields the values followed by items from the source.
 */
export function startWith<T>(
  value: T,
  ...values: readonly T[]
): EnumerableOperator<T, T>;
export function startWith<T>(
  ...values: readonly T[]
): EnumerableOperator<T, T> {
  return obs => concat(fromArray<T>()(values), obs);
}
