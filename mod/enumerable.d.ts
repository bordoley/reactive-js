import { DisposableLike } from "./disposable.mjs";
import { FromArray, FromArrayOptions, Keep, ContainerLike, Container, ContainerOf } from "./container.mjs";
import { Equality, Function1, Factory, Updater, Predicate, Reducer } from "./functions.mjs";
import { RunnableLike } from "./runnable.mjs";
/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
declare function concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
}) => EnumerableOperator<T, T>;
declare const enumerate: <T>(enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const current: <T>(enumerator: EnumeratorLike<T>) => T;
declare const hasCurrent: <T>(enumerator: EnumeratorLike<T>) => boolean;
declare const move: <T>(enumerator: EnumeratorLike<T>) => boolean;
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
declare const concatAll: <T>() => EnumerableOperator<EnumerableLike<T>, T>;
/**
 * Returns an EnumerableLike view over the `values` array.
 *
 * @param values
 */
declare const fromArray: <T>(options?: {
    readonly startIndex?: number;
    readonly endIndex?: number;
}) => (values: readonly T[]) => EnumerableLike<T>;
declare const fromArrayT: FromArray<EnumerableLike<unknown>, FromArrayOptions>;
/**
 * Returns a single use EnumerableLike over the javascript Iterator
 * returned by the function `f`.
 *
 * @param f
 */
declare const fromIterator: <T, TReturn = any, TNext = unknown>() => Function1<Factory<Iterator<T, TReturn, TNext>>, EnumerableLike<T>>;
/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
declare const fromIterable: <T>() => Function1<Iterable<T>, EnumerableLike<T>>;
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => EnumerableLike<T>;
/**
 * Returns an EnumerableOperator that applies `operator` to
 * the EnumeratorLike returned by the source when enumerated.
 *
 * @param operator
 */
declare const lift: <TA, TB>(operator: EnumeratorOperator<TA, TB>) => EnumerableOperator<TA, TB>;
/**
 * Returns an `EnumerableLike` that only emits items from the
 * source that satisfy the specified type predicate.
 *
 * @param predicate The predicate function.
 */
declare const keep: <T>(predicate: Predicate<T>) => EnumerableOperator<T, T>;
declare const keepT: Keep<EnumerableLike<unknown>>;
/**
 * Returns an `EnumerableLike` that applies the `mapper` function to each
 * value emitted by the source.
 *
 * @param mapper The map function to apply each value. Must be a pure function.
 */
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => EnumerableOperator<TA, TB>;
/**
 * Returns an EnumerableLike that applies the predicate function each time the source
 * completes to determine if the enumerable should be repeated.
 *
 * @param predicate The predicate function to apply.
 */
declare function repeat<T>(predicate: Predicate<number>): EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike that repeats the source count times.
 * @param count
 */
declare function repeat<T>(count: number): EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike` that continually repeats the source.
 */
declare function repeat<T>(): EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => EnumerableOperator<T, TAcc>;
/**
 * Returns an EnumerableLike that skips the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike that only yields the first `count` values emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike that only yields the last `count` items yielded by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
/**
 * Returns an EnumerableLike which yields values emitted by the source as long
 * as each value satisfies the given predicate.
 *
 * @param predicate The predicate function.
 */
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => EnumerableOperator<T, T>;
declare const toRunnable: <T>() => Function1<EnumerableLike<T>, RunnableLike<T>>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: <T>() => Function1<EnumerableLike<T>, Iterable<T>>;
declare function zipEnumerators(enumerators: readonly EnumeratorLike<unknown>[]): EnumeratorLike<readonly unknown[]>;
declare function zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<[
    TA,
    TB
]>;
declare function zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<[
    TA,
    TB,
    TC
]>;
declare function zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD
]>;
declare function zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH,
    TI
]>;
/**
 * Inteface that enables iteration over a Container.
 */
interface EnumeratorLike<T> extends DisposableLike {
    /**
     * The current item, if present, at the current position of the enumerator.
     */
    readonly current: T;
    /**
     * `true` if the current the enumerator has a current value, otherwise `false`.
     */
    readonly hasCurrent: boolean;
    /**
     * Advances the enumerator to the next item.
     *
     * @returns `true` if the enumerator was successfully advanced to the next item, otherwise `false`.
     */
    move(this: EnumeratorLike<T>): boolean;
}
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T> extends ContainerLike {
    readonly T: unknown;
    readonly type: EnumerableLike<this["T"]>;
    /**
     * Returns an `EnumeratorLike` to iterate through the Container.
     */
    enumerate(this: EnumerableLike<T>): EnumeratorLike<T>;
}
/** A unary function that transforms an EnumeratorLike<TA> into a EnumeratorLike<TB> */
declare type EnumeratorOperator<TA, TB> = Function1<EnumeratorLike<TA>, EnumeratorLike<TB>>;
/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
declare type EnumerableOperator<TA, TB> = Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
interface ToEnumerable<C extends ContainerLike> extends Container<C> {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
declare const toEnumerable: <T>() => Function1<EnumerableLike<T>, EnumerableLike<T>>;
declare const type: EnumerableLike<unknown>;
export { EnumerableLike, EnumerableOperator, EnumeratorLike, EnumeratorOperator, ToEnumerable, concat, concatAll, current, distinctUntilChanged, enumerate, fromArray, fromArrayT, fromIterable, fromIterator, generate, hasCurrent, keep, keepT, lift, map, move, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, toEnumerable, toIterable, toRunnable, type, zip, zipEnumerators };
