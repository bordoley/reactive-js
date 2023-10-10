import {
  Collection,
  Collection_T,
  Collection_TKey,
  Collection_type,
  DictionaryModule,
  KeyOf,
  ReadonlyObjectMapLike,
} from "../collections.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_keySet from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__internal__/ReadonlyObjectMap.values.js";

/**
 * @noInheritDoc
 * @category Collection
 */
export interface ReadonlyObjectMapCollection<
  TKey extends symbol | string = symbol | string,
> extends Collection<TKey> {
  readonly [Collection_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof Collection_TKey]>,
    this[typeof Collection_T]
  >;

  readonly [Collection_TKey]?: TKey;
}

export type Type<TKey extends symbol | string = symbol | string> =
  ReadonlyObjectMapCollection<TKey>;

export type TKeyBase = KeyOf<Type>;

export interface ReadonlyObjectMapModule extends DictionaryModule<Type> {}

export type Signature = ReadonlyObjectMapModule;

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const keySet: Signature["keySet"] = ReadonlyObjectMap_keySet;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyObjectMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyObjectMap_toReadonlyMap;
export const values: Signature["values"] = ReadonlyObjectMap_values;
