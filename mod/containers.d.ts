import { Optional, Function1, Factory, Equality, Predicate, SideEffect1, Updater, Reducer } from "./functions.js";
import { DisposableLike } from "./util.js";
/**  @ignore */
declare const ContainerLike_T: unique symbol;
/**  @ignore */
declare const ContainerLike_type: unique symbol;
/**
 * @category Container
 */
interface ContainerLike {
    readonly [ContainerLike_T]?: unknown;
    readonly [ContainerLike_type]?: unknown;
}
/**
 * @category Container
 */
interface AsyncIterableLike<T = unknown> extends ContainerLike, AsyncIterable<T> {
    readonly [ContainerLike_type]?: AsyncIterableLike<this[typeof ContainerLike_T]>;
}
/**
 * @category Container
 */
interface IterableLike<T = unknown> extends ContainerLike, Iterable<T> {
    readonly [ContainerLike_type]?: IterableLike<this[typeof ContainerLike_T]>;
}
/**
 * @category Container
 */
interface PromiseableLike<T = unknown> extends ContainerLike, PromiseLike<T> {
    readonly [ContainerLike_type]?: PromiseableLike<this[typeof ContainerLike_T]>;
}
/**
 * @category Container
 */
interface ReadonlyArrayLike<T = unknown> extends ContainerLike, ReadonlyArray<T> {
    readonly [ContainerLike_type]?: ReadonlyArrayLike<this[typeof ContainerLike_T]>;
}
/**  @ignore */
declare const SequenceLike_data: unique symbol;
/**  @ignore */
declare const SequenceLike_next: unique symbol;
/**
 * @category Container
 */
interface SequenceLike<T = unknown> extends ContainerLike {
    readonly [ContainerLike_type]?: SequenceLike<this[typeof ContainerLike_T]>;
    (): Optional<{
        readonly [SequenceLike_data]: T;
        readonly [SequenceLike_next]: SequenceLike<T>;
    }>;
}
/**  @ignore */
declare const StatefulContainerLike_state: unique symbol;
/**
 * @category Container
 */
interface StatefulContainerLike extends ContainerLike {
    readonly [StatefulContainerLike_state]?: DisposableLike;
}
type ContainerOf<C extends ContainerLike, T> = C extends {
    readonly [ContainerLike_type]?: unknown;
} ? NonNullable<(C & {
    readonly [ContainerLike_T]: T;
})[typeof ContainerLike_type]> : {
    readonly _C: C;
    readonly _T: () => T;
};
type ContainerOperator<C extends ContainerLike, TA, TB> = Function1<ContainerOf<C, TA>, ContainerOf<C, TB>>;
/**
 * @category TypeClass
 */
interface Container<C extends ContainerLike> {
    readonly ContainerLike_type?: C;
}
/** *
 * @category TypeClass
 */
interface Buffer<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * Returns a ContainerLike which buffers items produced by the source until either the
     * number of items reaches the specified maximum buffer size.
     *
     * @category Operator
     */
    buffer: <T>(options?: O & {
        readonly maxBufferSize?: number;
    }) => ContainerOperator<C, T, readonly T[]>;
}
/**
 * @category TypeClass
 */
interface CatchError<C extends StatefulContainerLike, O = never> extends Container<C> {
    /**
     * Returns a StatefulContainerLike which catches errors produced by the source and either continues with
     * the StatefulContainerLike returned from the `onError` callback or swallows the error if
     * void is returned.
     *
     * @param onError a function that takes source error and either returns a StatefulContainerLike
     * to continue with or void if the error should be propagated.
     *
     * @category Operator
     */
    catchError<T>(onError: Function1<unknown, ContainerOf<C, T> | void>, options?: O): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface Concat<C extends ContainerLike> extends Container<C> {
    /**
     * Returns a ContainerLike which emits all values from each source sequentially.
     *
     * @category Constructor
     */
    concat<T>(fst: ContainerOf<C, T>, snd: ContainerOf<C, T>, ...tail: readonly ContainerOf<C, T>[]): ContainerOf<C, T>;
}
/**
 * @category TypeClass
 */
interface ConcatAll<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Converts a higher-order ContainerLike into a first-order
     * ContainerLike by concatenating the inner sources in order.
     *
     * @category Operator
     */
    concatAll: <T>(options?: O) => ContainerOperator<C, ContainerOf<C, T>, T>;
}
/**
 * @category TypeClass
 */
interface DecodeWithCharset<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * @category Operator
     */
    decodeWithCharset(options?: O & {
        charset?: string;
    }): ContainerOperator<C, ArrayBuffer, string>;
}
/**
 * @category TypeClass
 */
interface Defer<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    defer<T>(factory: Factory<ContainerOf<C, T>>, options?: O): ContainerOf<C, T>;
}
/**
 * @category TypeClass
 */
