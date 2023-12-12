import { isNone, newInstance } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_union: ReadonlyMap.Signature["union"] =
  <TKey extends string | symbol, T>(m2: ReadonlyMap<TKey, T>) =>
  (m1: ReadonlyMap<TKey, T>) => {
    const result: Map<TKey, T> = newInstance<Map<TKey, T>>(Map);

    for (let [key, value] of m1) {
      result.set(key, value);
    }

    for (let [key, value] of m2) {
      if (isNone(result.get(key as TKey))) {
        result.set(key, value);
      }
    }

    return result;
  };

export default ReadonlyMap_union;
