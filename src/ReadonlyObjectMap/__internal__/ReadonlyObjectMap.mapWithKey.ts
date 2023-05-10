import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { create, hasOwn } from "../../__internal__/Object.js";
import { Function2 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_mapWithKey: ReadonlyObjectMap.Signature["mapWithKey"] =
  <TA, TB, TKey extends ReadonlyObjectMap.TKey = ReadonlyObjectMap.TKey>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (obj: ReadonlyObjectMapLike<TKey, TA>): ReadonlyObjectMapLike<TKey, TB> => {
    const result: Record<TKey, TB> = create(null);

    for (const key in obj) {
      if (hasOwn(obj, key)) {
        result[key as TKey] = selector(obj[key as TKey] as TA, key as TKey);
      }
    }
    return result;
  };

export default ReadonlyObjectMap_mapWithKey;