interface DistinctUntilChanged<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     *  Returns a ContainerOperator that emits all items emitted by the source that
     * are distinct by comparison from the previous item.
     *
     * @category Operator
     */
    distinctUntilChanged<T>(options?: O & {
        readonly equality?: Equality<T>;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface EverySatisfy<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    everySatisfy<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, boolean>;
}
/**
 * @category TypeClass
 */
interface Empty<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Return an ContainerLike that emits no items.
     *
     * @category Constructor
     */
    empty<T>(options?: O): ContainerOf<C, T>;
}
/**
 * @category TypeClass
 */
interface ForEach<C extends StatefulContainerLike, O = never> extends Container<C> {
    /**
     * Returns a ContainerOperator that applies the side effect function to each
     * value emitted by the source.
     *
     * @category Operator
     */
    forEach<T>(effect: SideEffect1<T>, options?: O): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface ForkConcat<C extends ContainerLike> extends Container<C> {
    /**
     * @category Operator
     */
    forkConcat<TIn, TOut>(fst: ContainerOperator<C, TIn, TOut>, snd: ContainerOperator<C, TIn, TOut>, ...tail: readonly ContainerOperator<C, TIn, TOut>[]): ContainerOperator<C, TIn, TOut>;
}
/**
 * @category TypeClass
 */
interface ForkZip<C extends ContainerLike> extends Container<C> {
    /**
     * @category Operator
     */
    forkZip<T, TA, TB>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>): ContainerOperator<C, T, readonly [
        TA,
        TB
    ]>;
    forkZip<T, TA, TB, TC>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC
    ]>;
    forkZip<T, TA, TB, TC, TD>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    forkZip<T, TA, TB, TC, TD, TE>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>): ContainerOperator<C, T, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    forkZip<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOperator<C, T, TA>, b: ContainerOperator<C, T, TB>, c: ContainerOperator<C, T, TC>, d: ContainerOperator<C, T, TD>, e: ContainerOperator<C, T, TE>, f: ContainerOperator<C, T, TF>, g: ContainerOperator<C, T, TG>, h: ContainerOperator<C, T, TH>, i: ContainerOperator<C, T, TI>): ContainerOperator<C, T, readonly [
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
}
/**
 * @category TypeClass
 */
interface FromReadonlyArray<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * @category Constructor
     */
    fromReadonlyArray<T>(options?: O & {
        readonly start?: number;
        readonly count?: number;
    }): Function1<readonly T[], ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface FromAsyncIterable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromAsyncIterable<T>(options?: O): Function1<AsyncIterable<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface FromIterable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromIterable<T>(options?: O): Function1<Iterable<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface FromSequence<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Constructor
     */
    fromSequence<T>(options?: O): Function1<SequenceLike<T>, ContainerOf<C, T>>;
}
/**
 * @category TypeClass
 */
interface Generate<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Generates a ContainerLike from a generator function
     * that is applied to an accumulator value between emitted items.
     *
     * @param generator the generator function.
     * @param initialValue Factory function used to generate the initial accumulator.
     *
     * @category Constructor
     */
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: O): ContainerOf<C, T>;
}
/**
 * @category TypeClass
 */
interface Keep<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Returns a ContainerOperator that only emits items produced by the
     * source that satisfy the specified predicate.
     *
     * @category Operator
     */
    keep<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface Map<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Returns a ContainerOperator that applies the `mapper` function to each
     * value emitted by the source.
     *
     * @param mapper - A pure map function that is applied each value emitted by the source
     * @typeparam TA - The inner type of the source container
     * @typeparam TB - The inner type of the mapped container
     *
     * @category Operator
     */
    map<TA, TB>(mapper: Function1<TA, TB>, options?: O): ContainerOperator<C, TA, TB>;
}
/**
 *
 * @category TypeClass
 */
interface Never<C extends StatefulContainerLike, O = never> extends Container<C> {
    /**
     * Returns a StatefulContainerLike instance that emits no items and never disposes its state.
     *
     * @category Constructor
     */
    never<T>(options?: O): ContainerOf<C, T>;
}
/**
 * @category TypeClass
 */
interface Pairwise<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    pairwise<T>(options?: O): ContainerOperator<C, T, readonly [
        T,
        T
    ]>;
}
/**
 * @category TypeClass
 */
interface Reduce<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    reduce<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: O): ContainerOperator<C, T, TAcc>;
}
/**
 * @category TypeClass
 */
interface Repeat<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Returns a ContainerLike that mirrors the source, repeating it whenever the predicate returns true.
     *
     * @param predicate
     *
     * @category Operator
     */
    repeat<T>(predicate: Predicate<number>, options?: O): ContainerOperator<C, T, T>;
    /**
     * Returns a ContainerLike that mirrors the source, repeating it `count` times.
     *
     * @param count
     *
     * @category Operator
     */
    repeat<T>(count: number, options?: O): ContainerOperator<C, T, T>;
    /**
     * Returns a ContainerLike that mirrors the source, continually repeating it.
     *
     * @category Operator
     */
    repeat<T>(options?: O): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface Scan<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Returns a ContainerLike that applies an accumulator function over the source,
     * and emits each intermediate result.
     *
     * @param scanner The accumulator function called on each source value.
     * @param initialValue The initial accumulation value.
     *
     * @category Operator
     */
    scan<T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: O): ContainerOperator<C, T, TAcc>;
}
/**
 * @category TypeClass
 */
