import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyOf,
  KeySet,
  ReadonlyObjectMapContainerLike,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_keySet: KeySet<ReadonlyObjectMapContainerLike>["keySet"] =

    <
      TKey extends KeyOf<ReadonlyObjectMapContainerLike> = KeyOf<ReadonlyObjectMapContainerLike>,
    >() =>
    (obj: ReadonlyObjectMapLike<unknown, TKey>): ReadonlySet<TKey> => {
      const keys = new Set<TKey>();

      for (const key in obj) {
        if (hasOwn(obj, key)) {
          keys.add(key as TKey);
        }
      }
      return keys;
    };

export default ReadonlyObjectMap_keySet;
