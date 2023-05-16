import { Function1, TypePredicate } from "./functions.js";
import { EnumerableContainerTypeClass, KeyedContainerTypeClass } from "./type-classes.js";
import { ContainerOperator, DisposableLike, EnumerableLike, EnumeratorLike, KeyOf, KeyedContainerOperator, PauseableObservableLike, QueueableLike, QueueableLike_backpressureStrategy, ReadonlyArrayContainer, RunnableLike, SchedulerLike } from "./types.js";
export type Type = ReadonlyArrayContainer;
export type TKeyBase = KeyOf<Type>;
export interface ReadonlyArrayModule extends KeyedContainerTypeClass<Type>, Omit<EnumerableContainerTypeClass<Type>, keyof KeyedContainerTypeClass<Type> | "enumerate" | "keepType"> {
    /**
     *
     * @category Transform
     */
    enumerate<T>(options?: {
        readonly start?: number;
        readonly count?: number;
    }): Function1<ReadonlyArray<T>, EnumeratorLike<T>>;
    flow<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ReadonlyArray<T>, PauseableObservableLike<T> & DisposableLike>;
    /**
     * @category Operator
     */
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ContainerOperator<Type, TA, TB>;
    /**
     * @category Operator
     */
    keepType<TA, TB extends TA, TKey extends TKeyBase>(predicate: TypePredicate<TA, TB>): KeyedContainerOperator<Type, TKey, TA, TB>;
    /** @category Transform */
    toIterable<T>(options?: {
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, Iterable<T>>;
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
}
export type Signature = ReadonlyArrayModule;
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
export declare const fromEnumeratorFactory: Signature["fromEnumeratorFactory"];
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
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const someSatisfy: Signature["someSatisfy"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toIterable: Signature["toIterable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toObservable: Signature["toObservable"];
export declare const values: Signature["values"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
