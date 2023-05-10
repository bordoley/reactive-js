import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { hasOwn } from "../../__internal__/Object.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_keySet: ReadonlyObjectMap.Signature["keySet"] =
  <TKey extends ReadonlyObjectMap.TKey = ReadonlyObjectMap.TKey>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>): ReadonlySet<TKey> => {
    const keys = new Set<TKey>();

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        keys.add(key as TKey);
      }
    }
    return keys;
  };

export default ReadonlyObjectMap_keySet;
