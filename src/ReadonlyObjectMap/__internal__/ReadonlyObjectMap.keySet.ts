import { hasOwn } from "../../__internal__/Object.js";
import { ReadonlyObjectMapContainer } from "../../containers.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_keySet: ReadonlyObjectMapContainer.TypeClass["keySet"] =

    <
      TKey extends ReadonlyObjectMapContainer.TKey = ReadonlyObjectMapContainer.TKey,
    >() =>
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
