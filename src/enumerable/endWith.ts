import { EnumerableOperator } from "../enumerable";
import { pipe } from "../functions";
import { concatWith } from "./concat";
import { fromArray } from "./fromArray";

/**
 * Returns an EnumerableLike that yields items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(
  value: T,
  ...values: readonly T[]
): EnumerableOperator<T, T>;
export function endWith<T>(...values: readonly T[]): EnumerableOperator<T, T> {
  return pipe(values, fromArray(), concatWith);
}
