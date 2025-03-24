import {
  CollectionType,
  Collection_T,
  Collection_TKey,
  Collection_type,
  DictionaryCollectionModule,
  DictionaryLike,
  KeyOf,
} from "../collections.js";
import { identityLazy } from "../functions.js";
import Dictionary_empty from "./Dictionary/__private__/Dictionary.empty.js";
import Dictionary_entries from "./Dictionary/__private__/Dictionary.entries.js";
import Dictionary_forEach from "./Dictionary/__private__/Dictionary.forEach.js";
import Dictionary_fromEntries from "./Dictionary/__private__/Dictionary.fromEntries.js";
import Dictionary_keep from "./Dictionary/__private__/Dictionary.keep.js";
import Dictionary_keys from "./Dictionary/__private__/Dictionary.keys.js";
import Dictionary_map from "./Dictionary/__private__/Dictionary.map.js";
import Dictionary_reduce from "./Dictionary/__private__/Dictionary.reduce.js";
import Dictionary_toReadonlyMap from "./Dictionary/__private__/Dictionary.toReadonlyMap.js";
import Dictionary_union from "./Dictionary/__private__/Dictionary.union.js";
import Dictionary_values from "./Dictionary/__private__/Dictionary.values.js";

/**
 * @noInheritDoc
 */
export interface DictionaryCollection<TKey = unknown> extends CollectionType<TKey> {
  readonly [Collection_type]?: DictionaryLike<
    NonNullable<this[typeof Collection_TKey]>,
    this[typeof Collection_T]
  >;

  readonly [Collection_TKey]?: TKey;
}

export type TKeyBase = KeyOf<DictionaryCollection>;

export type Signature = DictionaryCollectionModule<DictionaryCollection>;

export type Collection<TKey = unknown> = DictionaryCollection<TKey>;

export const empty: Signature["empty"] = Dictionary_empty;
export const entries: Signature["entries"] = Dictionary_entries;
export const forEach: Signature["forEach"] = Dictionary_forEach;
export const fromEntries: Signature["fromEntries"] = Dictionary_fromEntries;
export const keep: Signature["keep"] = Dictionary_keep;
export const keys: Signature["keys"] = Dictionary_keys;
export const map: Signature["map"] = Dictionary_map;
export const reduce: Signature["reduce"] = Dictionary_reduce;
export const toDictionary: Signature["toDictionary"] = identityLazy;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  Dictionary_toReadonlyMap;
export const union: Signature["union"] = Dictionary_union;
export const values: Signature["values"] = Dictionary_values;
