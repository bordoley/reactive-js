import { KeyedContainer, ReadonlyMapContainer } from "../core.js";
import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";

export const empty: KeyedContainer.TypeClass<ReadonlyMapContainer>["empty"] =
  ReadonlyMap_empty;
export const entries: KeyedContainer.TypeClass<ReadonlyMapContainer>["entries"] =
  ReadonlyMap_entries;
export const keys: KeyedContainer.TypeClass<ReadonlyMapContainer>["keys"] =
  ReadonlyMap_keys;
export const map: KeyedContainer.TypeClass<ReadonlyMapContainer>["map"] =
  ReadonlyMap_map;
export const mapWithKey: KeyedContainer.TypeClass<ReadonlyMapContainer>["mapWithKey"] =
  ReadonlyMap_mapWithKey;
