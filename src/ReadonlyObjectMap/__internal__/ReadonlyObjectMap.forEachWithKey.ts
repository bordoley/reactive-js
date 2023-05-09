import { hasOwn } from "../../__internal__/Object.js";
import { ReadonlyObjectMapContainer } from "../../containers.js";
import { Function1, SideEffect2 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_forEachWithKey: ReadonlyObjectMapContainer.TypeClass["forEachWithKey"] =

    <
      T,
      TKey extends ReadonlyObjectMapContainer.TKey = ReadonlyObjectMapContainer.TKey,
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
