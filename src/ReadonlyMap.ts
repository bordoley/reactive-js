import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_mapWithKey from "./ReadonlyMap/__internal__/ReadonlyMap.mapWithKey.js";
import { KeyedContainerTypeClass } from "./type-classes.js";
import {
  Container,
  Container_T,
  Container_type,
  KeyOf,
  KeyedContainer_TKey,
} from "./types.js";

export interface Type extends Container {
  readonly [Container_type]?: ReadonlyMap<
    this[typeof KeyedContainer_TKey],
    this[typeof Container_T]
  >;

  readonly [KeyedContainer_TKey]?: unknown;
}

export type TKey = KeyOf<Type>;

export interface Signature extends KeyedContainerTypeClass<Type> {}

export const empty: Signature["empty"] = ReadonlyMap_empty;
export const entries: Signature["entries"] = ReadonlyMap_entries;
export const keys: Signature["keys"] = ReadonlyMap_keys;
export const map: Signature["map"] = ReadonlyMap_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyMap_mapWithKey;
