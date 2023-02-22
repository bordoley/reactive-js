import { Buffer, CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, ContainerOperator, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToIterable, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { EnumerableObservableLike, Retry, ScanAsync, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<EnumerableObservableLike>["buffer"];
export declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
export declare const compute: Compute<EnumerableObservableLike>["compute"];
export declare const concat: Concat<EnumerableObservableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<EnumerableObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<EnumerableObservableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<EnumerableObservableLike>["concatYieldMap"];
export declare const contains: Contains<EnumerableObservableLike>["contains"];
export declare const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<EnumerableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableObservableLike>["empty"];
export declare const encodeUtf8: EncodeUtf8<EnumerableObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<EnumerableObservableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<EnumerableObservableLike>["everySatisfy"];
export declare const forEach: ForEach<EnumerableObservableLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<EnumerableObservableLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<EnumerableObservableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<EnumerableObservableLike>["fromSequence"];
export declare const generate: Generate<EnumerableObservableLike>["generate"];
export declare const ignoreElements: IgnoreElements<EnumerableObservableLike>["ignoreElements"];
export declare const keep: Keep<EnumerableObservableLike>["keep"];
export declare const keepType: KeepType<EnumerableObservableLike>["keepType"];
export declare const map: Map<EnumerableObservableLike>["map"];
export declare const mapTo: MapTo<EnumerableObservableLike>["mapTo"];
export declare const pairwise: Pairwise<EnumerableObservableLike>["pairwise"];
export declare const reduce: Reduce<EnumerableObservableLike>["reduce"];
export declare const retry: Retry<EnumerableObservableLike>["retry"];
export declare const scan: Scan<EnumerableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<EnumerableObservableLike>["someSatisfy"];
export declare const startWith: StartWith<EnumerableObservableLike>["startWith"];
export declare const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableObservableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];
export declare const throws: Throws<EnumerableObservableLike>["throws"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"];
export declare const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"];
export declare const toIterable: ToIterable<EnumerableObservableLike>["toIterable"];
export declare const toReadonlyArray: ToReadonlyArray<EnumerableObservableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<EnumerableObservableLike>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<EnumerableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export declare const toObservable: ToObservable<EnumerableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const zip: Zip<EnumerableObservableLike>["zip"];
export declare const zipWith: ZipWith<EnumerableObservableLike>["zipWith"];
/** @ignore */
declare const EnumerableObservable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: import("../functions.js").Function1<unknown, void | EnumerableObservableLike<T_1>>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_1, T_1>;
    compute: <T_2>(factory: import("../functions.js").Factory<T_2>, options?: undefined) => EnumerableObservableLike<T_2>;
    concat: <T_3>(fst: EnumerableObservableLike<T_3>, snd: EnumerableObservableLike<T_3>, ...tail: readonly EnumerableObservableLike<T_3>[]) => EnumerableObservableLike<T_3>;
    concatAll: <T_4>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_4>, T_4>;
    concatMap: <TA, TB>(mapper: import("../functions.js").Function1<TA, EnumerableObservableLike<TB>>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA, TB>;
    concatWith: <T_5>(snd: EnumerableObservableLike<T_5>, ...tail: readonly EnumerableObservableLike<T_5>[]) => ContainerOperator<EnumerableObservableLike<unknown>, T_5, T_5>;
    concatYieldMap: <TA_1, TB_1>(mapper: import("../functions.js").Function1<TA_1, Generator<TB_1, any, any>>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA_1, TB_1>;
    contains: <T_6>(value: T_6, options?: {
        readonly equality?: import("../functions.js").Equality<T_6> | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_6, boolean>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_7>(factory: import("../functions.js").Factory<EnumerableObservableLike<T_7>>, options?: undefined) => EnumerableObservableLike<T_7>;
    distinctUntilChanged: <T_8>(options?: {
        readonly equality?: import("../functions.js").Equality<T_8> | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_8, T_8>;
    empty: <T_9>(options?: undefined) => EnumerableObservableLike<T_9>;
    encodeUtf8: (options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, string, Uint8Array>;
    endWith: <T_10>(value: T_10, ...values: readonly T_10[]) => ContainerOperator<EnumerableObservableLike<unknown>, T_10, T_10>;
    everySatisfy: <T_11>(predicate: import("../functions.js").Predicate<T_11>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_11, boolean>;
    forEach: <T_12>(effect: import("../functions.js").SideEffect1<T_12>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_12, T_12>;
    fromEnumerable: <T_13>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_13>, EnumerableObservableLike<T_13>>;
    fromIterable: <T_14>(options?: undefined) => import("../functions.js").Function1<Iterable<T_14>, EnumerableObservableLike<T_14>>;
    fromReadonlyArray: <T_15>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_15[], EnumerableObservableLike<T_15>>;
    fromSequence: <T_16>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_16>, EnumerableObservableLike<T_16>>;
    generate: <T_17>(generator: import("../functions.js").Updater<T_17>, initialValue: import("../functions.js").Factory<T_17>, options?: undefined) => EnumerableObservableLike<T_17>;
    ignoreElements: <T_18>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, unknown, T_18>;
    keep: <T_19>(predicate: import("../functions.js").Predicate<T_19>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_19, T_19>;
    keepType: <TA_2, TB_2 extends TA_2>(predicate: import("../functions.js").TypePredicate<TA_2, TB_2>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA_2, TB_2>;
    map: <TA_3, TB_3>(mapper: import("../functions.js").Function1<TA_3, TB_3>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA_3, TB_3>;
    mapTo: <TA_4, TB_4>(value: TB_4, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA_4, TB_4>;
    pairwise: <T_20>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_20, readonly [T_20, T_20]>;
    reduce: <T_21, TAcc>(reducer: import("../functions.js").Reducer<T_21, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_21, TAcc>;
    retry: {
        <T_22>(): ContainerOperator<EnumerableObservableLike<unknown>, T_22, T_22>;
        <T_23>(predicate: import("../functions.js").Function2<number, unknown, boolean>): ContainerOperator<EnumerableObservableLike<unknown>, T_23, T_23>;
    };
    scan: <T_24, TAcc_1>(scanner: import("../functions.js").Reducer<T_24, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_24, TAcc_1>;
    scanAsync: <T_25, TAcc_2>(scanner: import("../rx.js").AsyncReducer<EnumerableObservableLike<unknown>, T_25, TAcc_2>, initialValue: import("../functions.js").Factory<TAcc_2>) => ContainerOperator<EnumerableObservableLike<unknown>, T_25, TAcc_2>;
    skipFirst: <T_26>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_26, T_26>;
    someSatisfy: <T_27>(predicate: import("../functions.js").Predicate<T_27>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_27, boolean>;
    startWith: <T_28>(value: T_28, ...values: readonly T_28[]) => ContainerOperator<EnumerableObservableLike<unknown>, T_28, T_28>;
    takeFirst: <T_29>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_29, T_29>;
    takeLast: <T_30>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_30, T_30>;
    takeWhile: <T_31>(predicate: import("../functions.js").Predicate<T_31>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_31, T_31>;
    throwIfEmpty: <T_32>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_32, T_32>;
    throws: <T_33>(options?: {
        raise?: import("../functions.js").Factory<unknown> | undefined;
    } | undefined) => EnumerableObservableLike<T_33>;
    toAsyncEnumerable: <T_34>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_34>, import("../ix.js").AsyncEnumerableLike<T_34>>;
    toEnumerable: <T_35>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_35>, import("../ix.js").EnumerableLike<T_35>>;
    toFlowable: <T_36>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_36>, import("../streaming.js").FlowableLike<T_36>>;
    toIterable: <T_37>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_37>, import("../containers.js").IterableLike<T_37>>;
    toObservable: <T_38>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_38>, import("../rx.js").ObservableLike<T_38>>;
    toReadonlyArray: <T_39>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_39>, import("../containers.js").ReadonlyArrayLike<T_39>>;
    toRunnable: <T_40>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_40>, import("../rx.js").RunnableLike<T_40>>;
    toRunnableObservable: <T_41>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_41>, import("../rx.js").RunnableObservableLike<T_41>>;
    zip: {
        <TA_5, TB_5>(a: EnumerableObservableLike<TA_5>, b: EnumerableObservableLike<TB_5>): EnumerableObservableLike<readonly [TA_5, TB_5]>;
        <TA_6, TB_6, TC>(a: EnumerableObservableLike<TA_6>, b: EnumerableObservableLike<TB_6>, c: EnumerableObservableLike<TC>): EnumerableObservableLike<readonly [TA_6, TB_6, TC]>;
        <TA_7, TB_7, TC_1, TD>(a: EnumerableObservableLike<TA_7>, b: EnumerableObservableLike<TB_7>, c: EnumerableObservableLike<TC_1>, d: EnumerableObservableLike<TD>): EnumerableObservableLike<readonly [TA_7, TB_7, TC_1, TD]>;
        <TA_8, TB_8, TC_2, TD_1, TE>(a: EnumerableObservableLike<TA_8>, b: EnumerableObservableLike<TB_8>, c: EnumerableObservableLike<TC_2>, d: EnumerableObservableLike<TD_1>, e: EnumerableObservableLike<TE>): EnumerableObservableLike<readonly [TA_8, TB_8, TC_2, TD_1, TE]>;
        <TA_9, TB_9, TC_3, TD_2, TE_1, TF>(a: EnumerableObservableLike<TA_9>, b: EnumerableObservableLike<TB_9>, c: EnumerableObservableLike<TC_3>, d: EnumerableObservableLike<TD_2>, e: EnumerableObservableLike<TE_1>, f: EnumerableObservableLike<TF>): EnumerableObservableLike<readonly [TA_9, TB_9, TC_3, TD_2, TE_1, TF]>;
        <TA_10, TB_10, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableObservableLike<TA_10>, b: EnumerableObservableLike<TB_10>, c: EnumerableObservableLike<TC_4>, d: EnumerableObservableLike<TD_3>, e: EnumerableObservableLike<TE_2>, f: EnumerableObservableLike<TF_1>, g: EnumerableObservableLike<TG>): EnumerableObservableLike<readonly [TA_10, TB_10, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_11, TB_11, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableObservableLike<TA_11>, b: EnumerableObservableLike<TB_11>, c: EnumerableObservableLike<TC_5>, d: EnumerableObservableLike<TD_4>, e: EnumerableObservableLike<TE_3>, f: EnumerableObservableLike<TF_2>, g: EnumerableObservableLike<TG_1>, h: EnumerableObservableLike<TH>): EnumerableObservableLike<readonly [TA_11, TB_11, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_12, TB_12, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableObservableLike<TA_12>, b: EnumerableObservableLike<TB_12>, c: EnumerableObservableLike<TC_6>, d: EnumerableObservableLike<TD_5>, e: EnumerableObservableLike<TE_4>, f: EnumerableObservableLike<TF_3>, g: EnumerableObservableLike<TG_2>, h: EnumerableObservableLike<TH_1>, i: EnumerableObservableLike<TI>): EnumerableObservableLike<readonly [TA_12, TB_12, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    zipWith: {
        <TA_13, TB_13>(b: EnumerableObservableLike<TB_13>): ContainerOperator<EnumerableObservableLike<unknown>, TA_13, readonly [TA_13, TB_13]>;
        <TA_14, TB_14, TC_7>(b: EnumerableObservableLike<TB_14>, c: EnumerableObservableLike<TC_7>): ContainerOperator<EnumerableObservableLike<unknown>, TA_14, readonly [TA_14, TB_14, TC_7]>;
        <TA_15, TB_15, TC_8, TD_6>(b: EnumerableObservableLike<TB_15>, c: EnumerableObservableLike<TC_8>, d: EnumerableObservableLike<TD_6>): ContainerOperator<EnumerableObservableLike<unknown>, TA_15, readonly [TA_15, TB_15, TC_8, TD_6]>;
        <TA_16, TB_16, TC_9, TD_7, TE_5>(b: EnumerableObservableLike<TB_16>, c: EnumerableObservableLike<TC_9>, d: EnumerableObservableLike<TD_7>, e: EnumerableObservableLike<TE_5>): ContainerOperator<EnumerableObservableLike<unknown>, TA_16, readonly [TA_16, TB_16, TC_9, TD_7, TE_5]>;
        <TA_17, TB_17, TC_10, TD_8, TE_6, TF_4>(b: EnumerableObservableLike<TB_17>, c: EnumerableObservableLike<TC_10>, d: EnumerableObservableLike<TD_8>, e: EnumerableObservableLike<TE_6>, f: EnumerableObservableLike<TF_4>): ContainerOperator<EnumerableObservableLike<unknown>, TA_17, readonly [TA_17, TB_17, TC_10, TD_8, TE_6, TF_4]>;
        <TA_18, TB_18, TC_11, TD_9, TE_7, TF_5, TG_3>(b: EnumerableObservableLike<TB_18>, c: EnumerableObservableLike<TC_11>, d: EnumerableObservableLike<TD_9>, e: EnumerableObservableLike<TE_7>, f: EnumerableObservableLike<TF_5>, g: EnumerableObservableLike<TG_3>): ContainerOperator<EnumerableObservableLike<unknown>, TA_18, readonly [TA_18, TB_18, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_19, TB_19, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(b: EnumerableObservableLike<TB_19>, c: EnumerableObservableLike<TC_12>, d: EnumerableObservableLike<TD_10>, e: EnumerableObservableLike<TE_8>, f: EnumerableObservableLike<TF_6>, g: EnumerableObservableLike<TG_4>, h: EnumerableObservableLike<TH_2>): ContainerOperator<EnumerableObservableLike<unknown>, TA_19, readonly [TA_19, TB_19, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_20, TB_20, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(b: EnumerableObservableLike<TB_20>, c: EnumerableObservableLike<TC_13>, d: EnumerableObservableLike<TD_11>, e: EnumerableObservableLike<TE_9>, f: EnumerableObservableLike<TF_7>, g: EnumerableObservableLike<TG_5>, h: EnumerableObservableLike<TH_3>, i: EnumerableObservableLike<TI_1>): ContainerOperator<EnumerableObservableLike<unknown>, TA_20, readonly [TA_20, TB_20, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
};
export default EnumerableObservable;
