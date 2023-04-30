import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyMapContainer,
} from "../../../keyed-containers.js";

const ReadonlyMap_mapWithKey: MapWithKey<ReadonlyMapContainer>["mapWithKey"] =
  <
    TA,
    TB,
    TKey extends KeyOf<ReadonlyMapContainer> = KeyOf<ReadonlyMapContainer>,
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
