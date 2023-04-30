import { hasOwn } from "../../../__internal__/Object.js";
import { Function1, SideEffect2 } from "../../../functions.js";
import {
  ForEachWithKey,
  KeyOf,
  ReadonlyObjectMapContainerLike,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_forEachWithKey: ForEachWithKey<ReadonlyObjectMapContainerLike>["forEachWithKey"] =

    <
      T,
      TKey extends KeyOf<ReadonlyObjectMapContainerLike> = KeyOf<ReadonlyObjectMapContainerLike>,
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
