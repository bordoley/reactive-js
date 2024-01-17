import * as Obj from "../../../__internal__/Object.js";
import { Set, Set_add } from "../../../__internal__/constants.js";
import { ReadonlyObjectMapLike } from "../../../collections.js";
import { newInstance } from "../../../functions.js";
import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";

const ReadonlyObjectMap_keySet: ReadonlyObjectMap.Signature["keySet"] =
  <TKey extends ReadonlyObjectMap.TKeyBase = ReadonlyObjectMap.TKeyBase>() =>
  (obj: ReadonlyObjectMapLike<TKey, unknown>): ReadonlySet<TKey> => {
    const keys = newInstance<Set<TKey>>(Set);

    for (const key in obj) {
      if (Obj.hasOwn(obj, key)) {
        keys[Set_add](key as TKey);
      }
    }
    return keys;
  };

export default ReadonlyObjectMap_keySet;
