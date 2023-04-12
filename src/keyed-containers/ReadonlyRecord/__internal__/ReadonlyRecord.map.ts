import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function1 } from "../../../functions.js";
import { KeyOf, Map, ReadonlyRecordLike } from "../../../keyed-containers.js";

const ReadonlyRecord_map: Map<ReadonlyRecordLike>["map"] =
  <TA, TB, TKey extends KeyOf<ReadonlyRecordLike> = KeyOf<ReadonlyRecordLike>>(
    selector: Function1<TA, TB>,
  ) =>
  (obj: ReadonlyRecordLike<TA, TKey>): ReadonlyRecordLike<TB, TKey> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key as TKey] = selector(obj[key as TKey] as TA);
      }
    }
    return result;
  };

export default ReadonlyRecord_map;
