import { create, hasOwn } from "../../../__internal__/Object.js";
import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../../../core.js";
import { Function2 } from "../../../functions.js";

const ReadonlyObjectMap_mapWithKey: KeyedContainer.MapWithKey<ReadonlyObjectMapContainer>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyedContainer.KeyOf<ReadonlyObjectMapContainer> = KeyedContainer.KeyOf<ReadonlyObjectMapContainer>,
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
