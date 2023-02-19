import { FromEnumerable, EnumerableLike } from "../ix.js";
import { ObservableLike, ObserverLike, EnumerableObservableLike, RunnableObservableLike, MulticastObservableLike, ScanAsync, Throttle, AsyncReducer, ThrottleMode } from "../rx.js";
import { ContainerOperator, CatchError, Zip, Concat, ConcatAll, DecodeWithCharset, Defer, Empty, EverySatisfy, ForEach, ForkZip, ForkConcat, FromIterable, PromiseableLike, FromReadonlyArray, FromSequence, Generate, Keep, Map, Pairwise, Reduce, SkipFirst, SomeSatisfy, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, SequenceLike } from "../containers.js";
import { StreamLike, StreamableLike, FromFlowable, FlowableLike } from "../streaming.js";
import { Optional, Equality, Updater, Factory, Function1, SideEffect1, Predicate, Function2, Reducer, Function3, Function4, Function5, Function6, SideEffect, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6 } from "../functions.js";
import { SchedulerLike } from "../scheduling.js";
import { DisposableLike, DisposableOrTeardown } from "../util.js";
import { Observable_async__currentScheduler } from "./Observable/__internal__/Observable.async.js";
interface __Memo {
    <T>(fn: Factory<T>): T;
    <TA, T>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
/**
 * @category AsyncEffect
 */
declare const __memo: __Memo;
/**
 * @category AsyncEffect
 */
declare const __await: <T>(observable: ObservableLike<T>) => T;
/**
 * @category AsyncEffect
 */
declare const __currentScheduler: typeof Observable_async__currentScheduler;
interface __Do {
    (fn: SideEffect): void;
    <TA>(fn: SideEffect1<TA>, a: TA): void;
    <TA, TB>(fn: SideEffect2<TA, TB>, a: TA, b: TB): void;
    <TA, TB, TC>(fn: SideEffect3<TA, TB, TC>, a: TA, b: TB, c: TC): void;
    <TA, TB, TC, TD>(fn: SideEffect4<TA, TB, TC, TD>, a: TA, b: TB, c: TC, d: TD): void;
    <TA, TB, TC, TD, TE>(fn: SideEffect5<TA, TB, TC, TD, TE>, a: TA, b: TB, c: TC, d: TD, e: TE): void;
    <TA, TB, TC, TD, TE, TF>(fn: SideEffect6<TA, TB, TC, TD, TE, TF>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): void;
}
/**
 * @category AsyncEffect
 */
declare const __do: __Do;
/**
 * @category AsyncEffect
 */
declare const __observe: <T>(observable: ObservableLike<T>) => Optional<T>;
/**
 * @category AsyncEffect
 */
declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: Optional<Equality<T>>;
}) => StreamLike<Updater<T>, T>;
/**
 * @category AsyncEffect
 */
declare const __stream: <TReq, T, TStream extends StreamLike<TReq, T>>(streamable: StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
    readonly replay?: number | undefined;
    readonly scheduler?: SchedulerLike | undefined;
}) => TStream;
interface __Using {
    <T extends DisposableLike>(fn: Factory<T>): T;
    <TA, T extends DisposableLike>(fn: Function1<TA, T>, a: TA): T;
    <TA, TB, T extends DisposableLike>(fn: Function2<TA, TB, T>, a: TA, b: TB): T;
    <TA, TB, TC, T extends DisposableLike>(fn: Function3<TA, TB, TC, T>, a: TA, b: TB, c: TC): T;
    <TA, TB, TC, TD, T extends DisposableLike>(fn: Function4<TA, TB, TC, TD, T>, a: TA, b: TB, c: TC, d: TD): T;
    <TA, TB, TC, TD, TE, T extends DisposableLike>(fn: Function5<TA, TB, TC, TD, TE, T>, a: TA, b: TB, c: TC, d: TD, e: TE): T;
    <TA, TB, TC, TD, TE, TF, T extends DisposableLike>(fn: Function6<TA, TB, TC, TD, TE, TF, T>, a: TA, b: TB, c: TC, d: TD, e: TE, f: TF): T;
}
/**
 * @category AsyncEffect
 */
