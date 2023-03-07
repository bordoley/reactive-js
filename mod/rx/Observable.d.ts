import { CatchError, Compute, Concat, ConcatAll, ConcatMap, ConcatWith, ContainerOperator, Contains, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, EverySatisfy, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromAsyncIterable, FromIterable, FromOptional, FromReadonlyArray, FromSequence, Generate, IgnoreElements, Keep, KeepType, Map, MapTo, Never, Pairwise, Reduce, Repeat, Scan, SkipFirst, SomeSatisfy, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, Zip, ZipWith } from "../containers.js";
import { Factory, Function1, Function2, Function3, Function4, Function5, Function6, SideEffect, SideEffect1, SideEffect2, SideEffect3, SideEffect4, SideEffect5, SideEffect6 } from "../functions.js";
import { CombineLatest, Exhaust, ExhaustMap, ForkCombineLatest, ForkMerge, ForkZipLatest, Merge, MergeAll, MergeMap, MergeWith, ObservableLike, ObserverLike, Retry, ScanAsync, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToEnumerable, ToRunnable, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { FromAsyncEnumerable, FromFlowable } from "../streaming.js";
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
export declare const combineLatest: CombineLatest<ObservableLike>["combineLatest"];
export declare const compute: Compute<ObservableLike, {
    delay: number;
}>["compute"];
export declare const concat: Concat<ObservableLike>["concat"];
export declare const concatAll: ConcatAll<ObservableLike, {
    maxBufferSize?: number;
}>["concatAll"];
export declare const concatMap: ConcatMap<ObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableLike>["concatWith"];
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
export declare const exhaust: Exhaust<ObservableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<ObservableLike>["exhaustMap"];
export declare const flatMapIterable: FlatMapIterable<ObservableLike>["flatMapIterable"];
export declare const flatMapPromise: <TA, TB>(f: Function1<TA, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const forEach: ForEach<ObservableLike>["forEach"];
export declare const forkCombineLatest: ForkCombineLatest<ObservableLike>["forkCombineLatest"];
export declare const forkConcat: ForkConcat<ObservableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<ObservableLike>["forkMerge"];
export declare const forkZip: ForkZip<ObservableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<ObservableLike>["forkZipLatest"];
export declare const fromAsyncEnumerable: FromAsyncEnumerable<ObservableLike>["fromAsyncEnumerable"];
export declare const fromAsyncIterable: FromAsyncIterable<ObservableLike, {
    maxBuffer?: number;
}>["fromAsyncIterable"];
export declare const fromIterable: FromIterable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"];
export declare const fromOptional: FromOptional<ObservableLike, {
    delay?: number;
}>["fromOptional"];
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
export declare const keep: Keep<ObservableLike>["keep"];
export declare const keepType: KeepType<ObservableLike>["keepType"];
export declare const map: Map<ObservableLike>["map"];
export declare const mapTo: MapTo<ObservableLike>["mapTo"];
export declare const merge: Merge<ObservableLike>["merge"];
export declare const mergeAll: MergeAll<ObservableLike, {
    readonly maxBufferSize?: number;
    readonly maxConcurrency?: number;
}>["mergeAll"];
export declare const mergeMap: MergeMap<ObservableLike>["mergeMap"];
export declare const mergeWith: MergeWith<ObservableLike>["mergeWith"];
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
export declare const observeWith: <C extends ObservableLike<unknown>, T>(observer: ObserverLike<T>) => Function1<C, C>;
export declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
export declare const someSatisfy: SomeSatisfy<ObservableLike>["someSatisfy"];
export declare const startWith: StartWith<ObservableLike>["startWith"];
export declare const switchAll: SwitchAll<ObservableLike>["switchAll"];
export declare const switchMap: SwitchMap<ObservableLike>["switchMap"];
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
}>["throws"];
export declare const timeout: Timeout<ObservableLike>["timeout"];
export declare const toEnumerable: ToEnumerable<ObservableLike>["toEnumerable"];
export declare const toRunnable: ToRunnable<ObservableLike>["toRunnable"];
export declare const toPromise: <T>(scheduler: SchedulerLike) => (observable: ObservableLike<T>) => PromiseLike<T>;
export declare const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"];
export declare const zip: Zip<ObservableLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableLike>["zipLatest"];
export declare const zipWith: ZipWith<ObservableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"];
export {};
