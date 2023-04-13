import { hasOwn } from "../../../__internal__/Object.js";
import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_forEachWithKey: ForEachWithKey<ReadonlyObjectMapLike>["forEachWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>,
    >(
      effect: SideEffect2<T, TKey>,
    ): Function1<
      ReadonlyObjectMapLike<T, TKey>,
      ReadonlyObjectMapLike<T, TKey>
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
