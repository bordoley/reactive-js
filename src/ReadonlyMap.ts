import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";
import { ReadonlyMapContainer } from "./containers.js";

export const empty: ReadonlyMapContainer.TypeClass["empty"] = ReadonlyMap_empty;
export const entries: ReadonlyMapContainer.TypeClass["entries"] =
  ReadonlyMap_entries;
export const keys: ReadonlyMapContainer.TypeClass["keys"] = ReadonlyMap_keys;
export const map: ReadonlyMapContainer.TypeClass["map"] = ReadonlyMap_map;
export const mapWithKey: ReadonlyMapContainer.TypeClass["mapWithKey"] =
  ReadonlyMap_mapWithKey;
