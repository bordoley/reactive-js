import { hasOwn } from "../../../__internal__/Object.js";
import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_forEachWithKey: ForEachWithKey<ReadonlyObjectMapContainer>["forEachWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
    >(
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
