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

export const empty: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["empty"] =
  ReadonlyObjectMap_empty;
export const entries: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["entries"] =
  ReadonlyObjectMap_entries;
export const forEachWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const keep: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keep"] =
  ReadonlyObjectMap_keep;
export const keepType: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keepType"] =
  ReadonlyObjectMap_keepType;
export const keepWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["keys"] =
  ReadonlyObjectMap_keys;
export const keySet: KeyedContainers.TypeClass<ReadonlyObjectMapLike>["keySet"] =
  ReadonlyObjectMap_keySet;
export const map: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["map"] =
  ReadonlyObjectMap_map;
export const mapWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["mapWithKey"] =
  ReadonlyObjectMap_mapWithKey;
export const reduce: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["reduce"] =
  ReadonlyObjectMap_reduce;
export const reduceWithKey: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const values: KeyedContainers.TypeClass<ReadonlyObjectMapContainer>["values"] =
  ReadonlyObjectMap_values;
