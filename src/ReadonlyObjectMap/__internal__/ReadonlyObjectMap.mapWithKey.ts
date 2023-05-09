import { create, hasOwn } from "../../__internal__/Object.js";
import {
  KeyedContainers,
  ReadonlyObjectMapContainer,
} from "../../containers.js";
import { Function2 } from "../../functions.js";
import { ReadonlyObjectMapLike } from "../../types.js";

const ReadonlyObjectMap_mapWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyedContainers.KeyOf<ReadonlyObjectMapContainer> = KeyedContainers.KeyOf<ReadonlyObjectMapContainer>,
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
