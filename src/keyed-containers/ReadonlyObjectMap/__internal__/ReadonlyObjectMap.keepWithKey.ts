import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1, Function2 } from "../../../functions.js";
import {
  KeepWithKey,
  KeyOf,
  ReadonlyObjectMapContainerLike,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_keepWithKey: KeepWithKey<ReadonlyObjectMapContainerLike>["keepWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyObjectMapContainerLike> = KeyOf<ReadonlyObjectMapContainerLike>,
    >(
      predicate: Function2<T, TKey, boolean>,
    ): Function1<
      ReadonlyObjectMapLike<T, TKey>,
      ReadonlyObjectMapLike<T, TKey>
    > =>
    (obj: ReadonlyObjectMapLike<T, TKey>): ReadonlyObjectMapLike<T, TKey> => {
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
