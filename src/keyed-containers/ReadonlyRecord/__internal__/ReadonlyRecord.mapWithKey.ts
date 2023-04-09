import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyRecordLike,
} from "../../../keyed-containers.js";

const ReadonlyRecord_mapWithKey: MapWithKey<ReadonlyRecordLike>["mapWithKey"] =
  <TA, TB, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
    mapper: Function2<TA, TKey, TB>,
  ) =>
  (obj: ReadonlyRecordLike<TA, TKey>): ReadonlyRecordLike<TB, TKey> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key as TKey] = mapper(obj[key as TKey] as TA, key as TKey);
      }
    }
    return result;
  };

export default ReadonlyRecord_mapWithKey;
