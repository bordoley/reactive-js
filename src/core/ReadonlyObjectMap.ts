import {
  KeyedContainer,
  ReadonlyObjectMapContainer,
  ReadonlyObjectMapLike,
} from "../core.js";
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

export const empty: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["empty"] =
  ReadonlyObjectMap_empty;
export const entries: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["entries"] =
  ReadonlyObjectMap_entries;
export const forEachWithKey: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const keep: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keep"] =
  ReadonlyObjectMap_keep;
export const keepType: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keepType"] =
  ReadonlyObjectMap_keepType;
export const keepWithKey: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: KeyedContainer.TypeClass<ReadonlyObjectMapLike>["keys"] =
  ReadonlyObjectMap_keys;
export const keySet: KeyedContainer.TypeClass<ReadonlyObjectMapLike>["keySet"] =
  ReadonlyObjectMap_keySet;
export const map: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["map"] =
  ReadonlyObjectMap_map;
export const mapWithKey: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["mapWithKey"] =
  ReadonlyObjectMap_mapWithKey;
export const reduce: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["reduce"] =
  ReadonlyObjectMap_reduce;
export const reduceWithKey: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const values: KeyedContainer.TypeClass<ReadonlyObjectMapContainer>["values"] =
  ReadonlyObjectMap_values;
