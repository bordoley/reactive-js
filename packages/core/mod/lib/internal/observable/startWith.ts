import { concat } from "./concat.ts";
import { fromArray } from "./fromArray.ts";
import { ObservableFunction } from "./interfaces.ts";

/**
 * Returns an `ObservableLike` that emits the values specified as arguments,
 * concatenated with items from the source.
 */
export function startWith<T>(
  value: T,
  ...values: T[]
): ObservableFunction<T, T>;
export function startWith<T>(...values: T[]): ObservableFunction<T, T> {
  return obs => concat(fromArray()(values), obs);
}
