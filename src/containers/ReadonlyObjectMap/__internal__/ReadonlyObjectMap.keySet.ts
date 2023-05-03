import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyOf,
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../containers.js";

const ReadonlyObjectMap_keySet: KeyedContainer.KeySet<ReadonlyObjectMapContainer>["keySet"] =

    <
      TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
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
