import { Map, Map_set } from "../../../__internal__/constants.js";
import { Tuple2, newInstance } from "../../../functions.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_fromEntries: ReadonlyMap.Signature["fromEntries"] =
  <T, TKey extends ReadonlyMap.TKeyBase>() =>
  (entries: Iterable<Tuple2<TKey, T>>) => {
    const map = newInstance(Map<TKey, T>);

    for (const [key, value] of entries) {
      map[Map_set](key, value);
    }

    return map;
  };

export default ReadonlyMap_fromEntries;
