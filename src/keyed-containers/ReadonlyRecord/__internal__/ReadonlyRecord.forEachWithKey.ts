import { hasOwn } from "../../../__internal__/Object.js";
import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyRecordLike,
} from "../../../keyed-containers.js";

const ReadonlyRecord_forEachWithKey: ForEachWithKey<ReadonlyRecordLike>["forEachWithKey"] =

    <T, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
      effect: SideEffect2<T, TKey>,
    ): Function1<ReadonlyRecordLike<TKey, T>, ReadonlyRecordLike<TKey, T>> =>
    record => {
      for (const key in record) {
        if (hasOwn(record, key)) {
          const v: T = record[key as TKey];

          effect(v, key as TKey);
        }
      }
      return record;
    };

export default ReadonlyRecord_forEachWithKey;
