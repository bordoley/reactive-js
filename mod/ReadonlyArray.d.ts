import { Function1, TypePredicate } from "./functions.js";
import { ConcreteKeyedContainerModule, ContainerOperator, Container_T, Container_type, EnumerableContainerModule, EnumerableLike, EnumeratorLike, KeyOf, KeyedContainer, KeyedContainerOperator, KeyedContainer_TKey, RunnableLike } from "./types.js";
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainer extends KeyedContainer {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: number;
}
export type Type = ReadonlyArrayContainer;
export type TKeyBase = KeyOf<Type>;
/**
 * @noInheritDoc
 * @category Module
 */
export interface ReadonlyArrayModule extends ConcreteKeyedContainerModule<Type>, Omit<EnumerableContainerModule<Type>, keyof ConcreteKeyedContainerModule<Type> | "enumerate" | "keepType"> {
    /** @category Transform */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): Function1<ReadonlyArray<TA>, ReadonlyArray<TB>>;
    fromIterable<T>(): Function1<Iterable<T>, readonly T[]>;
    /**
     * @category Operator
     */
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ContainerOperator<Type, TA, TB>;
    keepType<TA, TB extends TA, TKey extends TKeyBase>(predicate: TypePredicate<TA, TB>): KeyedContainerOperator<Type, TKey, TA, TB>;
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
    /** @category Transform */
    toObservable<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    toObservable<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
    /** @category Transform */
    toReadonlyArray<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, ReadonlyArray<T>>;
}
export type Signature = ReadonlyArrayModule;
export declare const buffer: Signature["buffer"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatWith: Signature["concatWith"];
export declare const contains: Signature["contains"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
export declare const entries: Signature["entries"];
export declare const enumerate: Signature["enumerate"];
export declare const everySatisfy: Signature["everySatisfy"];
export declare const first: Signature["first"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const flow: Signature["flow"];
export declare const forEach: Signature["forEach"];
export declare const forEachWithKey: Signature["forEachWithKey"];
export declare const fromEnumerable: Signature["fromEnumerable"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const keepWithKey: Signature["keepWithKey"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const mapWithKey: Signature["mapWithKey"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const noneSatisfy: Signature["noneSatisfy"];
export declare const reduce: Signature["reduce"];
export declare const reduceWithKey: Signature["reduceWithKey"];
export declare const repeat: Signature["repeat"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toIterable: Signature["toIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const values: Signature["values"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
