import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";
import { KeyedContainers, ReadonlyMapContainer } from "./types.js";

export const empty: KeyedContainers.TypeClass<ReadonlyMapContainer>["empty"] =
  ReadonlyMap_empty;
export const entries: KeyedContainers.TypeClass<ReadonlyMapContainer>["entries"] =
  ReadonlyMap_entries;
export const keys: KeyedContainers.TypeClass<ReadonlyMapContainer>["keys"] =
  ReadonlyMap_keys;
export const map: KeyedContainers.TypeClass<ReadonlyMapContainer>["map"] =
  ReadonlyMap_map;
export const mapWithKey: KeyedContainers.TypeClass<ReadonlyMapContainer>["mapWithKey"] =
  ReadonlyMap_mapWithKey;
