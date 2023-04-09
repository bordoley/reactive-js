import { Function2 } from "../../../functions.js";
import {
  KeyOf,
  MapWithKey,
  ReadonlyMapLike,
} from "../../../keyed-containers.js";

const ReadonlyMap_mapWithKey: MapWithKey<ReadonlyMapLike>["mapWithKey"] =
  <TA, TB, TKey extends KeyOf<ReadonlyMapLike> = KeyOf<ReadonlyMapLike>>(
    mapper: Function2<TA, TKey, TB>,
  ) =>
  (map: ReadonlyMapLike<TA, TKey>): ReadonlyMapLike<TB, TKey> => {
    const result = new Map<TKey, TB>();

    for (let [key, value] of map) {
      result.set(key, mapper(value, key));
    }

    return result;
  };

export default ReadonlyMap_mapWithKey;
