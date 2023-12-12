import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { isNone } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_union: ReadonlyObjectMap.Signature["union"] =
  <TKey extends string | symbol, T>(m2: ReadonlyObjectMapLike<TKey, T>) =>
  (m1: ReadonlyObjectMapLike<TKey, T>) => {
    const result: Record<TKey, T> = Obj.create(null);

    for (const key in m1) {
      if (Obj.hasOwn(m1, key)) {
        result[key as TKey] = m1[key as TKey] as T;
      }
    }

    for (const key in m2) {
      if (Obj.hasOwn(m2, key) && isNone(result[key as TKey])) {
        result[key as TKey] = m2[key as TKey] as T;
      }
    }

    return result;
  };

export default ReadonlyObjectMap_union;
