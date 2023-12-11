import { IndexedCollectionModule as IndexedCollectionModuleBase, IndexedLike, KeyOf, KeyedCollection, KeyedCollection_T, KeyedCollection_type } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface IndexedCollectionCollection extends KeyedCollection<number> {
    readonly [KeyedCollection_type]?: IndexedLike<this[typeof KeyedCollection_T]>;
}
export type Type = IndexedCollectionCollection;
export type TKeyBase = KeyOf<Type>;
export type Signature = IndexedCollectionModuleBase<Type>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toIndexed: Signature["toIndexed"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
