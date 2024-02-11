import { Collection, Collection_T, Collection_TKey, Collection_type, DictionaryCollectionModule, KeyOf } from "../collections.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyMapCollection<TKey = unknown> extends Collection<TKey> {
    readonly [Collection_type]?: ReadonlyMap<NonNullable<this[typeof Collection_TKey]>, this[typeof Collection_T]>;
    readonly [Collection_TKey]?: TKey;
}
export type TKeyBase = KeyOf<ReadonlyMapCollection>;
export type Signature = DictionaryCollectionModule<ReadonlyMapCollection>;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const fromEntries: Signature["fromEntries"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const union: Signature["union"];
export declare const values: Signature["values"];
