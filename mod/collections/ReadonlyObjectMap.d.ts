import { DictionaryCollectionModule, KeyOf, KeyedCollection, KeyedCollection_T, KeyedCollection_TKey, KeyedCollection_type, ReadonlyObjectMapLike } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyObjectMapCollection<TKey extends symbol | string = symbol | string> extends KeyedCollection<TKey> {
    readonly [KeyedCollection_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedCollection_TKey]>, this[typeof KeyedCollection_T]>;
    readonly [KeyedCollection_TKey]?: TKey;
}
export type TKeyBase = KeyOf<ReadonlyObjectMapCollection>;
export type Signature = DictionaryCollectionModule<ReadonlyObjectMapCollection>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const fromEntries: Signature["fromEntries"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const union: Signature["union"];
export declare const values: Signature["values"];
