import * as Obj from "../../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keySet: ReadonlyObjectMap.Signature["keySet"] =
  <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>): ReadonlySet<TKey> => {
    const keys = new Set<TKey>();

    for (const key in obj) {
      if (Obj.hasOwn(obj, key)) {
        keys.add(key as TKey);
      }
    }
    return keys;
  };

export default ReadonlyObjectMap_keySet;
