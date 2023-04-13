import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1, Predicate } from "../../../functions.js";
import {
  Keep,
  KeyOf,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_keep: Keep<ReadonlyObjectMapLike>["keep"] =
  <T, TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>>(
    predicate: Predicate<T>,
  ): Function1<
    ReadonlyObjectMapLike<T, TKey>,
    ReadonlyObjectMapLike<T, TKey>
  > =>
  (obj: ReadonlyObjectMapLike<T, TKey>): ReadonlyObjectMapLike<T, TKey> => {
    const result: Record<TKey, T> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        const v: T = obj[key as TKey] as T;
        if (predicate(v)) {
          result[key as TKey] = v;
        }
      }
    }
    return result;
  };

export default ReadonlyObjectMap_keep;
