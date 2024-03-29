import {
  Collection,
  Collection_T,
  Collection_TKey,
  Collection_type,
  DictionaryCollectionModule,
  KeyOf,
  ReadonlyObjectMapLike,
} from "../collections.js";
import ReadonlyObjectMap_empty from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.empty.js";
import ReadonlyObjectMap_entries from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.entries.js";
import ReadonlyObjectMap_forEach from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.forEach.js";
import ReadonlyObjectMap_fromEntries from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.fromEntries.js";
import ReadonlyObjectMap_keep from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.keep.js";
import ReadonlyObjectMap_keys from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.keys.js";
import ReadonlyObjectMap_map from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.map.js";
import ReadonlyObjectMap_reduce from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.reduce.js";
import ReadonlyObjectMap_toDictionary from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.toDictionary.js";
import ReadonlyObjectMap_toReadonlyMap from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.toReadonlyMap.js";
import ReadonlyObjectMap_union from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.union.js";
import ReadonlyObjectMap_values from "./ReadonlyObjectMap/__private__/ReadonlyObjectMap.values.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyObjectMapCollection<TKey extends string = string>
  extends Collection<TKey> {
  readonly [Collection_type]?: ReadonlyObjectMapLike<
    NonNullable<this[typeof Collection_TKey]>,
    this[typeof Collection_T]
  >;

  readonly [Collection_TKey]?: TKey;
}

export type TKeyBase = KeyOf<ReadonlyObjectMapCollection>;

export type Signature = DictionaryCollectionModule<ReadonlyObjectMapCollection>;

export const empty: Signature["empty"] = ReadonlyObjectMap_empty;
export const entries: Signature["entries"] = ReadonlyObjectMap_entries;
export const forEach: Signature["forEach"] = ReadonlyObjectMap_forEach;
export const fromEntries: Signature["fromEntries"] =
  ReadonlyObjectMap_fromEntries;
export const keep: Signature["keep"] = ReadonlyObjectMap_keep;
export const keys: Signature["keys"] = ReadonlyObjectMap_keys;
export const map: Signature["map"] = ReadonlyObjectMap_map;
export const reduce: Signature["reduce"] = ReadonlyObjectMap_reduce;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyObjectMap_toDictionary;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyObjectMap_toReadonlyMap;
export const union: Signature["union"] = ReadonlyObjectMap_union;
export const values: Signature["values"] = ReadonlyObjectMap_values;
