import { __KeyedContainerLike_TKey as KeyedContainerLike_TKey } from "./__internal__/symbols.js";
import { ContainerLike, ContainerLike_T, ContainerLike_type, EnumeratorLike } from "./containers.js";
import { Factory, Function1, Function2, Function3, Predicate, Reducer, SideEffect1, SideEffect2, TypePredicate } from "./functions.js";
export { KeyedContainerLike_TKey };
/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface KeyedContainerLike extends ContainerLike {
    readonly [KeyedContainerLike_TKey]?: unknown;
}
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainerLike extends KeyedContainerLike {
    readonly [ContainerLike_type]?: ReadonlyArray<this[typeof ContainerLike_T]>;
    readonly [KeyedContainerLike_TKey]?: number;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyMapContainerLike extends ContainerLike {
    readonly [ContainerLike_type]?: ReadonlyMap<this[typeof KeyedContainerLike_TKey], this[typeof ContainerLike_T]>;
    readonly [KeyedContainerLike_TKey]?: unknown;
}
/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<TKey extends symbol | number | string = string, T = unknown> = {
    readonly [P in TKey]?: T;
};
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `ContainerLike`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyObjectMapContainerLike extends ContainerLike {
    readonly [ContainerLike_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedContainerLike_TKey]>, this[typeof ContainerLike_T]>;
    readonly [KeyedContainerLike_TKey]?: symbol | number | string;
}
/**
 * Utility type for higher order programming with keyed-containers.
 */
export type KeyedContainerOf<C extends ContainerLike, TKey, T> = C extends {
    readonly [ContainerLike_type]?: unknown;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
    readonly [KeyedContainerLike_TKey]: TKey;
})[typeof ContainerLike_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type KeyedContainerOperator<C extends KeyedContainerLike, TKey, TA, TB> = Function1<KeyedContainerOf<C, TKey, TA>, KeyedContainerOf<C, TKey, TB>>;
export type KeyOf<C extends KeyedContainerLike> = C extends {
    readonly [ContainerLike_type]?: unknown;
} ? NonNullable<C[typeof KeyedContainerLike_TKey]> : {};
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Empty<C extends KeyedContainerLike> {
    /**
     * Return an ContainerLike that emits no items.
     *
     * @category Constructor
     */
    empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedContainerOf<C, TKey, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Entries<C extends KeyedContainerLike> {
    /**
     *
     * @category Transform
     */
    entries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedContainerOf<C, TKey, T>, EnumeratorLike<[TKey, T]>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForEach<C extends KeyedContainerLike> {
    /**
     * Returns a ContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T, TKey extends KeyOf<C> = KeyOf<C>>(effect: SideEffect1<T>): KeyedContainerOperator<C, TKey, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ForEachWithKey<C extends KeyedContainerLike> {
    /**
     * Returns a KeyedContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEachWithKey<T, TKey extends KeyOf<C> = KeyOf<C>>(effect: SideEffect2<T, TKey>): KeyedContainerOperator<C, TKey, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromEntries<C extends KeyedContainerLike> {
    /**
     * @category Constructor
     */
    fromEntries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<EnumeratorLike<[TKey, T]>, KeyedContainerOf<C, TKey, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface FromReadonlyArray<C extends KeyedContainerLike> {
    /**
     * @category Constructor
     */
    fromReadonlyArray<T, TKey extends KeyOf<ReadonlyArrayContainerLike> = KeyOf<ReadonlyArrayContainerLike>>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<readonly T[], KeyedContainerOf<C, TKey, T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Identity<C extends KeyedContainerLike> {
    /**
     * @category Operator
     */
    identity<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedContainerOperator<C, TKey, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Keep<C extends KeyedContainerLike> {
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T, TKey extends KeyOf<C> = KeyOf<C>>(predicate: Predicate<T>): KeyedContainerOperator<C, TKey, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeepType<C extends KeyedContainerLike> {
    /**
     *
     * @category Operator
     */
    keepType<TA, TB extends TA, TKey extends KeyOf<C> = KeyOf<C>>(predicate: TypePredicate<TA, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeepWithKey<C extends KeyedContainerLike> {
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keepWithKey<T, TKey extends KeyOf<C> = KeyOf<C>>(predicate: Function2<T, TKey, boolean>): KeyedContainerOperator<C, TKey, T, T>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Keys<C extends KeyedContainerLike> {
    /**
     *
     * @category Transform
     */
    keys<TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedContainerOf<C, TKey, unknown>, EnumeratorLike<TKey>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface KeySet<C extends KeyedContainerLike> {
    /**
     *
     * @category Transform
     */
    keySet<TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedContainerOf<C, TKey, unknown>, ReadonlySet<TKey>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Map<C extends KeyedContainerLike> {
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
    map<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function1<TA, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface MapWithKey<C extends KeyedContainerLike> {
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
    mapWithKey<TA, TB, TKey extends KeyOf<C> = KeyOf<C>>(selector: Function2<TA, TKey, TB>): KeyedContainerOperator<C, TKey, TA, TB>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Reduce<C extends KeyedContainerLike> {
    /**
     * @category Transform
     */
    reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ReduceWithKey<C extends KeyedContainerLike> {
    /**
     * @category Transform
     */
    reduceWithKey<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface ToReadonlyArray<C extends KeyedContainerLike> {
    /**
     * Converts the ContainerLike to a `ReadonlyArrayContainerLike`.
     *
     * @category Transform
     */
    toReadonlyArray<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedContainerOf<C, TKey, T>, ReadonlyArray<T>>;
}
/**
 * @noInheritDoc
 * @category TypeClass
 */
export interface Values<C extends KeyedContainerLike> {
    /**
     *
     * @category Transform
     */
    values<T>(): Function1<KeyedContainerOf<C, any, T>, EnumeratorLike<T>>;
}
