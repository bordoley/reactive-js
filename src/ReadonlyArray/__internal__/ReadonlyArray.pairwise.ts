import { Tuple2, none } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_pairwise: ReadonlyArray.Signature["pairwise"] =
  <T>() =>
  (arr: ReadonlyArray<T>): ReadonlyArray<Tuple2<T, T>> => {
    const result: Tuple2<T, T>[] = [];

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
