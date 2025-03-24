import { type Factory, type Function1, type Function2, type Function3, type Optional, type SideEffect1, type SideEffect2, type Tuple2 } from "./functions.js";
/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<TKey extends string = string, out T = unknown> = {
    readonly [P in TKey]?: T;
};
export declare const DictionaryLike_get: unique symbol;
export declare const DictionaryLike_keys: unique symbol;
/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, out T = unknown> {
    readonly [DictionaryLike_keys]: Iterable<TKey>;
    [DictionaryLike_get](index: TKey): Optional<T>;
}
export declare const Collection_T: unique symbol;
export declare const Collection_type: unique symbol;
export declare const Collection_TKey: unique symbol;
/**
 * @noInheritDoc
 */
export interface CollectionType<TKey = unknown> {
    readonly [Collection_T]?: unknown;
    readonly [Collection_type]?: unknown;
    readonly [Collection_TKey]?: TKey;
}
/**
 */
export type KeyOf<C extends CollectionType> = NonNullable<C[typeof Collection_TKey]>;
/**
 */
export type CollectionOf<C extends CollectionType, T, TKey extends KeyOf<C> = KeyOf<C>> = C extends {
    readonly [Collection_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Collection_T]: T;
    readonly [Collection_TKey]: TKey;
})[typeof Collection_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * Utility type for a generic operator function that transforms a Collection's inner value type.
 */
export type CollectionOperator<C extends CollectionType, TA, TB, TKey extends KeyOf<C> = KeyOf<C>> = Function1<CollectionOf<C, TA, TKey>, CollectionOf<C, TB, TKey>>;
/**
 * @noInheritDoc
 */
export interface CollectionModule<C extends CollectionType> {
    /**
     * Return an Collection that emits no items.
     *
     */
    empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): CollectionOf<C, T, TKey>;
    /**
     */
    entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, Iterable<Tuple2<TKey, T>>>;
    forEach<T, TKey extends KeyOf<C> = KeyOf<C>>(selector: SideEffect2<T, TKey>): SideEffect1<CollectionOf<C, T, TKey>>;
    keep<T, TKey extends KeyOf<C> = KeyOf<C>>(predicate: Function2<T, TKey, boolean>): CollectionOperator<C, T, T, TKey>;
    /**
     *
     */
    keys<TKey extends KeyOf<C>>(): Function1<CollectionOf<C, unknown, TKey>, Iterable<TKey>>;
    /**
     * Returns a CollectionOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     */
    map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function2<TA, TKey, TB>): CollectionOperator<C, TA, TB, TKey>;
    /**
     */
    reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<CollectionOf<C, T, TKey>, TAcc>;
    /**
     *
     */
    toDictionary<T, TKey extends KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, DictionaryLike<TKey, T>>;
    /**
     *
     */
    toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, ReadonlyMap<TKey, T>>;
    /**
     *
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, Iterable<T>>;
}
/**
 * @noInheritDoc
 */
export interface DictionaryCollectionModule<C extends CollectionType> extends CollectionModule<C> {
    fromEntries<T, TKey extends KeyOf<C>>(): Function1<Iterable<Tuple2<TKey, T>>, CollectionOf<C, T, TKey>>;
    union<TKey extends string | symbol, T>(m2: CollectionOf<C, T, TKey>): Function1<CollectionOf<C, T, TKey>, CollectionOf<C, T, TKey>>;
}
