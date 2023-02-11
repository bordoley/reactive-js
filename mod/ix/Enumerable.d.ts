import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, RunnableLike } from "../rx.js";
import { Function1, Equality, SideEffect1, Updater, Factory, Predicate, Reducer } from "../functions.js";
import { Buffer, Concat, ConcatAll, DistinctUntilChanged, Empty, ForEach, ReadonlyArrayLike, FromIterable, Generate, Keep, Map, Pairwise, Repeat, Scan, SkipFirst, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, ToIterable, ToReadonlyArray, Zip, ContainerOperator } from "../containers.js";
import { EnumerableLike, EnumeratorLike, ToEnumerable } from "../ix.js";
declare const enumerate: <T>() => (enumerable: EnumerableLike<T>) => EnumeratorLike<T>;
declare const buffer: Buffer<EnumerableLike>["buffer"];
declare const concat: Concat<EnumerableLike>["concat"];
declare const concatAll: ConcatAll<EnumerableLike>["concatAll"];
declare const distinctUntilChanged: DistinctUntilChanged<EnumerableLike>["distinctUntilChanged"];
declare const empty: Empty<EnumerableLike>["empty"];
declare const forEach: ForEach<EnumerableLike>["forEach"];
declare const fromArray: <T>(options?: {
    readonly start: number;
    readonly count: number;
} | undefined) => Function1<ReadonlyArrayLike<T>, EnumerableLike<T>>;
declare const fromIterable: FromIterable<EnumerableLike>["fromIterable"];
declare const generate: Generate<EnumerableLike>["generate"];
declare const keep: Keep<EnumerableLike>["keep"];
declare const map: Map<EnumerableLike>["map"];
declare const pairwise: Pairwise<EnumerableLike>["pairwise"];
declare const repeat: Repeat<EnumerableLike>["repeat"];
declare const scan: Scan<EnumerableLike>["scan"];
declare const skipFirst: SkipFirst<EnumerableLike>["skipFirst"];
declare const takeFirst: TakeFirst<EnumerableLike>["takeFirst"];
declare const takeLast: TakeLast<EnumerableLike>["takeLast"];
declare const takeWhile: TakeWhile<EnumerableLike>["takeWhile"];
declare const throwIfEmpty: ThrowIfEmpty<EnumerableLike>["throwIfEmpty"];
declare const toEnumerable: ToEnumerable<EnumerableLike>["toEnumerable"];
declare const toEnumerableObservable: ToEnumerableObservable<EnumerableLike>["toEnumerableObservable"];
declare const toIterable: ToIterable<EnumerableLike>["toIterable"];
declare const toObservable: ToObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<EnumerableLike>["toReadonlyArray"];
declare const toRunnable: ToRunnable<EnumerableLike>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<EnumerableLike, {
    delay?: number;
    delayStart?: boolean;
}>["toRunnableObservable"];
declare const zip: Zip<EnumerableLike>["zip"];
/** @ignore */
declare const Enumerable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T, readonly T[]>;
    concat: <T_1>(fst: EnumerableLike<T_1>, snd: EnumerableLike<T_1>, ...tail: readonly EnumerableLike<T_1>[]) => EnumerableLike<T_1>;
    concatAll: <T_2>(options?: undefined) => ContainerOperator<EnumerableLike<unknown>, EnumerableLike<T_2>, T_2>;
    distinctUntilChanged: <T_3>(options?: {
        readonly equality?: Equality<T_3> | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T_3, T_3>;
    empty: <T_4>(options?: undefined) => EnumerableLike<T_4>;
    forEach: <T_5>(effect: SideEffect1<T_5>, options?: undefined) => ContainerOperator<EnumerableLike<unknown>, T_5, T_5>;
    fromArray: <T_6>(options?: {
        readonly start: number;
        readonly count: number;
    } | undefined) => Function1<ReadonlyArrayLike<T_6>, EnumerableLike<T_6>>;
    fromIterable: <T_7>(options?: undefined) => Function1<Iterable<T_7>, EnumerableLike<T_7>>;
    generate: <T_8>(generator: Updater<T_8>, initialValue: Factory<T_8>, options?: undefined) => EnumerableLike<T_8>;
    keep: <T_9>(predicate: Predicate<T_9>, options?: undefined) => ContainerOperator<EnumerableLike<unknown>, T_9, T_9>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<EnumerableLike<unknown>, TA, TB>;
    pairwise: <T_10>(options?: undefined) => ContainerOperator<EnumerableLike<unknown>, T_10, readonly [
        T_10,
        T_10
    ]>;
    repeat: {
        <T_11>(predicate: Predicate<number>, options?: undefined): ContainerOperator<EnumerableLike<unknown>, T_11, T_11>;
        <T_12>(count: number, options?: undefined): ContainerOperator<EnumerableLike<unknown>, T_12, T_12>;
        <T_13>(options?: undefined): ContainerOperator<EnumerableLike<unknown>, T_13, T_13>;
    };
    scan: <T_14, TAcc>(scanner: Reducer<T_14, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<EnumerableLike<unknown>, T_14, TAcc>;
    skipFirst: <T_15>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T_15, T_15>;
    takeFirst: <T_16>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T_16, T_16>;
    takeLast: <T_17>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T_17, T_17>;
    takeWhile: <T_18>(predicate: Predicate<T_18>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<EnumerableLike<unknown>, T_18, T_18>;
    throwIfEmpty: <T_19>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<EnumerableLike<unknown>, T_19, T_19>;
    toEnumerable: <T_20>(options?: undefined) => Function1<EnumerableLike<T_20>, EnumerableLike<T_20>>;
    toReadonlyArray: <T_21>(options?: undefined) => Function1<EnumerableLike<T_21>, ReadonlyArrayLike<T_21>>;
    toRunnable: <T_22>(options?: undefined) => Function1<EnumerableLike<T_22>, RunnableLike<T_22>>;
    zip: {
        <TA_1, TB_1>(a: EnumerableLike<TA_1>, b: EnumerableLike<TB_1>): EnumerableLike<readonly [
            TA_1,
            TB_1
        ]>;
        <TA_2, TB_2, TC>(a: EnumerableLike<TA_2>, b: EnumerableLike<TB_2>, c: EnumerableLike<TC>): EnumerableLike<readonly [
            TA_2,
            TB_2,
            TC
        ]>;
        <TA_3, TB_3, TC_1, TD>(a: EnumerableLike<TA_3>, b: EnumerableLike<TB_3>, c: EnumerableLike<TC_1>, d: EnumerableLike<TD>): EnumerableLike<readonly [
            TA_3,
            TB_3,
            TC_1,
            TD
        ]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: EnumerableLike<TA_4>, b: EnumerableLike<TB_4>, c: EnumerableLike<TC_2>, d: EnumerableLike<TD_1>, e: EnumerableLike<TE>): EnumerableLike<readonly [
            TA_4,
            TB_4,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: EnumerableLike<TA_5>, b: EnumerableLike<TB_5>, c: EnumerableLike<TC_3>, d: EnumerableLike<TD_2>, e: EnumerableLike<TE_1>, f: EnumerableLike<TF>): EnumerableLike<readonly [
            TA_5,
            TB_5,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableLike<TA_6>, b: EnumerableLike<TB_6>, c: EnumerableLike<TC_4>, d: EnumerableLike<TD_3>, e: EnumerableLike<TE_2>, f: EnumerableLike<TF_1>, g: EnumerableLike<TG>): EnumerableLike<readonly [
            TA_6,
            TB_6,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableLike<TA_7>, b: EnumerableLike<TB_7>, c: EnumerableLike<TC_5>, d: EnumerableLike<TD_4>, e: EnumerableLike<TE_3>, f: EnumerableLike<TF_2>, g: EnumerableLike<TG_1>, h: EnumerableLike<TH>): EnumerableLike<readonly [
            TA_7,
            TB_7,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableLike<TA_8>, b: EnumerableLike<TB_8>, c: EnumerableLike<TC_6>, d: EnumerableLike<TD_5>, e: EnumerableLike<TE_4>, f: EnumerableLike<TF_3>, g: EnumerableLike<TG_2>, h: EnumerableLike<TH_1>, i: EnumerableLike<TI>): EnumerableLike<readonly [
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
export { buffer, concat, concatAll, Enumerable as default, distinctUntilChanged, empty, enumerate, forEach, fromArray, fromIterable, generate, keep, map, pairwise, repeat, scan, skipFirst, takeFirst, takeLast, takeWhile, throwIfEmpty, toEnumerable, toEnumerableObservable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
