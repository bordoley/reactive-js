import Observable_toReadonlyArray from "./Observable/__internal__/Observable.toReadonlyArray.js";
import ReadonlyArray_empty from "./ReadonlyArray/__internal__/ReadonlyArray.empty.js";
import ReadonlyArray_entries from "./ReadonlyArray/__internal__/ReadonlyArray.entries.js";
import ReadonlyArray_enumerate from "./ReadonlyArray/__internal__/ReadonlyArray.enumerate.js";
import ReadonlyArray_forEach from "./ReadonlyArray/__internal__/ReadonlyArray.forEach.js";
import ReadonlyArray_forEachWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.forEachWithKey.js";
import ReadonlyArray_fromFactory from "./ReadonlyArray/__internal__/ReadonlyArray.fromFactory.js";
import ReadonlyArray_fromIterable from "./ReadonlyArray/__internal__/ReadonlyArray.fromIterable.js";
import ReadonlyArray_fromOptional from "./ReadonlyArray/__internal__/ReadonlyArray.fromOptional.js";
import ReadonlyArray_fromValue from "./ReadonlyArray/__internal__/ReadonlyArray.fromValue.js";
import ReadonlyArray_keep from "./ReadonlyArray/__internal__/ReadonlyArray.keep.js";
import ReadonlyArray_keepWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.keepWithKey.js";
import ReadonlyArray_keySet from "./ReadonlyArray/__internal__/ReadonlyArray.keySet.js";
import ReadonlyArray_keys from "./ReadonlyArray/__internal__/ReadonlyArray.keys.js";
import ReadonlyArray_map from "./ReadonlyArray/__internal__/ReadonlyArray.map.js";
import ReadonlyArray_mapWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.mapWithKey.js";
import ReadonlyArray_reduce from "./ReadonlyArray/__internal__/ReadonlyArray.reduce.js";
import ReadonlyArray_reduceWithKey from "./ReadonlyArray/__internal__/ReadonlyArray.reduceWithKey.js";
import ReadonlyArray_toDictionary from "./ReadonlyArray/__internal__/ReadonlyArray.toDictionary.js";
import ReadonlyArray_toEventSource from "./ReadonlyArray/__internal__/ReadonlyArray.toEventSource.js";
import ReadonlyArray_toIndexedCollection from "./ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import ReadonlyArray_toIterable from "./ReadonlyArray/__internal__/ReadonlyArray.toIterable.js";
import ReadonlyArray_toObservable from "./ReadonlyArray/__internal__/ReadonlyArray.toObservable.js";
import ReadonlyArray_toReadonlyArray from "./ReadonlyArray/__internal__/ReadonlyArray.toReadonlyArray.js";
import ReadonlyArray_values from "./ReadonlyArray/__internal__/ReadonlyArray.values.js";
import ReadonlyArray_toReadonlyMap from "./ReadonlyArray/__internal__/ReadonlyArrray.toReadonlyMap.js";
import {
  Container_T,
  Container_type,
  IndexedCollectionContainerModule,
  IndexedContainer,
  KeyOf,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainer extends IndexedContainer {
  readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
}

export type Type = ReadonlyArrayContainer;

export type TKeyBase = KeyOf<Type>;

/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyArrayModule
  extends IndexedCollectionContainerModule<Type> {}

export type Signature = ReadonlyArrayModule;

export const empty: Signature["empty"] = ReadonlyArray_empty;
export const entries: Signature["entries"] = ReadonlyArray_entries;
export const enumerate: Signature["enumerate"] = ReadonlyArray_enumerate;
export const forEach: Signature["forEach"] = ReadonlyArray_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  ReadonlyArray_forEachWithKey;
export const fromEnumerable: Signature["fromEnumerable"] =
  Observable_toReadonlyArray;
export const fromFactory: Signature["fromFactory"] = ReadonlyArray_fromFactory;
export const fromIterable: Signature["fromIterable"] =
  ReadonlyArray_fromIterable;
export const fromOptional: Signature["fromOptional"] =
  ReadonlyArray_fromOptional;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const fromValue: Signature["fromValue"] = ReadonlyArray_fromValue;
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
export const toEventSource: Signature["toEventSource"] =
  ReadonlyArray_toEventSource;
export const toIndexedCollection: Signature["toIndexedCollection"] =
  ReadonlyArray_toIndexedCollection;
export const toIterable: Signature["toIterable"] = ReadonlyArray_toIterable;
export const toObservable: Signature["toObservable"] =
  ReadonlyArray_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  ReadonlyArray_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  ReadonlyArray_toReadonlyMap;
export const values: Signature["values"] = ReadonlyArray_values;
