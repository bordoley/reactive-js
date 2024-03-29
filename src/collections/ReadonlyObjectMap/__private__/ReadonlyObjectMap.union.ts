import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_union: ReadonlyObjectMap.Signature["union"] =
  <TKey extends string, T>(m2: ReadonlyObjectMapLike<TKey, T>) =>
  (m1: ReadonlyObjectMapLike<TKey, T>) => {
    const result = Obj.createObjectMap<TKey, T>();

    for (const key in m1) {
      if (Obj.hasOwn(m1, key)) {
        result[key as TKey] = m1[key as TKey] as T;
      }
    }

    for (const key in m2) {
      if (Obj.hasOwn(m2, key)) {
        result[key as TKey] = m2[key as TKey] as T;
      }
    }

    return result;
  };

export default ReadonlyObjectMap_union;
