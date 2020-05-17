import { concatWith } from "./concat";
import { fromArray } from "./fromArray";
import { EnumerableOperator } from "./interfaces";
import { pipe } from "../../functions";

/**
 * Returns an EnumerableLike that yields items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(value: T, ...values: T[]): EnumerableOperator<T, T>;
export function endWith<T>(...values: T[]): EnumerableOperator<T, T> {
  return pipe(values, fromArray(), concatWith);
}
