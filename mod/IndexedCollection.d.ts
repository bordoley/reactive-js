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
export declare const entries: Signature["entries"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const first: Signature["first"];
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const values: Signature["values"];
