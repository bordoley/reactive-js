import {
  DictionaryCollectionModule,
  DictionaryLike,
  KeyOf,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_TKey,
  KeyedCollection_type,
} from "../collections.js";
import { identityLazy } from "../functions.js";
import Dictionary_empty from "./Dictionary/__private__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__private__/Dictionary.entries.js";
import Dictionary_fromEntries from "./Dictionary/__private__/Dictionary.fromEntries.js";
import Dictionary_keySet from "./Dictionary/__private__/Dictionary.keySet.js";
import Dictionary_keys from "./Dictionary/__private__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__private__/Dictionary.map.js";
import Dictionary_reduce from "./Dictionary/__private__/Dictionary.reduce.js";
import Dictionary_toReadonlyMap from "./Dictionary/__private__/Dictionary.toReadonlyMap.js";
import Dictionary_values from "./Dictionary/__private__/Dictionary.values.js";

/**
 * @noInheritDoc
 * @category Collection
 */
export interface DictionaryCollection<TKey = unknown>
  extends KeyedCollection<TKey> {
  readonly [KeyedCollection_type]?: DictionaryLike<
    NonNullable<this[typeof KeyedCollection_TKey]>,
    this[typeof KeyedCollection_T]
  >;

  readonly [KeyedCollection_TKey]?: TKey;
}

export type Type<TKey = unknown> = DictionaryCollection<TKey>;

export type TKeyBase = KeyOf<Type>;

export type Signature = DictionaryCollectionModule<Type>;

export const empty: Signature["empty"] = Dictionary_empty;
export const entries: Signature["entries"] = Dictionary_entries;
export const fromEntries: Signature["fromEntries"] = Dictionary_fromEntries;
export const keys: Signature["keys"] = Dictionary_keys;
export const keySet: Signature["keySet"] = Dictionary_keySet;
export const map: Signature["map"] = Dictionary_map;
export const reduce: Signature["reduce"] = Dictionary_reduce;
export const toDictionary: Signature["toDictionary"] = identityLazy;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  Dictionary_toReadonlyMap;
export const values: Signature["values"] = Dictionary_values;
