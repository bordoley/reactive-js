import { Collection, Collection_T, Collection_type, IndexedCollectionModule, KeyOf } from "../collections.js";
/**
 * @noInheritDoc
 * @category Collection
 */
export interface ReadonlyArrayCollection extends Collection<number> {
    readonly [Collection_type]?: ReadonlyArray<this[typeof Collection_T]>;
}
export type Type = ReadonlyArrayCollection;
export type TKeyBase = KeyOf<Type>;
export type Signature = IndexedCollectionModule<Type>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toIndexed: Signature["toIndexed"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
