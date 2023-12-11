import { DictionaryCollectionModule, KeyOf, KeyedCollection, KeyedCollection_T, KeyedCollection_TKey, KeyedCollection_type, ReadonlyObjectMapLike } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyObjectMapCollection<TKey extends symbol | string = symbol | string> extends KeyedCollection<TKey> {
    readonly [KeyedCollection_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedCollection_TKey]>, this[typeof KeyedCollection_T]>;
    readonly [KeyedCollection_TKey]?: TKey;
}
export type Type<TKey extends symbol | string = symbol | string> = ReadonlyObjectMapCollection<TKey>;
export type TKeyBase = KeyOf<Type>;
export type Signature = DictionaryCollectionModule<Type>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const fromEntries: Signature["fromEntries"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
