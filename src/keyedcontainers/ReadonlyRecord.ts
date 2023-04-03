import {
  Empty,
  Entries,
  ForEachWithKey,
  Keep,
  KeepType,
  KeepWithKey,
  KeySet,
  Map,
  MapWithKey,
  ReadonlyRecordLike,
} from "../keyedcontainers.js";
import ReadonlyRecord_empty from "./ReadonlyRecord/__internal__/ReadonlyRecord.empty.js";
import ReadonlyRecord_entries from "./ReadonlyRecord/__internal__/ReadonlyRecord.entries.js";
import ReadonlyRecord_forEachWithKey from "./ReadonlyRecord/__internal__/ReadonlyRecord.forEachWithKey.js";
import ReadonlyRecord_keep from "./ReadonlyRecord/__internal__/ReadonlyRecord.keep.js";
import ReadonlyRecord_keepType from "./ReadonlyRecord/__internal__/ReadonlyRecord.keepType.js";
import ReadonlyRecord_keepWithKey from "./ReadonlyRecord/__internal__/ReadonlyRecord.keepWithKey.js";
import ReadonlyRecord_keySet from "./ReadonlyRecord/__internal__/ReadonlyRecord.keySet.js";
import ReadonlyRecord_map from "./ReadonlyRecord/__internal__/ReadonlyRecord.map.js";
import ReadonlyRecord_mapWithKey from "./ReadonlyRecord/__internal__/ReadonlyRecord.mapWithKey.js";

export const empty: Empty<ReadonlyRecordLike>["empty"] = ReadonlyRecord_empty;
export const entries: Entries<ReadonlyRecordLike>["entries"] =
  ReadonlyRecord_entries;
export const forEachWithKey: ForEachWithKey<ReadonlyRecordLike>["forEachWithKey"] =
  ReadonlyRecord_forEachWithKey;
export const keep: Keep<ReadonlyRecordLike>["keep"] = ReadonlyRecord_keep;
export const keepType: KeepType<ReadonlyRecordLike>["keepType"] =
  ReadonlyRecord_keepType;
export const keepWithKey: KeepWithKey<ReadonlyRecordLike>["keepWithKey"] =
  ReadonlyRecord_keepWithKey;
export const keySet: KeySet<ReadonlyRecordLike>["keySet"] =
  ReadonlyRecord_keySet;
export const map: Map<ReadonlyRecordLike>["map"] = ReadonlyRecord_map;
export const mapWithKey: MapWithKey<ReadonlyRecordLike>["mapWithKey"] =
  ReadonlyRecord_mapWithKey;
