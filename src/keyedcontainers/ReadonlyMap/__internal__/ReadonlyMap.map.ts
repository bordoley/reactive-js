import { Function1 } from "../../../functions.js";
import { KeyOf, Map, ReadonlyMapLike } from "../../../keyedcontainers.js";

const ReadonlyMap_map: Map<ReadonlyMapLike>["map"] =
  <TA, TB, TKey extends KeyOf<ReadonlyMapLike> = KeyOf<ReadonlyMapLike>>(
    mapper: Function1<TA, TB>,
  ) =>
  (map: ReadonlyMapLike<TKey, TA>): ReadonlyMapLike<TKey, TB> => {
    const result = new Map<TKey, TB>();

    for (let [key, value] of map) {
      result.set(key, mapper(value));
    }

    return result;
  };

export default ReadonlyMap_map;
