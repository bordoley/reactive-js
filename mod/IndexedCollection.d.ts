import { Container_T, Container_type, IndexedCollectionContainerModule, IndexedCollectionLike, IndexedContainer } from "./types.js";
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
export interface IndexedCollectionModule extends IndexedCollectionContainerModule<Type> {
}
export type Signature = IndexedCollectionModule;
export declare const empty: Signature["empty"];
export declare const enumerate: Signature["enumerate"];
export declare const map: Signature["map"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
