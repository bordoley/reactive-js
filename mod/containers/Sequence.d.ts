import { Compute, Concat, ConcatAll, ConcatMap, ConcatWith, DistinctUntilChanged, EndWith, FromReadonlyArray, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Pairwise, Repeat, Scan, SequenceLike, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, ToIterable, ToReadonlyArray, Zip, ZipWith } from "../containers.js";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const compute: Compute<SequenceLike>["compute"];
export declare const concat: Concat<SequenceLike>["concat"];
export declare const concatAll: ConcatAll<SequenceLike>["concatAll"];
export declare const concatMap: ConcatMap<SequenceLike>["concatMap"];
export declare const concatWith: ConcatWith<SequenceLike>["concatWith"];
export declare const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"];
export declare const endWith: EndWith<SequenceLike>["endWith"];
export declare const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"];
export declare const generate: Generate<SequenceLike>["generate"];
export declare const ignoreElements: IgnoreElements<SequenceLike>["ignoreElements"];
export declare const keep: Keep<SequenceLike>["keep"];
export declare const keepType: KeepType<SequenceLike>["keepType"];
export declare const map: Map<SequenceLike>["map"];
export declare const mapTo: MapTo<SequenceLike>["mapTo"];
export declare const pairwise: Pairwise<SequenceLike>["pairwise"];
export declare const repeat: Repeat<SequenceLike>["repeat"];
export declare const scan: Scan<SequenceLike>["scan"];
export declare const seek: <T>(count: number) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T, T>;
export declare const skipFirst: SkipFirst<SequenceLike>["skipFirst"];
export declare const startWith: StartWith<SequenceLike>["startWith"];
export declare const takeFirst: TakeFirst<SequenceLike>["takeFirst"];
export declare const takeLast: TakeLast<SequenceLike>["takeLast"];
export declare const takeWhile: TakeWhile<SequenceLike>["takeWhile"];
export declare const toAsyncEnumerable: ToAsyncEnumerable<SequenceLike>["toAsyncEnumerable"];
export declare const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"];
export declare const toEnumerableObservable: ToEnumerableObservable<SequenceLike>["toEnumerableObservable"];
export declare const toFlowable: ToFlowable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toFlowable"];
export declare const toIterable: ToIterable<SequenceLike>["toIterable"];
export declare const toObservable: ToObservable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
export declare const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"];
export declare const toRunnable: ToRunnable<SequenceLike>["toRunnable"];
export declare const toRunnableObservable: ToRunnableObservable<SequenceLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
export declare const zip: Zip<SequenceLike>["zip"];
export declare const zipWith: ZipWith<SequenceLike>["zipWith"];
/** @ignore */
declare const Sequence: {
    compute: <T>(factory: import("../functions.js").Factory<T>, options?: undefined) => SequenceLike<T>;
    concat: <T_1>(fst: SequenceLike<T_1>, snd: SequenceLike<T_1>, ...tail: readonly SequenceLike<T_1>[]) => SequenceLike<T_1>;
    concatAll: <T_2>(options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, SequenceLike<T_2>, T_2>;
    concatMap: <TA, TB>(mapper: import("../functions.js").Function1<TA, SequenceLike<TB>>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA, TB>;
    concatWith: <T_3>(snd: SequenceLike<T_3>, ...tail: readonly SequenceLike<T_3>[]) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_3, T_3>;
    distinctUntilChanged: <T_4>(options?: {
        readonly equality?: import("../functions.js").Equality<T_4> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_4, T_4>;
    endWith: <T_5>(value: T_5, ...values: readonly T_5[]) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_5, T_5>;
    fromReadonlyArray: <T_6>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_6[], SequenceLike<T_6>>;
    generate: <T_7>(generator: import("../functions.js").Updater<T_7>, initialValue: import("../functions.js").Factory<T_7>, options?: undefined) => SequenceLike<T_7>;
    ignoreElements: <T_8>(options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, unknown, T_8>;
    keep: <T_9>(predicate: import("../functions.js").Predicate<T_9>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_9, T_9>;
    keepType: <TA_1, TB_1 extends TA_1>(predicate: import("../functions.js").TypePredicate<TA_1, TB_1>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_1, TB_1>;
    map: <TA_2, TB_2>(mapper: import("../functions.js").Function1<TA_2, TB_2>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_2, TB_2>;
    mapTo: <TA_3, TB_3>(value: TB_3, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_3, TB_3>;
    pairwise: <T_10>(options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_10, readonly [T_10, T_10]>;
    repeat: {
        <T_11>(predicate: import("../functions.js").Predicate<number>, options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_11, T_11>;
        <T_12>(count: number, options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_12, T_12>;
        <T_13>(options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_13, T_13>;
    };
    scan: <T_14, TAcc>(scanner: import("../functions.js").Reducer<T_14, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_14, TAcc>;
    seek: <T_15>(count: number) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_15, T_15>;
    skipFirst: <T_16>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_16, T_16>;
    startWith: <T_17>(value: T_17, ...values: readonly T_17[]) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_17, T_17>;
    takeFirst: <T_18>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_18, T_18>;
    takeLast: <T_19>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_19, T_19>;
    takeWhile: <T_20>(predicate: import("../functions.js").Predicate<T_20>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_20, T_20>;
    toAsyncEnumerable: <T_21>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_21>, import("../ix.js").AsyncEnumerableLike<T_21>>;
    toEnumerable: <T_22>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_22>, import("../ix.js").EnumerableLike<T_22>>;
    toEnumerableObservable: <T_23>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_23>, import("../rx.js").EnumerableObservableLike<T_23>>;
    toFlowable: <T_24>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_24>, import("../streaming.js").FlowableLike<T_24>>;
    toIterable: <T_25>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_25>, import("../containers.js").IterableLike<T_25>>;
    toObservable: <T_26>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_26>, import("../rx.js").ObservableLike<T_26>>;
    toReadonlyArray: <T_27>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_27>, import("../containers.js").ReadonlyArrayLike<T_27>>;
    toRunnable: <T_28>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_28>, import("../rx.js").RunnableLike<T_28>>;
    toRunnableObservable: <T_29>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_29>, import("../rx.js").RunnableObservableLike<T_29>>;
    zip: {
        <TA_4, TB_4>(a: SequenceLike<TA_4>, b: SequenceLike<TB_4>): SequenceLike<readonly [TA_4, TB_4]>;
        <TA_5, TB_5, TC>(a: SequenceLike<TA_5>, b: SequenceLike<TB_5>, c: SequenceLike<TC>): SequenceLike<readonly [TA_5, TB_5, TC]>;
        <TA_6, TB_6, TC_1, TD>(a: SequenceLike<TA_6>, b: SequenceLike<TB_6>, c: SequenceLike<TC_1>, d: SequenceLike<TD>): SequenceLike<readonly [TA_6, TB_6, TC_1, TD]>;
        <TA_7, TB_7, TC_2, TD_1, TE>(a: SequenceLike<TA_7>, b: SequenceLike<TB_7>, c: SequenceLike<TC_2>, d: SequenceLike<TD_1>, e: SequenceLike<TE>): SequenceLike<readonly [TA_7, TB_7, TC_2, TD_1, TE]>;
        <TA_8, TB_8, TC_3, TD_2, TE_1, TF>(a: SequenceLike<TA_8>, b: SequenceLike<TB_8>, c: SequenceLike<TC_3>, d: SequenceLike<TD_2>, e: SequenceLike<TE_1>, f: SequenceLike<TF>): SequenceLike<readonly [TA_8, TB_8, TC_3, TD_2, TE_1, TF]>;
        <TA_9, TB_9, TC_4, TD_3, TE_2, TF_1, TG>(a: SequenceLike<TA_9>, b: SequenceLike<TB_9>, c: SequenceLike<TC_4>, d: SequenceLike<TD_3>, e: SequenceLike<TE_2>, f: SequenceLike<TF_1>, g: SequenceLike<TG>): SequenceLike<readonly [TA_9, TB_9, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_10, TB_10, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: SequenceLike<TA_10>, b: SequenceLike<TB_10>, c: SequenceLike<TC_5>, d: SequenceLike<TD_4>, e: SequenceLike<TE_3>, f: SequenceLike<TF_2>, g: SequenceLike<TG_1>, h: SequenceLike<TH>): SequenceLike<readonly [TA_10, TB_10, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_11, TB_11, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: SequenceLike<TA_11>, b: SequenceLike<TB_11>, c: SequenceLike<TC_6>, d: SequenceLike<TD_5>, e: SequenceLike<TE_4>, f: SequenceLike<TF_3>, g: SequenceLike<TG_2>, h: SequenceLike<TH_1>, i: SequenceLike<TI>): SequenceLike<readonly [TA_11, TB_11, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
    zipWith: {
        <TA_12, TB_12>(b: SequenceLike<TB_12>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_12, readonly [TA_12, TB_12]>;
        <TA_13, TB_13, TC_7>(b: SequenceLike<TB_13>, c: SequenceLike<TC_7>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_13, readonly [TA_13, TB_13, TC_7]>;
        <TA_14, TB_14, TC_8, TD_6>(b: SequenceLike<TB_14>, c: SequenceLike<TC_8>, d: SequenceLike<TD_6>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_14, readonly [TA_14, TB_14, TC_8, TD_6]>;
        <TA_15, TB_15, TC_9, TD_7, TE_5>(b: SequenceLike<TB_15>, c: SequenceLike<TC_9>, d: SequenceLike<TD_7>, e: SequenceLike<TE_5>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_15, readonly [TA_15, TB_15, TC_9, TD_7, TE_5]>;
        <TA_16, TB_16, TC_10, TD_8, TE_6, TF_4>(b: SequenceLike<TB_16>, c: SequenceLike<TC_10>, d: SequenceLike<TD_8>, e: SequenceLike<TE_6>, f: SequenceLike<TF_4>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_16, readonly [TA_16, TB_16, TC_10, TD_8, TE_6, TF_4]>;
        <TA_17, TB_17, TC_11, TD_9, TE_7, TF_5, TG_3>(b: SequenceLike<TB_17>, c: SequenceLike<TC_11>, d: SequenceLike<TD_9>, e: SequenceLike<TE_7>, f: SequenceLike<TF_5>, g: SequenceLike<TG_3>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_17, readonly [TA_17, TB_17, TC_11, TD_9, TE_7, TF_5, TG_3]>;
        <TA_18, TB_18, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2>(b: SequenceLike<TB_18>, c: SequenceLike<TC_12>, d: SequenceLike<TD_10>, e: SequenceLike<TE_8>, f: SequenceLike<TF_6>, g: SequenceLike<TG_4>, h: SequenceLike<TH_2>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_18, readonly [TA_18, TB_18, TC_12, TD_10, TE_8, TF_6, TG_4, TH_2]>;
        <TA_19, TB_19, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1>(b: SequenceLike<TB_19>, c: SequenceLike<TC_13>, d: SequenceLike<TD_11>, e: SequenceLike<TE_9>, f: SequenceLike<TF_7>, g: SequenceLike<TG_5>, h: SequenceLike<TH_3>, i: SequenceLike<TI_1>): import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA_19, readonly [TA_19, TB_19, TC_13, TD_11, TE_9, TF_7, TG_5, TH_3, TI_1]>;
    };
};
export default Sequence;
