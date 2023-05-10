import { newInstance } from "../../functions.js";
import type * as ReadonlyMap from "./../../ReadonlyMap.js";

const ReadonlyMap_keySet: ReadonlyMap.Signature["keySet"] =
  <TKey extends ReadonlyMap.TKey>() =>
  (map: ReadonlyMap<TKey, unknown>) =>
    newInstance(Set<TKey>, map.keys());

export default ReadonlyMap_keySet;
