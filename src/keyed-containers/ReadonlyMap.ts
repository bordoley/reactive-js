import {
  Empty,
  Entries,
  Keys,
  Map,
  MapWithKey,
  ReadonlyMapContainerLike,
} from "../keyed-containers.js";
import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";

export const empty: Empty<ReadonlyMapContainerLike>["empty"] =
  ReadonlyMap_empty;
export const entries: Entries<ReadonlyMapContainerLike>["entries"] =
  ReadonlyMap_entries;
export const keys: Keys<ReadonlyMapContainerLike>["keys"] = ReadonlyMap_keys;
export const map: Map<ReadonlyMapContainerLike>["map"] = ReadonlyMap_map;
export const mapWithKey: MapWithKey<ReadonlyMapContainerLike>["mapWithKey"] =
  ReadonlyMap_mapWithKey;
