import type * as ReadonlyMap from "../../ReadonlyMap.js";
import { Function1, SideEffect2 } from "../../functions.js";

const ReadonlyMap_forEachWithKey: ReadonlyMap.Signature["forEachWithKey"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): Function1<ReadonlyMap<TKey, T>, ReadonlyMap<TKey, T>> =>
  map => {
    map.forEach(effect);
    return map;
  };

export default ReadonlyMap_forEachWithKey;
