import { concatWith } from "./concat";
import { fromArray } from "./fromArray";
import { ObservableFunction } from "./interfaces";

/**
 * Returns an `ObservableLike` that emits items from the source,
 * concatenated with the values specified as arguments.
 */
export function endWith<T>(value: T, ...values: T[]): ObservableFunction<T, T>;
export function endWith<T>(...values: T[]): ObservableFunction<T, T> {
  return concatWith(fromArray()(values));
}
