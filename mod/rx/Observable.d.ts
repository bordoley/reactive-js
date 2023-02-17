import { ObservableLike, ObserverLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike, ScanAsync, Throttle, AsyncReducer, ThrottleMode } from "../rx.js";
import { ContainerOperator, CatchError, Zip, Concat, ConcatAll, DecodeWithCharset, Defer, EverySatisfy, ForkZip, ForkConcat, PromiseableLike, Generate, Keep, Map, Pairwise, Reduce, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty } from "../containers.js";
import { FlowableLike } from "../streaming.js";
import { Factory, Function1, SideEffect1, Equality, Predicate, Function2, Reducer, Updater } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
import { DisposableLike, DisposableOrTeardown } from "../util.js";
declare const async: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
declare const catchError: CatchError<ObservableLike>["catchError"];
declare const combineLatest: Zip<ObservableLike>["zip"];
declare const concat: Concat<ObservableLike>["concat"];
declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
declare const defer: Defer<ObservableLike>["defer"];
declare const distinctUntilChanged: <T>(options?: {
    readonly equality?: Equality<T> | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, T, T>;
interface EmptyObservable {
    <T>(): EnumerableObservableLike<T>;
    <T>(options: {
        delay: number;
    }): RunnableObservableLike<T>;
}
declare const empty: EmptyObservable;
declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
declare const exhaust: ConcatAll<ObservableLike>["concatAll"];
declare const forEach: <T>(effect: SideEffect1<T>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const fromDisposable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
declare const fromFlowable: <T>(options?: undefined) => Function1<FlowableLike<T>, ObservableLike<T>>;
declare const fromPromise: <T>(options?: undefined) => Function1<PromiseableLike<T>, ObservableLike<T>>;
declare const fromReadonlyArray: <T>(options?: ({
    readonly delay?: number | undefined;
    readonly delayStart?: boolean | undefined;
} & {
    readonly start?: number | undefined;
    readonly count?: number | undefined;
}) | undefined) => Function1<readonly T[], ObservableLike<T>>;
declare const generate: Generate<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
declare const isEnumerable: (obs: ObservableLike<unknown>) => obs is EnumerableObservableLike<unknown>;
declare const isRunnable: (obs: ObservableLike<unknown>) => obs is RunnableObservableLike<unknown>;
declare const keep: Keep<ObservableLike>["keep"];
declare const map: Map<ObservableLike>["map"];
declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
declare const merge: Concat<ObservableLike>["concat"];
declare const mergeAll: ConcatAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["concatAll"];
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, MulticastObservableLike<T>>;
declare const never: <T>(options?: undefined) => ObservableLike<T>;
declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
declare const pairwise: Pairwise<ObservableLike>["pairwise"];
declare const reduce: Reduce<ObservableLike>["reduce"];
declare const repeat: {
    <T>(predicate: Predicate<number>, options?: undefined): ContainerOperator<ObservableLike<unknown>, T, T>;
    <T_1>(count: number, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_1, T_1>;
    <T_2>(options?: undefined): ContainerOperator<ObservableLike<unknown>, T_2, T_2>;
};
declare const retry: {
    <T>(): ContainerOperator<ObservableLike<unknown>, T, T>;
    <T_1>(predicate: Function2<number, unknown, boolean>): ContainerOperator<ObservableLike<unknown>, T_1, T_1>;
};
declare const scan: <T, TAcc>(scanner: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T, TAcc>;
declare const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;
declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
declare const takeLast: TakeLast<ObservableLike>["takeLast"];
declare const takeUntil: <T>(notifier: ObservableLike<unknown>) => ContainerOperator<ObservableLike<unknown>, T, T>;
declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
declare const throttle: Throttle<ObservableLike>["throttle"];
declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
declare const timeout: {
    <T>(duration: number): ContainerOperator<ObservableLike<unknown>, T, T>;
    <T_1>(duration: ObservableLike<unknown>): ContainerOperator<ObservableLike<unknown>, T_1, T_1>;
};
declare const toPromise: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<T>;
declare const withLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike<unknown>, TA, T>;
declare const zip: {
    <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
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
    <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [
        TA,
        TB
    ]>;
    <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [
        TA_1,
        TB_1,
        TC
    ]>;
    <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
        TA_2,
        TB_2,
        TC_1,
        TD
    ]>;
    <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
        TA_3,
        TB_3,
        TC_2,
        TD_1,
        TE
    ]>;
    <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
        TA_4,
        TB_4,
        TC_3,
        TD_2,
        TE_1,
        TF
    ]>;
    <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
        TA_5,
        TB_5,
        TC_4,
        TD_3,
        TE_2,
        TF_1,
        TG
    ]>;
    <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
        TA_6,
        TB_6,
        TC_5,
        TD_4,
        TE_3,
        TF_2,
        TG_1,
        TH
    ]>;
    <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
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
declare const zipWithLatestFrom: <TA, TB, T>(other: ObservableLike<TB>, selector: Function2<TA, TB, T>) => ContainerOperator<ObservableLike<unknown>, TA, T>;
/** @ignore */
declare const Observable: {
    async: <T>(computation: Factory<T>, { mode }?: {
        mode?: "batched" | "combine-latest" | undefined;
    }) => ObservableLike<T>;
    buffer: <T_1>(options?: {
        readonly duration?: number | Function1<T_1, ObservableLike<unknown>> | undefined;
        readonly maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_1, readonly T_1[]>;
    catchError: <T_2>(onError: Function1<unknown, void | ObservableLike<T_2>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_2, T_2>;
    combineLatest: {
        <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
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
    concat: <T_3>(fst: ObservableLike<T_3>, snd: ObservableLike<T_3>, ...tail: readonly ObservableLike<T_3>[]) => ObservableLike<T_3>;
    concatAll: <T_4>(options?: {
        maxBufferSize?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T_4>, T_4>;
    decodeWithCharset: (options?: {
        charset?: string | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, ArrayBuffer, string>;
    defer: <T_5>(factory: Factory<ObservableLike<T_5>>, options?: undefined) => ObservableLike<T_5>;
    distinctUntilChanged: <T_6>(options?: {
        readonly equality?: Equality<T_6> | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_6, T_6>;
    empty: EmptyObservable;
    everySatisfy: <T_7>(predicate: Predicate<T_7>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_7, boolean>;
    forEach: <T_8>(effect: SideEffect1<T_8>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_8, T_8>;
    fromFlowable: <T_9>(options?: undefined) => Function1<FlowableLike<T_9>, ObservableLike<T_9>>;
    fromPromise: <T_10>(options?: undefined) => Function1<PromiseableLike<T_10>, ObservableLike<T_10>>;
    fromReadonlyArray: <T_11>(options?: ({
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T_11[], ObservableLike<T_11>>;
    generate: <T_12>(generator: Updater<T_12>, initialValue: Factory<T_12>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => ObservableLike<T_12>;
    isEnumerable: (obs: ObservableLike<unknown>) => obs is EnumerableObservableLike<unknown>;
    isRunnable: (obs: ObservableLike<unknown>) => obs is RunnableObservableLike<unknown>;
    keep: <T_13>(predicate: Predicate<T_13>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_13, T_13>;
    map: <TA_8, TB_8>(mapper: Function1<TA_8, TB_8>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_8, TB_8>;
    never: <T_14>(options?: undefined) => ObservableLike<T_14>;
    onSubscribe: <T_15>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike<unknown>, T_15, T_15>;
    pairwise: <T_16>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_16, readonly [
        T_16,
        T_16
    ]>;
    reduce: <T_17, TAcc>(reducer: Reducer<T_17, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_17, TAcc>;
    repeat: {
        <T_18>(predicate: Predicate<number>, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_18, T_18>;
        <T_19>(count: number, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_19, T_19>;
        <T_20>(options?: undefined): ContainerOperator<ObservableLike<unknown>, T_20, T_20>;
    };
    retry: {
        <T_21>(): ContainerOperator<ObservableLike<unknown>, T_21, T_21>;
        <T_22>(predicate: Function2<number, unknown, boolean>): ContainerOperator<ObservableLike<unknown>, T_22, T_22>;
    };
    scan: <T_23, TAcc_1>(scanner: Reducer<T_23, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_23, TAcc_1>;
    scanAsync: <T_24, TAcc_2>(scanner: AsyncReducer<ObservableLike<unknown>, T_24, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<ObservableLike<unknown>, T_24, TAcc_2>;
    share: <T_25>(scheduler: SchedulerLike, options?: {
        readonly replay?: number | undefined;
    } | undefined) => Function1<ObservableLike<T_25>, ObservableLike<T_25>>;
    skipFirst: <T_26>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_26, T_26>;
    someSatisfy: <T_27>(predicate: Predicate<T_27>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_27, boolean>;
    subscribe: <T_28>(scheduler: SchedulerLike) => Function1<ObservableLike<T_28>, DisposableLike>;
    takeFirst: <T_29>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_29, T_29>;
    takeLast: <T_30>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_30, T_30>;
    takeUntil: <T_31>(notifier: ObservableLike<unknown>) => ContainerOperator<ObservableLike<unknown>, T_31, T_31>;
    takeWhile: <T_32>(predicate: Predicate<T_32>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_32, T_32>;
    throttle: {
        <T_33>(duration: Function1<T_33, ObservableLike<unknown>>, options?: {
            readonly mode?: ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_33, T_33>;
        <T_34>(duration: number, options?: {
            readonly mode?: ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_34, T_34>;
    };
    throwIfEmpty: <T_35>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_35, T_35>;
    timeout: {
        <T_36>(duration: number): ContainerOperator<ObservableLike<unknown>, T_36, T_36>;
        <T_37>(duration: ObservableLike<unknown>): ContainerOperator<ObservableLike<unknown>, T_37, T_37>;
    };
    toPromise: <T_38>(scheduler: SchedulerLike) => (observable: ObservableLike<T_38>) => PromiseLike<T_38>;
    withLatestFrom: <TA_9, TB_9, T_39>(other: ObservableLike<TB_9>, selector: Function2<TA_9, TB_9, T_39>) => ContainerOperator<ObservableLike<unknown>, TA_9, T_39>;
    zip: {
        <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
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
        <TA, TB>(a: ObservableLike<TA>, b: ObservableLike<TB>): ObservableLike<readonly [
            TA,
            TB
        ]>;
        <TA_1, TB_1, TC>(a: ObservableLike<TA_1>, b: ObservableLike<TB_1>, c: ObservableLike<TC>): ObservableLike<readonly [
            TA_1,
            TB_1,
            TC
        ]>;
        <TA_2, TB_2, TC_1, TD>(a: ObservableLike<TA_2>, b: ObservableLike<TB_2>, c: ObservableLike<TC_1>, d: ObservableLike<TD>): ObservableLike<readonly [
            TA_2,
            TB_2,
            TC_1,
            TD
        ]>;
        <TA_3, TB_3, TC_2, TD_1, TE>(a: ObservableLike<TA_3>, b: ObservableLike<TB_3>, c: ObservableLike<TC_2>, d: ObservableLike<TD_1>, e: ObservableLike<TE>): ObservableLike<readonly [
            TA_3,
            TB_3,
            TC_2,
            TD_1,
            TE
        ]>;
        <TA_4, TB_4, TC_3, TD_2, TE_1, TF>(a: ObservableLike<TA_4>, b: ObservableLike<TB_4>, c: ObservableLike<TC_3>, d: ObservableLike<TD_2>, e: ObservableLike<TE_1>, f: ObservableLike<TF>): ObservableLike<readonly [
            TA_4,
            TB_4,
            TC_3,
            TD_2,
            TE_1,
            TF
        ]>;
        <TA_5, TB_5, TC_4, TD_3, TE_2, TF_1, TG>(a: ObservableLike<TA_5>, b: ObservableLike<TB_5>, c: ObservableLike<TC_4>, d: ObservableLike<TD_3>, e: ObservableLike<TE_2>, f: ObservableLike<TF_1>, g: ObservableLike<TG>): ObservableLike<readonly [
            TA_5,
            TB_5,
            TC_4,
            TD_3,
            TE_2,
            TF_1,
            TG
        ]>;
        <TA_6, TB_6, TC_5, TD_4, TE_3, TF_2, TG_1, TH>(a: ObservableLike<TA_6>, b: ObservableLike<TB_6>, c: ObservableLike<TC_5>, d: ObservableLike<TD_4>, e: ObservableLike<TE_3>, f: ObservableLike<TF_2>, g: ObservableLike<TG_1>, h: ObservableLike<TH>): ObservableLike<readonly [
            TA_6,
            TB_6,
            TC_5,
            TD_4,
            TE_3,
            TF_2,
            TG_1,
            TH
        ]>;
        <TA_7, TB_7, TC_6, TD_5, TE_4, TF_3, TG_2, TH_1, TI>(a: ObservableLike<TA_7>, b: ObservableLike<TB_7>, c: ObservableLike<TC_6>, d: ObservableLike<TD_5>, e: ObservableLike<TE_4>, f: ObservableLike<TF_3>, g: ObservableLike<TG_2>, h: ObservableLike<TH_1>, i: ObservableLike<TI>): ObservableLike<readonly [
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
    zipWithLatestFrom: <TA_10, TB_10, T_40>(other: ObservableLike<TB_10>, selector: Function2<TA_10, TB_10, T_40>) => ContainerOperator<ObservableLike<unknown>, TA_10, T_40>;
};
export { async, buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromDisposable, fromFlowable, fromPromise, fromReadonlyArray, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toPromise, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
