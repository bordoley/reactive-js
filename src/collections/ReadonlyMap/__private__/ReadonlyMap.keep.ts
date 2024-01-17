import { Map, Map_set } from "../../../__internal__/constants.js";
import { Function2, newInstance } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_keep: ReadonlyMap.Signature["keep"] =
  <T, TKey extends ReadonlyMap.TKeyBase>(
    predicate: Function2<T, TKey, boolean>,
  ) =>
  (map: ReadonlyMap<TKey, T>) => {
    const result = newInstance(Map<TKey, T>);

    for (let [key, value] of map) {
      if (predicate(value, key)) {
        result[Map_set](key, value);
      }
    }

    return result;
  };

export default ReadonlyMap_keep;
