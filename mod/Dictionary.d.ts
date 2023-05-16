import { Function1, SideEffect1, SideEffect2 } from "./functions.js";
import { DictionaryContainer, DictionaryLike, EnumeratorLike, KeyedContainerOf, KeyedContainerOperator, KeyedContainer_TKey } from "./types.js";
export type Type<TKey = unknown> = DictionaryContainer<TKey>;
export type TKeyBase = NonNullable<Type[typeof KeyedContainer_TKey]>;
export interface DictionaryModule<TKey extends TKeyBase = TKeyBase> {
    /**
     *
     * @category Transform
     */
    entries<T, TKey extends TKeyBase>(): Function1<KeyedContainerOf<Type, TKey, T>, EnumeratorLike<[TKey, T]>>;
    /**
     * Returns a ContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T, TKey extends TKeyBase>(effect: SideEffect1<T>): KeyedContainerOperator<Type, TKey, T, T>;
    /**
     * Returns a KeyedContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEachWithKey<T, TKey extends TKeyBase>(effect: SideEffect2<T, TKey>): KeyedContainerOperator<Type, TKey, T, T>;
    /**
     *
     * @category Transform
     */
    keys<TKey extends TKeyBase>(): Function1<DictionaryLike<TKey, unknown>, EnumeratorLike<TKey>>;
    /**
     *
     * @category Transform
     */
    keySet<TKey extends TKeyBase>(): Function1<DictionaryLike<TKey, unknown>, ReadonlySet<TKey>>;
    /**
     *
     * @category Transform
     */
    values<T>(): Function1<DictionaryLike<TKey, T>, EnumeratorLike<T>>;
}
export type Signature = DictionaryModule;
export declare const entries: Signature["entries"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const keys: Signature["keys"];
export declare const keySet: Signature["keySet"];
export declare const values: Signature["values"];
