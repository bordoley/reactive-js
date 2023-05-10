import { none } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_pairwise: ReadonlyArray.Signature["pairwise"] =
  <T>() =>
  (arr: ReadonlyArray<T>): ReadonlyArray<readonly [T, T]> => {
    const result: (readonly [T, T])[] = [];

    let prev: T = none as T;
    for (let i = 0; i < arr.length; i++) {
      if (i === 0) {
        prev = arr[i];
        continue;
      }

      const next = arr[i];
      result.push([prev, next]);
      prev = next;
    }

    return result;
  };

export default ReadonlyArray_pairwise;
