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
import { KeyedContainerTypeClass } from "./type-classes.js";
import {
  Container_T,
  Container_type,
  KeyOf,
  KeyedContainer,
  KeyedContainer_TKey,
  ReadonlyObjectMapLike,
} from "./types.js";

export interface Type extends KeyedContainer {
  readonly [Container_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof KeyedContainer_TKey]>,
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: symbol | number | string;
}

export type TKey = KeyOf<Type>;

export interface Signature extends KeyedContainerTypeClass<Type> {}

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyObjectMap_forEachWithKey;
export const keep: Signature["keep"] = ReadonlyObjectMap_keep;
export const keepType: Signature["keepType"] = ReadonlyObjectMap_keepType;
export const keepWithKey: Signature["keepWithKey"] =
  ReadonlyObjectMap_keepWithKey;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const keySet: Signature["keySet"] = ReadonlyObjectMap_keySet;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyObjectMap_mapWithKey;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  ReadonlyObjectMap_reduceWithKey;
export const values: Signature["values"] = ReadonlyObjectMap_values;
