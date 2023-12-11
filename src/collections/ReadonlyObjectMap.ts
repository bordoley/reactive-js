import {
  DictionaryCollectionModule,
  KeyOf,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_TKey,
  KeyedCollection_type,
  ReadonlyObjectMapLike,
} from "../collections.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEach from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.forEach.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.fromEntries.js";
import ReadonlyObjectMap_keySet from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.keySet.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.values.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyObjectMapCollection<
  TKey extends symbol | string = symbol | string,
> extends KeyedCollection<TKey> {
  readonly [KeyedCollection_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof KeyedCollection_TKey]>,
    this[typeof KeyedCollection_T]
  >;

  readonly [KeyedCollection_TKey]?: TKey;
}

export type Type<TKey extends symbol | string = symbol | string> =
  ReadonlyObjectMapCollection<TKey>;

export type TKeyBase = KeyOf<Type>;

export type Signature = DictionaryCollectionModule<Type>;

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const forEach: Signature["forEach"] = ReadonlyObjectMap_forEach;
export const fromEntries: Signature["fromEntries"] =
  ReadonlyObjectMap_fromEntries;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const keySet: Signature["keySet"] = ReadonlyObjectMap_keySet;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyObjectMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyObjectMap_toReadonlyMap;
export const values: Signature["values"] = ReadonlyObjectMap_values;
