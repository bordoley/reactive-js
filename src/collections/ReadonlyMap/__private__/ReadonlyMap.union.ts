import { Map, Map_set } from "../../../__internal__/constants.js";
import { newInstance } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_union: ReadonlyMap.Signature["union"] =
  <TKey extends string | symbol, T>(m2: ReadonlyMap<TKey, T>) =>
  (m1: ReadonlyMap<TKey, T>) => {
    const result: Map<TKey, T> = newInstance<Map<TKey, T>>(Map);

    for (const [key, value] of m1) {
      result[Map_set](key, value);
    }

    for (const [key, value] of m2) {
      result[Map_set](key, value);
    }

    return result;
  };

export default ReadonlyMap_union;
