import { clampPositiveInteger } from "../../__internal__/math.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_skipFirst: ReadonlyArray.Signature["skipFirst"] = <
  T,
>(options?: {
  readonly count?: number;
}) => {
  const count = clampPositiveInteger(options?.count ?? 1);

  return (arr: ReadonlyArray<T>) =>
    count >= arr.length ? [] : arr.slice(count, arr.length);
};
export default ReadonlyArray_skipFirst;
