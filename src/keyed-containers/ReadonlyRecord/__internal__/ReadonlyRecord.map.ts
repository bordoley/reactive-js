import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1 } from "../../../functions.js";
import { KeyOf, Map, ReadonlyRecordLike } from "../../../keyed-containers.js";

const ReadonlyRecord_map: Map<ReadonlyRecordLike>["map"] =
  <TA, TB, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
    mapper: Function1<TA, TB>,
  ) =>
  (obj: ReadonlyRecordLike<TKey, TA>): ReadonlyRecordLike<TKey, TB> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key as TKey] = mapper(obj[key as TKey] as TA);
      }
    }
    return result;
  };

export default ReadonlyRecord_map;
