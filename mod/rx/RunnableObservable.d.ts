import { ToFlowable, FlowableLike } from "../streaming.js";
import { RunnableObservableLike, Retry, ScanAsync, RunnableLike, AsyncReducer } from "../rx.js";
import { VirtualTimeSchedulerLike } from "../scheduling.js";
import { ContainerOperator, CatchError, Zip, ConcatAll, Defer, ReadonlyArrayLike } from "../containers.js";
import { Equality, Predicate, SideEffect1, Function1, Updater, Factory, Reducer, Function2 } from "../functions.js";
declare const buffer: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, readonly T[]>;
declare const catchError: CatchError<RunnableObservableLike>["catchError"];
declare const combineLatest: Zip<RunnableObservableLike>["zip"];
declare const concat: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
declare const concatAll: ConcatAll<RunnableObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const decodeWithCharset: (options?: {
    charset?: string | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, ArrayBuffer, string>;
declare const defer: Defer<RunnableObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const empty: <T>(options?: {
    delay: number;
} | undefined) => RunnableObservableLike<T>;
declare const everySatisfy: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, boolean>;
declare const exhaust: ConcatAll<RunnableObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const fromReadonlyArray: <T>(options?: ({
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T[], RunnableObservableLike<T>>;
declare const generate: <T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
} | undefined) => RunnableObservableLike<T>;
declare const keep: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const map: <TA, TB>(mapper: Function1<TA, TB>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, TA, TB>;
declare const merge: <T>(fst: RunnableObservableLike<T>, snd: RunnableObservableLike<T>, ...tail: readonly RunnableObservableLike<T>[]) => RunnableObservableLike<T>;
declare const mergeAll: ConcatAll<RunnableObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
declare const pairwise: <T>(options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, readonly [
    T,
    T
]>;
declare const reduce: <T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, TAcc>;
declare const retry: Retry<RunnableObservableLike>["retry"];
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, TAcc>;
declare const scanAsync: ScanAsync<RunnableObservableLike, RunnableObservableLike>["scanAsync"];
declare const skipFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const someSatisfy: <T>(predicate: Predicate<T>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, boolean>;
declare const switchAll: ConcatAll<RunnableObservableLike>["concatAll"];
declare const takeFirst: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const takeLast: <T>(options?: {
    readonly count?: number | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const takeUntil: <T>(notifier: RunnableObservableLike<unknown>) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const takeWhile: <T>(predicate: Predicate<T>, options?: {
    readonly inclusive?: boolean | undefined;
} | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const throttle: <T>(duration: number, options?: {
    readonly mode?: "first" | "last" | "interval";
}) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const throwIfEmpty: <T>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, T>;
declare const timeout: {
    <T>(duration: number): ContainerOperator<RunnableObservableLike<unknown>, T, T>;
    <T_1>(duration: RunnableObservableLike<unknown>): ContainerOperator<RunnableObservableLike<unknown>, T_1, T_1>;
};
declare const toFlowable: ToFlowable<RunnableObservableLike>["toFlowable"];
declare const toReadonlyArray: <T>(options?: undefined) => Function1<RunnableObservableLike<T>, ReadonlyArrayLike<T>>;
declare const toRunnable: <T>(options?: {
    readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike> | undefined;
} | undefined) => Function1<RunnableObservableLike<T>, RunnableLike<T>>;
declare const withLatestFrom: <TA, TB, T>(other: RunnableObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<RunnableObservableLike<unknown>, TA, T>;
declare const zip: {
    <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
declare const zipLatest: {
    <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
declare const zipWithLatestFrom: <TA, TB, T>(other: RunnableObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<RunnableObservableLike<unknown>, TA, T>;
/** @ignore */
declare const RunnableObservable: {
    buffer: <T>(options?: {
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T, readonly T[]>;
    catchError: <T_1>(onError: Function1<unknown, void | RunnableObservableLike<T_1>>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_1, T_1>;
    combineLatest: {
        <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
    concat: <T_2>(fst: RunnableObservableLike<T_2>, snd: RunnableObservableLike<T_2>, ...tail: readonly RunnableObservableLike<T_2>[]) => RunnableObservableLike<T_2>;
    concatAll: <T_3>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_3>, T_3>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_4>(factory: Factory<RunnableObservableLike<T_4>>, options?: undefined) => RunnableObservableLike<T_4>;
    distinctUntilChanged: <T_5>(options?: {
        readonly equality?: Equality<T_5> | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_5, T_5>;
    empty: <T_6>(options?: {
        delay: number;
    } | undefined) => RunnableObservableLike<T_6>;
    everySatisfy: <T_7>(predicate: Predicate<T_7>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_7, boolean>;
    exhaust: <T_8>(options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_8>, T_8>;
    forEach: <T_9>(effect: SideEffect1<T_9>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_9, T_9>;
    fromReadonlyArray: <T_10>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T_10[], RunnableObservableLike<T_10>>;
    generate: <T_11>(generator: Updater<T_11>, initialValue: Factory<T_11>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => RunnableObservableLike<T_11>;
    keep: <T_12>(predicate: Predicate<T_12>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_12, T_12>;
    map: <TA_8, TB_8>(mapper: Function1<TA_8, TB_8>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, TA_8, TB_8>;
    merge: <T_2>(fst: RunnableObservableLike<T_2>, snd: RunnableObservableLike<T_2>, ...tail: readonly RunnableObservableLike<T_2>[]) => RunnableObservableLike<T_2>;
    pairwise: <T_13>(options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_13, readonly [
        T_13,
        T_13
    ]>;
    reduce: <T_14, TAcc>(reducer: Reducer<T_14, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_14, TAcc>;
    retry: {
        <T_15>(): ContainerOperator<RunnableObservableLike<unknown>, T_15, T_15>;
        <T_16>(predicate: Function2<number, unknown, boolean>): ContainerOperator<RunnableObservableLike<unknown>, T_16, T_16>;
    };
    scan: <T_17, TAcc_1>(scanner: Reducer<T_17, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_17, TAcc_1>;
    scanAsync: <T_18, TAcc_2>(scanner: AsyncReducer<RunnableObservableLike<unknown>, T_18, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<RunnableObservableLike<unknown>, T_18, TAcc_2>;
    skipFirst: <T_19>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_19, T_19>;
    someSatisfy: <T_20>(predicate: Predicate<T_20>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_20, boolean>;
    switchAll: <T_8>(options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, RunnableObservableLike<T_8>, T_8>;
    takeFirst: <T_21>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_21, T_21>;
    takeLast: <T_22>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_22, T_22>;
    takeUntil: <T_23>(notifier: RunnableObservableLike<unknown>) => ContainerOperator<RunnableObservableLike<unknown>, T_23, T_23>;
    takeWhile: <T_24>(predicate: Predicate<T_24>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_24, T_24>;
    throttle: <T_25>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }) => ContainerOperator<RunnableObservableLike<unknown>, T_25, T_25>;
    throwIfEmpty: <T_26>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<RunnableObservableLike<unknown>, T_26, T_26>;
    timeout: {
        <T_27>(duration: number): ContainerOperator<RunnableObservableLike<unknown>, T_27, T_27>;
        <T_28>(duration: RunnableObservableLike<unknown>): ContainerOperator<RunnableObservableLike<unknown>, T_28, T_28>;
    };
    toFlowable: <T_29>(options?: undefined) => Function1<RunnableObservableLike<T_29>, FlowableLike<T_29>>;
    toReadonlyArray: <T_30>(options?: undefined) => Function1<RunnableObservableLike<T_30>, ReadonlyArrayLike<T_30>>;
    toRunnable: <T_31>(options?: {
        readonly schedulerFactory?: Factory<VirtualTimeSchedulerLike> | undefined;
    } | undefined) => Function1<RunnableObservableLike<T_31>, RunnableLike<T_31>>;
    withLatestFrom: <TA_9, TB_9, T_32>(other: RunnableObservableLike<TB_9>, selector: Function2<TA_9, TB_9, T_32>) => ContainerOperator<RunnableObservableLike<unknown>, TA_9, T_32>;
    zip: {
        <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
    zipLatest: {
        <TA, TB>(a: RunnableObservableLike<TA>, b: RunnableObservableLike<TB>): RunnableObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: RunnableObservableLike<TA_1>, b: RunnableObservableLike<TB_1>, c: RunnableObservableLike<TC>): RunnableObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: RunnableObservableLike<TA_2>, b: RunnableObservableLike<TB_2>, c: RunnableObservableLike<TC_1>, d: RunnableObservableLike<TD>): RunnableObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: RunnableObservableLike<TA_3>, b: RunnableObservableLike<TB_3>, c: RunnableObservableLike<TC_2>, d: RunnableObservableLike<TD_1>, e: RunnableObservableLike<TE>): RunnableObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: RunnableObservableLike<TA_4>, b: RunnableObservableLike<TB_4>, c: RunnableObservableLike<TC_3>, d: RunnableObservableLike<TD_2>, e: RunnableObservableLike<TE_1>, f: RunnableObservableLike<TF>): RunnableObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: RunnableObservableLike<TA_5>, b: RunnableObservableLike<TB_5>, c: RunnableObservableLike<TC_4>, d: RunnableObservableLike<TD_3>, e: RunnableObservableLike<TE_2>, f: RunnableObservableLike<TF_1>, g: RunnableObservableLike<TG>): RunnableObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: RunnableObservableLike<TA_6>, b: RunnableObservableLike<TB_6>, c: RunnableObservableLike<TC_5>, d: RunnableObservableLike<TD_4>, e: RunnableObservableLike<TE_3>, f: RunnableObservableLike<TF_2>, g: RunnableObservableLike<TG_1>, h: RunnableObservableLike<TH>): RunnableObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: RunnableObservableLike<TA_7>, b: RunnableObservableLike<TB_7>, c: RunnableObservableLike<TC_6>, d: RunnableObservableLike<TD_5>, e: RunnableObservableLike<TE_4>, f: RunnableObservableLike<TF_3>, g: RunnableObservableLike<TG_2>, h: RunnableObservableLike<TH_1>, i: RunnableObservableLike<TI>): RunnableObservableLike<readonly [
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
    zipWithLatestFrom: <TA_10, TB_10, T_33>(other: RunnableObservableLike<TB_10>, selector: Function2<TA_10, TB_10, T_33>) => ContainerOperator<RunnableObservableLike<unknown>, TA_10, T_33>;
};
export { buffer, catchError, combineLatest, concat, concatAll, decodeWithCharset, RunnableObservable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, fromReadonlyArray, generate, keep, map, merge, mergeAll, pairwise, reduce, retry, scan, scanAsync, skipFirst, someSatisfy, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toFlowable, toReadonlyArray, toRunnable, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
