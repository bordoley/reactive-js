import { hasOwn } from "../../../__internal__/Object.js";
import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import { Function1, SideEffect2 } from "../../../functions.js";

const ReadonlyObjectMap_forEachWithKey: KeyedContainer.ForEachWithKey<ReadonlyObjectMapContainer>["forEachWithKey"] =

    <
      T,
      TKey extends KeyedContainer.KeyOf<ReadonlyObjectMapContainer> = KeyedContainer.KeyOf<ReadonlyObjectMapContainer>,
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
