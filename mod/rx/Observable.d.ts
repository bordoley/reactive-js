import { ToEnumerable, EnumerableLike } from "../ix.js";
import { ContainerOperator, CatchError, Zip, Concat, ConcatAll, DecodeWithCharset, Defer, EverySatisfy, ForkZip, ForkConcat, FromPromise, Keep, Map, Never, Pairwise, Reduce, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToPromiseable, ToReadonlyArray, PromiseableLike, ReadonlyArrayLike } from "../containers.js";
import { SchedulerLike, VirtualTimeSchedulerLike } from "../scheduling.js";
import { ObservableLike, ObserverLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike, ScanAsync, RunnableLike, AsyncReducer } from "../rx.js";
import { FlowableLike, ToFlowable } from "../streaming.js";
import { Function1, SideEffect1, Equality, Factory, Reducer, Function2, Predicate, Updater } from "../functions.js";
import { DisposableLike, DisposableOrTeardown } from "../util.js";
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
declare const fromArray: <T>(options?: {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
    readonly start?: number | undefined;
    readonly count?: number | undefined;
} | undefined) => Function1<readonly T[], ObservableLike<T>>;
declare const fromDisposable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
declare const fromFlowable: <T>(options?: undefined) => Function1<FlowableLike<T>, ObservableLike<T>>;
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
declare const Observable: {
    buffer: <T>(options?: {
        readonly duration?: number | Function1<T, ObservableLike<unknown>> | undefined;
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: Function1<unknown, void | ObservableLike<T_1>>) => ContainerOperator<ObservableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: ObservableLike<T_2>, snd: ObservableLike<T_2>, ...tail: readonly ObservableLike<T_2>[]) => ObservableLike<T_2>;
    concatAll: <T_3>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T_3>, T_3>;
    decodeWithCharset: (charset?: string | undefined) => ContainerOperator<ObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: Factory<ObservableLike<T_4>>) => ObservableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: Equality<T_5> | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_5, T_5>;
    empty: EmptyObservable;
    everySatisfy: <T_6>(predicate: Predicate<T_6>) => ContainerOperator<ObservableLike<unknown>, T_6, boolean>;
    forEach: <T_7>(effect: SideEffect1<T_7>) => ContainerOperator<ObservableLike<unknown>, T_7, T_7>;
    fromArray: <T_8>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_8[], ObservableLike<T_8>>;
    fromFlowable: <T_9>(options?: undefined) => Function1<FlowableLike<T_9>, ObservableLike<T_9>>;
    fromPromise: <T_10>(options?: undefined) => Function1<PromiseableLike<T_10>, ObservableLike<T_10>>;
    generate: GenerateObservable;
    keep: <T_11>(predicate: Predicate<T_11>) => ContainerOperator<ObservableLike<unknown>, T_11, T_11>;
    map: <TA, TB>(mapper: Function1<TA, TB>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
    never: <T_12>() => EnumerableObservableLike<T_12>;
    pairwise: <T_13>() => ContainerOperator<ObservableLike<unknown>, T_13, readonly [
        T_13,
        T_13
    ]>;
    reduce: <T_14, TAcc>(reducer: Reducer<T_14, TAcc>, initialValue: Factory<TAcc>) => ContainerOperator<ObservableLike<unknown>, T_14, TAcc>;
    repeat: RepeatOperator;
    scan: <T_15, TAcc_1>(scanner: Reducer<T_15, TAcc_1>, initialValue: Factory<TAcc_1>) => ContainerOperator<ObservableLike<unknown>, T_15, TAcc_1>;
    scanAsync: <T_16, TAcc_2>(scanner: AsyncReducer<ObservableLike<unknown>, T_16, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<ObservableLike<unknown>, T_16, TAcc_2>;
    skipFirst: <T_17>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_17, T_17>;
    someSatisfy: <T_18>(predicate: Predicate<T_18>) => ContainerOperator<ObservableLike<unknown>, T_18, boolean>;
    takeFirst: <T_19>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_19, T_19>;
    takeLast: <T_20>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_20, T_20>;
    takeWhile: <T_21>(predicate: Predicate<T_21>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_21, T_21>;
    throwIfEmpty: <T_22>(factory: Factory<unknown>) => ContainerOperator<ObservableLike<unknown>, T_22, T_22>;
    toEnumerable: <T_23>(options?: undefined) => Function1<ObservableLike<T_23>, EnumerableLike<T_23>>;
    toFlowable: <T_24>(options?: undefined) => Function1<ObservableLike<T_24>, FlowableLike<T_24>>;
    toPromise: <T_25>(ctx: SchedulerLike) => Function1<ObservableLike<T_25>, PromiseableLike<T_25>>;
    toReadonlyArray: <T_26>(options?: undefined) => Function1<ObservableLike<T_26>, ReadonlyArrayLike<T_26>>;
    toRunnable: <T_27>(options?: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike> | undefined;
    } | undefined) => Function1<ObservableLike<T_27>, RunnableLike<T_27>>;
    zip: {
        <TA_1, TB_1>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>): ObservableLike<readonly [
            TA_1,
            TB_1
        ]>;
        <TA_2, TB_2, TC>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC>): ObservableLike<readonly [
            TA_2,
            TB_2,
            TC
        ]>;
        <TA_3, TB_3, TC_1, TD>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
            TA_3,
            TB_3,
            TC_1,
            TD
        ]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
            TA_4,
            TB_4,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
            TA_5,
            TB_5,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
            TA_6,
            TB_6,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
            TA_7,
            TB_7,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_8>, b: ObservableLike<TB_8>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
            TA_8,
            TB_8,
            TC_6,
            TD_5,
            TE_4,
            TF_3,
            TG_2,
            TH_1,
            TI
        ]>;
    };
};
export { buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromArray, fromDisposable, fromFlowable, fromPromise, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toEnumerable, toFlowable, toPromise, toReadonlyArray, toRunnable, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
