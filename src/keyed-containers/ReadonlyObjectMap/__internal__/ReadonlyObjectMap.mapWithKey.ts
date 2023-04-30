import { create, hasOwn } from "../../../__internal__/Object.js";
import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../keyed-containers.js";

const ReadonlyObjectMap_mapWithKey: MapWithKey<ReadonlyObjectMapContainer>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyOf<ReadonlyObjectMapContainer> = KeyOf<ReadonlyObjectMapContainer>,
    >(
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
