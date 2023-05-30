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
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const keep: Signature["keep"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toIndexedCollection: Signature["toIndexedCollection"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
