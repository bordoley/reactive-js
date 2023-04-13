import { hasOwn } from "../../../__internal__/Object.js";
import { ReadonlySetLike } from "../../../containers.js";
import {
  KeyOf,
  KeySet,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_keySet: KeySet<ReadonlyObjectMapLike>["keySet"] =
  <
    TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>,
  >() =>
  (obj: ReadonlyObjectMapLike<unknown, TKey>): ReadonlySetLike<TKey> => {
    const keys = new Set<TKey>();

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        keys.add(key as TKey);
      }
    }
    return keys;
  };

export default ReadonlyObjectMap_keySet;
