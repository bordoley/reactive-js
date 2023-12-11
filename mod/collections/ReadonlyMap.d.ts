import { DictionaryCollectionModule, KeyOf, KeyedCollection, KeyedCollection_T, KeyedCollection_TKey, KeyedCollection_type } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyMapCollection<TKey = unknown> extends KeyedCollection<TKey> {
    readonly [KeyedCollection_type]?: ReadonlyMap<NonNullable<this[typeof KeyedCollection_TKey]>, this[typeof KeyedCollection_T]>;
    readonly [KeyedCollection_TKey]?: TKey;
}
export type Type<TKey = unknown> = ReadonlyMapCollection<TKey>;
export type TKeyBase = KeyOf<Type>;
export type Signature = DictionaryCollectionModule<Type>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const fromEntries: Signature["fromEntries"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
