import { concatWith } from "./concat.ts";
import { fromArray } from "./fromArray.ts";
import { EnumerableFunction } from "./interfaces.ts";
import { pipe } from "../../functions.ts";

/**
 * Returns an EnumerableLike that yields items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(value: T, ...values: T[]): EnumerableFunction<T, T>;
export function endWith<T>(...values: T[]): EnumerableFunction<T, T> {
  return pipe(values, fromArray(), concatWith);
}
