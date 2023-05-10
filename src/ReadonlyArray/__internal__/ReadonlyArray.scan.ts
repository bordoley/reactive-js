import { Factory, Reducer } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_scan: ReadonlyArray.Signature["scan"] =
  <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) =>
  (arr: ReadonlyArray<T>) => {
    let acc = initialValue();
    const result: TAcc[] = [];

    for (let i = 0; i < arr.length; i++) {
      const next = arr[i];

      acc = scanner(acc, next);
      result.push(acc);
    }

    return result;
  };

export default ReadonlyArray_scan;
