import {
  Container,
  Container_T,
  Container_type,
  IndexedCollectionModule,
  KeyOf,
} from "../collections.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__internal__/ReadonlyArray.entries.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.keepWithKey.js";
import ReadonlyArray_keySet from "./ReadonlyArray/__internal__/ReadonlyArray.keySet.js";
import ReadonlyArray_keys from "./ReadonlyArray/__internal__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__internal__/ReadonlyArray.reduce.js";
import ReadonlyArray_reduceWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.reduceWithKey.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__internal__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toIndexedCollection from "./ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyMap.js";
import ReadonlyArray_values from "./ReadonlyArray/__internal__/ReadonlyArray.values.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainer extends Container<number> {
  readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
}

export type Type = ReadonlyArrayContainer;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyArrayModule extends IndexedCollectionModule<Type> {}

export type Signature = ReadonlyArrayModule;
export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const keep: Signature["keep"] = ReadonlyArray_keep;
export const keepWithKey: Signature["keepWithKey"] = ReadonlyArray_keepWithKey;
export const keys: Signature["keys"] = ReadonlyArray_keys;
export const keySet: Signature["keySet"] = ReadonlyArray_keySet;
export const map: Signature["map"] = ReadonlyArray_map;
export const mapWithKey: Signature["mapWithKey"] = ReadonlyArray_mapWithKey;
export const reduce: Signature["reduce"] = ReadonlyArray_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  ReadonlyArray_reduceWithKey;
export const toDictionary: Signature["toDictionary"] =
  ReadonlyArray_toDictionary;
export const toIndexedCollection: Signature["toIndexedCollection"] =
  ReadonlyArray_toIndexedCollection;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = ReadonlyArray_values;
