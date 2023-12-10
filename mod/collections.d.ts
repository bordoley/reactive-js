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
export declare const KeyedLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface KeyedLike<TKey = unknown, T = unknown> extends CollectionLike<T> {
    [KeyedLike_get](index: TKey): T;
}
export declare const AssociativeLike_keys: unique symbol;
/**
 * @noInheritDoc
 */
export interface AssociativeLike<TKey = unknown, T = unknown> extends KeyedLike<TKey, T> {
    readonly [AssociativeLike_keys]: EnumerableLike<TKey>;
}
/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeLike<TKey, Optional<T>> {
    [EnumerableLike_enumerate](): EnumeratorLike<T>;
    [Symbol.iterator](): Iterator<T>;
}
/**
 * @noInheritDoc
 */
export interface IndexedLike<T = unknown> extends KeyedLike<number, T> {
}
export declare const MutableKeyedLike_set: unique symbol;
export interface MutableKeyedLike<TKey = unknown, T = unknown> extends KeyedLike<TKey, T> {
    [MutableKeyedLike_set](key: TKey, value: T): T;
}
export interface MutableIndexedLike<T = unknown> extends IndexedLike<T>, MutableKeyedLike<number, T> {
}
export declare const KeyedCollection_T: unique symbol;
export declare const KeyedCollection_type: unique symbol;
export declare const KeyedCollection_TKey: unique symbol;
/**
 * @noInheritDoc
 * @category Collection
 */
export interface KeyedCollection<TKey = unknown> {
    readonly [KeyedCollection_T]?: unknown;
    readonly [KeyedCollection_type]?: unknown;
    readonly [KeyedCollection_TKey]?: TKey;
}
/**
 * @category Collection
 */
export type KeyOf<C extends KeyedCollection> = NonNullable<C[typeof KeyedCollection_TKey]>;
/**
 * @category Collection
 */
export type KeyedCollectionOf<C extends KeyedCollection, T, TKey extends KeyOf<C> = KeyOf<C>> = C extends {
    readonly [KeyedCollection_type]?: unknown;
} ? NonNullable<(C & {
    readonly [KeyedCollection_T]: T;
    readonly [KeyedCollection_TKey]: TKey;
})[typeof KeyedCollection_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * Utility type for a generic operator function that transforms a Collection's inner value type.
 * @category Collection
 */
export type KeyedCollectionOperator<C extends KeyedCollection, TA, TB, TKey extends KeyOf<C> = KeyOf<C>> = Function1<KeyedCollectionOf<C, TA, TKey>, KeyedCollectionOf<C, TB, TKey>>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface KeyedCollectionModule<C extends KeyedCollection> {
    /**
     * Return an Collection that emits no items.
     *
     * @category Constructor
     */
    empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedCollectionOf<C, T, TKey>;
    /**
     * @category Transform
     */
    entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedCollectionOf<C, T, TKey>, EnumerableLike<Tuple2<TKey, T>>>;
    /**
     *
     * @category Transform
     */
    keys<TKey extends KeyOf<C>>(): Function1<KeyedCollectionOf<C, unknown, TKey>, EnumerableLike<TKey>>;
    /**
     *
     * @category Transform
     */
    keySet<TKey extends KeyOf<C>>(): Function1<KeyedCollectionOf<C, unknown, TKey>, ReadonlySet<TKey>>;
    /**
     * Returns a KeyedCollectionOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function2<TA, TKey, TB>): KeyedCollectionOperator<C, TA, TB, TKey>;
    /**
     * @category Transform
     */
    reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedCollectionOf<C, T, TKey>, TAcc>;
    /**
     *
     * @category Transform
     */
    toDictionary<T, TKey extends KeyOf<C>>(): Function1<KeyedCollectionOf<C, T, TKey>, DictionaryLike<TKey, T>>;
    /**
     *
     * @category Transform
     */
    toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<KeyedCollectionOf<C, T, TKey>, ReadonlyMap<TKey, T>>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedCollectionOf<C, T, TKey>, EnumerableLike<T>>;
}
/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule<C extends KeyedCollection<number>> extends KeyedCollectionModule<C> {
    /**
     * @category Transform
     */
    entries<T, TKey extends number = number>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<C, T, TKey>, EnumerableLike<Tuple2<TKey, T>>>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<C, T, TKey>, EnumerableLike<T>>;
    /** @category Transform */
    toIndexed<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<C, T>, IndexedLike<T>>;
    /** @category Transform */
    toReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<KeyedCollectionOf<C, T>, ReadonlyArray<T>>;
}
export interface DictionaryCollectionModule<C extends KeyedCollection> extends KeyedCollectionModule<C> {
    fromEntries<T, TKey extends KeyOf<C>>(): Function1<EnumerableLike<Tuple2<TKey, T>>, KeyedCollectionOf<C, T, TKey>>;
}
