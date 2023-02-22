import { CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ConcatYieldMap, ContainerOperator, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, ForEach, ForkConcat, ForkZip, FromIterable, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Never, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, Zip, ZipWith } from "../containers.js";
import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6 } from "../functions.js";
import { FromEnumerable } from "../ix.js";
import { ObservableLike, ObserverLike, Retry, ScanAsync, TakeUntil, Throttle, Timeout, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { FromFlowable } from "../streaming.js";
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
export declare const __memo: __Memo;
/**
 * @category AsyncEffect
 */
export declare const __await: <T>(observable: ObservableLike<T>) => T;
/**
 * @category AsyncEffect
 */
export declare const __currentScheduler: typeof Observable_async__currentScheduler;
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
export declare const __do: __Do;
/**
 * @category AsyncEffect
 */
export declare const __observe: <T>(observable: ObservableLike<T>) => import("../functions.js").Optional<T>;
/**
 * @category AsyncEffect
 */
export declare const __state: <T>(initialState: () => T, options?: {
    readonly equality?: import("../functions.js").Optional<import("../functions.js").Equality<T>>;
}) => import("../streaming.js").StreamLike<import("../functions.js").Updater<T>, T>;
/**
 * @category AsyncEffect
 */
export declare const __stream: <TReq, T, TStream extends import("../streaming.js").StreamLike<TReq, T>>(streamable: import("../streaming.js").StreamableLike<TReq, T, TStream>, { replay, scheduler, }?: {
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
export declare const __using: __Using;
export declare const async: <T>(computation: Factory<T>, { mode }?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly maxBufferSize?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
export declare const catchError: CatchError<ObservableLike>["catchError"];
export declare const combineLatest: Zip<ObservableLike>["zip"];
export declare const compute: Compute<ObservableLike>["compute"];
export declare const concat: Concat<ObservableLike>["concat"];
export declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<ObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableLike>["concatWith"];
export declare const concatYieldMap: ConcatYieldMap<ObservableLike>["concatYieldMap"];
export declare const contains: Contains<ObservableLike>["contains"];
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
export declare const defer: Defer<ObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<ObservableLike, {
    delay?: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"];
export declare const endWith: EndWith<ObservableLike>["endWith"];
export declare const everySatisfy: EverySatisfy<ObservableLike>["everySatisfy"];
export declare const exhaust: <T>(options?: undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T>, T>;
export declare const forEach: ForEach<ObservableLike>["forEach"];
export declare const forkCombineLatest: ForkZip<ObservableLike>["forkZip"];
export declare const forkMerge: ForkConcat<ObservableLike>["forkConcat"];
export declare const forkZipLatest: ForkZip<ObservableLike>["forkZip"];
export declare const fromDisposable: <T>() => Function1<DisposableLike, ObservableLike<T>>;
export declare const fromEnumerable: FromEnumerable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumerable"];
export declare const fromIterable: FromIterable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"];
export declare const fromPromise: <T>(options?: undefined) => Function1<import("../containers.js").PromiseableLike<T>, ObservableLike<T>>;
export declare const fromReadonlyArray: FromReadonlyArray<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const fromSequence: FromSequence<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromSequence"];
export declare const generate: Generate<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"];
export declare const isEnumerable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").EnumerableObservableLike<unknown>;
export declare const isRunnable: (obs: ObservableLike<unknown>) => obs is import("../rx.js").RunnableObservableLike<unknown>;
export declare const keep: Keep<ObservableLike>["keep"];
export declare const keepType: KeepType<ObservableLike>["keepType"];
export declare const map: Map<ObservableLike>["map"];
export declare const mapAsync: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const mapTo: MapTo<ObservableLike>["mapTo"];
export declare const merge: Concat<ObservableLike>["concat"];
export declare const mergeAll: <T>(options?: {
    readonly maxBufferSize?: number | undefined;
    readonly maxConcurrency?: number | undefined;
} | undefined) => ContainerOperator<ObservableLike<unknown>, ObservableLike<T>, T>;
export declare const mergeWith: <T>(snd: ObservableLike<T>, ...tail: readonly ObservableLike<T>[]) => ContainerOperator<ObservableLike<unknown>, T, T>;
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source observable.
 * @param replay The number of events that should be replayed when the `MulticastObservableLike`
 * is subscribed to.
 */
export declare const multicast: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, import("../rx.js").MulticastObservableLike<T>>;
export declare const never: Never<ObservableLike>["never"];
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
export declare const pairwise: Pairwise<ObservableLike>["pairwise"];
export declare const reduce: Reduce<ObservableLike>["reduce"];
export declare const repeat: Repeat<ObservableLike>["repeat"];
export declare const retry: Retry<ObservableLike>["retry"];
export declare const scan: Scan<ObservableLike>["scan"];
export declare const scanAsync: ScanAsync<ObservableLike, ObservableLike>["scanAsync"];
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler A `SchedulerLike` that is used to subscribe to the source.
 * @param replay The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 */
export declare const share: <T>(scheduler: SchedulerLike, options?: {
    readonly replay?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;
export declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
export declare const startWith: StartWith<ObservableLike>["startWith"];
export declare const switchAll: ConcatAll<ObservableLike>["concatAll"];
export declare const switchMap: <TA, TB>(mapper: Function1<TA, ObservableLike<TB>>, options?: undefined) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const subscribe: <T>(scheduler: SchedulerLike) => Function1<ObservableLike<T>, DisposableLike>;
export declare const subscribeOn: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => ObservableLike<T>;
export declare const takeFirst: TakeFirst<ObservableLike>["takeFirst"];
export declare const takeLast: TakeLast<ObservableLike>["takeLast"];
export declare const takeUntil: TakeUntil<ObservableLike>["takeUntil"];
export declare const takeWhile: TakeWhile<ObservableLike>["takeWhile"];
export declare const throttle: Throttle<ObservableLike>["throttle"];
export declare const throwIfEmpty: ThrowIfEmpty<ObservableLike>["throwIfEmpty"];
export declare const throws: Throws<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["throws"];
export declare const timeout: Timeout<ObservableLike>["timeout"];
export declare const toPromise: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<T>;
export declare const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"];
export declare const zip: Zip<ObservableLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableLike>["zipLatest"];
export declare const zipWith: ZipWith<ObservableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"];
export {};
