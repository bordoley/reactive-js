import { Buffer, ConcatAll, FromArrayOptions, FromArray, Generate, Repeat, TakeLast, ToIterable, Zip, ContainerLike, Container, ContainerOf, Concat, DistinctUntilChanged, Keep, Map, Pairwise, Scan, SkipFirst, TakeFirst, TakeWhile } from "./container.mjs";
import { Enumerator } from "./enumerator.mjs";
import { Factory, Function1, Updater, Predicate, Equality, SideEffect1, Reducer } from "./functions.mjs";
import { InteractiveContainerLike } from "./interactiveContainer.mjs";
import { FromIterator, FromIterable, ThrowIfEmpty, Using } from "./liftableContainer.mjs";
import { Option } from "./option.mjs";
import { RunnableLike, ToRunnable } from "./runnable.mjs";
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number;
}) => EnumerableOperator<T, readonly T[]>;
declare const bufferT: Buffer<EnumerableLike<unknown>>;
declare const enumerate: <T>(enumerable: EnumerableLike<T>) => Enumerator<T>;
declare const createEnumerable: <T>(enumerate: Factory<Enumerator<T>>) => EnumerableLike<T>;
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
declare const fromArray: <T>(options?: Partial<FromArrayOptions>) => Function1<readonly T[], EnumerableLike<T>>;
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
declare const toIterableT: ToIterable<EnumerableLike<unknown>>;
declare const zip: Zip<EnumerableLike<unknown>>["zip"];
declare const zipT: Zip<EnumerableLike<unknown>>;
/**
 * Interface for iterating a Container of items.
 */
interface EnumerableLike<T> extends InteractiveContainerLike {
    readonly T: unknown;
    readonly TContainerOf: EnumerableLike<this["T"]>;
    readonly TLiftableContainerState: Enumerator<this["T"]>;
    readonly TCtx: void;
    /**
     * Returns an `EnumeratorLike` to iterate through the Container.
     */
    enumerate(this: EnumerableLike<this["T"]>): Enumerator<T>;
    source(this: EnumerableLike<this["T"]>, _: void): Enumerator<T>;
}
/** A unary function that transforms an EnumerableLike<TA> into a EnumerableLike<TB> */
declare type EnumerableOperator<TA, TB> = Function1<EnumerableLike<TA>, EnumerableLike<TB>>;
interface FromEnumerable<C extends ContainerLike> extends Container<C> {
    fromEnumerable<T>(): Function1<EnumerableLike<T>, ContainerOf<C, T>>;
}
interface ToEnumerable<C extends ContainerLike> extends Container<C> {
    toEnumerable<T>(): Function1<ContainerOf<C, T>, EnumerableLike<T>>;
}
/**
 * Creates an EnumerableLike which yields all values from each source sequentially.
 */
declare function concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
declare const concatT: Concat<EnumerableLike<unknown>>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T>;
}) => EnumerableOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<EnumerableLike<unknown>>;
declare const fromEnumerable: <T>() => Function1<EnumerableLike<T>, EnumerableLike<T>>;
declare const fromEnumerableT: FromEnumerable<EnumerableLike<unknown>>;
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
declare const toEnumerable: <T>() => Function1<EnumerableLike<T>, EnumerableLike<T>>;
declare const toEnumerableT: ToEnumerable<EnumerableLike<unknown>>;
declare const TContainerOf: EnumerableLike<unknown>;
declare const using: Using<EnumerableLike<unknown>>["using"];
declare const usingT: Using<EnumerableLike<unknown>>;
export { EnumerableLike, EnumerableOperator, FromEnumerable, TContainerOf, ToEnumerable, buffer, bufferT, concat, concatAll, concatAllT, concatT, createEnumerable, distinctUntilChanged, distinctUntilChangedT, enumerate, fromArray, fromArrayT, fromEnumerable, fromEnumerableT, fromIterable, fromIterableT, fromIterator, fromIteratorT, generate, generateT, keep, keepT, map, mapT, onNotify, pairwise, pairwiseT, repeat, repeatT, scan, scanT, skipFirst, skipFirstT, takeFirst, takeFirstT, takeLast, takeLastT, takeWhile, takeWhileT, throwIfEmpty, throwIfEmptyT, toEnumerable, toEnumerableT, toIterable, toIterableT, toRunnable, toRunnableT, using, usingT, zip, zipT };
