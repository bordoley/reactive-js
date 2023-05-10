import { Predicate } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_takeWhile: ReadonlyArray.Signature["takeWhile"] =
  <T>(
    predicate: Predicate<T>,
    options?: {
      readonly inclusive?: boolean | undefined;
    },
  ) =>
  (arr: ReadonlyArray<T>) => {
    const inclusive = options?.inclusive ?? false;

    const result: T[] = [];
    for (let i = 0; i < arr.length; i++) {
      const v = arr[i];

      if (predicate(v)) {
        result.push(v);
        continue;
      }

      if (inclusive) {
        result.push(v);
      }

      break;
    }

    return result;
  };

export default ReadonlyArray_takeWhile;
