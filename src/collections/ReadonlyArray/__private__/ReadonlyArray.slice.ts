import parseArrayBounds from "../../../__internal__/parseArrayBounds.js";
import type * as ReadonlyArray from "../../ReadonlyArray.js";

const ReadonlyArray_slice: ReadonlyArray.Signature["slice"] =
  <T>(options?: { count?: number; start?: number }) =>
  (arr: readonly T[]) => {
    const { start, count } = parseArrayBounds(arr, options);
    return start === 0 && count === arr.length
      ? arr
      : count >= 0
      ? arr.slice(start, count + start)
      : arr.slice(start + count + 1, start + 1).reverse();
  };

export default ReadonlyArray_slice;
