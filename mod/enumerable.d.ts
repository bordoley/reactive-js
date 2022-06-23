import { AbstractDisposableContainer, ConcatAll, FromArray, FromArrayOptions, FromIterator, FromIterable, Generate, Repeat, TakeLast, Zip, ContainerLike, Container, ContainerOf, Concat, DistinctUntilChanged, Keep, Map, Pairwise, Scan, SkipFirst, TakeFirst, TakeWhile, ThrowIfEmpty, Using } from "./container.mjs";
import { Function1, Factory, Updater, Predicate, Equality, SideEffect1, Reducer } from "./functions.mjs";
import { LiftedStateLike, AbstractLiftable, LiftableLike } from "./liftable.mjs";
import { Option } from "./option.mjs";
import { RunnableLike, ToRunnable } from "./runnable.mjs";
declare abstract class Enumerator<T> extends AbstractDisposableContainer implements LiftedStateLike {
    abstract get current(): T;
    abstract get hasCurrent(): boolean;
    abstract move(): boolean;
}
declare abstract class AbstractEnumerator<T> extends Enumerator<T> {
    private _current;
    private _hasCurrent;
    constructor();
    get current(): T;
    set current(v: T);
    get hasCurrent(): boolean;
    reset(): void;
    abstract move(): boolean;
}
declare const enumerate: <T>(enumerable: EnumerableLike<T>) => Enumerator<T>;
declare const current: <T>(enumerator: Enumerator<T>) => T;
declare const hasCurrent: <T>(enumerator: Enumerator<T>) => boolean;
declare const move: <T>(enumerator: Enumerator<T>) => boolean;
declare abstract class AbstractEnumerable<T> extends AbstractLiftable<Enumerator<T>> implements EnumerableLike<T> {
    abstract enumerate(this: EnumerableLike<T>): Enumerator<T>;
}
/**
 * Converts a higher-order EnumerableLike into a first-order EnumerableLike.
 */
declare const concatAll: <T>() => EnumerableOperator<EnumerableLike<T>, T>;
declare const concatAllT: ConcatAll<EnumerableLike<unknown>>;
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
declare const fromIteratorT: FromIterator<EnumerableLike<unknown>>;
/**
 * Converts a javascript Iterable to an EnumerableLike.
 *
 * @param iterable
 */
declare const fromIterable: <T>() => Function1<Iterable<T>, EnumerableLike<T>>;
declare const fromIterableT: FromIterable<EnumerableLike<unknown>>;
/**
 * Generates an EnumerableLike from a generator function
 * that is applied to an accumulator value.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 */
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>) => EnumerableLike<T>;
declare const generateT: Generate<EnumerableLike<unknown>>;
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
declare const repeatT: Repeat<EnumerableLike<unknown>>;
/**
 * Returns an EnumerableLike that only yields the last `count` items yielded by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
declare const takeLastT: TakeLast<EnumerableLike<unknown>>;
declare const toRunnable: <T>() => Function1<EnumerableLike<T>, RunnableLike<T>>;
declare const toRunnableT: ToRunnable<EnumerableLike<unknown>>;
/**
 * Converts an EnumerableLike into a javascript Iterable.
 */
declare const toIterable: <T>() => Function1<EnumerableLike<T>, Iterable<T>>;
declare const zipEnumerators: (enumerators: readonly Enumerator<unknown>[]) => Enumerator<readonly unknown[]>;
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
declare const zipT: Zip<EnumerableLike<unknown>>;
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T> extends LiftableLike {
    readonly T: unknown;
    readonly type: EnumerableLike<this["T"]>;
    readonly liftedStateType: Enumerator<this["T"]>;
    /**
     * Returns an `EnumeratorLike` to iterate through the Container.
     */
    enumerate(this: EnumerableLike<T>): Enumerator<T>;
}
/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
declare type EnumerableOperator<TA, TB> = Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
interface ToEnumerable<C extends ContainerLike> extends Container<C> {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
declare const toEnumerable: <T>() => Function1<EnumerableLike<T>, EnumerableLike<T>>;
declare const type: EnumerableLike<unknown>;
/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
declare function concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
declare const concatT: Concat<EnumerableLike<unknown>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T>;
}) => EnumerableOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => EnumerableOperator<T, T>;
declare const keepT: Keep<EnumerableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => EnumerableOperator<TA, TB>;
declare const mapT: Map<EnumerableLike<unknown>>;
declare const onNotify: <T>(onNotify: SideEffect1<T>) => EnumerableOperator<T, T>;
declare const pairwise: <T>() => EnumerableOperator<T, [
    Option<T>,
    T
]>;
declare const pairwiseT: Pairwise<EnumerableLike<unknown>>;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => EnumerableOperator<T, TAcc>;
declare const scanT: Scan<EnumerableLike<unknown>>;
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
declare const skipFirstT: SkipFirst<EnumerableLike<unknown>>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => EnumerableOperator<T, T>;
declare const takeFirstT: TakeFirst<EnumerableLike<unknown>>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => EnumerableOperator<T, T>;
declare const takeWhileT: TakeWhile<EnumerableLike<unknown>>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => EnumerableOperator<T, T>;
declare const throwIfEmptyT: ThrowIfEmpty<EnumerableLike<unknown>>;
declare const using: Using<EnumerableLike<unknown>>["using"];
declare const usingT: Using<EnumerableLike<unknown>>;
export { AbstractEnumerable, AbstractEnumerator, EnumerableLike, EnumerableOperator, Enumerator, ToEnumerable, concat, concatAll, concatAllT, concatT, current, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromIterable, fromIterableT, fromIterator, fromIteratorT, generate, generateT, hasCurrent, keep, keepT, map, mapT, move, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toIterable, toRunnable, toRunnableT, type, using, usingT, zip, zipEnumerators, zipT };
