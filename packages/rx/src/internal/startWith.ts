import { concat } from "./concat";
import { fromArray } from "./fromArray";
import { ObservableOperatorLike } from "./interfaces";

export function startWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function startWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(fromArray(values), obs);
}
