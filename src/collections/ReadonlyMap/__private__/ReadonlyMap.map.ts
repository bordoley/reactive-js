import { Map, Map_set } from "../../../__internal__/constants.js";
import { Function2, newInstance } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_map: ReadonlyMap.Signature["map"] =
  <TA, TB, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (map: ReadonlyMap<TKey, TA>): ReadonlyMap<TKey, TB> => {
    const result = newInstance<Map<TKey, TB>>(Map);

    for (const [key, value] of map) {
      result[Map_set](key, selector(value, key));
    }

    return result;
  };

export default ReadonlyMap_map;