declare const __using: __Using;
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
declare const empty: Empty<ObservableLike, {
    delay?: number;
}>["empty"];
declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
declare const exhaust: ConcatAll<ObservableLike>["concatAll"];
declare const forEach: ForEach<ObservableLike>["forEach"];
declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
declare const fromDisposable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
declare const fromEnumerable: FromEnumerable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
declare const fromIterable: FromIterable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
declare const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"];
declare const fromPromise: <T>(options?: undefined) => Function1<PromiseableLike<T>, ObservableLike<T>>;
declare const fromReadonlyArray: FromReadonlyArray<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["fromReadonlyArray"];
declare const fromSequence: FromSequence<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromSequence"];
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
    empty: <T_7>(options?: {
        delay?: number | undefined;
    } | undefined) => ObservableLike<T_7>;
    everySatisfy: <T_8>(predicate: Predicate<T_8>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_8, boolean>;
    forEach: <T_9>(effect: SideEffect1<T_9>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_9, T_9>;
    fromEnumerable: <T_10>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<EnumerableLike<T_10>, ObservableLike<T_10>>;
    fromFlowable: <T_11>(options?: undefined) => Function1<FlowableLike<T_11>, ObservableLike<T_11>>;
    fromIterable: <T_12>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<Iterable<T_12>, ObservableLike<T_12>>;
    fromPromise: <T_13>(options?: undefined) => Function1<PromiseableLike<T_13>, ObservableLike<T_13>>;
    fromReadonlyArray: <T_14>(options?: ({
        delay?: number | undefined;
        delayStart?: boolean | undefined;
    } & {
        readonly start?: number | undefined;
        readonly count?: number | undefined;
    }) | undefined) => Function1<readonly T_14[], ObservableLike<T_14>>;
    fromSequence: <T_15>(options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => Function1<SequenceLike<T_15>, ObservableLike<T_15>>;
    generate: <T_16>(generator: Updater<T_16>, initialValue: Factory<T_16>, options?: {
        readonly delay?: number | undefined;
        readonly delayStart?: boolean | undefined;
    } | undefined) => ObservableLike<T_16>;
    isEnumerable: (obs: ObservableLike<unknown>) => obs is EnumerableObservableLike<unknown>;
    isRunnable: (obs: ObservableLike<unknown>) => obs is RunnableObservableLike<unknown>;
    keep: <T_17>(predicate: Predicate<T_17>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_17, T_17>;
    map: <TA_8, TB_8>(mapper: Function1<TA_8, TB_8>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA_8, TB_8>;
    never: <T_18>(options?: undefined) => ObservableLike<T_18>;
    onSubscribe: <T_19>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike<unknown>, T_19, T_19>;
    pairwise: <T_20>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_20, readonly [
        T_20,
        T_20
    ]>;
    reduce: <T_21, TAcc>(reducer: Reducer<T_21, TAcc>, initialValue: Factory<TAcc>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_21, TAcc>;
    repeat: {
        <T_22>(predicate: Predicate<number>, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_22, T_22>;
        <T_23>(count: number, options?: undefined): ContainerOperator<ObservableLike<unknown>, T_23, T_23>;
        <T_24>(options?: undefined): ContainerOperator<ObservableLike<unknown>, T_24, T_24>;
    };
    retry: {
        <T_25>(): ContainerOperator<ObservableLike<unknown>, T_25, T_25>;
        <T_26>(predicate: Function2<number, unknown, boolean>): ContainerOperator<ObservableLike<unknown>, T_26, T_26>;
    };
    scan: <T_27, TAcc_1>(scanner: Reducer<T_27, TAcc_1>, initialValue: Factory<TAcc_1>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_27, TAcc_1>;
    scanAsync: <T_28, TAcc_2>(scanner: AsyncReducer<ObservableLike<unknown>, T_28, TAcc_2>, initialValue: Factory<TAcc_2>) => ContainerOperator<ObservableLike<unknown>, T_28, TAcc_2>;
    share: <T_29>(scheduler: SchedulerLike, options?: {
        readonly replay?: number | undefined;
    } | undefined) => Function1<ObservableLike<T_29>, ObservableLike<T_29>>;
    skipFirst: <T_30>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_30, T_30>;
    someSatisfy: <T_31>(predicate: Predicate<T_31>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_31, boolean>;
    subscribe: <T_32>(scheduler: SchedulerLike) => Function1<ObservableLike<T_32>, DisposableLike>;
    takeFirst: <T_33>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_33, T_33>;
    takeLast: <T_34>(options?: {
        readonly count?: number | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_34, T_34>;
    takeUntil: <T_35>(notifier: ObservableLike<unknown>) => ContainerOperator<ObservableLike<unknown>, T_35, T_35>;
    takeWhile: <T_36>(predicate: Predicate<T_36>, options?: {
        readonly inclusive?: boolean | undefined;
    } | undefined) => ContainerOperator<ObservableLike<unknown>, T_36, T_36>;
    throttle: {
        <T_37>(duration: Function1<T_37, ObservableLike<unknown>>, options?: {
            readonly mode?: ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_37, T_37>;
        <T_38>(duration: number, options?: {
            readonly mode?: ThrottleMode | undefined;
        } | undefined): ContainerOperator<ObservableLike<unknown>, T_38, T_38>;
    };
    throwIfEmpty: <T_39>(factory: Factory<unknown>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, T_39, T_39>;
    timeout: {
        <T_40>(duration: number): ContainerOperator<ObservableLike<unknown>, T_40, T_40>;
        <T_41>(duration: ObservableLike<unknown>): ContainerOperator<ObservableLike<unknown>, T_41, T_41>;
    };
    toPromise: <T_42>(scheduler: SchedulerLike) => (observable: ObservableLike<T_42>) => PromiseLike<T_42>;
    withLatestFrom: <TA_9, TB_9, T_43>(other: ObservableLike<TB_9>, selector: Function2<TA_9, TB_9, T_43>) => ContainerOperator<ObservableLike<unknown>, TA_9, T_43>;
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
    zipWithLatestFrom: <TA_10, TB_10, T_44>(other: ObservableLike<TB_10>, selector: Function2<TA_10, TB_10, T_44>) => ContainerOperator<ObservableLike<unknown>, TA_10, T_44>;
};
export { __await, __currentScheduler, __do, __memo, __observe, __state, __stream, __using, async, buffer, catchError, combineLatest, concat, concatAll, create, decodeWithCharset, Observable as default, defer, distinctUntilChanged, empty, everySatisfy, exhaust, forEach, forkCombineLatest, forkMerge, forkZipLatest, fromDisposable, fromEnumerable, fromFlowable, fromIterable, fromPromise, fromReadonlyArray, fromSequence, generate, isEnumerable, isRunnable, keep, map, mapAsync, merge, mergeAll, multicast, never, onSubscribe, pairwise, reduce, repeat, retry, scan, scanAsync, share, skipFirst, someSatisfy, subscribe, subscribeOn, switchAll, takeFirst, takeLast, takeUntil, takeWhile, throttle, throwIfEmpty, timeout, toPromise, withLatestFrom, zip, zipLatest, zipWithLatestFrom };
