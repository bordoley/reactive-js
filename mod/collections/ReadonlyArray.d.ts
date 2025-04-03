import { CollectionModule, CollectionOf, CollectionType, Collection_T, Collection_type, KeyOf } from "../collections.js";
import type { PureIterableLike } from "../computations.js";
import { Function1, Tuple2 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface ReadonlyArrayCollection extends CollectionType<number> {
    readonly [Collection_type]?: ReadonlyArray<this[typeof Collection_T]>;
}
export type TKeyBase = KeyOf<ReadonlyArrayCollection>;
/**
 * @noInheritDoc
 */
export interface ReadonlyArrayModule extends CollectionModule<ReadonlyArrayCollection> {
    /**
     */
    entries<T, TKey extends number = number>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<ReadonlyArrayCollection, T, TKey>, PureIterableLike<Tuple2<TKey, T>>>;
    fromIterable<T>(): Function1<Iterable<T>, ReadonlyArray<T>>;
    /**
     *
     */
    values<T, TKey extends KeyOf<ReadonlyArrayCollection> = KeyOf<ReadonlyArrayCollection>>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<ReadonlyArrayCollection, T, TKey>, PureIterableLike<T>>;
    slice<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<ReadonlyArrayCollection, T>, ReadonlyArray<T>>;
}
export type Signature = ReadonlyArrayModule;
export type Collection = ReadonlyArrayCollection;
export declare const empty: Signature["empty"];
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const keep: Signature["keep"];
export declare const keys: Signature["keys"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const slice: Signature["slice"];
export declare const toDictionary: Signature["toDictionary"];
export declare const toReadonlyMap: Signature["toReadonlyMap"];
export declare const values: Signature["values"];
