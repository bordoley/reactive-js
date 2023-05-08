import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";

const ReadonlyObjectMap_keySet: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keySet"] =

    <
      TKey extends KeyedContainer.KeyOf<ReadonlyObjectMapContainer> = KeyedContainer.KeyOf<ReadonlyObjectMapContainer>,
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
