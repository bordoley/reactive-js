import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling.js";
import { ObservableLike, ObserverLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike, ScanAsync, RunnableLike } from "../rx.js";
import { Function1, SideEffect1, Equality, Factory, Reducer, Function2, Updater, Predicate } from "../functions.js";
import { ContainerOperator, CatchError, Zip, Concat, ConcatAll, DecodeWithCharset, Defer, EverySatisfy, ForkZip, ForkConcat, FromPromise, Keep, Map, Never, Pairwise, Reduce, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToPromiseable, ToReadonlyArray } from "../containers.js";
import { ToEnumerable } from "../ix.js";
import { ToFlowable } from "../streaming.js";
import { DisposableOrTeardown, DisposableLike } from "../util.js";
declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
declare const catchError: CatchError<ObservableLike>["catchError"];
/**
 * Returns an `ObservableLike` that combines the latest values from
 * multiple sources.
 */
declare const combineLatest: Zip<ObservableLike>["zip"];
/**
 * Creates an `ObservableLike` which emits all values from each source sequentially.
 */
declare const concat: Concat<ObservableLike>["concat"];
/**
 * Converts a higher-order `ObservableLike` into a first-order
 * `ObservableLike` by concatenating the inner sources in order.
 *
 * @param maxBufferSize The number of source observables that may be queued before dropping previous observables.
 */
declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
declare const defer: Defer<ObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, T, T>;
interface EmptyObservable {
    <T>(): EnumerableObservableLike<T>;
    <T>(options: {
        delay: number;
    }): RunnableObservableLike<T>;
}
declare const empty: EmptyObservable;
declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
/**
 * Converts a higher-order `ObservableLike` into a first-order `ObservableLike`
 * by dropping inner sources while the previous inner source
 * has not yet been disposed.
 */
declare const exhaust: ConcatAll<ObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const fromArray: <T>(options?: Partial<{
    readonly delay: number;
    readonly delayStart: boolean;
    readonly start: number;
    readonly count: number;
}> | undefined) => Function1<readonly T[], ObservableLike<T>>;
declare const fromPromise: FromPromise<ObservableLike>["fromPromise"];
interface GenerateObservable {
    <T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableObservableLike<T>;
    <T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableObservableLike<T>;
}
declare const generate: GenerateObservable;
declare const isEnumerable: (obs: ObservableLike) => obs is EnumerableObservableLike;
declare const isRunnable: (obs: ObservableLike) => obs is RunnableObservableLike;
declare const keep: Keep<ObservableLike>["keep"];
declare const map: Map<ObservableLike>["map"];
declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const merge: Concat<ObservableLike>["concat"];
declare const mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
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
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const reduce: Reduce<ObservableLike>["reduce"];
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
/**
 * Returns the `ObservableLike` that applies an asynchronous accumulator function
 * over the source, and emits each intermediate result.
 *
 * @param scanner The accumulator function called on each source value.
 * @param initialValue The initial accumulation value.
 */
declare const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
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
declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const takeLast: TakeLast<ObservableLike>["takeLast"];
declare const takeUntil: <T>(notifier: ObservableLike<unknown>) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
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
declare const toFlowable: ToFlowable<ObservableLike>["toFlowable"];
declare const toPromise: ToPromiseable<ObservableLike, SchedulerLike>["toPromise"];
declare const toReadonlyArray: ToReadonlyArray<ObservableLike>["toReadonlyArray"];
declare const toRunnable: <T>(options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike> | undefined;
} | undefined) => Function1<ObservableLike<T>, RunnableLike<T>>;
declare const withLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
declare const zip: Zip<ObservableLike>["zip"];
/**
 * Returns an `ObservableLike` that zips the latest values from
 * multiple sources.
 */
declare const zipLatest: Zip<ObservableLike>["zip"];
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike, TA, T>;
export { buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromPromise, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
