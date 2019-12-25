import { ObservableOperatorLike } from "./interfaces";
import { concat, fromArray } from "@reactive-js/rx";

export function startWith<T>(
  value: T,
  ...values: T[]
): ObservableOperatorLike<T, T>;
export function startWith<T>(...values: T[]): ObservableOperatorLike<T, T> {
  return obs => concat(fromArray(values), obs);
}