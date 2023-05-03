import { __Container_T as Container_T, __Container_type as Container_type, __EnumeratorLike_current as EnumeratorLike_current, __EnumeratorLike_hasCurrent as EnumeratorLike_hasCurrent, __EnumeratorLike_move as EnumeratorLike_move, __KeyedContainer_TKey as KeyedContainer_TKey } from "./__internal__/symbols.js";
import { Equality, Factory, Function1, Function2, Function3, Optional, Predicate, Reducer, SideEffect1, SideEffect2, TypePredicate, Updater } from "./functions.js";
export { Container_T, Container_type, EnumeratorLike_current, EnumeratorLike_hasCurrent, EnumeratorLike_move, KeyedContainer_TKey, };
/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface Container {
    readonly [Container_T]?: unknown;
    readonly [Container_type]?: unknown;
}
/**
 * A compile time only type for using a Javascript `Iterable` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface IterableContainer extends Container {
    readonly [Container_type]?: Iterable<this[typeof Container_T]>;
}
/**
 * A compile time only type for using a Javascript `AsyncIterable` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface AsyncIterableContainer extends Container {
    readonly [Container_type]?: AsyncIterable<this[typeof Container_T]>;
}
/**
 * A compile time only type for using a Javascript `PromiseLike` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface PromiseContainer extends Container {
    readonly [Container_type]?: PromiseLike<this[typeof Container_T]>;
}
/**
 * An interactive mutable enumerator that can be used to iterate
 * over an underlying source of data.
 */
export interface EnumeratorLike<T = unknown> {
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
/**
 * @noInheritDoc
 * @category Container
 */
export interface EnumeratorContainer extends Container {
    readonly [Container_type]?: EnumeratorLike<this[typeof Container_T]>;
}
/**
 * Utility type for higher order programming with Containers.
 */
export type ContainerOf<C extends Container, T> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Container_T]: T;
})[typeof Container_type]> : {
    readonly _C: C;
    readonly _T: () => T;
};
/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type ContainerOperator<C extends Container, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
/**
 * Base type for all Containers.
 *
 * @noInheritDoc
 * @category Container
 */
export interface KeyedContainer extends Container {
    readonly [KeyedContainer_TKey]?: unknown;
}
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyArrayContainer extends KeyedContainer {
    readonly [Container_type]?: ReadonlyArray<this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: number;
}
/**
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyMapContainer extends Container {
    readonly [Container_type]?: ReadonlyMap<this[typeof KeyedContainer_TKey], this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: unknown;
}
/**
 * @noInheritDoc
 */
export type ReadonlyObjectMapLike<TKey extends symbol | number | string = string, T = unknown> = {
    readonly [P in TKey]?: T;
};
/**
 * A compile time only type for using a Javascript `ReadonlyArray` as a `Container`.
 *
 * @noInheritDoc
 * @category Container
 */
export interface ReadonlyObjectMapContainer extends Container {
    readonly [Container_type]?: ReadonlyObjectMapLike<NonNullable<this[typeof KeyedContainer_TKey]>, this[typeof Container_T]>;
    readonly [KeyedContainer_TKey]?: symbol | number | string;
}
/**
 * Utility type for higher order programming with keyed-containers.
 */
export type KeyedContainerOf<C extends Container, TKey, T> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<(C & {
    readonly [Container_T]: T;
    readonly [KeyedContainer_TKey]: TKey;
})[typeof Container_type]> : {
    readonly _C: C;
    readonly _T: () => T;
    readonly _TKey: () => TKey;
};
/**
 * Utility type for a generic operator function that transforms a Container's inner value type.
 */
