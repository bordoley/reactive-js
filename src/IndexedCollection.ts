import IndexedCollection_empty from "./IndexedCollection/__internal__/IndexedCollection.empty.js";
import IndexedCollection_entries from "./IndexedCollection/__internal__/IndexedCollection.entries.js";
import IndexedCollection_enumerate from "./IndexedCollection/__internal__/IndexedCollection.enumerate.js";
import IndexedCollection_everySatisfy from "./IndexedCollection/__internal__/IndexedCollection.everySatisfy.js";
import IndexedCollection_first from "./IndexedCollection/__internal__/IndexedCollection.first.js";
import IndexedCollection_flow from "./IndexedCollection/__internal__/IndexedCollection.flow.js";
import IndexedCollection_forEach from "./IndexedCollection/__internal__/IndexedCollection.forEach.js";
import IndexedCollection_forEachWithKey from "./IndexedCollection/__internal__/IndexedCollection.forEachWithKey.js";
import IndexedCollection_last from "./IndexedCollection/__internal__/IndexedCollection.last.js";
import IndexedCollection_map from "./IndexedCollection/__internal__/IndexedCollection.map.js";
import IndexedCollection_mapTo from "./IndexedCollection/__internal__/IndexedCollection.mapTo.js";
import IndexedCollection_noneSatisfy from "./IndexedCollection/__internal__/IndexedCollection.noneSatisfy.js";
import IndexedCollection_someSatisfy from "./IndexedCollection/__internal__/IndexedCollection.someSatisfy.js";
import IndexedCollection_toEventSource from "./IndexedCollection/__internal__/IndexedCollection.toEventSource.js";
import IndexedCollection_toIterable from "./IndexedCollection/__internal__/IndexedCollection.toIterable.js";
import IndexedCollection_toObservable from "./IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import IndexedCollection_values from "./IndexedCollection/__internal__/IndexedCollection.values.js";
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
export const everySatisfy: Signature["everySatisfy"] =
  IndexedCollection_everySatisfy;
export const first: Signature["first"] = IndexedCollection_first;
export const flow: Signature["flow"] = IndexedCollection_flow;
export const forEach: Signature["forEach"] = IndexedCollection_forEach;
export const forEachWithKey: Signature["forEachWithKey"] =
  IndexedCollection_forEachWithKey;
export const last: Signature["last"] = IndexedCollection_last;
export const map: Signature["map"] = IndexedCollection_map;
export const mapTo: Signature["mapTo"] = IndexedCollection_mapTo;
export const noneSatisfy: Signature["noneSatisfy"] =
  IndexedCollection_noneSatisfy;
export const someSatisfy: Signature["someSatisfy"] =
  IndexedCollection_someSatisfy;
export const toEventSource: Signature["toEventSource"] =
  IndexedCollection_toEventSource;
export const toIterable: Signature["toIterable"] = IndexedCollection_toIterable;
export const toObservable: Signature["toObservable"] =
  IndexedCollection_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  IndexedCollection_toReadonlyArray;
export const values: Signature["values"] = IndexedCollection_values;
