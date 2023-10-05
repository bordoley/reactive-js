import { Container, Container_T, Container_type, IndexedCollectionLike, IndexedCollectionModule as IndexedCollectionModuleBase, KeyOf } from "../collections.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface IndexedCollectionContainer extends Container<number> {
    readonly [Container_type]?: IndexedCollectionLike<this[typeof Container_T]>;
}
export type Type = IndexedCollectionContainer;
export type TKeyBase = KeyOf<Type>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule extends IndexedCollectionModuleBase<Type> {
}
export type Signature = IndexedCollectionModule;
export declare const empty: <T, TKey extends number = number>() => IndexedCollectionLike<T>;
export declare const entries: <T, TKey extends number = number>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedCollectionLike<T>, Iterator<import("../functions.js").Tuple2<TKey, T>, any, undefined>>;
export declare const keep: <T, TKey extends number = number>(predicate: import("../functions.js").Function2<T, TKey, boolean>) => import("../collections.js").ContainerOperator<IndexedCollectionContainer, T, T, TKey>;
export declare const keys: <TKey extends number>() => import("../functions.js").Function1<IndexedCollectionLike<unknown>, Iterator<TKey, any, undefined>>;
export declare const keySet: <TKey extends number>() => import("../functions.js").Function1<IndexedCollectionLike<unknown>, ReadonlySet<TKey>>;
export declare const map: <TA, TB, TKey extends number = number>(selector: import("../functions.js").Function2<TA, TKey, TB>) => import("../collections.js").ContainerOperator<IndexedCollectionContainer, TA, TB, TKey>;
export declare const reduce: <T, TAcc, TKey extends number = number>(reducer: import("../functions.js").Function3<TAcc, T, TKey, TAcc>, initialValue: import("../functions.js").Factory<TAcc>) => import("../functions.js").Function1<IndexedCollectionLike<T>, TAcc>;
export declare const toDictionary: <T, TKey extends number>() => import("../functions.js").Function1<IndexedCollectionLike<T>, import("../collections.js").DictionaryLike<TKey, T>>;
export declare const toIndexedCollection: <T>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedCollectionLike<T>, IndexedCollectionLike<T>>;
export declare const toReadonlyArray: <T>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedCollectionLike<T>, readonly T[]>;
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: <T, TKey extends number = number>(options?: {
    readonly count?: number | undefined;
    readonly start?: number | undefined;
} | undefined) => import("../functions.js").Function1<IndexedCollectionLike<T>, Iterator<T, any, undefined>>;