export type KeyedContainerOperator<C extends KeyedContainer, TKey, TA, TB> = Function1<KeyedContainerOf<C, TKey, TA>, KeyedContainerOf<C, TKey, TB>>;
export type KeyOf<C extends KeyedContainer> = C extends {
    readonly [Container_type]?: unknown;
} ? NonNullable<C[typeof KeyedContainer_TKey]> : {};
export declare namespace Container {
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Buffer<C extends Container> {
        /**
         * Returns a Container which buffers items produced by the source until the
         * number of items reaches the specified maximum buffer size.
         *
         * @category Operator
         */
        buffer: <T>(options?: {
            readonly count?: number;
        }) => ContainerOperator<C, T, readonly T[]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Concat<C extends Container> {
        /**
         * Returns a Container which emits all values from each source sequentially.
         *
         * @category Constructor
         */
        concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ConcatAll<C extends Container> {
        /**
         * Converts a higher-order Container into a first-order
         * Container by concatenating the inner sources in order.
         *
         * @category Operator
         */
        concatAll: <T>() => ContainerOperator<C, ContainerOf<C, T>, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ConcatMap<C extends Container> {
        /**
         * @category Operator
         */
        concatMap: <TA, TB>(selector: Function1<TA, ContainerOf<C, TB>>) => ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ConcatWith<C extends Container> {
        /**
         * @category Operator
         */
        concatWith: <T>(snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]) => ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Contains<C extends Container> {
        /**
         * @category Transform
         */
        contains: <T>(value: T, options?: {
            readonly equality?: Equality<T>;
        }) => Function1<ContainerOf<C, T>, boolean>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface DistinctUntilChanged<C extends Container> {
        /**
         * Returns a ContainerOperator that emits all items emitted by the source that
         * are distinct by comparison from the previous item.
         *
         * @category Operator
         */
        distinctUntilChanged<T>(options?: {
            readonly equality?: Equality<T>;
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Empty<C extends Container> {
        /**
         * Return an Container that emits no items.
         *
         * @category Constructor
         */
        empty<T>(): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface EndWith<C extends Container> {
        /**
         * @category Operator
         */
        endWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Enumerate<C extends Container, CEnumerator extends EnumeratorContainer = EnumeratorContainer> {
        /**
         *
         * @category Transform
         */
        enumerate<T>(): Function1<ContainerOf<C, T>, ContainerOf<CEnumerator, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface EverySatisfy<C extends Container> {
        /**
         * Determines whether all the members of an Container satisfy the predicate.
         * The predicate function is invoked for each element in the Container until the
         * it returns false, or until the end of the Container.
         *
         * @param predicate
         * @category Transform
         */
        everySatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface First<C extends Container> {
        /**
         *
         * @category Transform
         */
        first<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FlatMapIterable<C extends Container> {
        /**
         * @category Operator
         */
        flatMapIterable: <TA, TB>(selector: Function1<TA, Iterable<TB>>) => ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForEach<C extends Container> {
        /**
         * Returns a ContainerOperator that applies the side effect function to each
         * value emitted by the source.
         *
         * @category Operator
         */
        forEach<T>(effect: SideEffect1<T>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForkConcat<C extends Container> {
        /**
         * @category Operator
         */
        forkConcat<TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ForkZip<C extends Container> {
        /**
         * @category Operator
         */
        forkZip<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [TA, TB]>;
        forkZip<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [TA, TB, TC]>;
        forkZip<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [TA, TB, TC, TD]>;
        forkZip<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE]>;
        forkZip<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromAsyncIterable<C extends Container> {
        /**
         * @category Constructor
         */
        fromAsyncIterable<T>(): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromEnumeratorFactory<C extends Container> {
        /**
         * @category Constructor
         */
        fromEnumeratorFactory<T>(factory: Factory<EnumeratorLike<T>>): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromFactory<C extends Container> {
        /**
         * @category Constructor
         */
        fromFactory<T>(factory: Factory<T>): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromIterable<C extends Container> {
        /**
         * @category Constructor
         */
        fromIterable<T>(): Function1<Iterable<T>, ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromOptional<C extends Container> {
        /**
         * @category Constructor
         */
        fromOptional<T>(): Function1<Optional<T>, ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromReadonlyArray<C extends Container> {
        /**
         * @category Constructor
         */
        fromReadonlyArray<T>(options?: {
            readonly start?: number;
            readonly count?: number;
        }): Function1<readonly T[], ContainerOf<C, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Generate<C extends Container> {
        /**
         * Generates a Container from a generator function
         * that is applied to an accumulator value between emitted items.
         *
         * @param generator - The generator function.
         * @param initialValue - Factory function used to generate the initial accumulator.
         *
         * @category Constructor
         */
        generate<T>(generator: Updater<T>, initialValue: Factory<T>): ContainerOf<C, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Identity<C extends Container> {
        /**
         * @category Operator
         */
        identity<T>(): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface IgnoreElements<C extends Container> {
        /**
         * @category Operator
         */
        ignoreElements<T>(): ContainerOperator<C, unknown, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Keep<C extends Container> {
        /**
         * Returns a ContainerOperator that only emits items produced by the
         * source that satisfy the specified predicate.
         *
         * @category Operator
         */
        keep<T>(predicate: Predicate<T>): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface KeepType<C extends Container> {
        /**
         *
         * @category Operator
         */
        keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Last<C extends Container> {
        /**
         *
         * @category Transform
         */
        last<T>(): Function1<ContainerOf<C, T>, Optional<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Map<C extends Container> {
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
        map<TA, TB>(selector: Function1<TA, TB>): ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface MapTo<C extends Container> {
        /**
         * @category Operator
         */
        mapTo<TA, TB>(value: TB): ContainerOperator<C, TA, TB>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface NoneSatisfy<C extends Container> {
        /**
         * @category Transform
         */
        noneSatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Pairwise<C extends Container> {
        /**
         * @category Operator
         */
        pairwise<T>(): ContainerOperator<C, T, readonly [T, T]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Pick<C extends Container> {
        /**
         * @category Operator
         */
        pick<T, TKey extends keyof T>(key: TKey): ContainerOperator<C, T, T[TKey]>;
        pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ContainerOperator<C, T, T[TKeyA][TKeyB]>;
        pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ContainerOperator<C, T, T[TKeyA][TKeyB][TKeyC]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Reduce<C extends Container> {
        /**
         * @category Transform
         */
        reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<ContainerOf<C, T>, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Repeat<C extends Container> {
        /**
         * Returns a Container that mirrors the source, repeating it whenever the predicate returns true.
         *
         * @param predicate
         *
         * @category Operator
         */
        repeat<T>(predicate: Predicate<number>): ContainerOperator<C, T, T>;
        /**
         * Returns a Container that mirrors the source, repeating it `count` times.
         *
         * @param count
         *
         * @category Operator
         */
        repeat<T>(count: number): ContainerOperator<C, T, T>;
        /**
         * Returns a Container that mirrors the source, continually repeating it.
         *
         * @category Operator
         */
        repeat<T>(): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Scan<C extends Container> {
        /**
         * Returns a Container that applies an accumulator function over the source,
         * and emits each intermediate result.
         *
         * @param scanner - The accumulator function called on each source value.
         * @param initialValue - The initial accumulation value.
         *
         * @category Operator
         */
        scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ContainerOperator<C, T, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface SkipFirst<C extends Container> {
        /**
         * Returns a Container that skips the first count items emitted by the source.
         *
         * @category Operator
         */
        skipFirst<T>(options?: {
            readonly count?: number;
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface SomeSatisfy<C extends Container> {
        /**
         * @category Transform
         */
        someSatisfy<T>(predicate: Predicate<T>): Function1<ContainerOf<C, T>, boolean>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface StartWith<C extends Container> {
        /**
         * @category Operator
         */
        startWith<T>(value: T, ...values: readonly T[]): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface TakeFirst<C extends Container> {
        /**
         * Returns a Container that only emits the first `count` values emitted by the source.
         *
         * @category Operator
         */
        takeFirst<T>(options?: {
            readonly count?: number;
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface TakeLast<C extends Container> {
        /**
         *  Returns a Container that only emits the last `count` items emitted by the source.
         *
         * @category Operator
         */
        takeLast<T>(options?: {
            readonly count?: number;
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface TakeWhile<C extends Container> {
        /**
         * Returns a Container which emits values emitted by the source as long
         * as each value satisfies the given predicate, and then completes as soon as
         * this predicate is not satisfied.
         *
         * @param predicate - The predicate function.
         *
         * @category Operator
         */
        takeWhile<T>(predicate: Predicate<T>, options?: {
            readonly inclusive?: boolean;
        }): ContainerOperator<C, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToIterable<C extends Container> {
        /**
         * Converts the Container to a `IterableLike`.
         *
         * @category Transform
         */
        toIterable<T>(): Function1<ContainerOf<C, T>, Iterable<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToReadonlyArray<C extends Container> {
        /**
         * Converts the Container to a `ReadonlyArrayContainer`.
         *
         * @category Transform
         */
        toReadonlyArray<T>(): Function1<ContainerOf<C, T>, ReadonlyArray<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Zip<C extends Container> {
        /**
         * Combines multiple sources to create a Container whose values are calculated from the values,
         * in order, of each of its input sources.
         *
         * @category Constructor
         */
        zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [TA, TB]>;
        zip<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [TA, TB, TC]>;
        zip<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [TA, TB, TC, TD]>;
        zip<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [TA, TB, TC, TD, TE]>;
        zip<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF]>;
        zip<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ZipWith<C extends Container> {
        /**
         * @category Operator
         */
        zipWith<TA, TB>(b: ContainerOf<C, TB>): ContainerOperator<C, TA, readonly [TA, TB]>;
        zipWith<TA, TB, TC>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOperator<C, TA, readonly [TA, TB, TC]>;
        zipWith<TA, TB, TC, TD>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD]>;
        zipWith<TA, TB, TC, TD, TE>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE]>;
        zipWith<TA, TB, TC, TD, TE, TF>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
        zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOperator<C, TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    }
}
export declare namespace KeyedContainer {
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Empty<C extends KeyedContainer> {
        /**
         * Return an Container that emits no items.
         *
         * @category Constructor
         */
        empty<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedContainerOf<C, TKey, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Entries<C extends KeyedContainer> {
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
    interface ForEach<C extends KeyedContainer> {
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
    interface ForEachWithKey<C extends KeyedContainer> {
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
    interface FromEntries<C extends KeyedContainer> {
        /**
         * @category Constructor
         */
        fromEntries<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<EnumeratorLike<[TKey, T]>, KeyedContainerOf<C, TKey, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface FromReadonlyArray<C extends KeyedContainer> {
        /**
         * @category Constructor
         */
        fromReadonlyArray<T, TKey extends KeyOf<ReadonlyArrayContainer> = KeyOf<ReadonlyArrayContainer>>(options?: {
            readonly start?: number;
            readonly count?: number;
        }): Function1<readonly T[], KeyedContainerOf<C, TKey, T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Identity<C extends KeyedContainer> {
        /**
         * @category Operator
         */
        identity<T, TKey extends KeyOf<C> = KeyOf<C>>(): KeyedContainerOperator<C, TKey, T, T>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Keep<C extends KeyedContainer> {
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
    interface KeepType<C extends KeyedContainer> {
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
    interface KeepWithKey<C extends KeyedContainer> {
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
    interface Keys<C extends KeyedContainer> {
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
    interface KeySet<C extends KeyedContainer> {
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
    interface Map<C extends KeyedContainer> {
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
    interface MapWithKey<C extends KeyedContainer> {
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
    interface Reduce<C extends KeyedContainer> {
        /**
         * @category Transform
         */
        reduce<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ReduceWithKey<C extends KeyedContainer> {
        /**
         * @category Transform
         */
        reduceWithKey<T, TAcc, TKey extends KeyOf<C> = KeyOf<C>>(reducer: Function3<TAcc, T, TKey, TAcc>, initialValue: Factory<TAcc>): Function1<KeyedContainerOf<C, TKey, T>, TAcc>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface ToReadonlyArray<C extends KeyedContainer> {
        /**
         * Converts the Container to a `ReadonlyArrayContainer`.
         *
         * @category Transform
         */
        toReadonlyArray<T, TKey extends KeyOf<C> = KeyOf<C>>(): Function1<KeyedContainerOf<C, TKey, T>, ReadonlyArray<T>>;
    }
    /**
     * @noInheritDoc
     * @category TypeClass
     */
    interface Values<C extends KeyedContainer> {
        /**
         *
         * @category Transform
         */
        values<T>(): Function1<KeyedContainerOf<C, any, T>, EnumeratorLike<T>>;
    }
}
