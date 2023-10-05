import type { Factory, Function1, Function2, Function3, Optional, Tuple2 } from "./functions.js";
export declare const AssociativeCollectionLike_keys: unique symbol;
export declare const Container_T: unique symbol;
export declare const Container_type: unique symbol;
export declare const Container_TKey: unique symbol;
/**
 * @noInheritDoc
 * @category Container
 */
export interface Container<TKey = unknown> {
    readonly [Container_T]?: unknown;
    readonly [Container_type]?: unknown;
    readonly [Container_TKey]?: TKey;
}
/**
 * @category Container
 */
export type KeyOf<C extends Container> = NonNullable<C[typeof Container_TKey]>;
/**
 * @category Container
 */
export type ContainerOf<C extends Container, T, TKey extends KeyOf<C> = KeyOf<C>> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Container_T]: T;
    readonly [Container_TKey]: TKey;
})[typeof Container_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 * @category Container
 */
export type ContainerOperator<C extends Container, TA, TB, TKey extends KeyOf<C> = KeyOf<C>> = Function1<ContainerOf<C, TA, TKey>, ContainerOf<C, TB, TKey>>;
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
export interface CollectionLike<T> extends Iterable<T> {
    readonly [CollectionLike_count]: number;
}
export declare const KeyedCollectionLike_get: unique symbol;
/**
 * @noInheritDoc
 */
export interface KeyedCollectionLike<TKey = unknown, T = unknown> extends CollectionLike<T> {
    [KeyedCollectionLike_get](index: TKey): T;
}
/**
 * @noInheritDoc
 */
export interface AssociativeCollectionLike<TKey = unknown, T = unknown> extends KeyedCollectionLike<TKey, T> {
    [AssociativeCollectionLike_keys](): Iterator<TKey>;
}
/**
 * @noInheritDoc
 */
export interface DictionaryLike<TKey = unknown, T = unknown> extends AssociativeCollectionLike<TKey, Optional<T>> {
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
export interface CollectionModule<C extends Container> {
    /**
     * Return an Container that emits no items.
     *
     * @category Constructor
     */
    empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): ContainerOf<C, T, TKey>;
    /**
     * @category Transform
     */
    entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<ContainerOf<C, T, TKey>, Iterator<Tuple2<TKey, T>>>;
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T, TKey extends KeyOf<C> = KeyOf<C>>(predicate: Function2<T, TKey, boolean>): ContainerOperator<C, T, T, TKey>;
    /**
     * Returns a ContainerOperator that applies the `selector` function to each
     * value emitted by the source.
     *
     * @param selector - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function2<TA, TKey, TB>): ContainerOperator<C, TA, TB, TKey>;
    /**
     * @category Transform
     */
    reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<ContainerOf<C, T, TKey>, TAcc>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<ContainerOf<C, T, TKey>, Iterator<T>>;
    /**
     *
     * @category Transform
     */
    keys<TKey extends KeyOf<C>>(): Function1<ContainerOf<C, unknown, TKey>, Iterator<TKey>>;
    /**
     *
     * @category Transform
     */
    keySet<TKey extends KeyOf<C>>(): Function1<ContainerOf<C, unknown, TKey>, ReadonlySet<TKey>>;
    /**
     *
     * @category Transform
     */
    toDictionary<T, TKey extends KeyOf<C>>(): Function1<ContainerOf<C, T, TKey>, DictionaryLike<TKey, T>>;
    /**
     *
     * @category Transform
     */
    toReadonlyMap<T, TKey extends KeyOf<C>>(): Function1<ContainerOf<C, T, TKey>, ReadonlyMap<TKey, T>>;
}
/**
 * @noInheritDoc
 * @category Module
 */
export interface IndexedCollectionModule<C extends Container<number>> extends CollectionModule<C> {
    /**
     * @category Transform
     */
    entries<T, TKey extends number = number>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ContainerOf<C, T, TKey>, Iterator<Tuple2<TKey, T>>>;
    /**
     *
     * @category Transform
     */
    values<T, TKey extends KeyOf<C> = KeyOf<C>>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ContainerOf<C, T, TKey>, Iterator<T>>;
    /** @category Transform */
    toIndexedCollection<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ContainerOf<C, T>, IndexedCollectionLike<T>>;
    /** @category Transform */
    toReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ContainerOf<C, T>, ReadonlyArray<T>>;
}
