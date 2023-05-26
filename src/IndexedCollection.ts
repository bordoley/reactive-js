import IndexedCollection_enumerate from "./IndexedCollection/__internal__/IndexedCollection.enumerate.js";
import IndexedCollection_toIterable from "./IndexedCollection/__internal__/IndexedCollection.toIterable.js";
import IndexedCollection_toObservable from "./IndexedCollection/__internal__/IndexedCollection.toObservable.js";
import IndexedCollection_toReadonlyArray from "./IndexedCollection/__internal__/IndexedCollection.toReadonlyArray.js";
import {
  ConcreteIndexedKeyedContainer,
  Container_T,
  Container_type,
  IndexedCollectionLike,
  KeyedContainer,
  KeyedContainer_TKey,
} from "./types.js";

/**
 * @noInheritDoc
 * @category Container
 */
export interface IndexedCollectionContainer extends KeyedContainer {
  readonly [Container_type]?: IndexedCollectionLike<this[typeof Container_T]>;

  readonly [KeyedContainer_TKey]?: number;
}

export type Type = IndexedCollectionContainer;

export type TKeyBase = number;

/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule
  extends ConcreteIndexedKeyedContainer<Type> {}

export type Signature = IndexedCollectionModule;

export const enumerate: Signature["enumerate"] = IndexedCollection_enumerate;
export const toIterable: Signature["toIterable"] = IndexedCollection_toIterable;
export const toObservable: Signature["toObservable"] =
  IndexedCollection_toObservable;
export const toReadonlyArray: Signature["toReadonlyArray"] =
  IndexedCollection_toReadonlyArray;
