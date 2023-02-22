import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToReadonlyArray, Zip } from "../containers.js";
import { FromEnumerable } from "../ix.js";
import { Retry, RunnableObservableLike, ScanAsync, TakeUntil, Throttle, Timeout, ToObservable, ToRunnable, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<RunnableObservableLike>["buffer"];
export declare const catchError: CatchError<RunnableObservableLike>["catchError"];
export declare const combineLatest: {
    <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [TA, TB]>;
    <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [TA_1, TB_1, TC]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
};
export declare const concat: Concat<RunnableObservableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableObservableLike, {
    delay: number;
}>["empty"];
export declare const everySatisfy: EverySatisfy<RunnableObservableLike>["everySatisfy"];
export declare const exhaust: <T>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T>, T>;
export declare const forEach: ForEach<RunnableObservableLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
export declare const fromIterable: FromIterable<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<RunnableObservableLike>["fromSequence"];
export declare const generate: Generate<RunnableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const keep: Keep<RunnableObservableLike>["keep"];
export declare const map: Map<RunnableObservableLike>["map"];
export declare const merge: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
export declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T>, T>;
export declare const pairwise: Pairwise<RunnableObservableLike>["pairwise"];
export declare const reduce: Reduce<RunnableObservableLike>["reduce"];
export declare const retry: Retry<RunnableObservableLike>["retry"];
export declare const scan: Scan<RunnableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableObservableLike>["someSatisfy"];
export declare const switchAll: ConcatAll<RunnableObservableLike>["concatAll"];
export declare const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"];
export declare const throttle: Throttle<RunnableObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];
export declare const timeout: Timeout<RunnableObservableLike>["timeout"];
export declare const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"];
export declare const toObservable: ToObservable<RunnableObservableLike>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<RunnableObservableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<RunnableObservableLike>["toRunnable"];
export declare const withLatestFrom: WithLatestFrom<RunnableObservableLike>["withLatestFrom"];
export declare const zip: Zip<RunnableObservableLike>["zip"];
export declare const zipLatest: ZipLatest<RunnableObservableLike>["zipLatest"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<RunnableObservableLike>["zipWithLatestFrom"];
/** @ignore */
declare const RunnableObservable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: import("../functions.js").Function1<unknown, void | RunnableObservableLike<T_1>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_1, T_1>;
    combineLatest: {
        <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [TA, TB]>;
        <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [TA_1, TB_1, TC]>;
        <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    concat: <T_2>(fst: RunnableObservableLike<T_2>, snd: RunnableObservableLike<T_2>, ...tail: readonly RunnableObservableLike<T_2>[]) => RunnableObservableLike<T_2>;
    concatAll: <T_3>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_3>, T_3>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: import("../functions.js").Factory<RunnableObservableLike<T_4>>, options?: undefined) => RunnableObservableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: import("../functions.js").Equality<T_5> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: {
        delay: number;
    } | undefined) => RunnableObservableLike<T_6>;
    everySatisfy: <T_7>(predicate: import("../functions.js").Predicate<T_7>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_7, boolean>;
    exhaust: <T_8>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_8>, T_8>;
    forEach: <T_9>(effect: import("../functions.js").SideEffect1<T_9>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_9, T_9>;
    fromEnumerable: <T_10>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_10>, RunnableObservableLike<T_10>>;
    fromIterable: <T_11>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<Iterable<T_11>, RunnableObservableLike<T_11>>;
    fromReadonlyArray: <T_12>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => import("../functions.js").Function1<readonly T_12[], RunnableObservableLike<T_12>>;
    fromSequence: <T_13>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_13>, RunnableObservableLike<T_13>>;
    generate: <T_14>(generator: import("../functions.js").Updater<T_14>, initialValue: import("../functions.js").Factory<T_14>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => RunnableObservableLike<T_14>;
    keep: <T_15>(predicate: import("../functions.js").Predicate<T_15>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_15, T_15>;
    map: <TA_8, TB_8>(mapper: import("../functions.js").Function1<TA_8, TB_8>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_8, TB_8>;
    merge: <T_2>(fst: RunnableObservableLike<T_2>, snd: RunnableObservableLike<T_2>, ...tail: readonly RunnableObservableLike<T_2>[]) => RunnableObservableLike<T_2>;
    pairwise: <T_16>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_16, readonly [T_16, T_16]>;
    reduce: <T_17, TAcc>(reducer: import("../functions.js").Reducer<T_17, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_17, TAcc>;
    retry: {
        <T_18>(): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_18, T_18>;
        <T_19>(predicate: import("../functions.js").Function2<number, unknown, boolean>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_19, T_19>;
    };
    scan: <T_20, TAcc_1>(scanner: import("../functions.js").Reducer<T_20, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_20, TAcc_1>;
    scanAsync: <T_21, TAcc_2>(scanner: import("../rx.js").AsyncReducer<RunnableObservableLike<unknown>, T_21, TAcc_2>, initialValue: import("../functions.js").Factory<TAcc_2>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_21, TAcc_2>;
    skipFirst: <T_22>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_22, T_22>;
    someSatisfy: <T_23>(predicate: import("../functions.js").Predicate<T_23>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_23, boolean>;
    switchAll: <T_8>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_8>, T_8>;
    takeFirst: <T_24>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_24, T_24>;
    takeLast: <T_25>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_25, T_25>;
    takeUntil: <T_26>(notifier: RunnableObservableLike<unknown>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_26, T_26>;
    takeWhile: <T_27>(predicate: import("../functions.js").Predicate<T_27>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_27, T_27>;
    throttle: {
        <T_28>(duration: import("../functions.js").Function1<T_28, RunnableObservableLike<unknown>>, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_28, T_28>;
        <T_29>(duration: number, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_29, T_29>;
    };
    throwIfEmpty: <T_30>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_30, T_30>;
    timeout: {
        <T_31>(duration: number): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_31, T_31>;
        <T_32>(duration: RunnableObservableLike<unknown>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_32, T_32>;
    };
    toFlowable: <T_33>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_33>, import("../streaming.js").FlowableLike<T_33>>;
    toObservable: <T_34>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_34>, import("../rx.js").ObservableLike<T_34>>;
    toReadonlyArray: <T_35>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_35>, import("../containers.js").ReadonlyArrayLike<T_35>>;
    toRunnable: <T_36>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_36>, import("../rx.js").RunnableLike<T_36>>;
    withLatestFrom: <TA_9, TB_9, T_37>(other: RunnableObservableLike<TB_9>, selector: import("../functions.js").Function2<TA_9, TB_9, T_37>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_9, T_37>;
    zip: {
        <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [TA, TB]>;
        <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [TA_1, TB_1, TC]>;
        <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [TA_2, TB_2, TC_1, TD]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [TA_3, TB_3, TC_2, TD_1, TE]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [TA_4, TB_4, TC_3, TD_2, TE_1, TF]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    zipLatest: {
        <TA_10, TB_10>(a: RunnableObservableLike<TA_10>, b: RunnableObservableLike<TB_10>): RunnableObservableLike<readonly [TA_10, TB_10]>;
        <TA_11, TB_11, TC_7>(a: RunnableObservableLike<TA_11>, b: RunnableObservableLike<TB_11>, c: RunnableObservableLike<TC_7>): RunnableObservableLike<readonly [TA_11, TB_11, TC_7]>;
        <TA_12, TB_12, TC_8, TD_6>(a: RunnableObservableLike<TA_12>, b: RunnableObservableLike<TB_12>, c: RunnableObservableLike<TC_8>, d: RunnableObservableLike<TD_6>): RunnableObservableLike<readonly [TA_12, TB_12, TC_8, TD_6]>;
        <TA_13, TB_13, TC_9, TD_7, TE_5>(a: RunnableObservableLike<TA_13>, b: RunnableObservableLike<TB_13>, c: RunnableObservableLike<TC_9>, d: RunnableObservableLike<TD_7>, e: RunnableObservableLike<TE_5>): RunnableObservableLike<readonly [TA_13, TB_13, TC_9, TD_7, TE_5]>;
        <TA_14, TB_14, TC_10, TD_8, TE_6, TF_4>(a: RunnableObservableLike<TA_14>, b: RunnableObservableLike<TB_14>, c: RunnableObservableLike<TC_10>, d: RunnableObservableLike<TD_8>, e: RunnableObservableLike<TE_6>, f: RunnableObservableLike<TF_4>): RunnableObservableLike<readonly [TA_14, TB_14, TC_10, TD_8, TE_6, TF_4]>;
        <TA_15, TB_15, TC_11, TD_9, TE_7, TF_5, TG_3>(a: RunnableObservableLike<TA_15>, b: RunnableObservableLike<TB_15>, c: RunnableObservableLike<TC_11>, d: RunnableObservableLike<TD_9>, e: RunnableObservableLike<TE_7>, f: RunnableObservableLike<TF_5>, g: RunnableObservableLike<TG_3>): RunnableObservableLike<readonly [TA_15, TB_15, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_16, TB_16, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(a: RunnableObservableLike<TA_16>, b: RunnableObservableLike<TB_16>, c: RunnableObservableLike<TC_12>, d: RunnableObservableLike<TD_10>, e: RunnableObservableLike<TE_8>, f: RunnableObservableLike<TF_6>, g: RunnableObservableLike<TG_4>, h: RunnableObservableLike<TH_2>): RunnableObservableLike<readonly [TA_16, TB_16, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_17, TB_17, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(a: RunnableObservableLike<TA_17>, b: RunnableObservableLike<TB_17>, c: RunnableObservableLike<TC_13>, d: RunnableObservableLike<TD_11>, e: RunnableObservableLike<TE_9>, f: RunnableObservableLike<TF_7>, g: RunnableObservableLike<TG_5>, h: RunnableObservableLike<TH_3>, i: RunnableObservableLike<TI_1>): RunnableObservableLike<readonly [TA_17, TB_17, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
    zipWithLatestFrom: <TA_18, TB_18, T_38>(other: RunnableObservableLike<TB_18>, selector: import("../functions.js").Function2<TA_18, TB_18, T_38>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_18, T_38>;
};
export default RunnableObservable;
