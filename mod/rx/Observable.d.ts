import { CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, ContainerOperator, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, ForkConcat, ForkZip, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Never, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, Zip } from "../containers.js";
import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6 } from "../functions.js";
import { FromEnumerable } from "../ix.js";
import { ObservableLike, ObserverLike, Retry, ScanAsync, TakeUntil, Throttle, Timeout, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { FromFlowable } from "../streaming.js";
import { DisposableLike, DisposableOrTeardown } from "../util.js";
import { Observable_async__currentScheduler } from "./Observable/__internal__/Observable.async.js";
interface __Memo {
    <T>(fn: Factory<T>): T;
    <TA, T>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
/**
 * @category AsyncEffect
 */
export declare const __memo: __Memo;
/**
 * @category AsyncEffect
 */
export declare const __await: <T>(observable: ObservableLike<T>) => T;
/**
 * @category AsyncEffect
 */
export declare const __currentScheduler: typeof Observable_async__currentScheduler;
interface __Do {
    (fn: SideEffect): void;
    <TA>(fn: SideEffect1<TA>, a: TA): void;
    <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
    <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
    <TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
    <TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
    <TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
}
/**
 * @category AsyncEffect
 */
export declare const __do: __Do;
/**
 * @category AsyncEffect
 */
export declare const __observe: <T>(observable: ObservableLike<T>) => import("../functions.js").Optional<T>;
/**
 * @category AsyncEffect
 */
export declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: import("../functions.js").Optional<import("../functions.js").Equality<T>>;
}) => import("../streaming.js").StreamLike<import("../functions.js").Updater<T>, T>;
/**
 * @category AsyncEffect
 */
