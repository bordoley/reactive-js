import { Function2 } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_map: ReadonlyMap.Signature["map"] =
  <TA, TB, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>(
    selector: Function2<TA, TKey, TB>,
  ) =>
  (map: ReadonlyMap<TKey, TA>): ReadonlyMap<TKey, TB> => {
    const result = new Map<TKey, TB>();

    for (let [key, value] of map) {
      result.set(key, selector(value, key));
    }

    return result;
  };

export default ReadonlyMap_map;
