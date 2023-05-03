import { KeyedContainer, ReadonlyMapContainer } from "../containers.js";
import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";

export const empty: KeyedContainer.Empty<ReadonlyMapContainer>["empty"] =
  ReadonlyMap_empty;
export const entries: KeyedContainer.Entries<ReadonlyMapContainer>["entries"] =
  ReadonlyMap_entries;
export const keys: KeyedContainer.Keys<ReadonlyMapContainer>["keys"] =
  ReadonlyMap_keys;
export const map: KeyedContainer.Map<ReadonlyMapContainer>["map"] =
  ReadonlyMap_map;
export const mapWithKey: KeyedContainer.MapWithKey<ReadonlyMapContainer>["mapWithKey"] =
  ReadonlyMap_mapWithKey;
