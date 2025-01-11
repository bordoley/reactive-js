import { SideEffect1, SideEffect2 } from "../../../functions.js";
import type * as ReadonlyMap from "../../ReadonlyMap.js";

const ReadonlyMap_forEach: ReadonlyMap.Signature["forEach"] =
  <T, TKey extends ReadonlyMap.TKeyBase = ReadonlyMap.TKeyBase>(
    effect: SideEffect2<T, TKey>,
  ): SideEffect1<ReadonlyMap<TKey, T>> =>
  map => {
    for (const [key, value] of map) {
      effect(value, key as TKey);
    }
  };

export default ReadonlyMap_forEach;
