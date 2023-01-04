import { ObservableLike, ObserverLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike, ScanAsync } from "../rx.mjs";
import { Function1, SideEffect1, Equality, Factory, Reducer, Function2, Updater, Predicate } from "../functions.mjs";
import { ContainerOperator, Buffer, CatchError, Zip, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, ForkZip, ForkConcat, FromPromise, Generate, Keep, Map, Never, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToPromiseable, ToReadonlyArray } from "../containers.mjs";
import { ToEnumerable } from "../ix.mjs";
import { SchedulerLike } from "../scheduling.mjs";
import { ToFlowable } from "../streaming.mjs";
import { DisposableOrTeardown, DisposableLike } from "../util.mjs";
declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
declare const bufferT: Buffer<ObservableLike>;
declare const catchError: CatchError<ObservableLike>["catchError"];
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
declare const combineLatest: Zip<ObservableLike>["zip"];
declare const combineLatestT: Zip<ObservableLike>;
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare const concat: Concat<ObservableLike>["concat"];
declare const concatT: Concat<ObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const concatAllT: ConcatAll<ObservableLike, {
    readonly maxBufferSize: number;
}>;
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
declare const decodeWithCharsetT: DecodeWithCharset<ObservableLike>;
declare const defer: Defer<ObservableLike>["defer"];
declare const deferT: Defer<ObservableLike>;
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const distinctUntilChangedT: DistinctUntilChanged<ObservableLike>;
interface EmptyObservable {
    <T>(): EnumerableObservableLike<T>;
    <T>(options: {
        delay: number;
    }): RunnableObservableLike<T>;
}
declare const empty: EmptyObservable;
declare const emptyT: Empty<ObservableLike, {
    delay: number;
}>;
declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
declare const everySatisfyT: EverySatisfy<ObservableLike>;
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
declare const exhaust: ConcatAll<ObservableLike>["concatAll"];
declare const exhaustT: ConcatAll<ObservableLike>;
declare const forEach: <T>(effect: SideEffect1<T>) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const forEachT: ForEach<ObservableLike>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const fromPromise: FromPromise<ObservableLike>["fromPromise"];
declare const fromPromiseT: FromPromise<ObservableLike>;
interface GenerateObservable {
    <T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableObservableLike<T>;
    <T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableObservableLike<T>;
}
declare const generate: GenerateObservable;
declare const generateT: Generate<ObservableLike, {
    readonly delay: number;
    readonly delayStart: boolean;
}>;
declare const isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike;
declare const isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike;
declare const keep: Keep<ObservableLike>["keep"];
declare const keepT: Keep<ObservableLike>;
declare const map: Map<ObservableLike>["map"];
declare const mapT: Map<ObservableLike>;
declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const merge: Concat<ObservableLike>["concat"];
declare const mergeT: Concat<ObservableLike>;
declare const mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const mergeAllT: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
declare const never: Never<EnumerableObservableLike>["never"];
declare const neverT: Never<ObservableLike>;
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const pairwiseT: Pairwise<ObservableLike>;
declare const reduce: Reduce<ObservableLike>["reduce"];
declare const reduceT: Reduce<ObservableLike>;
interface RepeatOperator {
    /**
     * Returns an `ObservableLike` that applies the predicate function each time the source
     * completes to determine if the subscription should be renewed.
     *
     * @param predicate The predicate function to apply.
     */
    <T>(predicate: Predicate<number>): ContainerOperator<ObservableLike, T, T>;
    /**
     * Returns an `ObservableLike` that repeats the source count times.
     * @param count
     */
    <T>(count: number): ContainerOperator<ObservableLike, T, T>;
    /**
     * Returns an `ObservableLike` that continually repeats the source.
     */
    <T>(): ContainerOperator<ObservableLike, T, T>;
}
declare const repeat: RepeatOperator;
declare const repeatT: Repeat<ObservableLike>;
interface Retry {
    /**
     * Returns an `ObservableLike` that mirrors the source, re-subscribing
     * if the source completes with an error.
     */
    <T>(): ContainerOperator<ObservableLike, T, T>;
    /**
     * Returns an `ObservableLike` that mirrors the source, resubscrbing
     * if the source completes with an error which satisfies the predicate function.
     *
     * @param predicate
     */
    <T>(predicate: Function2<number, unknown, boolean>): ContainerOperator<ObservableLike, T, T>;
}
declare const retry: Retry;
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<ObservableLike<unknown>, T, TAcc>;
declare const scanT: Scan<ObservableLike>;
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
declare const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
declare const scanAsyncT: ScanAsync<ObservableLike, ObservableLike>;
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
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
declare const skipFirstT: SkipFirst<ObservableLike>;
declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
declare const someSatisfyT: SomeSatisfy<ObservableLike>;
declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
declare const switchAllT: ConcatAll<ObservableLike>;
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const takeFirstT: TakeFirst<ObservableLike>;
declare const takeLast: TakeLast<ObservableLike>["takeLast"];
declare const takeLastT: TakeLast<ObservableLike>;
declare const takeUntil: <T>(notifier: ObservableLike<unknown>) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
declare const takeWhileT: TakeWhile<ObservableLike>;
interface Throttle {
    /**
     * Emits a value from the source, then ignores subsequent source values for a duration determined by another observable.
     *
     * @param duration Function function that is used to determine the silence duration in between emitted values.
     * @param mode The throttle mode.
     */
    <T>(duration: Function1<T, ObservableLike>, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): ContainerOperator<ObservableLike, T, T>;
    /**
     * Returns an `ObservableLike` which emits a value from the source,
     * then ignores subsequent source values for `duration` milliseconds.
     *
     * @param duration Time to wait before emitting another value after
     * emitting the last value, measured in milliseconds.
     * @param mode The throttle mode.
     */
    <T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): ContainerOperator<ObservableLike, T, T>;
}
declare const throttle: Throttle;
declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
declare const throwIfEmptyT: ThrowIfEmpty<ObservableLike>;
interface Timeout {
    /**
     * Returns an `ObservableLike` that completes with an error if the source
     * does not emit a value in given time span.
     *
     * @param duration Time in ms within which the source must emit values.
     */
    <T>(duration: number): ContainerOperator<ObservableLike, T, T>;
    /**
     *
     * @param duration
     */
    <T>(duration: ObservableLike<unknown>): ContainerOperator<ObservableLike, T, T>;
}
declare const timeout: Timeout;
declare const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"];
declare const toEnumerableT: ToEnumerable<ObservableLike>;
declare const toFlowable: ToFlowable<ObservableLike>["toFlowable"];
declare const toFlowableT: ToFlowable<ObservableLike>;
declare const toPromise: ToPromiseable<ObservableLike, SchedulerLike>["toPromise"];
declare const toPromiseT: ToPromiseable<ObservableLike, SchedulerLike>;
declare const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"];
declare const toReadonlyArrayT: ToReadonlyArray<ObservableLike>;
declare const withLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
declare const zip: Zip<ObservableLike>["zip"];
declare const zipT: Zip<ObservableLike>;
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
declare const zipLatest: Zip<ObservableLike>["zip"];
declare const zipLatestT: Zip<ObservableLike>;
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { buffer, bufferT, catchError, combineLatest, combineLatestT, concat, concatAll, concatAllT, concatT, create, decodeWithCharset, decodeWithCharsetT, defer, deferT, distinctUntilChanged, distinctUntilChangedT, empty, emptyT, everySatisfy, everySatisfyT, exhaust, exhaustT, forEach, forEachT, forkCombineLatest, forkMerge, forkZipLatest, fromPromise, fromPromiseT, generate, generateT, isEnumerable, isRunnable, keep, keepT, map, mapAsync, mapT, merge, mergeAll, mergeAllT, mergeT, multicast, never, neverT, onSubscribe, pairwise, pairwiseT, reduce, reduceT, repeat, repeatT, retry, scan, scanAsync, scanAsyncT, scanT, share, skipFirst, skipFirstT, someSatisfy, someSatisfyT, subscribe, subscribeOn, switchAll, switchAllT, takeFirst, takeFirstT, takeLast, takeLastT, takeUntil, takeWhile, takeWhileT, throttle, throwIfEmpty, throwIfEmptyT, timeout, toEnumerable, toEnumerableT, toFlowable, toFlowableT, toPromise, toPromiseT, toReadonlyArray, toReadonlyArrayT, withLatestFrom, zip, zipLatest, zipLatestT, zipT, zipWithLatestFrom };
