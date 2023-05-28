import IndexedCollection_empty from "./IndexedCollection/__internal__/IndexedCollection.empty.js";
import IndexedCollection_enumerate from "./IndexedCollection/__internal__/IndexedCollection.enumerate.js";
import IndexedCollection_map from "./IndexedCollection/__internal__/IndexedCollection.map.js";
import IndexedCollection_toIterable from "./IndexedCollection/__internal__/IndexedCollection.toIterable.js";
import IndexedCollection_toObservable from "./IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
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
export const enumerate: Signature["enumerate"] = IndexedCollection_enumerate;
export const map: Signature["map"] = IndexedCollection_map;
export const toIterable: Signature["toIterable"] = IndexedCollection_toIterable;
export const toObservable: Signature["toObservable"] =
  IndexedCollection_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  IndexedCollection_toReadonlyArray;
