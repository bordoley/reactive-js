import IndexedCollection_empty from "./IndexedCollection/__internal__/IndexedCollection.empty.js";
import IndexedCollection_entries from "./IndexedCollection/__internal__/IndexedCollection.entries.js";
import IndexedCollection_enumerate from "./IndexedCollection/__internal__/IndexedCollection.enumerate.js";
import IndexedCollection_forEach from "./IndexedCollection/__internal__/IndexedCollection.forEach.js";
import IndexedCollection_forEachWithKey from "./IndexedCollection/__internal__/IndexedCollection.forEachWithKey.js";
import IndexedCollection_fromFactory from "./IndexedCollection/__internal__/IndexedCollection.fromFactory.js";
import IndexedCollection_fromIterable from "./IndexedCollection/__internal__/IndexedCollection.fromIterable.js";
import IndexedCollection_fromOptional from "./IndexedCollection/__internal__/IndexedCollection.fromOptional.js";
import IndexedCollection_fromValue from "./IndexedCollection/__internal__/IndexedCollection.fromValue.js";
import IndexedCollection_keep from "./IndexedCollection/__internal__/IndexedCollection.keep.js";
import IndexedCollection_keepType from "./IndexedCollection/__internal__/IndexedCollection.keepType.js";
import IndexedCollection_keepWithKey from "./IndexedCollection/__internal__/IndexedCollection.keepWithKey.js";
import IndexedCollection_keySet from "./IndexedCollection/__internal__/IndexedCollection.keySet.js";
import IndexedCollection_keys from "./IndexedCollection/__internal__/IndexedCollection.keys.js";
import IndexedCollection_map from "./IndexedCollection/__internal__/IndexedCollection.map.js";
import IndexedCollection_mapTo from "./IndexedCollection/__internal__/IndexedCollection.mapTo.js";
import IndexedCollection_mapWithKey from "./IndexedCollection/__internal__/IndexedCollection.mapWithKey.js";
import IndexedCollection_reduce from "./IndexedCollection/__internal__/IndexedCollection.reduce.js";
import IndexedCollection_reduceWithKey from "./IndexedCollection/__internal__/IndexedCollection.reduceWithKey.js";
import IndexedCollection_toDictionary from "./IndexedCollection/__internal__/IndexedCollection.toDictionary.js";
import IndexedCollection_toEventSource from "./IndexedCollection/__internal__/IndexedCollection.toEventSource.js";
import IndexedCollection_toIndexedCollection from "./IndexedCollection/__internal__/IndexedCollection.toIndexedCollection.js";
import IndexedCollection_toIterable from "./IndexedCollection/__internal__/IndexedCollection.toIterable.js";
import IndexedCollection_toObservable from "./IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import IndexedCollection_toReadonlyMap from "./IndexedCollection/__internal__/IndexedCollection.toReadonlyMap.js";
import IndexedCollection_values from "./IndexedCollection/__internal__/IndexedCollection.values.js";
import Observable_toIndexedCollection from "./Observable/__internal__/Observable.toIndexedCollection.js";
import ReadonlyArray_toIndexedCollection from "./ReadonlyArray/__internal__/ReadonlyArray.toIndexedCollection.js";
import {
  Container_T,
  Container_type,
  IndexedCollectionContainerModule,
  IndexedCollectionLike,
  IndexedContainer,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface IndexedCollectionContainer extends IndexedContainer {
  readonly [Container_type]?: IndexedCollectionLike<this[typeof Container_T]>;
}

export type Type = IndexedCollectionContainer;

export type TKeyBase = number;

/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule
  extends IndexedCollectionContainerModule<Type> {}

export type Signature = IndexedCollectionModule;

export const empty: Signature["empty"] = IndexedCollection_empty;
export const entries: Signature["entries"] = IndexedCollection_entries;
export const enumerate: Signature["enumerate"] = IndexedCollection_enumerate;
export const forEach: Signature["forEach"] = IndexedCollection_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  IndexedCollection_forEachWithKey;
export const fromEnumerable: Signature["fromEnumerable"] =
  Observable_toIndexedCollection;
export const fromFactory: Signature["fromFactory"] =
  IndexedCollection_fromFactory;
export const fromIterable: Signature["fromIterable"] =
  IndexedCollection_fromIterable;
export const fromOptional: Signature["fromOptional"] =
  IndexedCollection_fromOptional;
export const fromReadonlyArray: Signature["fromReadonlyArray"] =
  ReadonlyArray_toIndexedCollection;
export const fromValue: Signature["fromValue"] = IndexedCollection_fromValue;
export const keep: Signature["keep"] = IndexedCollection_keep;
export const keepType: Signature["keepType"] = IndexedCollection_keepType;
export const keepWithKey: Signature["keepWithKey"] =
  IndexedCollection_keepWithKey;
export const keys: Signature["keys"] = IndexedCollection_keys;
export const keySet: Signature["keySet"] = IndexedCollection_keySet;
export const map: Signature["map"] = IndexedCollection_map;
export const mapWithKey: Signature["mapWithKey"] = IndexedCollection_mapWithKey;
export const mapTo: Signature["mapTo"] = IndexedCollection_mapTo;
export const reduce: Signature["reduce"] = IndexedCollection_reduce;
export const reduceWithKey: Signature["reduceWithKey"] =
  IndexedCollection_reduceWithKey;
export const toDictionary: Signature["toDictionary"] =
  IndexedCollection_toDictionary;
export const toEventSource: Signature["toEventSource"] =
  IndexedCollection_toEventSource;
export const toIndexedCollection: Signature["toIndexedCollection"] =
  IndexedCollection_toIndexedCollection;
export const toIterable: Signature["toIterable"] = IndexedCollection_toIterable;
export const toObservable: Signature["toObservable"] =
  IndexedCollection_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  IndexedCollection_toReadonlyArray;
export const toReadonlyMap: Signature["toReadonlyMap"] =
  IndexedCollection_toReadonlyMap;
export const values: Signature["values"] = IndexedCollection_values;
