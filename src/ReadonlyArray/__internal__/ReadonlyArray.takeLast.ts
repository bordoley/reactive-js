import { clampPositiveInteger } from "../../__internal__/math.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_takeLast: ReadonlyArray.Signature["takeLast"] = <
  T,
>(options?: {
  readonly count?: number;
}) => {
  const count = clampPositiveInteger(options?.count ?? 1);

  return (arr: ReadonlyArray<T>) =>
    count > arr.length ? arr : arr.slice(arr.length - count, arr.length);
};
export default ReadonlyArray_takeLast;
