import {
  DictionaryCollectionModule,
  KeyOf,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_TKey,
  KeyedCollection_type,
} from "../collections.js";
import { identityLazy } from "../functions.js";
import ReadonlyMap_empty from "./ReadonlyMap/__internal__/ReadonlyMap.empty.js";
import ReadonlyMap_entries from "./ReadonlyMap/__internal__/ReadonlyMap.entries.js";
import ReadonlyMap_fromEntries from "./ReadonlyMap/__internal__/ReadonlyMap.fromEntries.js";
import ReadonlyMap_keySet from "./ReadonlyMap/__internal__/ReadonlyMap.keySet.js";
import ReadonlyMap_keys from "./ReadonlyMap/__internal__/ReadonlyMap.keys.js";
import ReadonlyMap_map from "./ReadonlyMap/__internal__/ReadonlyMap.map.js";
import ReadonlyMap_reduce from "./ReadonlyMap/__internal__/ReadonlyMap.reduce.js";
import ReadonlyMap_toDictionary from "./ReadonlyMap/__internal__/ReadonlyMap.toDictionary.js";
import ReadonlyMap_values from "./ReadonlyMap/__internal__/ReadonlyMap.values.js";

/**
 * @noInheritDoc
 * @category Collection
 */
export interface ReadonlyMapCollection<TKey = unknown>
  extends KeyedCollection<TKey> {
  readonly [KeyedCollection_type]?: ReadonlyMap<
    NonNullable<this[typeof KeyedCollection_TKey]>,
    this[typeof KeyedCollection_T]
  >;

  readonly [KeyedCollection_TKey]?: TKey;
}

export type Type<TKey = unknown> = ReadonlyMapCollection<TKey>;

export type TKeyBase = KeyOf<Type>;

export type Signature = DictionaryCollectionModule<Type>;

export const empty: Signature["empty"] = ReadonlyMap_empty;
export const entries: Signature["entries"] = ReadonlyMap_entries;
export const fromEntries: Signature["fromEntries"] = ReadonlyMap_fromEntries;
export const keys: Signature["keys"] = ReadonlyMap_keys;
export const keySet: Signature["keySet"] = ReadonlyMap_keySet;
export const map: Signature["map"] = ReadonlyMap_map;
export const reduce: Signature["reduce"] = ReadonlyMap_reduce;
export const toDictionary: Signature["toDictionary"] = ReadonlyMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] = identityLazy;
export const values: Signature["values"] = ReadonlyMap_values;
