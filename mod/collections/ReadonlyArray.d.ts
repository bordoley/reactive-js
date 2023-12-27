import { EnumerableLike, KeyOf, KeyedCollection, KeyedCollectionModule, KeyedCollectionOf, KeyedCollection_T, KeyedCollection_type } from "../collections.js";
import { Function1, Tuple2 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends KeyedCollection<number> {
    readonly [KeyedCollection_type]?: ReadonlyArray<this[typeof KeyedCollection_T]>;
}
export type TKeyBase = KeyOf<ReadonlyArrayCollection>;
/**
 * @noInheritDoc
 */
export interface ReadonlyArrayModule extends KeyedCollectionModule<ReadonlyArrayCollection> {
    /**
     */
    entries<T, TKey extends number = number>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<ReadonlyArrayCollection, T, TKey>, EnumerableLike<Tuple2<TKey, T>>>;
    /**
     *
     */
    values<T, TKey extends KeyOf<ReadonlyArrayCollection> = KeyOf<ReadonlyArrayCollection>>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<ReadonlyArrayCollection, T, TKey>, EnumerableLike<T>>;
    toReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<ReadonlyArrayCollection, T>, ReadonlyArray<T>>;
}
export type Signature = ReadonlyArrayModule;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
