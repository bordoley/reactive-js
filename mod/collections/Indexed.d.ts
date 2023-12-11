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
export declare const empty: <T, TKey extends number = number>() => IndexedLike<T>;
export declare const entries: <T, TKey extends number = number>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedLike<T>, import("../collections.js").EnumerableLike<import("../functions.js").Tuple2<TKey, T>>>;
export declare const keys: <TKey extends number>() => import("../functions.js").Function1<IndexedLike<unknown>, import("../collections.js").EnumerableLike<TKey>>;
export declare const keySet: <TKey extends number>() => import("../functions.js").Function1<IndexedLike<unknown>, ReadonlySet<TKey>>;
export declare const map: <TA, TB, TKey extends number = number>(selector: import("../functions.js").Function2<TA, TKey, TB>) => import("../collections.js").KeyedCollectionOperator<IndexedCollectionCollection, TA, TB, TKey>;
export declare const reduce: <T, TAcc, TKey extends number = number>(reducer: import("../functions.js").Function3<TAcc, T, TKey, TAcc>, initialValue: import("../functions.js").Factory<TAcc>) => import("../functions.js").Function1<IndexedLike<T>, TAcc>;
export declare const toDictionary: <T, TKey extends number>() => import("../functions.js").Function1<IndexedLike<T>, import("../collections.js").DictionaryLike<TKey, T>>;
export declare const toIndexed: <T>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedLike<T>, IndexedLike<T>>;
export declare const toReadonlyArray: <T>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedLike<T>, readonly T[]>;
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: <T, TKey extends number = number>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedLike<T>, import("../collections.js").EnumerableLike<T>>;
