import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_skipFirst: ReadonlyArray.Signature["skipFirst"] = <
  T,
>(options?: {
  readonly count?: number;
}) => {
  const count = clampPositiveNonZeroInteger(options?.count ?? 1);

  return (arr: ReadonlyArray<T>) =>
    count >= arr.length ? [] : arr.slice(count, arr.length - count);
};
export default ReadonlyArray_skipFirst;
