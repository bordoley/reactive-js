import { KeyedContainers, ReadonlyMapContainer } from "../../containers.js";
import { Function2 } from "../../functions.js";

const ReadonlyMap_mapWithKey: KeyedContainers.TypeClass<ReadonlyMapContainer>["mapWithKey"] =

    <
      TA,
      TB,
      TKey extends KeyedContainers.KeyOf<ReadonlyMapContainer> = KeyedContainers.KeyOf<ReadonlyMapContainer>,
    >(
      selector: Function2<TA, TKey, TB>,
    ) =>
    (map: ReadonlyMap<TKey, TA>): ReadonlyMap<TKey, TB> => {
      const result = new Map<TKey, TB>();

      for (let [key, value] of map) {
        result.set(key, selector(value, key));
      }

      return result;
    };

export default ReadonlyMap_mapWithKey;
