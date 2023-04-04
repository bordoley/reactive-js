import {
  Empty,
  Entries,
  Map,
  MapWithKey,
  ReadonlyMapLike,
} from "../keyed-containers.js";
import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";

export const empty: Empty<ReadonlyMapLike>["empty"] = ReadonlyMap_empty;
export const entries: Entries<ReadonlyMapLike>["entries"] = ReadonlyMap_entries;
export const map: Map<ReadonlyMapLike>["map"] = ReadonlyMap_map;
export const mapWithKey: MapWithKey<ReadonlyMapLike>["mapWithKey"] =
  ReadonlyMap_mapWithKey;
