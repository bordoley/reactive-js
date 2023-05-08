import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";

const ReadonlyObjectMap_keySet: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keySet"] =

    <
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
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
