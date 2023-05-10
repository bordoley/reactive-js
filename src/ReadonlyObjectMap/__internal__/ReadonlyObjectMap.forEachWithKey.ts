import type * as ReadonlyObjectMap from "../../ReadonlyObjectMap.js";
import { hasOwn } from "../../__internal__/Object.js";
import { Function1, SideEffect2 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_forEachWithKey: ReadonlyObjectMap.Signature["forEachWithKey"] =

    <T, TKey extends ReadonlyObjectMap.TKey = ReadonlyObjectMap.TKey>(
      effect: SideEffect2<T, TKey>,
    ): Function1<
      ReadonlyObjectMapLike<TKey, T>,
      ReadonlyObjectMapLike<TKey, T>
    > =>
    record => {
      for (const key in record) {
        if (hasOwn(record, key)) {
          const v: T = record[key as TKey] as T;

          effect(v, key as TKey);
        }
      }
      return record;
    };

export default ReadonlyObjectMap_forEachWithKey;
