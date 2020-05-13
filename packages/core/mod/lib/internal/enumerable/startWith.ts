import { concat } from "./concat.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableFunction } from "./interfaces.ts";

/**
 * Returns an EnumerableLike that yields the values followed by items from the source.
 */
export function startWith<T>(
  value: T,
  ...values: T[]
): EnumerableFunction<T, T>;
export function startWith<T>(...values: T[]): EnumerableFunction<T, T> {
  return obs => concat(fromArray(values), obs);
}
