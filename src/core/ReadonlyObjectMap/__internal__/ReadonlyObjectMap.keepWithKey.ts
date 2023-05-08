import { create, hasOwn } from "../../../__internal__/Object.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import { Function1, Function2 } from "../../../functions.js";

const ReadonlyObjectMap_keepWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keepWithKey"] =

    <
      T,
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ): Function1<
      ReadonlyObjectMapLike<TKey, T>,
      ReadonlyObjectMapLike<TKey, T>
    > =>
    (obj: ReadonlyObjectMapLike<TKey, T>): ReadonlyObjectMapLike<TKey, T> => {
      const result: Record<TKey, T> = create(null);

      for (const key in obj) {
        if (hasOwn(obj, key)) {
          const v = obj[key as TKey] as T;
          if (predicate(v, key as TKey)) {
            result[key as TKey] = v;
          }
        }
      }
      return result;
    };

export default ReadonlyObjectMap_keepWithKey;
