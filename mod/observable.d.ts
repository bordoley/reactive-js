import { Disposable, DisposableOrTeardown } from "./disposable.mjs";
import { Zip, Concat, FromArray, Buffer, Map, ConcatAll, Repeat, ContainerLike, Container, ContainerOf, DistinctUntilChanged, EverySatisfy, Generate, Keep, ContainerOperator, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile } from "./container.mjs";
import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6, Predicate, Equality, Updater, Reducer } from "./functions.mjs";
import { FromIterator, FromIterable, Using, Defer, CatchError, DecodeWithCharset, ThrowIfEmpty } from "./liftableContainer.mjs";
import { Observer } from "./observer.mjs";
import { Option } from "./option.mjs";
import { CreateReactiveContainer, ReactiveContainerLike } from "./reactiveContainer.mjs";
import { RunnableLike, ToRunnable } from "./runnable.mjs";
import { SchedulerLike, VirtualTimeSchedulerLike } from "./scheduler.mjs";
import { EnumerableLike, FromEnumerable, ToEnumerable } from "./enumerable.mjs";
declare const observable: <T>(computation: Factory<T>, { mode }?: {
    mode?: ObservableEffectMode | undefined;
}) => ObservableLike<T>;
declare function __memo<T>(fn: Factory<T>): T;
declare function __memo<TA, T>(fn: Function1<TA, T>, a: TA): T;
declare function __memo<TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
declare function __memo<TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
declare function __memo<TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
declare function __memo<TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __memo<TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare const __observe: <T>(observable: ObservableLike<T>) => Option<T>;
declare function __do(fn: SideEffect): void;
declare function __do<TA>(fn: SideEffect1<TA>, a: TA): void;
declare function __do<TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
declare function __do<TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
declare function __do<TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
declare function __do<TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
declare function __do<TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
declare function __using<T extends Disposable>(fn: Factory<T>): T;
declare function __using<TA, T extends Disposable>(fn: Function1<TA, T>, a: TA): T;
declare function __using<TA, TB, T extends Disposable>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
declare function __using<TA, TB, TC, T extends Disposable>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
declare function __using<TA, TB, TC, TD, T extends Disposable>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
declare function __using<TA, TB, TC, TD, TE, T extends Disposable>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
declare function __using<TA, TB, TC, TD, TE, TF, T extends Disposable>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
declare function __currentScheduler(): SchedulerLike;
declare function combineLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<[
    TA,
    TB
]>;
declare function combineLatest<TA, TB, TC, T>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<[
    TA,
    TB,
    TC
]>;
declare function combineLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<[
    TA,
    TB,
    TC,
    TD
]>;
declare function combineLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function combineLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<[
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
declare const combineLatestT: Zip<ObservableLike<unknown>>;
declare function zipLatest<TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<[
    TA,
    TB
]>;
declare function zipLatest<TA, TB, TC, T>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>): ObservableLike<[
    TA,
    TB,
    TC
]>;
declare function zipLatest<TA, TB, TC, TD>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>): ObservableLike<[
    TA,
    TB,
    TC,
    TD
]>;
declare function zipLatest<TA, TB, TC, TD, TE>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>): ObservableLike<[
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function zipLatest<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableLike<TA>, b: ObservableLike<TB>, c: ObservableLike<TC>, d: ObservableLike<TD>, e: ObservableLike<TE>, f: ObservableLike<TF>, g: ObservableLike<TG>, h: ObservableLike<TH>, i: ObservableLike<TI>): ObservableLike<[
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
declare const zipLatestT: Zip<ObservableLike<unknown>>;
declare function forkCombineLatest<T, TA, TB>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>): ObservableOperator<T, [
    TA,
    TB
]>;
declare function forkCombineLatest<T, TA, TB, TC>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>): ObservableOperator<T, [
    TA,
    TB,
    TC
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD, TE>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD, TE, TF>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>, h: ObservableOperator<T, TH>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function forkCombineLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>, h: ObservableOperator<T, TH>, i: ObservableOperator<T, TI>): ObservableOperator<T, [
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
declare function forkZipLatest<T, TA, TB>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>): ObservableOperator<T, [
    TA,
    TB
]>;
declare function forkZipLatest<T, TA, TB, TC>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>): ObservableOperator<T, [
    TA,
    TB,
    TC
]>;
declare function forkZipLatest<T, TA, TB, TC, TD>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD
]>;
declare function forkZipLatest<T, TA, TB, TC, TD, TE>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE
]>;
declare function forkZipLatest<T, TA, TB, TC, TD, TE, TF>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF
]>;
declare function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG
]>;
declare function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>, h: ObservableOperator<T, TH>): ObservableOperator<T, [
    TA,
    TB,
    TC,
    TD,
    TE,
    TF,
    TG,
    TH
]>;
declare function forkZipLatest<T, TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: ObservableOperator<T, TA>, b: ObservableOperator<T, TB>, c: ObservableOperator<T, TC>, d: ObservableOperator<T, TD>, e: ObservableOperator<T, TE>, f: ObservableOperator<T, TF>, g: ObservableOperator<T, TG>, h: ObservableOperator<T, TH>, i: ObservableOperator<T, TI>): ObservableOperator<T, [
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
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare function concat<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
declare const concatT: Concat<ObservableLike<unknown>>;
declare const createObservable: <T>(f: SideEffect1<Observer<T>>) => ObservableLike<T>;
declare const createT: CreateReactiveContainer<ObservableLike<unknown>>;
declare class Subject<T> extends Disposable implements MulticastObservableLike<T> {
    readonly replay: number;
    private readonly observers;
    private readonly replayed;
    constructor(replay?: number);
    get T(): T;
    get TContainerOf(): ObservableLike<this["T"]>;
    get TLiftableContainerState(): Observer<this["T"]>;
    readonly observableType = 0;
    get observerCount(): number;
    publish(next: T): void;
    sink(observer: Observer<T>): void;
}
declare const publish: <T>(v: T) => Function1<Subject<T>, Subject<T>>;
declare const publishTo: <T>(subject: Subject<T>) => SideEffect1<T>;
/**
 * Creates an `ObservableLike` from the given array with a specified `delay` between emitted items.
 * An optional `startIndex` in the array maybe specified,
 *
 * @param options Config object that specifies an optional `delay` between emitted items and
 * an optional `startIndex` into the array.
 */
declare const fromArray: <T>(options?: Partial<{
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
    readonly delayStart: boolean;
}>) => Function1<readonly T[], ObservableLike<T>>;
declare const fromArrayT: FromArray<ObservableLike<unknown>, {
    readonly delay: number;
    readonly startIndex: number;
    readonly endIndex: number;
}>;
/**
 * Creates an `ObservableLike` which enumerates through the values
 * produced by the provided `Enumerable` with a specified `delay` between emitted items.
 *
 * @param values The `Enumerable`.
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromEnumerable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => Function1<EnumerableLike<T>, ObservableLike<T>>;
declare const fromEnumerableT: FromEnumerable<ObservableLike<unknown>>;
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterator` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromIterator: <T, TReturn = any, TNext = unknown>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => Function1<Factory<Iterator<T, TReturn, TNext>>, ObservableLike<T>>;
declare const fromIteratorT: FromIterator<ObservableLike<unknown>, {
    readonly delay?: number;
}>;
/**
 * Creates an `ObservableLike` which iterates through the values
 * produced by the provided `Iterable` with a specified `delay` between emitted items.
 *
 * @param delay The requested delay between emitted items by the observable.
 */
declare const fromIterable: <T>(options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => Function1<Iterable<T>, ObservableLike<T>>;
declare const fromIterableT: FromIterable<ObservableLike<unknown>>;
/**
 *  Creates an `ObservableLike` which concurrently emits values from the sources.
 */
declare function merge<T>(fst: ObservableLike<T>, snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]): ObservableLike<T>;
declare const mergeT: Concat<ObservableLike<unknown>>;
declare function forkMerge<TIn, TOut>(fst: ObservableOperator<TIn, TOut>, snd: ObservableOperator<TIn, TOut>, ...tail: readonly ObservableOperator<TIn, TOut>[]): ObservableOperator<TIn, TOut>;
declare const never: <T>() => ObservableLike<T>;
/**
 * Safely subscribes to an `ObservableLike` with a `ObserverLike` instance
 * using the provided scheduler. The returned `Disposable`
 * may used to cancel the subscription.
 *
 * @param scheduler The SchedulerLike instance that should be used by the source to notify it's observer.
 */
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Disposable>;
declare const using: Using<ObservableLike<unknown>>["using"];
declare const usingT: Using<ObservableLike<unknown>>;
declare function defer<T>(factory: Factory<SideEffect1<Observer<T>>>, options?: {
    readonly delay?: number;
}): ObservableLike<T>;
declare function defer<T>(factory: Factory<ObservableLike<T>>): ObservableLike<T>;
declare const deferT: Defer<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` which buffers items produced by the source until either the
 * number of items reaches the specified maximum buffer size or the duration time expires.
 *
 * @param options A configuration object that specifies an optional `duration` function or time in ms,
 * and an optional `maxBufferSize`.
 */
declare function buffer<T>(options?: {
    readonly duration?: Function1<T, ObservableLike<unknown>> | number;
    readonly maxBufferSize?: number;
}): ObservableOperator<T, readonly T[]>;
declare const bufferT: Buffer<ObservableLike<unknown>>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>) => ObservableOperator<TA, TB>;
declare const mapT: Map<ObservableLike<unknown>>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * which concurrently delivers values emitted by the inner sources.
 *
 * @param options Optional configuration object. The `maxBufferSize` property specifies
 * how many source observables may be queued before dropping previous observables. The `maxConcurrency`
 * property specifies the maximum number of inner observables that may be subscribed to concurrently.
 */
declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}) => ObservableOperator<ObservableLike<T>, T>;
declare const mergeAllT: ConcatAll<ObservableLike<unknown>, {
    readonly maxBufferSize: number;
    readonly maxConcurrency: number;
}>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: <T>(options?: {
    readonly maxBufferSize?: number;
}) => ObservableOperator<ObservableLike<T>, T>;
declare const concatAllT: ConcatAll<ObservableLike<unknown>, {
    readonly maxBufferSize: number;
}>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
declare const exhaust: <T>() => ObservableOperator<ObservableLike<T>, T>;
declare const exhaustT: ConcatAll<ObservableLike<unknown>, Record<string, never>>;
/**
 * Returns an `ObservableLike` that forwards notifications to the provided `onNotify` function.
 *
 * @param onNotify The function that is invoked when the observable source produces values.
 */
declare const onNotify: <T>(onNotify: SideEffect1<T>) => ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that applies the predicate function each time the source
 * completes to determine if the subscription should be renewed.
 *
 * @param predicate The predicate function to apply.
 */
declare function repeat<T>(predicate: Predicate<number>): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that repeats the source count times.
 * @param count
 */
declare function repeat<T>(count: number): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that continually repeats the source.
 */
declare function repeat<T>(): ObservableOperator<T, T>;
declare const repeatT: Repeat<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` that mirrors the source, re-subscribing
 * if the source completes with an error.
 */
declare function retry<T>(): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that mirrors the source, resubscrbing
 * if the source completes with an error which satisfies the predicate function.
 *
 * @param predicate
 */
declare function retry<T>(predicate: Function2<number, unknown, boolean>): ObservableOperator<T, T>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike` producing
 * values only from the most recent source.
 */
declare const switchAll: <T>() => ObservableOperator<ObservableLike<T>, T>;
declare const switchAllT: ConcatAll<ObservableLike<unknown>, Record<string, never>>;
/**
 * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
 *
 * @param duration Function function that is used to determine the silence duration in between emitted values.
 * @param mode The throttle mode.
 */
declare function throttle<T>(duration: Function1<T, ObservableLike<unknown>>, options?: {
    readonly mode?: ThrottleMode;
}): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` which emits a value from the source,
 * then ignores subsequent source values for `duration` milliseconds.
 *
 * @param duration Time to wait before emitting another value after
 * emitting the last value, measured in milliseconds.
 * @param mode The throttle mode.
 */
declare function throttle<T>(duration: number, options?: {
    readonly mode?: ThrottleMode;
}): ObservableOperator<T, T>;
/** Symbol thrown when the timeout operator times out */
declare const timeoutError: symbol;
/**
 * Returns an `ObservableLike` that completes with an error if the source
 * does not emit a value in given time span.
 *
 * @param duration Time in ms within which the source must emit values.
 */
declare function timeout<T>(duration: number): ObservableOperator<T, T>;
/**
 *
 * @param duration
 */
declare function timeout<T>(duration: ObservableLike<unknown>): ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
declare const withLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ObservableOperator<TA, T>;
/**
 * Combines multiple sources to create an `ObservableLike` whose values are calculated from the values,
 * in order, of each of its input sources.
 */
declare const zip: Zip<ObservableLike<unknown>>["zip"];
declare const zipT: Zip<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` which combines the source with
 * the latest value from another `ObservableLike`.
 *
 * @param other
 * @param selector
 */
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ObservableOperator<TA, T>;
declare const toEnumerable: <T>() => Function1<ObservableLike<T>, EnumerableLike<T>>;
declare const toEnumerableT: ToEnumerable<ObservableLike<unknown>>;
/**
 * Returns a Promise that completes with the last value produced by
 * the source.
 *
 * @param scheduler The scheduler upon which to subscribe to the source.
 */
declare const toPromise: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, Promise<T>>;
declare const isEnumerable: <T>(obs: ObservableLike<T>) => obs is EnumerableObservableLike<T>;
declare const isRunnable: <T>(obs: ObservableLike<T>) => obs is RunnableObservableLike<T>;
declare type DefaultObservable = 0;
declare type RunnableObservable = 1;
declare type EnumerableObservable = 2;
/**
 * The source of notifications which notifies a `ObserverLike` instance.
 *
 * @noInheritDoc
 */
interface ObservableLike<T> extends ReactiveContainerLike {
    readonly T: unknown;
    readonly TContainerOf: ObservableLike<this["T"]>;
    readonly TLiftableContainerState: Observer<this["T"]>;
    readonly observableType: EnumerableObservable | RunnableObservable | DefaultObservable;
    sink(this: ObservableLike<T>, sink: Observer<T>): void;
}
interface EnumerableObservableLike<T> extends ObservableLike<T> {
    readonly TContainerOf: EnumerableObservableLike<this["T"]>;
    readonly observableType: EnumerableObservable;
}
interface RunnableObservableLike<T> extends ObservableLike<T> {
    readonly TContainerOf: RunnableObservableLike<this["T"]>;
    readonly observableType: RunnableObservable;
}
interface FromObservable<C extends ContainerLike> extends Container<C> {
    fromObservable<T>(): Function1<ObservableLike<T>, ContainerOf<C, T>>;
}
interface ToObservable<C extends ContainerLike> extends Container<C> {
    toObservable: <T>() => Function1<ContainerOf<C, T>, ObservableLike<T>>;
}
/** A function which converts an ObservableLike<A> to an ObservableLike<B>. */
declare type ObservableOperator<A, B> = Function1<ObservableLike<A>, ObservableLike<B>>;
/**
 * An `ObservableLike` that shares a common subscription to an underlying observable source.
 *
 * @noInheritDoc
 */
interface MulticastObservableLike<T> extends ObservableLike<T>, Disposable {
    /**
     * The number of observers currently observing.
     */
    readonly observerCount: number;
    readonly replay: number;
}
declare type AsyncReducer<T, TAcc> = Function2<TAcc, T, ObservableLike<TAcc>>;
declare type ObservableEffectMode = "batched" | "combine-latest";
/**
 * The throttle mode used by the `throttle` operator.
 * first - Takes a leading value.
 * last - Takes the trailing value.
 * interval -  Takes both the leading and trailing values.
 */
declare type ThrottleMode = "first" | "last" | "interval";
declare const catchError: <T>(onError: Function1<unknown, ObservableLike<T> | void>) => ObservableOperator<T, T>;
declare const catchErrorT: CatchError<ObservableLike<unknown>>;
declare const fromDisposable: <T>(disposable: Disposable) => ObservableLike<T>;
declare const decodeWithCharset: (charset?: string) => ObservableOperator<ArrayBuffer, string>;
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` that emits all items emitted by the source that
 * are distinct by comparison from the previous item.
 *
 * @param equals Optional equality function that is used to compare
 * if an item is distinct from the previous item.
 */
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T>;
}) => ObservableOperator<T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike<unknown>>;
declare const everySatisfy: <T>(predicate: Predicate<T>) => ObservableOperator<T, boolean>;
declare const everySatisfyT: EverySatisfy<ObservableLike<unknown>>;
declare const fromObservable: <T>() => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const fromObservableT: FromObservable<ObservableLike<unknown>>;
declare const fromPromise: <T>(factory: Factory<Promise<T>>) => ObservableLike<T>;
/**
 * Generates an `ObservableLike` sequence from a generator function
 * that is applied to an accumulator value with a specified `delay`
 * between emitted items.
 *
 * @param generator the generator function.
 * @param initialValue Factory function used to generate the initial accumulator.
 * @param delay The requested delay between emitted items by the observable.
 */
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number;
    readonly delayStart?: boolean;
}) => ObservableLike<T>;
declare const generateT: Generate<ObservableLike<unknown>>;
declare const keep: <T>(predicate: Predicate<T>) => ObservableOperator<T, T>;
declare const keepT: Keep<ObservableLike<unknown>>;
declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ObservableOperator<TA, TB>;
declare const onSubscribe: <T>(f: Factory<void | DisposableOrTeardown>) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const getObserverCount: <T>(observable: MulticastObservableLike<T>) => number;
declare const pairwise: <T>() => ObservableOperator<T, [
    Option<T>,
    T
]>;
declare const pairwiseT: Pairwise<ObservableLike<unknown>>;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ObservableOperator<T, TAcc>;
declare const reduceT: Reduce<ObservableLike<unknown>>;
declare const getReplay: <T>(observable: MulticastObservableLike<T>) => number;
declare const scan: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ObservableOperator<T, TAcc>;
declare const scanT: Scan<ObservableLike<unknown>>;
interface ScanAsync<C extends ContainerLike> extends Container<C> {
    scanAsync: <T, TAcc>(scanner: AsyncReducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<C, T, TAcc>;
}
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
declare const scanAsync: <T, TAcc>(scanner: AsyncReducer<T, TAcc>, initialValue: Factory<TAcc>) => ObservableOperator<T, TAcc>;
declare const scanAsyncT: ScanAsync<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number;
}) => ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` that skips the first count items emitted by the source.
 *
 * @param count The number of items emitted by source that should be skipped.
 */
declare const skipFirst: <T>(options?: {
    readonly count?: number;
}) => ObservableOperator<T, T>;
declare const skipFirstT: SkipFirst<ObservableLike<unknown>>;
declare const someSatisfy: <T>(predicate: Predicate<T>) => ObservableOperator<T, boolean>;
declare const someSatisfyT: SomeSatisfy<ObservableLike<unknown>>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => ObservableOperator<T, T>;
declare const takeFirst: <T>(options?: {
    readonly count?: number;
}) => ObservableOperator<T, T>;
declare const takeFirstT: TakeFirst<ObservableLike<unknown>>;
/**
 * Returns an `ObservableLike` that only emits the last `count` items emitted by the source.
 *
 * @param count The maximum number of values to emit.
 */
declare const takeLast: <T>(options?: {
    readonly count?: number;
}) => ObservableOperator<T, T>;
declare const takeLastT: TakeLast<ObservableLike<unknown>>;
declare const takeUntil: <T>(notifier: ObservableLike<unknown>) => ObservableOperator<T, T>;
/**
 * Returns an `ObservableLike` which emits values emitted by the source as long
 * as each value satisfies the given predicate, and then completes as soon as
 * this predicate is not satisfied.
 *
 * @param predicate The predicate function.
 */
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean;
}) => ObservableOperator<T, T>;
declare const takeWhileT: TakeWhile<ObservableLike<unknown>>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>) => ObservableOperator<T, T>;
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike<unknown>>;
declare const toObservable: <T>() => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const toObservableT: ToObservable<ObservableLike<unknown>>;
declare const toRunnable: <T>(options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike>;
}) => Function1<ObservableLike<T>, RunnableLike<T>>;
declare const toRunnableT: ToRunnable<ObservableLike<unknown>>;
declare const TContainerOf: ObservableLike<unknown>;
export { AsyncReducer, DefaultObservable, EnumerableObservable, EnumerableObservableLike, FromObservable, MulticastObservableLike, ObservableEffectMode, ObservableLike, ObservableOperator, RunnableObservable, RunnableObservableLike, ScanAsync, Subject, TContainerOf, ThrottleMode, ToObservable, __currentScheduler, __do, __memo, __observe, __using, buffer, bufferT, catchError, catchErrorT, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, createObservable, createT, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, everySatisfy, everySatisfyT, exhaust, exhaustT, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromArrayT, fromDisposable, fromEnumerable, fromEnumerableT, fromIterable, fromIterableT, fromIterator, fromIteratorT, fromObservable, fromObservableT, fromPromise, generate, generateT, getObserverCount, getReplay, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, never, observable, onNotify, onSubscribe, pairwise, pairwiseT, publish, publishTo, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, timeoutError, toEnumerable, toEnumerableT, toObservable, toObservableT, toPromise, toRunnable, toRunnableT, using, usingT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
