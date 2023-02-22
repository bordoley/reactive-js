import { Buffer, CatchError, Concat, ConcatAll, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EverySatisfy, ForEach, FromIterable, FromReadonlyArray, FromSequence, Generate, Keep, Map, Pairwise, Reduce, Scan, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToReadonlyArray, Zip } from "../containers.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { EnumerableObservableLike, Retry, ScanAsync, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const buffer: Buffer<EnumerableObservableLike>["buffer"];
export declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
export declare const concat: Concat<EnumerableObservableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const decodeWithCharset: DecodeWithCharset<EnumerableObservableLike>["decodeWithCharset"];
export declare const defer: Defer<EnumerableObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableObservableLike>["empty"];
export declare const everySatisfy: EverySatisfy<EnumerableObservableLike>["everySatisfy"];
export declare const exhaust: <T>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T>, T>;
export declare const forEach: ForEach<EnumerableObservableLike>["forEach"];
export declare const fromEnumerable: FromEnumerable<EnumerableObservableLike>["fromEnumerable"];
export declare const fromIterable: FromIterable<EnumerableObservableLike>["fromIterable"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<EnumerableObservableLike>["fromSequence"];
export declare const generate: Generate<EnumerableObservableLike>["generate"];
export declare const keep: Keep<EnumerableObservableLike>["keep"];
export declare const map: Map<EnumerableObservableLike>["map"];
export declare const merge: <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]) => EnumerableObservableLike<T>;
export declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T>, T>;
export declare const pairwise: Pairwise<EnumerableObservableLike>["pairwise"];
export declare const reduce: Reduce<EnumerableObservableLike>["reduce"];
export declare const retry: Retry<EnumerableObservableLike>["retry"];
export declare const scan: Scan<EnumerableObservableLike>["scan"];
export declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
export declare const skipFirst: SkipFirst<EnumerableObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<EnumerableObservableLike>["someSatisfy"];
export declare const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"];
export declare const takeFirst: TakeFirst<EnumerableObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableObservableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableObservableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableObservableLike>["throwIfEmpty"];
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
/** @ignore */
declare const EnumerableObservable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: import("../functions.js").Function1<unknown, void | EnumerableObservableLike<T_1>>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: EnumerableObservableLike<T_2>, snd: EnumerableObservableLike<T_2>, ...tail: readonly EnumerableObservableLike<T_2>[]) => EnumerableObservableLike<T_2>;
    concatAll: <T_3>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_3>, T_3>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: import("../functions.js").Factory<EnumerableObservableLike<T_4>>, options?: undefined) => EnumerableObservableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: import("../functions.js").Equality<T_5> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: undefined) => EnumerableObservableLike<T_6>;
    everySatisfy: <T_7>(predicate: import("../functions.js").Predicate<T_7>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_7, boolean>;
    exhaust: <T_8>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_8>, T_8>;
    forEach: <T_9>(effect: import("../functions.js").SideEffect1<T_9>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_9, T_9>;
    fromEnumerable: <T_10>(options?: undefined) => import("../functions.js").Function1<import("../ix.js").EnumerableLike<T_10>, EnumerableObservableLike<T_10>>;
    fromIterable: <T_11>(options?: undefined) => import("../functions.js").Function1<Iterable<T_11>, EnumerableObservableLike<T_11>>;
    fromReadonlyArray: <T_12>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_12[], EnumerableObservableLike<T_12>>;
    fromSequence: <T_13>(options?: undefined) => import("../functions.js").Function1<import("../containers.js").SequenceLike<T_13>, EnumerableObservableLike<T_13>>;
    generate: <T_14>(generator: import("../functions.js").Updater<T_14>, initialValue: import("../functions.js").Factory<T_14>, options?: undefined) => EnumerableObservableLike<T_14>;
    keep: <T_15>(predicate: import("../functions.js").Predicate<T_15>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_15, T_15>;
    map: <TA, TB>(mapper: import("../functions.js").Function1<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, TA, TB>;
    merge: <T_2>(fst: EnumerableObservableLike<T_2>, snd: EnumerableObservableLike<T_2>, ...tail: readonly EnumerableObservableLike<T_2>[]) => EnumerableObservableLike<T_2>;
    pairwise: <T_16>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_16, readonly [T_16, T_16]>;
    reduce: <T_17, TAcc>(reducer: import("../functions.js").Reducer<T_17, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_17, TAcc>;
    retry: {
        <T_18>(): import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_18, T_18>;
        <T_19>(predicate: import("../functions.js").Function2<number, unknown, boolean>): import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_19, T_19>;
    };
    scan: <T_20, TAcc_1>(scanner: import("../functions.js").Reducer<T_20, TAcc_1>, initialValue: import("../functions.js").Factory<TAcc_1>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_20, TAcc_1>;
    scanAsync: <T_21, TAcc_2>(scanner: import("../rx.js").AsyncReducer<EnumerableObservableLike<unknown>, T_21, TAcc_2>, initialValue: import("../functions.js").Factory<TAcc_2>) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_21, TAcc_2>;
    skipFirst: <T_22>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_22, T_22>;
    someSatisfy: <T_23>(predicate: import("../functions.js").Predicate<T_23>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_23, boolean>;
    switchAll: <T_8>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_8>, T_8>;
    takeFirst: <T_24>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_24, T_24>;
    takeLast: <T_25>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_25, T_25>;
    takeWhile: <T_26>(predicate: import("../functions.js").Predicate<T_26>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_26, T_26>;
    throwIfEmpty: <T_27>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableObservableLike<unknown>, T_27, T_27>;
    toAsyncEnumerable: <T_28>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_28>, import("../ix.js").AsyncEnumerableLike<T_28>>;
    toEnumerable: <T_29>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_29>, import("../ix.js").EnumerableLike<T_29>>;
    toFlowable: <T_30>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_30>, import("../streaming.js").FlowableLike<T_30>>;
    toIterable: <T_31>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_31>, import("../containers.js").IterableLike<T_31>>;
    toObservable: <T_32>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_32>, import("../rx.js").ObservableLike<T_32>>;
    toReadonlyArray: <T_33>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_33>, import("../containers.js").ReadonlyArrayLike<T_33>>;
    toRunnable: <T_34>(options?: undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_34>, import("../rx.js").RunnableLike<T_34>>;
    toRunnableObservable: <T_35>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableObservableLike<T_35>, import("../rx.js").RunnableObservableLike<T_35>>;
    zip: {
        <TA_1, TB_1>(a: EnumerableObservableLike<TA_1>, b: EnumerableObservableLike<TB_1>): EnumerableObservableLike<readonly [TA_1, TB_1]>;
        <TA_2, TB_2, TC>(a: EnumerableObservableLike<TA_2>, b: EnumerableObservableLike<TB_2>, c: EnumerableObservableLike<TC>): EnumerableObservableLike<readonly [TA_2, TB_2, TC]>;
        <TA_3, TB_3, TC_1, TD>(a: EnumerableObservableLike<TA_3>, b: EnumerableObservableLike<TB_3>, c: EnumerableObservableLike<TC_1>, d: EnumerableObservableLike<TD>): EnumerableObservableLike<readonly [TA_3, TB_3, TC_1, TD]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: EnumerableObservableLike<TA_4>, b: EnumerableObservableLike<TB_4>, c: EnumerableObservableLike<TC_2>, d: EnumerableObservableLike<TD_1>, e: EnumerableObservableLike<TE>): EnumerableObservableLike<readonly [TA_4, TB_4, TC_2, TD_1, TE]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: EnumerableObservableLike<TA_5>, b: EnumerableObservableLike<TB_5>, c: EnumerableObservableLike<TC_3>, d: EnumerableObservableLike<TD_2>, e: EnumerableObservableLike<TE_1>, f: EnumerableObservableLike<TF>): EnumerableObservableLike<readonly [TA_5, TB_5, TC_3, TD_2, TE_1, TF]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableObservableLike<TA_6>, b: EnumerableObservableLike<TB_6>, c: EnumerableObservableLike<TC_4>, d: EnumerableObservableLike<TD_3>, e: EnumerableObservableLike<TE_2>, f: EnumerableObservableLike<TF_1>, g: EnumerableObservableLike<TG>): EnumerableObservableLike<readonly [TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableObservableLike<TA_7>, b: EnumerableObservableLike<TB_7>, c: EnumerableObservableLike<TC_5>, d: EnumerableObservableLike<TD_4>, e: EnumerableObservableLike<TE_3>, f: EnumerableObservableLike<TF_2>, g: EnumerableObservableLike<TG_1>, h: EnumerableObservableLike<TH>): EnumerableObservableLike<readonly [TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableObservableLike<TA_8>, b: EnumerableObservableLike<TB_8>, c: EnumerableObservableLike<TC_6>, d: EnumerableObservableLike<TD_5>, e: EnumerableObservableLike<TE_4>, f: EnumerableObservableLike<TF_3>, g: EnumerableObservableLike<TG_2>, h: EnumerableObservableLike<TH_1>, i: EnumerableObservableLike<TI>): EnumerableObservableLike<readonly [TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
};
export default EnumerableObservable;
