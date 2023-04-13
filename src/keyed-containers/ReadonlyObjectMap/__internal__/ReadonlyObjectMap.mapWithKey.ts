import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_mapWithKey: MapWithKey<ReadonlyObjectMapLike>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyOf<ReadonlyObjectMapLike> = KeyOf<ReadonlyObjectMapLike>,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (obj: ReadonlyObjectMapLike<TA, TKey>): ReadonlyObjectMapLike<TB, TKey> => {
      const result: Record<TKey, TB> = create(null);

      for (const key in obj) {
        if (hasOwn(obj, key)) {
          result[key as TKey] = selector(obj[key as TKey] as TA, key as TKey);
        }
      }
      return result;
    };

export default ReadonlyObjectMap_mapWithKey;
