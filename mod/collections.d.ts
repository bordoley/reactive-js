import type { Factory, Function1, Function2, Function3, Optional, Tuple2 } from "./functions.js";
export declare const EnumeratorLike_current: unique symbol;
export declare const EnumeratorLike_hasCurrent: unique symbol;
export declare const EnumeratorLike_isCompleted: unique symbol;
export declare const EnumeratorLike_move: unique symbol;
/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 *
 * @noInheritDoc
 */
export interface EnumeratorLike<T = unknown> {
    /**
     * Indicates if the `EnumeratorLike` is completed.
     */
    readonly [EnumeratorLike_isCompleted]: boolean;
    /**
     * Returns the element if present.
     */
    readonly [EnumeratorLike_current]: T;
    /**
     * Indicates if the `EnumeratorLike` has a current value.
     */
    readonly [EnumeratorLike_hasCurrent]: boolean;
    /**
     * Advances the enumerator to the next value, if present.
     *
     * @returns true if successful, otherwise false.
     */
    [EnumeratorLike_move](): boolean;
}
export declare const EnumerableLike_enumerate: unique symbol;
/**
 * @noInheritDoc
 */
export interface EnumerableLike<T = unknown> extends Iterable<T> {
    [EnumerableLike_enumerate](): EnumeratorLike<T>;
}
export declare const Collection_T: unique symbol;
export declare const Collection_type: unique symbol;
export declare const Collection_TKey: unique symbol;
/**
 * @noInheritDoc
 * @category Collection
 */
export interface Collection<TKey = unknown> {
    readonly [Collection_T]?: unknown;
    readonly [Collection_type]?: unknown;
    readonly [Collection_TKey]?: TKey;
}
/**
 * @category Collection
 */
export type KeyOf<C extends Collection> = NonNullable<C[typeof Collection_TKey]>;
/**
 * @category Collection
 */
export type CollectionOf<C extends Collection, T, TKey extends KeyOf<C> = KeyOf<C>> = C extends {
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
 * @category Collection
 */
export type CollectionOperator<C extends Collection, TA, TB, TKey extends KeyOf<C> = KeyOf<C>> = Function1<CollectionOf<C, TA, TKey>, CollectionOf<C, TB, TKey>>;
/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<TKey extends symbol | string = string, T = unknown> = {
    readonly [P in TKey]?: T;
};
export declare const CollectionLike_count: unique symbol;
/**
 * @noInheritDoc
 */
export interface CollectionLike<T> extends EnumerableLike<T> {
    readonly [CollectionLike_count]: number;
}
export declare const KeyedCollectionLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown> extends CollectionLike<T> {
    [KeyedCollectionLike_get](index: TKey): T;
}
export declare const AssociativeCollectionLike_keys: unique symbol;
/**
 * @noInheritDoc
 */
export interface AssociativeCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    [AssociativeCollectionLike_keys](): EnumerableLike<TKey>;
}
/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeCollectionLike<TKey, Optional<T>>, Collection<T> {
    [EnumerableLike_enumerate](): EnumeratorLike<T>;
    [Symbol.iterator](): Iterator<T>;
}
/**
 * @noInheritDoc
 */
export interface IndexedCollectionLike<T = unknown> extends KeyedCollectionLike<number, T> {
}
export declare const MutableKeyedCollectionLike_set: unique symbol;
export interface MutableKeyedCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    [MutableKeyedCollectionLike_set](key: TKey, value: T): T;
}
export interface MutableIndexedCollectionLike<T = unknown> extends IndexedCollectionLike<T>, MutableKeyedCollectionLike<number, T> {
}
/**
 * @noInheritDoc
 * @category Module
 */
export interface CollectionModule<C extends Collection> {
    /**
     * Return an Collection that emits no items.
     *
     * @category Constructor
     */
    empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): CollectionOf<C, T, TKey>;
    /**
     * @category Transform
     */
    entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, EnumerableLike<Tuple2<TKey, T>>>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, EnumerableLike<T>>;
    /**
     * Returns a CollectionOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function2<TA, TKey, TB>): CollectionOperator<C, TA, TB, TKey>;
    /**
     * @category Transform
     */
    reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<CollectionOf<C, T, TKey>, TAcc>;
    /**
     *
     * @category Transform
     */
    keys<TKey extends KeyOf<C>>(): Function1<CollectionOf<C, unknown, TKey>, EnumerableLike<TKey>>;
    /**
     *
     * @category Transform
     */
    keySet<TKey extends KeyOf<C>>(): Function1<CollectionOf<C, unknown, TKey>, ReadonlySet<TKey>>;
    /**
     *
     * @category Transform
     */
    toDictionary<T, TKey extends KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, DictionaryLike<TKey, T>>;
    /**
     *
     * @category Transform
     */
    toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<CollectionOf<C, T, TKey>, ReadonlyMap<TKey, T>>;
}
/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule<C extends Collection<number>> extends CollectionModule<C> {
    /**
     * @category Transform
     */
    entries<T, TKey extends number = number>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<C, T, TKey>, EnumerableLike<Tuple2<TKey, T>>>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<C, T, TKey>, EnumerableLike<T>>;
    /** @category Transform */
    toIndexedCollection<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<C, T>, IndexedCollectionLike<T>>;
    /** @category Transform */
    toReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<CollectionOf<C, T>, ReadonlyArray<T>>;
}
