import { clampPositiveNonZeroInteger } from "../../__internal__/math.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_takeFirst: ReadonlyArray.Signature["takeFirst"] = <
  T,
>(options?: {
  readonly count?: number;
}) => {
  const count = clampPositiveNonZeroInteger(options?.count ?? 1);

  return (arr: ReadonlyArray<T>) =>
    count > arr.length ? arr : arr.slice(0, count);
};
export default ReadonlyArray_takeFirst;
