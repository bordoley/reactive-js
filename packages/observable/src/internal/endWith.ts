import { ObservableOperatorLike } from "./interfaces";
import { concat, fromArray } from "@reactive-js/rx";

export function endWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function endWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(obs, fromArray(values));
}
