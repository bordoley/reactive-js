import { Function1 } from "../../../functions.js";
import { KeyOf, Map, ReadonlyMapLike } from "../../../keyed-containers.js";

const ReadonlyMap_map: Map<ReadonlyMapLike>["map"] =
  <TA, TB, TKey extends KeyOf<ReadonlyMapLike> = KeyOf<ReadonlyMapLike>>(
    selector: Function1<TA, TB>,
  ) =>
  (map: ReadonlyMapLike<TA, TKey>): ReadonlyMapLike<TB, TKey> => {
    const result = new Map<TKey, TB>();

    for (let [key, value] of map) {
      result.set(key, selector(value));
    }

    return result;
  };

export default ReadonlyMap_map;
