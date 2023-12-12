import {
  IndexedCollectionModule as IndexedCollectionModuleBase,
  IndexedLike,
  KeyOf,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../collections.js";
import Indexed_empty from "./Indexed/__private__/Indexed.empty.js";
import Indexed_entries from "./Indexed/__private__/Indexed.entries.js";
import Indexed_forEach from "./Indexed/__private__/Indexed.forEach.js";
import Indexed_keep from "./Indexed/__private__/Indexed.keep.js";
import Indexed_keySet from "./Indexed/__private__/Indexed.keySet.js";
import Indexed_keys from "./Indexed/__private__/Indexed.keys.js";
import Indexed_map from "./Indexed/__private__/Indexed.map.js";
import Indexed_reduce from "./Indexed/__private__/Indexed.reduce.js";
import Indexed_toDictionary from "./Indexed/__private__/Indexed.toDictionary.js";
import Indexed_toIndexed from "./Indexed/__private__/Indexed.toIndexed.js";
import Indexed_toReadonlyArray from "./Indexed/__private__/Indexed.toReadonlyArray.js";
import Indexed_toReadonlyMap from "./Indexed/__private__/Indexed.toReadonlyMap.js";
import Indexed_values from "./Indexed/__private__/Indexed.values.js";

/**
 * @noInheritDoc
 */
export interface IndexedCollectionCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: IndexedLike<this[typeof KeyedCollection_T]>;
}

export type Type = IndexedCollectionCollection;

export type TKeyBase = KeyOf<Type>;

export type Signature = IndexedCollectionModuleBase<Type>;

export const empty: Signature["empty"] = Indexed_empty;
export const entries: Signature["entries"] = Indexed_entries;
export const forEach: Signature["forEach"] = Indexed_forEach;
export const keep: Signature["keep"] = Indexed_keep;
export const keys: Signature["keys"] = Indexed_keys;
export const keySet: Signature["keySet"] = Indexed_keySet;
export const map: Signature["map"] = Indexed_map;
export const reduce: Signature["reduce"] = Indexed_reduce;
export const toDictionary: Signature["toDictionary"] = Indexed_toDictionary;
export const toIndexed: Signature["toIndexed"] = Indexed_toIndexed;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  Indexed_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] = Indexed_toReadonlyMap;
export const values: Signature["values"] = Indexed_values;
