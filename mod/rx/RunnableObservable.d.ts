import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToReadonlyArray, Zip } from "../containers.js";
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
export declare const compute: Compute<RunnableObservableLike>["compute"];
export declare const concat: Concat<RunnableObservableLike>["concat"];
export declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<RunnableObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<RunnableObservableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<RunnableObservableLike>["concatYieldMap"];
export declare const contains: Contains<RunnableObservableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<RunnableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<RunnableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<RunnableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<RunnableObservableLike, {
    delay: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<RunnableObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<RunnableObservableLike>["endWith"];
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
export declare const ignoreElements: IgnoreElements<RunnableObservableLike>["ignoreElements"];
export declare const keep: Keep<RunnableObservableLike>["keep"];
export declare const keepType: KeepType<RunnableObservableLike>["keepType"];
export declare const map: Map<RunnableObservableLike>["map"];
export declare const mapTo: MapTo<RunnableObservableLike>["mapTo"];
export declare const merge: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
export declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T>, T>;
export declare const mergeWith: <T>(snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T, T>;
export declare const pairwise: Pairwise<RunnableObservableLike>["pairwise"];
export declare const reduce: Reduce<RunnableObservableLike>["reduce"];
export declare const retry: Retry<RunnableObservableLike>["retry"];
export declare const scan: Scan<RunnableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<RunnableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<RunnableObservableLike>["someSatisfy"];
export declare const startWith: StartWith<RunnableObservableLike>["startWith"];
export declare const switchAll: ConcatAll<RunnableObservableLike>["concatAll"];
export declare const switchMap: <TA, TB>(mapper: import("../functions.js").Function1<TA, RunnableObservableLike<TB>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA, TB>;
export declare const takeFirst: TakeFirst<RunnableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<RunnableObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<RunnableObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<RunnableObservableLike>["takeWhile"];
export declare const throttle: Throttle<RunnableObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<RunnableObservableLike>["throwIfEmpty"];
export declare const throws: Throws<RunnableObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
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
    compute: <T_2>(factory: import("../functions.js").Factory<T_2>, options?: undefined) => RunnableObservableLike<T_2>;
    concat: <T_3>(fst: RunnableObservableLike<T_3>, snd: RunnableObservableLike<T_3>, ...tail: readonly RunnableObservableLike<T_3>[]) => RunnableObservableLike<T_3>;
    concatAll: <T_4>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_4>, T_4>;
    concatMap: <TA_8, TB_8>(mapper: import("../functions.js").Function1<TA_8, RunnableObservableLike<TB_8>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_8, TB_8>;
    concatWith: <T_5>(snd: RunnableObservableLike<T_5>, ...tail: readonly RunnableObservableLike<T_5>[]) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_5, T_5>;
    concatYieldMap: <TA_9, TB_9>(mapper: import("../functions.js").Function1<TA_9, Generator<TB_9, any, any>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_9, TB_9>;
    contains: <T_6>(value: T_6, options?: {
        readonly equality?: import("../functions.js").Equality<T_6> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_6, boolean>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_7>(factory: import("../functions.js").Factory<RunnableObservableLike<T_7>>, options?: undefined) => RunnableObservableLike<T_7>;
    distinctUntilChanged: <T_8>(options?: {
        readonly equality?: import("../functions.js").Equality<T_8> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_8, T_8>;
    empty: <T_9>(options?: {
        delay: number;
    } | undefined) => RunnableObservableLike<T_9>;
    encodeUtf8: (options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, string, Uint8Array>;
    endWith: <T_10>(value: T_10, ...values: readonly T_10[]) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_10, T_10>;
    everySatisfy: <T_11>(predicate: import("../functions.js").Predicate<T_11>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_11, boolean>;
    exhaust: <T_12>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_12>, T_12>;
    forEach: <T_13>(effect: import("../functions.js").SideEffect1<T_13>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_13, T_13>;
    fromEnumerable: <T_14>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_14>, RunnableObservableLike<T_14>>;
    fromIterable: <T_15>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<Iterable<T_15>, RunnableObservableLike<T_15>>;
    fromReadonlyArray: <T_16>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => import("../functions.js").Function1<readonly T_16[], RunnableObservableLike<T_16>>;
    fromSequence: <T_17>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_17>, RunnableObservableLike<T_17>>;
    generate: <T_18>(generator: import("../functions.js").Updater<T_18>, initialValue: import("../functions.js").Factory<T_18>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => RunnableObservableLike<T_18>;
    ignoreElements: <T_19>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, unknown, T_19>;
    keep: <T_20>(predicate: import("../functions.js").Predicate<T_20>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_20, T_20>;
    keepType: <TA_10, TB_10 extends TA_10>(predicate: import("../functions.js").TypePredicate<TA_10, TB_10>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_10, TB_10>;
    map: <TA_11, TB_11>(mapper: import("../functions.js").Function1<TA_11, TB_11>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_11, TB_11>;
    mapTo: <TA_12, TB_12>(value: TB_12, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_12, TB_12>;
    merge: <T_3>(fst: RunnableObservableLike<T_3>, snd: RunnableObservableLike<T_3>, ...tail: readonly RunnableObservableLike<T_3>[]) => RunnableObservableLike<T_3>;
    mergeWith: <T_5>(snd: RunnableObservableLike<T_5>, ...tail: readonly RunnableObservableLike<T_5>[]) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_5, T_5>;
    pairwise: <T_21>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_21, readonly [T_21, T_21]>;
    reduce: <T_22, TAcc>(reducer: import("../functions.js").Reducer<T_22, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_22, TAcc>;
    retry: {
        <T_23>(): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_23, T_23>;
        <T_24>(predicate: import("../functions.js").Function2<number, unknown, boolean>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_24, T_24>;
    };
    scan: <T_25, TAcc_1>(scanner: import("../functions.js").Reducer<T_25, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_25, TAcc_1>;
    scanAsync: <T_26, TAcc_2>(scanner: import("../rx.js").AsyncReducer<RunnableObservableLike<unknown>, T_26, TAcc_2>, initialValue: import("../functions.js").Factory<TAcc_2>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_26, TAcc_2>;
    skipFirst: <T_27>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_27, T_27>;
    someSatisfy: <T_28>(predicate: import("../functions.js").Predicate<T_28>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_28, boolean>;
    startWith: <T_29>(value: T_29, ...values: readonly T_29[]) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_29, T_29>;
    switchAll: <T_12>(options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_12>, T_12>;
    switchMap: <TA_8, TB_8>(mapper: import("../functions.js").Function1<TA_8, RunnableObservableLike<TB_8>>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_8, TB_8>;
    takeFirst: <T_30>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_30, T_30>;
    takeLast: <T_31>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_31, T_31>;
    takeUntil: <T_32>(notifier: RunnableObservableLike<unknown>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_32, T_32>;
    takeWhile: <T_33>(predicate: import("../functions.js").Predicate<T_33>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_33, T_33>;
    throttle: {
        <T_34>(duration: import("../functions.js").Function1<T_34, RunnableObservableLike<unknown>>, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_34, T_34>;
        <T_35>(duration: number, options?: {
            readonly mode?: import("../rx.js").ThrottleMode | undefined;
        } | undefined): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_35, T_35>;
    };
    throwIfEmpty: <T_36>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_36, T_36>;
    throws: <T_37>(options?: ({
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } & {
        raise?: import("../functions.js").Factory<unknown> | undefined;
    }) | undefined) => RunnableObservableLike<T_37>;
    timeout: {
        <T_38>(duration: number): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_38, T_38>;
        <T_39>(duration: RunnableObservableLike<unknown>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, T_39, T_39>;
    };
    toFlowable: <T_40>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_40>, import("../streaming.js").FlowableLike<T_40>>;
    toObservable: <T_41>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_41>, import("../rx.js").ObservableLike<T_41>>;
    toReadonlyArray: <T_42>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_42>, import("../containers.js").ReadonlyArrayLike<T_42>>;
    toRunnable: <T_43>(options?: undefined) => import("../functions.js").Function1<RunnableObservableLike<T_43>, import("../rx.js").RunnableLike<T_43>>;
    withLatestFrom: <TA_13, TB_13, T_44>(other: RunnableObservableLike<TB_13>, selector: import("../functions.js").Function2<TA_13, TB_13, T_44>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_13, T_44>;
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
        <TA_14, TB_14>(a: RunnableObservableLike<TA_14>, b: RunnableObservableLike<TB_14>): RunnableObservableLike<readonly [TA_14, TB_14]>;
        <TA_15, TB_15, TC_7>(a: RunnableObservableLike<TA_15>, b: RunnableObservableLike<TB_15>, c: RunnableObservableLike<TC_7>): RunnableObservableLike<readonly [TA_15, TB_15, TC_7]>;
        <TA_16, TB_16, TC_8, TD_6>(a: RunnableObservableLike<TA_16>, b: RunnableObservableLike<TB_16>, c: RunnableObservableLike<TC_8>, d: RunnableObservableLike<TD_6>): RunnableObservableLike<readonly [TA_16, TB_16, TC_8, TD_6]>;
        <TA_17, TB_17, TC_9, TD_7, TE_5>(a: RunnableObservableLike<TA_17>, b: RunnableObservableLike<TB_17>, c: RunnableObservableLike<TC_9>, d: RunnableObservableLike<TD_7>, e: RunnableObservableLike<TE_5>): RunnableObservableLike<readonly [TA_17, TB_17, TC_9, TD_7, TE_5]>;
        <TA_18, TB_18, TC_10, TD_8, TE_6, TF_4>(a: RunnableObservableLike<TA_18>, b: RunnableObservableLike<TB_18>, c: RunnableObservableLike<TC_10>, d: RunnableObservableLike<TD_8>, e: RunnableObservableLike<TE_6>, f: RunnableObservableLike<TF_4>): RunnableObservableLike<readonly [TA_18, TB_18, TC_10, TD_8, TE_6, TF_4]>;
        <TA_19, TB_19, TC_11, TD_9, TE_7, TF_5, TG_3>(a: RunnableObservableLike<TA_19>, b: RunnableObservableLike<TB_19>, c: RunnableObservableLike<TC_11>, d: RunnableObservableLike<TD_9>, e: RunnableObservableLike<TE_7>, f: RunnableObservableLike<TF_5>, g: RunnableObservableLike<TG_3>): RunnableObservableLike<readonly [TA_19, TB_19, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_20, TB_20, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(a: RunnableObservableLike<TA_20>, b: RunnableObservableLike<TB_20>, c: RunnableObservableLike<TC_12>, d: RunnableObservableLike<TD_10>, e: RunnableObservableLike<TE_8>, f: RunnableObservableLike<TF_6>, g: RunnableObservableLike<TG_4>, h: RunnableObservableLike<TH_2>): RunnableObservableLike<readonly [TA_20, TB_20, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_21, TB_21, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(a: RunnableObservableLike<TA_21>, b: RunnableObservableLike<TB_21>, c: RunnableObservableLike<TC_13>, d: RunnableObservableLike<TD_11>, e: RunnableObservableLike<TE_9>, f: RunnableObservableLike<TF_7>, g: RunnableObservableLike<TG_5>, h: RunnableObservableLike<TH_3>, i: RunnableObservableLike<TI_1>): RunnableObservableLike<readonly [TA_21, TB_21, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
    zipWith: {
        <TA_22, TB_22>(b: RunnableObservableLike<TB_22>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_22, readonly [TA_22, TB_22]>;
        <TA_23, TB_23, TC_14>(b: RunnableObservableLike<TB_23>, c: RunnableObservableLike<TC_14>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_23, readonly [TA_23, TB_23, TC_14]>;
        <TA_24, TB_24, TC_15, TD_12>(b: RunnableObservableLike<TB_24>, c: RunnableObservableLike<TC_15>, d: RunnableObservableLike<TD_12>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_24, readonly [TA_24, TB_24, TC_15, TD_12]>;
        <TA_25, TB_25, TC_16, TD_13, TE_10>(b: RunnableObservableLike<TB_25>, c: RunnableObservableLike<TC_16>, d: RunnableObservableLike<TD_13>, e: RunnableObservableLike<TE_10>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_25, readonly [TA_25, TB_25, TC_16, TD_13, TE_10]>;
        <TA_26, TB_26, TC_17, TD_14, TE_11, TF_8>(b: RunnableObservableLike<TB_26>, c: RunnableObservableLike<TC_17>, d: RunnableObservableLike<TD_14>, e: RunnableObservableLike<TE_11>, f: RunnableObservableLike<TF_8>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_26, readonly [TA_26, TB_26, TC_17, TD_14, TE_11, TF_8]>;
        <TA_27, TB_27, TC_18, TD_15, TE_12, TF_9, TG_6>(b: RunnableObservableLike<TB_27>, c: RunnableObservableLike<TC_18>, d: RunnableObservableLike<TD_15>, e: RunnableObservableLike<TE_12>, f: RunnableObservableLike<TF_9>, g: RunnableObservableLike<TG_6>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_27, readonly [TA_27, TB_27, TC_18, TD_15, TE_12, TF_9, TG_6]>;
        <TA_28, TB_28, TC_19, TD_16, TE_13, TF_10, TG_7, TH_4>(b: RunnableObservableLike<TB_28>, c: RunnableObservableLike<TC_19>, d: RunnableObservableLike<TD_16>, e: RunnableObservableLike<TE_13>, f: RunnableObservableLike<TF_10>, g: RunnableObservableLike<TG_7>, h: RunnableObservableLike<TH_4>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_28, readonly [TA_28, TB_28, TC_19, TD_16, TE_13, TF_10, TG_7, TH_4]>;
        <TA_29, TB_29, TC_20, TD_17, TE_14, TF_11, TG_8, TH_5, TI_2>(b: RunnableObservableLike<TB_29>, c: RunnableObservableLike<TC_20>, d: RunnableObservableLike<TD_17>, e: RunnableObservableLike<TE_14>, f: RunnableObservableLike<TF_11>, g: RunnableObservableLike<TG_8>, h: RunnableObservableLike<TH_5>, i: RunnableObservableLike<TI_2>): import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_29, readonly [TA_29, TB_29, TC_20, TD_17, TE_14, TF_11, TG_8, TH_5, TI_2]>;
    };
    zipWithLatestFrom: <TA_30, TB_30, T_45>(other: RunnableObservableLike<TB_30>, selector: import("../functions.js").Function2<TA_30, TB_30, T_45>) => import("../containers.js").ContainerOperator<RunnableObservableLike<unknown>, TA_30, T_45>;
};
export default RunnableObservable;
