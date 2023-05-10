import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { Function2, newInstance } from "../../functions.js";

const ReadonlyMap_keepWithKey: ReadonlyMap.Signature["keepWithKey"] =
  <T, TKey extends ReadonlyMap.TKey>(predicate: Function2<T, TKey, boolean>) =>
  (map: ReadonlyMap<TKey, T>) => {
    const result = newInstance(Map<TKey, T>);

    for (let [key, value] of map) {
      if (predicate(value, key)) {
        result.set(key, value);
      }
    }

    return result;
  };

export default ReadonlyMap_keepWithKey;
