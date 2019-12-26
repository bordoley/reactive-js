import { concat } from "./concat";
import { fromArray } from "./fromArray";
import { ObservableOperatorLike } from "./interfaces";

export function endWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function endWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(obs, fromArray(values));
}
