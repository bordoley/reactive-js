import { Equality, none, strictEquality } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_distinctUntilChanged: ReadonlyArray.Signature["distinctUntilChanged"] =

    <T>(options?: { readonly equality?: Equality<T> }) =>
    (arr: ReadonlyArray<T>) => {
      const equality = options?.equality ?? strictEquality;

      const result: T[] = [];

      let last: T = none as T;

      for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
          last = arr[i];
          result.push(last);
          continue;
        }

        const next = arr[i];
        if (equality(next, last)) {
          continue;
        }
        last = next;
        result.push(next);
      }

      return result;
    };
export default ReadonlyArray_distinctUntilChanged;
