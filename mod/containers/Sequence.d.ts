import { Concat, ConcatAll, DistinctUntilChanged, FromReadonlyArray, Generate, Keep, Map, Pairwise, Repeat, Scan, SequenceLike, SkipFirst, TakeFirst, TakeLast, TakeWhile, ToIterable, ToReadonlyArray, Zip } from "../containers.js";
import { ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const concat: Concat<SequenceLike>["concat"];
export declare const concatAll: ConcatAll<SequenceLike>["concatAll"];
export declare const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"];
export declare const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"];
export declare const generate: Generate<SequenceLike>["generate"];
export declare const keep: Keep<SequenceLike>["keep"];
export declare const map: Map<SequenceLike>["map"];
export declare const pairwise: Pairwise<SequenceLike>["pairwise"];
export declare const repeat: Repeat<SequenceLike>["repeat"];
export declare const scan: Scan<SequenceLike>["scan"];
export declare const seek: <T>(count: number) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T, T>;
export declare const skipFirst: SkipFirst<SequenceLike>["skipFirst"];
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
/** @ignore */
declare const Sequence: {
    concat: <T>(fst: SequenceLike<T>, snd: SequenceLike<T>, ...tail: readonly SequenceLike<T>[]) => SequenceLike<T>;
    concatAll: <T_1>(options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, SequenceLike<T_1>, T_1>;
    distinctUntilChanged: <T_2>(options?: {
        readonly equality?: import("../functions.js").Equality<T_2> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_2, T_2>;
    fromReadonlyArray: <T_3>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_3[], SequenceLike<T_3>>;
    generate: <T_4>(generator: import("../functions.js").Updater<T_4>, initialValue: import("../functions.js").Factory<T_4>, options?: undefined) => SequenceLike<T_4>;
    keep: <T_5>(predicate: import("../functions.js").Predicate<T_5>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_5, T_5>;
    map: <TA, TB>(mapper: import("../functions.js").Function1<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, TA, TB>;
    pairwise: <T_6>(options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_6, readonly [T_6, T_6]>;
    repeat: {
        <T_7>(predicate: import("../functions.js").Predicate<number>, options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_7, T_7>;
        <T_8>(count: number, options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_8, T_8>;
        <T_9>(options?: undefined): import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_9, T_9>;
    };
    scan: <T_10, TAcc>(scanner: import("../functions.js").Reducer<T_10, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_10, TAcc>;
    seek: <T_11>(count: number) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_11, T_11>;
    skipFirst: <T_12>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_12, T_12>;
    takeFirst: <T_13>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_13, T_13>;
    takeLast: <T_14>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_14, T_14>;
    takeWhile: <T_15>(predicate: import("../functions.js").Predicate<T_15>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<SequenceLike<unknown>, T_15, T_15>;
    toAsyncEnumerable: <T_16>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_16>, import("../ix.js").AsyncEnumerableLike<T_16>>;
    toEnumerable: <T_17>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_17>, import("../ix.js").EnumerableLike<T_17>>;
    toEnumerableObservable: <T_18>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_18>, import("../rx.js").EnumerableObservableLike<T_18>>;
    toFlowable: <T_19>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_19>, import("../streaming.js").FlowableLike<T_19>>;
    toIterable: <T_20>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_20>, import("../containers.js").IterableLike<T_20>>;
    toObservable: <T_21>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_21>, import("../rx.js").ObservableLike<T_21>>;
    toReadonlyArray: <T_22>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_22>, import("../containers.js").ReadonlyArrayLike<T_22>>;
    toRunnable: <T_23>(options?: undefined) => import("../functions.js").Function1<SequenceLike<T_23>, import("../rx.js").RunnableLike<T_23>>;
    toRunnableObservable: <T_24>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<SequenceLike<T_24>, import("../rx.js").RunnableObservableLike<T_24>>;
    zip: {
        <TA_1, TB_1>(a: SequenceLike<TA_1>, b: SequenceLike<TB_1>): SequenceLike<readonly [TA_1, TB_1]>;
        <TA_2, TB_2, TC>(a: SequenceLike<TA_2>, b: SequenceLike<TB_2>, c: SequenceLike<TC>): SequenceLike<readonly [TA_2, TB_2, TC]>;
        <TA_3, TB_3, TC_1, TD>(a: SequenceLike<TA_3>, b: SequenceLike<TB_3>, c: SequenceLike<TC_1>, d: SequenceLike<TD>): SequenceLike<readonly [TA_3, TB_3, TC_1, TD]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: SequenceLike<TA_4>, b: SequenceLike<TB_4>, c: SequenceLike<TC_2>, d: SequenceLike<TD_1>, e: SequenceLike<TE>): SequenceLike<readonly [TA_4, TB_4, TC_2, TD_1, TE]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: SequenceLike<TA_5>, b: SequenceLike<TB_5>, c: SequenceLike<TC_3>, d: SequenceLike<TD_2>, e: SequenceLike<TE_1>, f: SequenceLike<TF>): SequenceLike<readonly [TA_5, TB_5, TC_3, TD_2, TE_1, TF]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: SequenceLike<TA_6>, b: SequenceLike<TB_6>, c: SequenceLike<TC_4>, d: SequenceLike<TD_3>, e: SequenceLike<TE_2>, f: SequenceLike<TF_1>, g: SequenceLike<TG>): SequenceLike<readonly [TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: SequenceLike<TA_7>, b: SequenceLike<TB_7>, c: SequenceLike<TC_5>, d: SequenceLike<TD_4>, e: SequenceLike<TE_3>, f: SequenceLike<TF_2>, g: SequenceLike<TG_1>, h: SequenceLike<TH>): SequenceLike<readonly [TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: SequenceLike<TA_8>, b: SequenceLike<TB_8>, c: SequenceLike<TC_6>, d: SequenceLike<TD_5>, e: SequenceLike<TE_4>, f: SequenceLike<TF_3>, g: SequenceLike<TG_2>, h: SequenceLike<TH_1>, i: SequenceLike<TI>): SequenceLike<readonly [TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
};
export default Sequence;
