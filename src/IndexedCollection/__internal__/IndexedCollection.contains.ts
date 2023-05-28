import { Equality, isNone } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_contains: ReadonlyArray.Signature["contains"] =
  <T>(
    value: T,
    options?: {
      readonly equality?: Equality<T>;
    },
  ) =>
  (arr: ReadonlyArray<T>) => {
    const equality = options?.equality;

    if (isNone(equality)) {
      return arr.includes(value);
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (equality(value, arr[i])) {
          return true;
        }
      }
      return false;
    }
  };

export default ReadonlyArray_contains;
