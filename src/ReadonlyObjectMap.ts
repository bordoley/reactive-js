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
import { KeyedContainers, ReadonlyObjectMapContainer } from "./containers.js";
import { ReadonlyObjectMapLike } from "./types.js";

export const empty: ReadonlyObjectMapContainer.TypeClass["empty"] =
  ReadonlyObjectMap_empty;
export const entries: ReadonlyObjectMapContainer.TypeClass["entries"] =
  ReadonlyObjectMap_entries;
export const forEachWithKey: ReadonlyObjectMapContainer.TypeClass["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const keep: ReadonlyObjectMapContainer.TypeClass["keep"] =
  ReadonlyObjectMap_keep;
export const keepType: ReadonlyObjectMapContainer.TypeClass["keepType"] =
  ReadonlyObjectMap_keepType;
export const keepWithKey: ReadonlyObjectMapContainer.TypeClass["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["keys"] =
  ReadonlyObjectMap_keys;
export const keySet: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["keySet"] =
  ReadonlyObjectMap_keySet;
export const map: ReadonlyObjectMapContainer.TypeClass["map"] =
  ReadonlyObjectMap_map;
export const mapWithKey: ReadonlyObjectMapContainer.TypeClass["mapWithKey"] =
  ReadonlyObjectMap_mapWithKey;
export const reduce: ReadonlyObjectMapContainer.TypeClass["reduce"] =
  ReadonlyObjectMap_reduce;
export const reduceWithKey: ReadonlyObjectMapContainer.TypeClass["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const values: ReadonlyObjectMapContainer.TypeClass["values"] =
  ReadonlyObjectMap_values;
