import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1, Function2 } from "../../../functions.js";
import {
  KeepWithKey,
  KeyOf,
  ReadonlyRecordLike,
} from "../../../keyed-containers.js";

const ReadonlyRecord_keepWithKey: KeepWithKey<ReadonlyRecordLike>["keepWithKey"] =

    <T, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
      predicate: Function2<T, TKey, boolean>,
    ): Function1<ReadonlyRecordLike<TKey, T>, ReadonlyRecordLike<TKey, T>> =>
    (obj: ReadonlyRecordLike<TKey, T>): ReadonlyRecordLike<TKey, T> => {
      const result: Record<TKey, T> = create(null);

      for (const key in obj) {
        if (hasOwn(obj, key)) {
          const v = obj[key as TKey];
          if (predicate(v, key as TKey)) {
            result[key as TKey] = v;
          }
        }
      }
      return result;
    };

export default ReadonlyRecord_keepWithKey;
