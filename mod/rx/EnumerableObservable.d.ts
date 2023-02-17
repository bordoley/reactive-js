import { ToFlowable, FlowableLike } from "../streaming.js";
import { FromEnumerable, ToAsyncEnumerable, ToEnumerable, EnumerableLike, AsyncEnumerableLike } from "../ix.js";
import { EnumerableObservableLike, Retry, ScanAsync, RunnableLike, ToRunnableObservable, ToObservable, AsyncReducer, ObservableLike, RunnableObservableLike } from "../rx.js";
import { Equality, Predicate, SideEffect1, Updater, Factory, Function1, Reducer, Function2 } from "../functions.js";
import { ContainerOperator, CatchError, ConcatAll, Defer, FromIterable, FromReadonlyArray, FromSequence, ToIterable, ReadonlyArrayLike, SequenceLike, IterableLike } from "../containers.js";
import { VirtualTimeSchedulerLike } from "../scheduling.js";
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly T[]>;
declare const catchError: CatchError<EnumerableObservableLike>["catchError"];
declare const concat: <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]) => EnumerableObservableLike<T>;
declare const concatAll: ConcatAll<EnumerableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const decodeWithCharset: (options?: {
    charset?: string | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, ArrayBuffer, string>;
declare const defer: Defer<EnumerableObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const empty: <T>(options?: {
    delay: number;
} | undefined) => EnumerableObservableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, boolean>;
declare const exhaust: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const fromEnumerable: FromEnumerable<EnumerableObservableLike>["fromEnumerable"];
declare const fromIterable: FromIterable<EnumerableObservableLike>["fromIterable"];
declare const fromReadonlyArray: FromReadonlyArray<EnumerableObservableLike>["fromReadonlyArray"];
declare const fromSequence: FromSequence<EnumerableObservableLike>["fromSequence"];
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: undefined) => EnumerableObservableLike<T>;
declare const keep: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA, TB>;
declare const merge: <T>(fst: EnumerableObservableLike<T>, snd: EnumerableObservableLike<T>, ...tail: readonly EnumerableObservableLike<T>[]) => EnumerableObservableLike<T>;
declare const mergeAll: ConcatAll<EnumerableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const pairwise: <T>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly [
    T,
    T
]>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, TAcc>;
declare const retry: Retry<EnumerableObservableLike>["retry"];
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, TAcc>;
declare const scanAsync: ScanAsync<EnumerableObservableLike, EnumerableObservableLike>["scanAsync"];
declare const skipFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const someSatisfy: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, boolean>;
declare const switchAll: ConcatAll<EnumerableObservableLike>["concatAll"];
declare const takeFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
} | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, T>;
declare const toAsyncEnumerable: ToAsyncEnumerable<EnumerableObservableLike>["toAsyncEnumerable"];
declare const toEnumerable: ToEnumerable<EnumerableObservableLike>["toEnumerable"];
declare const toFlowable: ToFlowable<EnumerableObservableLike>["toFlowable"];
declare const toIterable: ToIterable<EnumerableObservableLike>["toIterable"];
declare const toReadonlyArray: <T>(options?: {
    readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
} | undefined) => Function1<EnumerableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const toRunnable: <T>(options?: undefined) => Function1<EnumerableObservableLike<T>, RunnableLike<T>>;
declare const toRunnableObservable: ToRunnableObservable<EnumerableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toRunnableObservable"];
declare const toObservable: ToObservable<EnumerableObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["toObservable"];
declare const zip: {
    <TA, TB>(a: EnumerableObservableLike<TA>, b: EnumerableObservableLike<TB>): EnumerableObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: EnumerableObservableLike<TA_1>, b: EnumerableObservableLike<TB_1>, c: EnumerableObservableLike<TC>): EnumerableObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: EnumerableObservableLike<TA_2>, b: EnumerableObservableLike<TB_2>, c: EnumerableObservableLike<TC_1>, d: EnumerableObservableLike<TD>): EnumerableObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: EnumerableObservableLike<TA_3>, b: EnumerableObservableLike<TB_3>, c: EnumerableObservableLike<TC_2>, d: EnumerableObservableLike<TD_1>, e: EnumerableObservableLike<TE>): EnumerableObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: EnumerableObservableLike<TA_4>, b: EnumerableObservableLike<TB_4>, c: EnumerableObservableLike<TC_3>, d: EnumerableObservableLike<TD_2>, e: EnumerableObservableLike<TE_1>, f: EnumerableObservableLike<TF>): EnumerableObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableObservableLike<TA_5>, b: EnumerableObservableLike<TB_5>, c: EnumerableObservableLike<TC_4>, d: EnumerableObservableLike<TD_3>, e: EnumerableObservableLike<TE_2>, f: EnumerableObservableLike<TF_1>, g: EnumerableObservableLike<TG>): EnumerableObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableObservableLike<TA_6>, b: EnumerableObservableLike<TB_6>, c: EnumerableObservableLike<TC_5>, d: EnumerableObservableLike<TD_4>, e: EnumerableObservableLike<TE_3>, f: EnumerableObservableLike<TF_2>, g: EnumerableObservableLike<TG_1>, h: EnumerableObservableLike<TH>): EnumerableObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableObservableLike<TA_7>, b: EnumerableObservableLike<TB_7>, c: EnumerableObservableLike<TC_6>, d: EnumerableObservableLike<TD_5>, e: EnumerableObservableLike<TE_4>, f: EnumerableObservableLike<TF_3>, g: EnumerableObservableLike<TG_2>, h: EnumerableObservableLike<TH_1>, i: EnumerableObservableLike<TI>): EnumerableObservableLike<readonly [
        TA_7,
        TB_7,
        TC_6,
        TD_5,
        TE_4,
        TF_3,
        TG_2,
        TH_1,
        TI
    ]>;
};
/** @ignore */
declare const EnumerableObservable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: Function1<unknown, void | EnumerableObservableLike<T_1>>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_1, T_1>;
    concat: <T_2>(fst: EnumerableObservableLike<T_2>, snd: EnumerableObservableLike<T_2>, ...tail: readonly EnumerableObservableLike<T_2>[]) => EnumerableObservableLike<T_2>;
    concatAll: <T_3>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_3>, T_3>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: Factory<EnumerableObservableLike<T_4>>, options?: undefined) => EnumerableObservableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: Equality<T_5> | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: {
        delay: number;
    } | undefined) => EnumerableObservableLike<T_6>;
    everySatisfy: <T_7>(predicate: Predicate<T_7>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_7, boolean>;
    exhaust: <T_8>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_8>, T_8>;
    forEach: <T_9>(effect: SideEffect1<T_9>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_9, T_9>;
    fromEnumerable: <T_10>(options?: undefined) => Function1<EnumerableLike<T_10>, EnumerableObservableLike<T_10>>;
    fromIterable: <T_11>(options?: undefined) => Function1<Iterable<T_11>, EnumerableObservableLike<T_11>>;
    fromReadonlyArray: <T_12>(options?: {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    } | undefined) => Function1<readonly T_12[], EnumerableObservableLike<T_12>>;
    fromSequence: <T_13>(options?: undefined) => Function1<SequenceLike<T_13>, EnumerableObservableLike<T_13>>;
    generate: <T_14>(generator: Updater<T_14>, initialValue: Factory<T_14>, options?: undefined) => EnumerableObservableLike<T_14>;
    keep: <T_15>(predicate: Predicate<T_15>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_15, T_15>;
    map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, TA, TB>;
    merge: <T_2>(fst: EnumerableObservableLike<T_2>, snd: EnumerableObservableLike<T_2>, ...tail: readonly EnumerableObservableLike<T_2>[]) => EnumerableObservableLike<T_2>;
    pairwise: <T_16>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_16, readonly [
        T_16,
        T_16
    ]>;
    reduce: <T_17, TAcc>(reducer: Reducer<T_17, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_17, TAcc>;
    retry: {
        <T_18>(): ContainerOperator<EnumerableObservableLike<unknown>, T_18, T_18>;
        <T_19>(predicate: Function2<number, unknown, boolean>): ContainerOperator<EnumerableObservableLike<unknown>, T_19, T_19>;
    };
    scan: <T_20, TAcc_1>(scanner: Reducer<T_20, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_20, TAcc_1>;
    scanAsync: <T_21, TAcc_2>(scanner: AsyncReducer<EnumerableObservableLike<unknown>, T_21, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<EnumerableObservableLike<unknown>, T_21, TAcc_2>;
    skipFirst: <T_22>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_22, T_22>;
    someSatisfy: <T_23>(predicate: Predicate<T_23>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_23, boolean>;
    switchAll: <T_8>(options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, EnumerableObservableLike<T_8>, T_8>;
    takeFirst: <T_24>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_24, T_24>;
    takeLast: <T_25>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_25, T_25>;
    takeWhile: <T_26>(predicate: Predicate<T_26>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_26, T_26>;
    throwIfEmpty: <T_27>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<EnumerableObservableLike<unknown>, T_27, T_27>;
    toAsyncEnumerable: <T_28>(options?: undefined) => Function1<EnumerableObservableLike<T_28>, AsyncEnumerableLike<T_28>>;
    toEnumerable: <T_29>(options?: undefined) => Function1<EnumerableObservableLike<T_29>, EnumerableLike<T_29>>;
    toFlowable: <T_30>(options?: undefined) => Function1<EnumerableObservableLike<T_30>, FlowableLike<T_30>>;
    toIterable: <T_31>(options?: undefined) => Function1<EnumerableObservableLike<T_31>, IterableLike<T_31>>;
    toObservable: <T_32>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<EnumerableObservableLike<T_32>, ObservableLike<T_32>>;
    toReadonlyArray: <T_33>(options?: {
        readonly schedulerFactory: Factory<VirtualTimeSchedulerLike>;
    } | undefined) => Function1<EnumerableObservableLike<T_33>, ReadonlyArrayLike<T_33>>;
    toRunnable: <T_34>(options?: undefined) => Function1<EnumerableObservableLike<T_34>, RunnableLike<T_34>>;
    toRunnableObservable: <T_35>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<EnumerableObservableLike<T_35>, RunnableObservableLike<T_35>>;
    zip: {
        <TA_1, TB_1>(a: EnumerableObservableLike<TA_1>, b: EnumerableObservableLike<TB_1>): EnumerableObservableLike<readonly [
            TA_1,
            TB_1
        ]>;
        <TA_2, TB_2, TC>(a: EnumerableObservableLike<TA_2>, b: EnumerableObservableLike<TB_2>, c: EnumerableObservableLike<TC>): EnumerableObservableLike<readonly [
            TA_2,
            TB_2,
            TC
        ]>;
        <TA_3, TB_3, TC_1, TD>(a: EnumerableObservableLike<TA_3>, b: EnumerableObservableLike<TB_3>, c: EnumerableObservableLike<TC_1>, d: EnumerableObservableLike<TD>): EnumerableObservableLike<readonly [
            TA_3,
            TB_3,
            TC_1,
            TD
        ]>;
        <TA_4, TB_4, TC_2, TD_1, TE>(a: EnumerableObservableLike<TA_4>, b: EnumerableObservableLike<TB_4>, c: EnumerableObservableLike<TC_2>, d: EnumerableObservableLike<TD_1>, e: EnumerableObservableLike<TE>): EnumerableObservableLike<readonly [
            TA_4,
            TB_4,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_5, TB_5, TC_3, TD_2, TE_1, TF>(a: EnumerableObservableLike<TA_5>, b: EnumerableObservableLike<TB_5>, c: EnumerableObservableLike<TC_3>, d: EnumerableObservableLike<TD_2>, e: EnumerableObservableLike<TE_1>, f: EnumerableObservableLike<TF>): EnumerableObservableLike<readonly [
            TA_5,
            TB_5,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_6, TB_6, TC_4, TD_3, TE_2, TF_1, TG>(a: EnumerableObservableLike<TA_6>, b: EnumerableObservableLike<TB_6>, c: EnumerableObservableLike<TC_4>, d: EnumerableObservableLike<TD_3>, e: EnumerableObservableLike<TE_2>, f: EnumerableObservableLike<TF_1>, g: EnumerableObservableLike<TG>): EnumerableObservableLike<readonly [
            TA_6,
            TB_6,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_7, TB_7, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: EnumerableObservableLike<TA_7>, b: EnumerableObservableLike<TB_7>, c: EnumerableObservableLike<TC_5>, d: EnumerableObservableLike<TD_4>, e: EnumerableObservableLike<TE_3>, f: EnumerableObservableLike<TF_2>, g: EnumerableObservableLike<TG_1>, h: EnumerableObservableLike<TH>): EnumerableObservableLike<readonly [
            TA_7,
            TB_7,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_8, TB_8, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: EnumerableObservableLike<TA_8>, b: EnumerableObservableLike<TB_8>, c: EnumerableObservableLike<TC_6>, d: EnumerableObservableLike<TD_5>, e: EnumerableObservableLike<TE_4>, f: EnumerableObservableLike<TF_3>, g: EnumerableObservableLike<TG_2>, h: EnumerableObservableLike<TH_1>, i: EnumerableObservableLike<TI>): EnumerableObservableLike<readonly [
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
export { buffer, catchError, concat, concatAll, decodeWithCharset, EnumerableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromEnumerable, fromIterable, fromReadonlyArray, fromSequence, generate, keep, map, merge, mergeAll, pairwise, reduce, retry, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeWhile, throwIfEmpty, toAsyncEnumerable, toEnumerable, toFlowable, toIterable, toObservable, toReadonlyArray, toRunnable, toRunnableObservable, zip };
