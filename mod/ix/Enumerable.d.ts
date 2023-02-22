import { Buffer, Concat, ConcatAll, DistinctUntilChanged, Empty, ForEach, FromIterable, FromReadonlyArray, Generate, Keep, Map, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToReadonlyArray, Zip } from "../containers.js";
import { EnumerableLike, ToAsyncEnumerable, ToEnumerable } from "../ix.js";
import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable } from "../rx.js";
import { ToFlowable } from "../streaming.js";
export declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => import("../ix.js").EnumeratorLike<T>;
export declare const buffer: Buffer<EnumerableLike>["buffer"];
export declare const concat: Concat<EnumerableLike>["concat"];
export declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
export declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
export declare const empty: Empty<EnumerableLike>["empty"];
export declare const forEach: ForEach<EnumerableLike>["forEach"];
export declare const fromReadonlyArray: FromReadonlyArray<EnumerableLike>["fromReadonlyArray"];
export declare const fromIterable: FromIterable<EnumerableLike>["fromIterable"];
export declare const generate: Generate<EnumerableLike>["generate"];
export declare const keep: Keep<EnumerableLike>["keep"];
export declare const map: Map<EnumerableLike>["map"];
export declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
export declare const repeat: Repeat<EnumerableLike>["repeat"];
export declare const scan: Scan<EnumerableLike>["scan"];
export declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
export declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
export declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
export declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
export declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
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
/** @ignore */
declare const Enumerable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T, readonly T[]>;
    concat: <T_1>(fst: EnumerableLike<T_1>, snd: EnumerableLike<T_1>, ...tail: readonly EnumerableLike<T_1>[]) => EnumerableLike<T_1>;
    concatAll: <T_2>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, EnumerableLike<T_2>, T_2>;
    distinctUntilChanged: <T_3>(options?: {
        readonly equality?: import("../functions.js").Equality<T_3> | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_3, T_3>;
    empty: <T_4>(options?: undefined) => EnumerableLike<T_4>;
    forEach: <T_5>(effect: import("../functions.js").SideEffect1<T_5>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_5, T_5>;
    fromReadonlyArray: <T_6>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => import("../functions.js").Function1<readonly T_6[], EnumerableLike<T_6>>;
    fromIterable: <T_7>(options?: undefined) => import("../functions.js").Function1<Iterable<T_7>, EnumerableLike<T_7>>;
    generate: <T_8>(generator: import("../functions.js").Updater<T_8>, initialValue: import("../functions.js").Factory<T_8>, options?: undefined) => EnumerableLike<T_8>;
    keep: <T_9>(predicate: import("../functions.js").Predicate<T_9>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_9, T_9>;
    map: <TA, TB>(mapper: import("../functions.js").Function1<TA, TB>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, TA, TB>;
    pairwise: <T_10>(options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_10, readonly [T_10, T_10]>;
    repeat: {
        <T_11>(predicate: import("../functions.js").Predicate<number>, options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_11, T_11>;
        <T_12>(count: number, options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_12, T_12>;
        <T_13>(options?: undefined): import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_13, T_13>;
    };
    scan: <T_14, TAcc>(scanner: import("../functions.js").Reducer<T_14, TAcc>, initialValue: import("../functions.js").Factory<TAcc>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_14, TAcc>;
    skipFirst: <T_15>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_15, T_15>;
    takeFirst: <T_16>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_16, T_16>;
    takeLast: <T_17>(options?: {
        readonly count?: number | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_17, T_17>;
    takeWhile: <T_18>(predicate: import("../functions.js").Predicate<T_18>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_18, T_18>;
    throwIfEmpty: <T_19>(factory: import("../functions.js").Factory<unknown>, options?: undefined) => import("../containers.js").ContainerOperator<EnumerableLike<unknown>, T_19, T_19>;
    toAsyncEnumerable: <T_20>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_20>, import("../ix.js").AsyncEnumerableLike<T_20>>;
    toEnumerable: <T_21>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_21>, EnumerableLike<T_21>>;
    toEnumerableObservable: <T_22>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_22>, import("../rx.js").EnumerableObservableLike<T_22>>;
    toFlowable: <T_23>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_23>, import("../streaming.js").FlowableLike<T_23>>;
    toIterable: <T_24>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_24>, import("../containers.js").IterableLike<T_24>>;
    toObservable: <T_25>(options?: {
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_25>, import("../rx.js").ObservableLike<T_25>>;
    toReadonlyArray: <T_26>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_26>, import("../containers.js").ReadonlyArrayLike<T_26>>;
    toRunnable: <T_27>(options?: undefined) => import("../functions.js").Function1<EnumerableLike<T_27>, import("../rx.js").RunnableLike<T_27>>;
    toRunnableObservable: <T_28>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => import("../functions.js").Function1<EnumerableLike<T_28>, import("../rx.js").RunnableObservableLike<T_28>>;
    zip: {
        <TA_1, TB_1>(a: EnumerableLike<TA_1>, b: EnumerableLike<TB_1>): EnumerableLike<readonly [TA_1, TB_1]>;
        <TA_2, TB_2, TC>(a: EnumerableLike<TA_2>, b: EnumerableLike<TB_2>, c: EnumerableLike<TC>): EnumerableLike<readonly [TA_2, TB_2, TC]>;
        <TA_3, TB_3, TC_1, TD>(a: EnumerableLike<TA_3>, b: EnumerableLike<TB_3>, c: EnumerableLike<TC_1>, d: EnumerableLike<TD>): EnumerableLike<readonly [TA_3, TB_3, TC_1, TD]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: EnumerableLike<TA_4>, b: EnumerableLike<TB_4>, c: EnumerableLike<TC_2>, d: EnumerableLike<TD_1>, e: EnumerableLike<TE>): EnumerableLike<readonly [TA_4, TB_4, TC_2, TD_1, TE]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: EnumerableLike<TA_5>, b: EnumerableLike<TB_5>, c: EnumerableLike<TC_3>, d: EnumerableLike<TD_2>, e: EnumerableLike<TE_1>, f: EnumerableLike<TF>): EnumerableLike<readonly [TA_5, TB_5, TC_3, TD_2, TE_1, TF]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableLike<TA_6>, b: EnumerableLike<TB_6>, c: EnumerableLike<TC_4>, d: EnumerableLike<TD_3>, e: EnumerableLike<TE_2>, f: EnumerableLike<TF_1>, g: EnumerableLike<TG>): EnumerableLike<readonly [TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableLike<TA_7>, b: EnumerableLike<TB_7>, c: EnumerableLike<TC_5>, d: EnumerableLike<TD_4>, e: EnumerableLike<TE_3>, f: EnumerableLike<TF_2>, g: EnumerableLike<TG_1>, h: EnumerableLike<TH>): EnumerableLike<readonly [TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableLike<TA_8>, b: EnumerableLike<TB_8>, c: EnumerableLike<TC_6>, d: EnumerableLike<TD_5>, e: EnumerableLike<TE_4>, f: EnumerableLike<TF_3>, g: EnumerableLike<TG_2>, h: EnumerableLike<TH_1>, i: EnumerableLike<TI>): EnumerableLike<readonly [TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI]>;
    };
};
export default Enumerable;
