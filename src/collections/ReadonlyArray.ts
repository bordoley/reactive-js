import {
  IndexedCollectionModule,
  KeyOf,
  KeyedCollection,
  KeyedCollection_T,
  KeyedCollection_type,
} from "../collections.js";
import ReadonlyArray_empty from "./ReadonlyArray/__private__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__private__/ReadonlyArray.entries.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__private__/ReadonlyArray.forEach.js";
import ReadonlyArray_keep from "./ReadonlyArray/__private__/ReadonlyArray.keep.js";
import ReadonlyArray_keySet from "./ReadonlyArray/__private__/ReadonlyArray.keySet.js";
import ReadonlyArray_keys from "./ReadonlyArray/__private__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__private__/ReadonlyArray.map.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__private__/ReadonlyArray.reduce.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__private__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toIndexed from "./ReadonlyArray/__private__/ReadonlyArray.toIndexed.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__private__/ReadonlyArray.toReadonlyMap.js";
import ReadonlyArray_values from "./ReadonlyArray/__private__/ReadonlyArray.values.js";

/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends KeyedCollection<number> {
  readonly [KeyedCollection_type]?: ReadonlyArray<
    this[typeof KeyedCollection_T]
  >;
}

export type TKeyBase = KeyOf<ReadonlyArrayCollection>;

export type Signature = IndexedCollectionModule<ReadonlyArrayCollection>;

export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const forEach: Signature["forEach"] = ReadonlyArray_forEach;
export const keep: Signature["keep"] = ReadonlyArray_keep;
export const keys: Signature["keys"] = ReadonlyArray_keys;
export const keySet: Signature["keySet"] = ReadonlyArray_keySet;
export const map: Signature["map"] = ReadonlyArray_map;
export const reduce: Signature["reduce"] = ReadonlyArray_reduce;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyArray_toDictionary;
export const toIndexed: Signature["toIndexed"] = ReadonlyArray_toIndexed;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = ReadonlyArray_values;
