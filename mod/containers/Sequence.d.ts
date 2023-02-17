import { ToEnumerableObservable, ToObservable, ToRunnable, ToRunnableObservable, EnumerableObservableLike, ObservableLike, RunnableLike, RunnableObservableLike } from "../rx.js";
import { ToEnumerable, EnumerableLike } from "../ix.js";
import { Equality, Function1, Updater, Factory, Predicate, Reducer } from "../functions.js";
import { Concat, SequenceLike, ConcatAll, DistinctUntilChanged, FromReadonlyArray, Generate, Keep, Map, Pairwise, Repeat, Scan, ContainerOperator, SkipFirst, TakeFirst, TakeLast, TakeWhile, ToReadonlyArray, Zip, ReadonlyArrayLike } from "../containers.js";
declare const concat: Concat<SequenceLike>["concat"];
declare const concatAll: ConcatAll<SequenceLike>["concatAll"];
declare const distinctUntilChanged: DistinctUntilChanged<SequenceLike>["distinctUntilChanged"];
declare const fromReadonlyArray: FromReadonlyArray<SequenceLike>["fromReadonlyArray"];
declare const generate: Generate<SequenceLike>["generate"];
declare const keep: Keep<SequenceLike>["keep"];
declare const map: Map<SequenceLike>["map"];
declare const pairwise: Pairwise<SequenceLike>["pairwise"];
declare const repeat: Repeat<SequenceLike>["repeat"];
declare const scan: Scan<SequenceLike>["scan"];
declare const seek: <T>(count: number) => ContainerOperator<SequenceLike<unknown>, T, T>;
declare const skipFirst: SkipFirst<SequenceLike>["skipFirst"];
declare const takeFirst: TakeFirst<SequenceLike>["takeFirst"];
declare const takeLast: TakeLast<SequenceLike>["takeLast"];
declare const takeWhile: TakeWhile<SequenceLike>["takeWhile"];
declare const toEnumerable: ToEnumerable<SequenceLike>["toEnumerable"];
declare const toEnumerableObservable: ToEnumerableObservable<SequenceLike>["toEnumerableObservable"];
declare const toObservable: ToObservable<SequenceLike>["toObservable"];
declare const toReadonlyArray: ToReadonlyArray<SequenceLike>["toReadonlyArray"];
declare const toRunnable: ToRunnable<SequenceLike>["toRunnable"];
declare const toRunnableObservable: ToRunnableObservable<SequenceLike>["toRunnableObservable"];
declare const zip: Zip<SequenceLike>["zip"];
/** @ignore */
declare const Sequence: {
    concat: <T>(fst: SequenceLike<T>, snd: SequenceLike<T>, ...tail: readonly SequenceLike<T>[]) => SequenceLike<T>;
    concatAll: <T_1>(options?: undefined) => ContainerOperator<SequenceLike<unknown>, SequenceLike<T_1>, T_1>;
    distinctUntilChanged: <T_2>(options?: {
        readonly equality?: Equality<T_2> | undefined;
    } | undefined) => ContainerOperator<SequenceLike<unknown>, T_2, T_2>;
    fromReadonlyArray: <T_3>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_3[], SequenceLike<T_3>>;
    generate: <T_4>(generator: Updater<T_4>, initialValue: Factory<T_4>, options?: undefined) => SequenceLike<T_4>;
    keep: <T_5>(predicate: Predicate<T_5>, options?: undefined) => ContainerOperator<SequenceLike<unknown>, T_5, T_5>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<SequenceLike<unknown>, TA, TB>;
    pairwise: <T_6>(options?: undefined) => ContainerOperator<SequenceLike<unknown>, T_6, readonly [
        T_6,
        T_6
    ]>;
    repeat: {
        <T_7>(predicate: Predicate<number>, options?: undefined): ContainerOperator<SequenceLike<unknown>, T_7, T_7>;
        <T_8>(count: number, options?: undefined): ContainerOperator<SequenceLike<unknown>, T_8, T_8>;
        <T_9>(options?: undefined): ContainerOperator<SequenceLike<unknown>, T_9, T_9>;
    };
    scan: <T_10, TAcc>(scanner: Reducer<T_10, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<SequenceLike<unknown>, T_10, TAcc>;
    skipFirst: <T_11>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<SequenceLike<unknown>, T_11, T_11>;
    takeFirst: <T_12>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<SequenceLike<unknown>, T_12, T_12>;
    takeLast: <T_13>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<SequenceLike<unknown>, T_13, T_13>;
    takeWhile: <T_14>(predicate: Predicate<T_14>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<SequenceLike<unknown>, T_14, T_14>;
    toEnumerable: <T_15>(options?: undefined) => Function1<SequenceLike<T_15>, EnumerableLike<T_15>>;
    toEnumerableObservable: <T_16>(options?: undefined) => Function1<SequenceLike<T_16>, EnumerableObservableLike<T_16>>;
    toObservable: <T_17>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<SequenceLike<T_17>, ObservableLike<T_17>>;
    toReadonlyArray: <T_18>(options?: undefined) => Function1<SequenceLike<T_18>, ReadonlyArrayLike<T_18>>;
    toRunnable: <T_19>(options?: undefined) => Function1<SequenceLike<T_19>, RunnableLike<T_19>>;
    toRunnableObservable: <T_20>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<SequenceLike<T_20>, RunnableObservableLike<T_20>>;
    zip: {
        <TA_1, TB_1>(a: SequenceLike<TA_1>, b: SequenceLike<TB_1>): SequenceLike<readonly [
            TA_1,
            TB_1
        ]>;
        <TA_2, TB_2, TC>(a: SequenceLike<TA_2>, b: SequenceLike<TB_2>, c: SequenceLike<TC>): SequenceLike<readonly [
            TA_2,
            TB_2,
            TC
        ]>;
        <TA_3, TB_3, TC_1, TD>(a: SequenceLike<TA_3>, b: SequenceLike<TB_3>, c: SequenceLike<TC_1>, d: SequenceLike<TD>): SequenceLike<readonly [
            TA_3,
            TB_3,
            TC_1,
            TD
        ]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: SequenceLike<TA_4>, b: SequenceLike<TB_4>, c: SequenceLike<TC_2>, d: SequenceLike<TD_1>, e: SequenceLike<TE>): SequenceLike<readonly [
            TA_4,
            TB_4,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: SequenceLike<TA_5>, b: SequenceLike<TB_5>, c: SequenceLike<TC_3>, d: SequenceLike<TD_2>, e: SequenceLike<TE_1>, f: SequenceLike<TF>): SequenceLike<readonly [
            TA_5,
            TB_5,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: SequenceLike<TA_6>, b: SequenceLike<TB_6>, c: SequenceLike<TC_4>, d: SequenceLike<TD_3>, e: SequenceLike<TE_2>, f: SequenceLike<TF_1>, g: SequenceLike<TG>): SequenceLike<readonly [
            TA_6,
            TB_6,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: SequenceLike<TA_7>, b: SequenceLike<TB_7>, c: SequenceLike<TC_5>, d: SequenceLike<TD_4>, e: SequenceLike<TE_3>, f: SequenceLike<TF_2>, g: SequenceLike<TG_1>, h: SequenceLike<TH>): SequenceLike<readonly [
            TA_7,
            TB_7,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: SequenceLike<TA_8>, b: SequenceLike<TB_8>, c: SequenceLike<TC_6>, d: SequenceLike<TD_5>, e: SequenceLike<TE_4>, f: SequenceLike<TF_3>, g: SequenceLike<TG_2>, h: SequenceLike<TH_1>, i: SequenceLike<TI>): SequenceLike<readonly [
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
export { concat, concatAll, Sequence as default, distinctUntilChanged, fromReadonlyArray, generate, keep, map, pairwise, repeat, scan, seek, skipFirst, takeFirst, takeLast, takeWhile, toEnumerable, toEnumerableObservable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
