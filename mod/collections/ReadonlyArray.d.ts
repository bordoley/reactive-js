import { IndexedCollectionModule, KeyOf, KeyedCollection, KeyedCollection_T, KeyedCollection_type } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends KeyedCollection<number> {
    readonly [KeyedCollection_type]?: ReadonlyArray<this[typeof KeyedCollection_T]>;
}
export type Type = ReadonlyArrayCollection;
export type TKeyBase = KeyOf<Type>;
export type Signature = IndexedCollectionModule<Type>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toIndexed: Signature["toIndexed"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
