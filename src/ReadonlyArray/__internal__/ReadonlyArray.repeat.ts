import { MAX_SAFE_INTEGER } from "../../__internal__/constants.js";
import { Predicate, isFunction } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_repeat: ReadonlyArray.Signature["repeat"] =
  <T>(countOrPredicate: number | Predicate<number> = MAX_SAFE_INTEGER) =>
  (arr: ReadonlyArray<T>) => {
    let arrays: (readonly T[])[] = [];
    if (isFunction(countOrPredicate)) {
      for (let i = 0; i === 0 || countOrPredicate(0); i++) {
        arrays.push(arr);
      }
    } else {
      for (let i = 0; i < countOrPredicate; i++) {
        arrays.push(arr);
      }
    }

    return arrays.flat(1);
  };

export default ReadonlyArray_repeat;