interface SkipFirst<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * Returns a ContainerLike that skips the first count items emitted by the source.
     *
     * @category Operator
     */
    skipFirst<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface SomeSatisfy<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * @category Operator
     */
    someSatisfy<T>(predicate: Predicate<T>, options?: O): ContainerOperator<C, T, boolean>;
}
/**
 * @category TypeClass
 */
interface TakeFirst<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * Returns a ContainerLike that only emits the first `count` values emitted by the source.
     *
     * @category Operator
     */
    takeFirst<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface TakeLast<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     *  Returns a ContainerLike that only emits the last `count` items emitted by the source.
     *
     * @category Operator
     */
    takeLast<T>(options?: O & {
        readonly count?: number;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface TakeWhile<C extends ContainerLike, O = unknown> extends Container<C> {
    /**
     * Returns a ContainerLike which emits values emitted by the source as long
     * as each value satisfies the given predicate, and then completes as soon as
     * this predicate is not satisfied.
     *
     * @param predicate The predicate function.
     *
     * @category Operator
     */
    takeWhile<T>(predicate: Predicate<T>, options?: O & {
        readonly inclusive?: boolean;
    }): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface ThrowIfEmpty<C extends StatefulContainerLike, O = never> extends Container<C> {
    /**
     * Returns a StatefulContainerLike that emits an error if the source completes without emitting a value.
     *
     * @param factory A factory function invoked to produce the error to be thrown.
     *
     * @category Operator
     */
    throwIfEmpty<T>(factory: Factory<unknown>, options?: O): ContainerOperator<C, T, T>;
}
/**
 * @category TypeClass
 */
interface ToAsyncIterable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Converts the ContainerLike to a `AsyncIterableLike`.
     *
     * @category Converter
     */
    toAsyncIterable<T>(options?: O): Function1<ContainerOf<C, T>, AsyncIterableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToIterable<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Converts the ContainerLike to a `IterableLike`.
     *
     * @category Converter
     */
    toIterable<T>(options?: O): Function1<ContainerOf<C, T>, IterableLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToReadonlyArray<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Converts the ContainerLike to a `ReadonlyArrayLike`.
     *
     * @category Converter
     */
    toReadonlyArray<T>(options?: O): Function1<ContainerOf<C, T>, ReadonlyArrayLike<T>>;
}
/**
 * @category TypeClass
 */
interface ToSequence<C extends ContainerLike, O = never> extends Container<C> {
    /**
     * Converts the ContainerLike to a `SequenceLike`.
     *
     * @category Converter
     */
    toSequence<T>(options?: O): Function1<ContainerOf<C, T>, SequenceLike<T>>;
}
/**
 * @category TypeClass
 */
interface Zip<C extends ContainerLike> extends Container<C> {
    /**
     * Combines multiple sources to create a ContainerLike whose values are calculated from the values,
     * in order, of each of its input sources.
     *
     * @category Constructor
     */
    zip<TA, TB>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>): ContainerOf<C, readonly [
        TA,
        TB
    ]>;
    zip<TA, TB, TC>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>): ContainerOf<C, readonly [
        TA,
        TB,
        TC
    ]>;
    zip<TA, TB, TC, TD>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD
    ]>;
    zip<TA, TB, TC, TD, TE>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE
    ]>;
    zip<TA, TB, TC, TD, TE, TF>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>): ContainerOf<C, readonly [
        TA,
        TB,
        TC,
        TD,
        TE,
        TF,
        TG,
        TH
    ]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ContainerOf<C, TA>, b: ContainerOf<C, TB>, c: ContainerOf<C, TC>, d: ContainerOf<C, TD>, e: ContainerOf<C, TE>, f: ContainerOf<C, TF>, g: ContainerOf<C, TG>, h: ContainerOf<C, TH>, i: ContainerOf<C, TI>): ContainerOf<C, readonly [
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
}
export { AsyncIterableLike, Buffer, CatchError, Concat, ConcatAll, Container, ContainerLike, ContainerLike_T, ContainerLike_type, ContainerOf, ContainerOperator, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ForkConcat, ForkZip, FromAsyncIterable, FromIterable, FromReadonlyArray, FromSequence, Generate, IterableLike, Keep, Map, Never, Pairwise, PromiseableLike, ReadonlyArrayLike, Reduce, Repeat, Scan, SequenceLike, SequenceLike_data, SequenceLike_next, SkipFirst, SomeSatisfy, StatefulContainerLike, StatefulContainerLike_state, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToAsyncIterable, ToIterable, ToReadonlyArray, ToSequence, Zip };
