import { newInstance } from "../../functions.js";
import type * as ReadonlyArray from "./../../ReadonlyArray.js";

const ReadonlyArray_toReadonlyMap: ReadonlyArray.Signature["toReadonlyMap"] =
  <T, TKey extends number>() =>
  (arr: ReadonlyArray<T>) => {
    const map = newInstance<Map<TKey, T>>(Map);
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      map.set(i as TKey, arr[i]);
    }
    return map;
  };

export default ReadonlyArray_toReadonlyMap;
