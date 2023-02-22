import { Buffer, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, DistinctUntilChanged, Empty, EndWith, ForEach, FromIterable, FromReadonlyArray, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, ToIterable, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { EnumerableLike, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => import("../ix.js").EnumeratorLike<T>;
export declare const buffer: Buffer<EnumerableLike>["buffer"];
export declare const compute: Compute<EnumerableLike>["compute"];
export declare const concat: Concat<EnumerableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
export declare const concatMap: ConcatMap<EnumerableLike>["concatMap"];
export declare const concatWith: ConcatWith<EnumerableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<EnumerableLike>["concatYieldMap"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableLike>["empty"];
export declare const endWith: EndWith<EnumerableLike>["endWith"];
export declare const forEach: ForEach<EnumerableLike>["forEach"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"];
export declare const fromIterable: FromIterable<EnumerableLike>["fromIterable"];
export declare const generate: Generate<EnumerableLike>["generate"];
export declare const ignoreElements: IgnoreElements<EnumerableLike>["ignoreElements"];
export declare const keep: Keep<EnumerableLike>["keep"];
export declare const keepType: KeepType<EnumerableLike>["keepType"];
export declare const map: Map<EnumerableLike>["map"];
export declare const mapTo: MapTo<EnumerableLike>["mapTo"];
export declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
export declare const repeat: Repeat<EnumerableLike>["repeat"];
export declare const scan: Scan<EnumerableLike>["scan"];
export declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
export declare const startWith: StartWith<EnumerableLike>["startWith"];
export declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
export declare const throws: Throws<EnumerableLike>["throws"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<EnumerableLike>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
export declare const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
export declare const toFlowable: ToFlowable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
export declare const toObservable: ToObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export declare const zip: Zip<EnumerableLike>["zip"];
export declare const zipWith: ZipWith<EnumerableLike>["zipWith"];
/** @ignore */
declare const Enumerable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T, readonly T[]>;
    compute: <T_1>(factory: import("../functions.js").Factory<T_1>, options?: undefined) => EnumerableLike<T_1>;
    concat: <T_2>(fst: EnumerableLike<T_2>, snd: EnumerableLike<T_2>, ...tail: readonly EnumerableLike<T_2>[]) => EnumerableLike<T_2>;
    concatAll: <T_3>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, EnumerableLike<T_3>, T_3>;
    concatMap: <TA, TB>(mapper: import("../functions.js").Function1<TA, EnumerableLike<TB>>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA, TB>;
    concatWith: <T_4>(snd: EnumerableLike<T_4>, ...tail: readonly EnumerableLike<T_4>[]) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_4, T_4>;
    concatYieldMap: <TA_1, TB_1>(mapper: import("../functions.js").Function1<TA_1, Generator<TB_1, any, any>>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_1, TB_1>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: import("../functions.js").Equality<T_5> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: undefined) => EnumerableLike<T_6>;
    endWith: <T_7>(value: T_7, ...values: readonly T_7[]) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_7, T_7>;
    forEach: <T_8>(effect: import("../functions.js").SideEffect1<T_8>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_8, T_8>;
    fromReadonlyArray: <T_9>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_9[], EnumerableLike<T_9>>;
    fromIterable: <T_10>(options?: undefined) => import("../functions.js").Function1<Iterable<T_10>, EnumerableLike<T_10>>;
    generate: <T_11>(generator: import("../functions.js").Updater<T_11>, initialValue: import("../functions.js").Factory<T_11>, options?: undefined) => EnumerableLike<T_11>;
    ignoreElements: <T_12>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, unknown, T_12>;
    keep: <T_13>(predicate: import("../functions.js").Predicate<T_13>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_13, T_13>;
    keepType: <TA_2, TB_2 extends TA_2>(predicate: import("../functions.js").TypePredicate<TA_2, TB_2>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_2, TB_2>;
    map: <TA_3, TB_3>(mapper: import("../functions.js").Function1<TA_3, TB_3>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_3, TB_3>;
    mapTo: <TA_4, TB_4>(value: TB_4, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_4, TB_4>;
    pairwise: <T_14>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_14, readonly [T_14, T_14]>;
    repeat: {
        <T_15>(predicate: import("../functions.js").Predicate<number>, options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_15, T_15>;
        <T_16>(count: number, options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_16, T_16>;
        <T_17>(options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_17, T_17>;
    };
    scan: <T_18, TAcc>(scanner: import("../functions.js").Reducer<T_18, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_18, TAcc>;
    skipFirst: <T_19>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_19, T_19>;
    startWith: <T_20>(value: T_20, ...values: readonly T_20[]) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_20, T_20>;
    takeFirst: <T_21>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_21, T_21>;
    takeLast: <T_22>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_22, T_22>;
    takeWhile: <T_23>(predicate: import("../functions.js").Predicate<T_23>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_23, T_23>;
    throwIfEmpty: <T_24>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_24, T_24>;
    throws: <T_25>(options?: {
        raise?: import("../functions.js").Factory<unknown> | undefined;
    } | undefined) => EnumerableLike<T_25>;
    toAsyncEnumerable: <T_26>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_26>, import("../ix.js").AsyncEnumerableLike<T_26>>;
    toEnumerable: <T_27>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_27>, EnumerableLike<T_27>>;
    toEnumerableObservable: <T_28>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_28>, import("../rx.js").EnumerableObservableLike<T_28>>;
    toFlowable: <T_29>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_29>, import("../streaming.js").FlowableLike<T_29>>;
    toIterable: <T_30>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_30>, import("../containers.js").IterableLike<T_30>>;
    toObservable: <T_31>(options?: {
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_31>, import("../rx.js").ObservableLike<T_31>>;
    toReadonlyArray: <T_32>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_32>, import("../containers.js").ReadonlyArrayLike<T_32>>;
    toRunnable: <T_33>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_33>, import("../rx.js").RunnableLike<T_33>>;
    toRunnableObservable: <T_34>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_34>, import("../rx.js").RunnableObservableLike<T_34>>;
    zip: {
        <TA_5, TB_5>(a: EnumerableLike<TA_5>, b: EnumerableLike<TB_5>): EnumerableLike<readonly [TA_5, TB_5]>;
        <TA_6, TB_6, TC>(a: EnumerableLike<TA_6>, b: EnumerableLike<TB_6>, c: EnumerableLike<TC>): EnumerableLike<readonly [TA_6, TB_6, TC]>;
        <TA_7, TB_7, TC_1, TD>(a: EnumerableLike<TA_7>, b: EnumerableLike<TB_7>, c: EnumerableLike<TC_1>, d: EnumerableLike<TD>): EnumerableLike<readonly [TA_7, TB_7, TC_1, TD]>;
        <TA_8, TB_8, TC_2, TD_1, TE>(a: EnumerableLike<TA_8>, b: EnumerableLike<TB_8>, c: EnumerableLike<TC_2>, d: EnumerableLike<TD_1>, e: EnumerableLike<TE>): EnumerableLike<readonly [TA_8, TB_8, TC_2, TD_1, TE]>;
        <TA_9, TB_9, TC_3, TD_2, TE_1, TF>(a: EnumerableLike<TA_9>, b: EnumerableLike<TB_9>, c: EnumerableLike<TC_3>, d: EnumerableLike<TD_2>, e: EnumerableLike<TE_1>, f: EnumerableLike<TF>): EnumerableLike<readonly [TA_9, TB_9, TC_3, TD_2, TE_1, TF]>;
        <TA_10, TB_10, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableLike<TA_10>, b: EnumerableLike<TB_10>, c: EnumerableLike<TC_4>, d: EnumerableLike<TD_3>, e: EnumerableLike<TE_2>, f: EnumerableLike<TF_1>, g: EnumerableLike<TG>): EnumerableLike<readonly [TA_10, TB_10, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_11, TB_11, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableLike<TA_11>, b: EnumerableLike<TB_11>, c: EnumerableLike<TC_5>, d: EnumerableLike<TD_4>, e: EnumerableLike<TE_3>, f: EnumerableLike<TF_2>, g: EnumerableLike<TG_1>, h: EnumerableLike<TH>): EnumerableLike<readonly [TA_11, TB_11, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_12, TB_12, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableLike<TA_12>, b: EnumerableLike<TB_12>, c: EnumerableLike<TC_6>, d: EnumerableLike<TD_5>, e: EnumerableLike<TE_4>, f: EnumerableLike<TF_3>, g: EnumerableLike<TG_2>, h: EnumerableLike<TH_1>, i: EnumerableLike<TI>): EnumerableLike<readonly [TA_12, TB_12, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    zipWith: {
        <TA_13, TB_13>(b: EnumerableLike<TB_13>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_13, readonly [TA_13, TB_13]>;
        <TA_14, TB_14, TC_7>(b: EnumerableLike<TB_14>, c: EnumerableLike<TC_7>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_14, readonly [TA_14, TB_14, TC_7]>;
        <TA_15, TB_15, TC_8, TD_6>(b: EnumerableLike<TB_15>, c: EnumerableLike<TC_8>, d: EnumerableLike<TD_6>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_15, readonly [TA_15, TB_15, TC_8, TD_6]>;
        <TA_16, TB_16, TC_9, TD_7, TE_5>(b: EnumerableLike<TB_16>, c: EnumerableLike<TC_9>, d: EnumerableLike<TD_7>, e: EnumerableLike<TE_5>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_16, readonly [TA_16, TB_16, TC_9, TD_7, TE_5]>;
        <TA_17, TB_17, TC_10, TD_8, TE_6, TF_4>(b: EnumerableLike<TB_17>, c: EnumerableLike<TC_10>, d: EnumerableLike<TD_8>, e: EnumerableLike<TE_6>, f: EnumerableLike<TF_4>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_17, readonly [TA_17, TB_17, TC_10, TD_8, TE_6, TF_4]>;
        <TA_18, TB_18, TC_11, TD_9, TE_7, TF_5, TG_3>(b: EnumerableLike<TB_18>, c: EnumerableLike<TC_11>, d: EnumerableLike<TD_9>, e: EnumerableLike<TE_7>, f: EnumerableLike<TF_5>, g: EnumerableLike<TG_3>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_18, readonly [TA_18, TB_18, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_19, TB_19, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(b: EnumerableLike<TB_19>, c: EnumerableLike<TC_12>, d: EnumerableLike<TD_10>, e: EnumerableLike<TE_8>, f: EnumerableLike<TF_6>, g: EnumerableLike<TG_4>, h: EnumerableLike<TH_2>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_19, readonly [TA_19, TB_19, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_20, TB_20, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(b: EnumerableLike<TB_20>, c: EnumerableLike<TC_13>, d: EnumerableLike<TD_11>, e: EnumerableLike<TE_9>, f: EnumerableLike<TF_7>, g: EnumerableLike<TG_5>, h: EnumerableLike<TH_3>, i: EnumerableLike<TI_1>): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA_20, readonly [TA_20, TB_20, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
};
export default Enumerable;
