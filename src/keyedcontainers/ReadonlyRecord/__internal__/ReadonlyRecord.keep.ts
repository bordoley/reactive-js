import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1, Predicate } from "../../../functions.js";
import { Keep, KeyOf, ReadonlyRecordLike } from "../../../keyedcontainers.js";

const ReadonlyRecord_keep: Keep<ReadonlyRecordLike>["keep"] =
  <T, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
    predicate: Predicate<T>,
  ): Function1<ReadonlyRecordLike<TKey, T>, ReadonlyRecordLike<TKey, T>> =>
  (obj: ReadonlyRecordLike<TKey, T>): ReadonlyRecordLike<TKey, T> => {
    const result: Record<TKey, T> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        const v: T = obj[key as TKey];
        if (predicate(v)) {
          result[key as TKey] = v;
        }
      }
    }
    return result;
  };

export default ReadonlyRecord_keep;
