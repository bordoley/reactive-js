import {
  Empty,
  Entries,
  ForEachWithKey,
  Keep,
  KeepType,
  KeepWithKey,
  KeySet,
  Keys,
  Map,
  MapWithKey,
  ReadonlyObjectMapContainerLike,
  ReadonlyObjectMapLike,
  Reduce,
  ReduceWithKey,
  Values,
} from "../keyed-containers.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEachWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.forEachWithKey.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keepType from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keepType.js";
import ReadonlyObjectMap_keepWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keepWithKey.js";
import ReadonlyObjectMap_keySet from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_mapWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.mapWithKey.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_reduceWithKey from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduceWithKey.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";

export const empty: Empty<ReadonlyObjectMapContainerLike>["empty"] =
  ReadonlyObjectMap_empty;
export const entries: Entries<ReadonlyObjectMapContainerLike>["entries"] =
  ReadonlyObjectMap_entries;
export const forEachWithKey: ForEachWithKey<ReadonlyObjectMapContainerLike>["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const keep: Keep<ReadonlyObjectMapContainerLike>["keep"] =
  ReadonlyObjectMap_keep;
export const keepType: KeepType<ReadonlyObjectMapContainerLike>["keepType"] =
  ReadonlyObjectMap_keepType;
export const keepWithKey: KeepWithKey<ReadonlyObjectMapContainerLike>["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: Keys<ReadonlyObjectMapLike>["keys"] = ReadonlyObjectMap_keys;
export const keySet: KeySet<ReadonlyObjectMapLike>["keySet"] =
  ReadonlyObjectMap_keySet;
export const map: Map<ReadonlyObjectMapContainerLike>["map"] =
  ReadonlyObjectMap_map;
export const mapWithKey: MapWithKey<ReadonlyObjectMapContainerLike>["mapWithKey"] =
  ReadonlyObjectMap_mapWithKey;
export const reduce: Reduce<ReadonlyObjectMapContainerLike>["reduce"] =
  ReadonlyObjectMap_reduce;
export const reduceWithKey: ReduceWithKey<ReadonlyObjectMapContainerLike>["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const values: Values<ReadonlyObjectMapContainerLike>["values"] =
  ReadonlyObjectMap_values;