export declare const __stream: <TReq, T, TStream extends import("../streaming.js").StreamLike<TReq, T>>(streamable: import("../streaming.js").StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
interface __Using {
    <T extends DisposableLike>(fn: Factory<T>): T;
    <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
/**
 * @category AsyncEffect
 */
export declare const __using: __Using;
export declare const async: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
export declare const catchError: CatchError<ObservableLike>["catchError"];
export declare const combineLatest: Zip<ObservableLike>["zip"];
export declare const compute: Compute<ObservableLike>["compute"];
export declare const concat: Concat<ObservableLike>["concat"];
export declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<ObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<ObservableLike>["concatYieldMap"];
export declare const contains: Contains<ObservableLike>["contains"];
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
export declare const defer: Defer<ObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<ObservableLike, {
    delay?: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<ObservableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
export declare const exhaust: <T>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T>, T>;
export declare const forEach: ForEach<ObservableLike>["forEach"];
export declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
export declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
export declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
export declare const fromDisposable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export declare const fromEnumerable: FromEnumerable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
export declare const fromIterable: FromIterable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"];
export declare const fromPromise: <T>(options?: undefined) => Function1<import("../containers.js").PromiseableLike<T>, ObservableLike<T>>;
export declare const fromReadonlyArray: FromReadonlyArray<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromSequence"];
export declare const generate: Generate<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"];
export declare const isEnumerable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").EnumerableObservableLike<unknown>;
export declare const isRunnable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").RunnableObservableLike<unknown>;
export declare const keep: Keep<ObservableLike>["keep"];
export declare const keepType: KeepType<ObservableLike>["keepType"];
export declare const map: Map<ObservableLike>["map"];
export declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const mapTo: MapTo<ObservableLike>["mapTo"];
export declare const merge: Concat<ObservableLike>["concat"];
export declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T>, T>;
export declare const mergeWith: <T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]) => ContainerOperator<ObservableLike<unknown>, T, T>;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, import("../rx.js").MulticastObservableLike<T>>;
export declare const never: Never<ObservableLike>["never"];
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
export declare const pairwise: Pairwise<ObservableLike>["pairwise"];
export declare const reduce: Reduce<ObservableLike>["reduce"];
export declare const repeat: Repeat<ObservableLike>["repeat"];
export declare const retry: Retry<ObservableLike>["retry"];
export declare const scan: Scan<ObservableLike>["scan"];
export declare const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;
export declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
export declare const startWith: StartWith<ObservableLike>["startWith"];
export declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
export declare const switchMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
export declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
export declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<ObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<ObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
export declare const throttle: Throttle<ObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
export declare const throws: Throws<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export declare const timeout: Timeout<ObservableLike>["timeout"];
export declare const toPromise: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<T>;
export declare const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"];
export declare const zip: Zip<ObservableLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableLike>["zipLatest"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"];
/** @ignore */
declare const Observable: {
    async: <T>(computation: Factory<T>, { mode }?: {
        mode?: "batched" | "combine-latest" | undefined;
    }) => ObservableLike<T>;
    buffer: <T_1>(options?: {
        readonly duration?: number | Function1<T_1, ObservableLike<unknown>> | undefined;
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_1, readonly T_1[]>;
    catchError: <T_2>(onError: Function1<unknown, void | ObservableLike<T_2>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_2, T_2>;
    combineLatest: {
        <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [TA, TB]>;
        <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [TA_1, TB_1, TC]>;
        <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    compute: <T_3>(factory: Factory<T_3>, options?: undefined) => ObservableLike<T_3>;
    concat: <T_4>(fst: ObservableLike<T_4>, snd: ObservableLike<T_4>, ...tail: readonly ObservableLike<T_4>[]) => ObservableLike<T_4>;
    concatAll: <T_5>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T_5>, T_5>;
    concatMap: <TA_8, TB_8>(mapper: Function1<TA_8, ObservableLike<TB_8>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_8, TB_8>;
    concatWith: <T_6>(snd: ObservableLike<T_6>, ...tail: readonly ObservableLike<T_6>[]) => ContainerOperator<ObservableLike<unknown>, T_6, T_6>;
    concatYieldMap: <TA_9, TB_9>(mapper: Function1<TA_9, Generator<TB_9, any, any>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_9, TB_9>;
    contains: <T_7>(value: T_7, options?: {
        readonly equality?: import("../functions.js").Equality<T_7> | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_7, boolean>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_8>(factory: Factory<ObservableLike<T_8>>, options?: undefined) => ObservableLike<T_8>;
    distinctUntilChanged: <T_9>(options?: {
        readonly equality?: import("../functions.js").Equality<T_9> | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_9, T_9>;
    empty: <T_10>(options?: {
        delay?: number | undefined;
    } | undefined) => ObservableLike<T_10>;
    encodeUtf8: (options?: undefined) => ContainerOperator<ObservableLike<unknown>, string, Uint8Array>;
    endWith: <T_11>(value: T_11, ...values: readonly T_11[]) => ContainerOperator<ObservableLike<unknown>, T_11, T_11>;
    everySatisfy: <T_12>(predicate: import("../functions.js").Predicate<T_12>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_12, boolean>;
    forEach: <T_13>(effect: SideEffect1<T_13>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_13, T_13>;
    fromEnumerable: <T_14>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<import("../ix.js").EnumerableLike<T_14>, ObservableLike<T_14>>;
    fromFlowable: <T_15>(options?: undefined) => Function1<import("../streaming.js").FlowableLike<T_15>, ObservableLike<T_15>>;
    fromIterable: <T_16>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<Iterable<T_16>, ObservableLike<T_16>>;
    fromPromise: <T_17>(options?: undefined) => Function1<import("../containers.js").PromiseableLike<T_17>, ObservableLike<T_17>>;
    fromReadonlyArray: <T_18>(options?: ({
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T_18[], ObservableLike<T_18>>;
    fromSequence: <T_19>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<import("../containers.js").SequenceLike<T_19>, ObservableLike<T_19>>;
    generate: <T_20>(generator: import("../functions.js").Updater<T_20>, initialValue: Factory<T_20>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => ObservableLike<T_20>;
    ignoreElements: <T_21>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, unknown, T_21>;
    isEnumerable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").EnumerableObservableLike<unknown>;
    isRunnable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").RunnableObservableLike<unknown>;
    keep: <T_22>(predicate: import("../functions.js").Predicate<T_22>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_22, T_22>;
    keepType: <TA_10, TB_10 extends TA_10>(predicate: import("../functions.js").TypePredicate<TA_10, TB_10>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_10, TB_10>;
    map: <TA_11, TB_11>(mapper: Function1<TA_11, TB_11>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_11, TB_11>;
    mapTo: <TA_12, TB_12>(value: TB_12, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_12, TB_12>;
    merge: <T_4>(fst: ObservableLike<T_4>, snd: ObservableLike<T_4>, ...tail: readonly ObservableLike<T_4>[]) => ObservableLike<T_4>;
    mergeWith: <T_6>(snd: ObservableLike<T_6>, ...tail: readonly ObservableLike<T_6>[]) => ContainerOperator<ObservableLike<unknown>, T_6, T_6>;
    never: <T_23>(options?: undefined) => ObservableLike<T_23>;
    onSubscribe: <T_24>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike<unknown>, T_24, T_24>;
    pairwise: <T_25>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_25, readonly [T_25, T_25]>;
    reduce: <T_26, TAcc>(reducer: import("../functions.js").Reducer<T_26, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_26, TAcc>;
    repeat: {
        <T_27>(predicate: import("../functions.js").Predicate<number>, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_27, T_27>;
        <T_28>(count: number, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_28, T_28>;
        <T_29>(options?: undefined): ContainerOperator<ObservableLike<unknown>, T_29, T_29>;
    };
    retry: {
        <T_30>(): ContainerOperator<ObservableLike<unknown>, T_30, T_30>;
        <T_31>(predicate: Function2<number, unknown, boolean>): ContainerOperator<ObservableLike<unknown>, T_31, T_31>;
    };
    scan: <T_32, TAcc_1>(scanner: import("../functions.js").Reducer<T_32, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_32, TAcc_1>;
    scanAsync: <T_33, TAcc_2>(scanner: import("../rx.js").AsyncReducer<ObservableLike<unknown>, T_33, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<ObservableLike<unknown>, T_33, TAcc_2>;
    share: <T_34>(scheduler: SchedulerLike, options?: {
        readonly replay?: number | undefined;
    } | undefined) => Function1<ObservableLike<T_34>, ObservableLike<T_34>>;
    skipFirst: <T_35>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_35, T_35>;
    someSatisfy: <T_36>(predicate: import("../functions.js").Predicate<T_36>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_36, boolean>;
    startWith: <T_37>(value: T_37, ...values: readonly T_37[]) => ContainerOperator<ObservableLike<unknown>, T_37, T_37>;
    subscribe: <T_38>(scheduler: SchedulerLike) => Function1<ObservableLike<T_38>, DisposableLike>;
    switchAll: <T_39>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T_39>, T_39>;
    switchMap: <TA_8, TB_8>(mapper: Function1<TA_8, ObservableLike<TB_8>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_8, TB_8>;
    takeFirst: <T_40>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_40, T_40>;
    takeLast: <T_41>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_41, T_41>;
    takeUntil: <T_42>(notifier: ObservableLike<unknown>) => ContainerOperator<ObservableLike<unknown>, T_42, T_42>;
    takeWhile: <T_43>(predicate: import("../functions.js").Predicate<T_43>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_43, T_43>;
    throttle: {
        <T_44>(duration: Function1<T_44, ObservableLike<unknown>>, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_44, T_44>;
        <T_45>(duration: number, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_45, T_45>;
    };
    throwIfEmpty: <T_46>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_46, T_46>;
    throws: <T_47>(options?: ({
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } & {
        raise?: Factory<unknown> | undefined;
    }) | undefined) => ObservableLike<T_47>;
    timeout: {
        <T_48>(duration: number): ContainerOperator<ObservableLike<unknown>, T_48, T_48>;
        <T_49>(duration: ObservableLike<unknown>): ContainerOperator<ObservableLike<unknown>, T_49, T_49>;
    };
    toPromise: <T_50>(scheduler: SchedulerLike) => (observable: ObservableLike<T_50>) => PromiseLike<T_50>;
    withLatestFrom: <TA_13, TB_13, T_51>(other: ObservableLike<TB_13>, selector: Function2<TA_13, TB_13, T_51>) => ContainerOperator<ObservableLike<unknown>, TA_13, T_51>;
    zip: {
        <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [TA, TB]>;
        <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [TA_1, TB_1, TC]>;
        <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    zipLatest: {
        <TA_14, TB_14>(a: ObservableLike<TA_14>, b: ObservableLike<TB_14>): ObservableLike<readonly [TA_14, TB_14]>;
        <TA_15, TB_15, TC_7>(a: ObservableLike<TA_15>, b: ObservableLike<TB_15>, c: ObservableLike<TC_7>): ObservableLike<readonly [TA_15, TB_15, TC_7]>;
        <TA_16, TB_16, TC_8, TD_6>(a: ObservableLike<TA_16>, b: ObservableLike<TB_16>, c: ObservableLike<TC_8>, d: ObservableLike<TD_6>): ObservableLike<readonly [TA_16, TB_16, TC_8, TD_6]>;
        <TA_17, TB_17, TC_9, TD_7, TE_5>(a: ObservableLike<TA_17>, b: ObservableLike<TB_17>, c: ObservableLike<TC_9>, d: ObservableLike<TD_7>, e: ObservableLike<TE_5>): ObservableLike<readonly [TA_17, TB_17, TC_9, TD_7, TE_5]>;
        <TA_18, TB_18, TC_10, TD_8, TE_6, TF_4>(a: ObservableLike<TA_18>, b: ObservableLike<TB_18>, c: ObservableLike<TC_10>, d: ObservableLike<TD_8>, e: ObservableLike<TE_6>, f: ObservableLike<TF_4>): ObservableLike<readonly [TA_18, TB_18, TC_10, TD_8, TE_6, TF_4]>;
        <TA_19, TB_19, TC_11, TD_9, TE_7, TF_5, TG_3>(a: ObservableLike<TA_19>, b: ObservableLike<TB_19>, c: ObservableLike<TC_11>, d: ObservableLike<TD_9>, e: ObservableLike<TE_7>, f: ObservableLike<TF_5>, g: ObservableLike<TG_3>): ObservableLike<readonly [TA_19, TB_19, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_20, TB_20, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(a: ObservableLike<TA_20>, b: ObservableLike<TB_20>, c: ObservableLike<TC_12>, d: ObservableLike<TD_10>, e: ObservableLike<TE_8>, f: ObservableLike<TF_6>, g: ObservableLike<TG_4>, h: ObservableLike<TH_2>): ObservableLike<readonly [TA_20, TB_20, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_21, TB_21, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(a: ObservableLike<TA_21>, b: ObservableLike<TB_21>, c: ObservableLike<TC_13>, d: ObservableLike<TD_11>, e: ObservableLike<TE_9>, f: ObservableLike<TF_7>, g: ObservableLike<TG_5>, h: ObservableLike<TH_3>, i: ObservableLike<TI_1>): ObservableLike<readonly [TA_21, TB_21, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
    zipWith: {
        <TA_22, TB_22>(b: ObservableLike<TB_22>): ContainerOperator<ObservableLike<unknown>, TA_22, readonly [TA_22, TB_22]>;
        <TA_23, TB_23, TC_14>(b: ObservableLike<TB_23>, c: ObservableLike<TC_14>): ContainerOperator<ObservableLike<unknown>, TA_23, readonly [TA_23, TB_23, TC_14]>;
        <TA_24, TB_24, TC_15, TD_12>(b: ObservableLike<TB_24>, c: ObservableLike<TC_15>, d: ObservableLike<TD_12>): ContainerOperator<ObservableLike<unknown>, TA_24, readonly [TA_24, TB_24, TC_15, TD_12]>;
        <TA_25, TB_25, TC_16, TD_13, TE_10>(b: ObservableLike<TB_25>, c: ObservableLike<TC_16>, d: ObservableLike<TD_13>, e: ObservableLike<TE_10>): ContainerOperator<ObservableLike<unknown>, TA_25, readonly [TA_25, TB_25, TC_16, TD_13, TE_10]>;
        <TA_26, TB_26, TC_17, TD_14, TE_11, TF_8>(b: ObservableLike<TB_26>, c: ObservableLike<TC_17>, d: ObservableLike<TD_14>, e: ObservableLike<TE_11>, f: ObservableLike<TF_8>): ContainerOperator<ObservableLike<unknown>, TA_26, readonly [TA_26, TB_26, TC_17, TD_14, TE_11, TF_8]>;
        <TA_27, TB_27, TC_18, TD_15, TE_12, TF_9, TG_6>(b: ObservableLike<TB_27>, c: ObservableLike<TC_18>, d: ObservableLike<TD_15>, e: ObservableLike<TE_12>, f: ObservableLike<TF_9>, g: ObservableLike<TG_6>): ContainerOperator<ObservableLike<unknown>, TA_27, readonly [TA_27, TB_27, TC_18, TD_15, TE_12, TF_9, TG_6]>;
        <TA_28, TB_28, TC_19, TD_16, TE_13, TF_10, TG_7, TH_4>(b: ObservableLike<TB_28>, c: ObservableLike<TC_19>, d: ObservableLike<TD_16>, e: ObservableLike<TE_13>, f: ObservableLike<TF_10>, g: ObservableLike<TG_7>, h: ObservableLike<TH_4>): ContainerOperator<ObservableLike<unknown>, TA_28, readonly [TA_28, TB_28, TC_19, TD_16, TE_13, TF_10, TG_7, TH_4]>;
        <TA_29, TB_29, TC_20, TD_17, TE_14, TF_11, TG_8, TH_5, TI_2>(b: ObservableLike<TB_29>, c: ObservableLike<TC_20>, d: ObservableLike<TD_17>, e: ObservableLike<TE_14>, f: ObservableLike<TF_11>, g: ObservableLike<TG_8>, h: ObservableLike<TH_5>, i: ObservableLike<TI_2>): ContainerOperator<ObservableLike<unknown>, TA_29, readonly [TA_29, TB_29, TC_20, TD_17, TE_14, TF_11, TG_8, TH_5, TI_2]>;
    };
    zipWithLatestFrom: <TA_30, TB_30, T_52>(other: ObservableLike<TB_30>, selector: Function2<TA_30, TB_30, T_52>) => ContainerOperator<ObservableLike<unknown>, TA_30, T_52>;
};
export default Observable;
