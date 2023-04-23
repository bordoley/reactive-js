import { CatchError, Concat, ConcatAll, ConcatMap, ConcatWith, ContainerOperator, DecodeWithCharset, Defer, DistinctUntilChanged, Empty, EncodeUtf8, EndWith, FirstAsync, FlatMapIterable, ForEach, ForkConcat, ForkZip, FromAsyncIterable, FromEnumeratorFactory, FromFactory, FromIterable, FromOptional, FromReadonlyArray, Generate, Identity, IgnoreElements, Keep, KeepType, LastAsync, Map, MapTo, Never, Pairwise, Pick, Reduce, Repeat, Scan, SkipFirst, StartWith, TakeFirst, TakeLast, TakeWhile, ThrowIfEmpty, Throws, Zip, ZipWith } from "../containers.js";
import { Factory, Function1, SideEffect1 } from "../functions.js";
import { Animate, BackpressureStrategy, CombineLatest, CurrentTime, Enqueue, Exhaust, ExhaustMap, ForkCombineLatest, ForkMerge, ForkZipLatest, Merge, MergeAll, MergeMap, MergeWith, MulticastObservableLike, ObservableLike, ObserverLike, Retry, ScanLast, ScanMany, SwitchAll, SwitchMap, TakeUntil, Throttle, Timeout, ToEnumerable, ToObservable, ToRunnable, WithCurrentTime, WithLatestFrom, ZipLatest, ZipWithLatestFrom } from "../rx.js";
import { SchedulerLike } from "../scheduling.js";
import { FromAsyncEnumerable, FromFlowable } from "../streaming.js";
import { DisposableLike, DisposableOrTeardown, QueueableLike, QueueableLike_backpressureStrategy } from "../util.js";
export declare const animate: Animate<ObservableLike>["animate"];
export declare const backpressureStrategy: BackpressureStrategy<ObservableLike>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableLike>;
    readonly count?: number;
}) => ContainerOperator<ObservableLike, T, readonly T[]>;
export declare const catchError: CatchError<ObservableLike>["catchError"];
export declare const combineLatest: CombineLatest<ObservableLike>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Concat<ObservableLike>["concat"];
export declare const concatAll: ConcatAll<ObservableLike>["concatAll"];
export declare const concatMap: ConcatMap<ObservableLike>["concatMap"];
export declare const concatWith: ConcatWith<ObservableLike>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: CurrentTime<ObservableLike>["currentTime"];
export declare const decodeWithCharset: DecodeWithCharset<ObservableLike>["decodeWithCharset"];
export declare const defer: Defer<ObservableLike>["defer"];
export declare const distinctUntilChanged: DistinctUntilChanged<ObservableLike>["distinctUntilChanged"];
export declare const empty: Empty<ObservableLike, {
    delay?: number;
}>["empty"];
export declare const encodeUtf8: EncodeUtf8<ObservableLike>["encodeUtf8"];
export declare const enqueue: Enqueue<ObservableLike>["enqueue"];
export declare const endWith: EndWith<ObservableLike>["endWith"];
export declare const exhaust: Exhaust<ObservableLike>["exhaust"];
export declare const exhaustMap: ExhaustMap<ObservableLike>["exhaustMap"];
export declare const firstAsync: FirstAsync<ObservableLike, {
    scheduler?: SchedulerLike | Factory<SchedulerLike>;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => ContainerOperator<ObservableLike<unknown>, TA, TB>;
export declare const flatMapIterable: FlatMapIterable<ObservableLike>["flatMapIterable"];
export declare const forEach: ForEach<ObservableLike>["forEach"];
export declare const forkCombineLatest: ForkCombineLatest<ObservableLike>["forkCombineLatest"];
export declare const forkConcat: ForkConcat<ObservableLike>["forkConcat"];
export declare const forkMerge: ForkMerge<ObservableLike>["forkMerge"];
export declare const forkZip: ForkZip<ObservableLike>["forkZip"];
export declare const forkZipLatest: ForkZipLatest<ObservableLike>["forkZipLatest"];
export declare const fromAsyncEnumerable: FromAsyncEnumerable<ObservableLike>["fromAsyncEnumerable"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: FromAsyncIterable<ObservableLike>["fromAsyncIterable"];
export declare const fromEnumeratorFactory: FromEnumeratorFactory<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromEnumeratorFactory"];
export declare const fromFactory: FromFactory<ObservableLike, {
    delay: number;
}>["fromFactory"];
export declare const fromFlowable: FromFlowable<ObservableLike>["fromFlowable"];
export declare const fromIterable: FromIterable<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["fromIterable"];
export declare const fromOptional: FromOptional<ObservableLike, {
    delay?: number;
}>["fromOptional"];
export declare const fromReadonlyArray: FromReadonlyArray<ObservableLike, {
    delay?: number;
    delayStart?: boolean;
}>["fromReadonlyArray"];
export declare const generate: Generate<ObservableLike, {
    readonly delay?: number;
    readonly delayStart?: boolean;
}>["generate"];
export declare const identity: Identity<ObservableLike>["identity"];
export declare const ignoreElements: IgnoreElements<ObservableLike>["ignoreElements"];
export declare const keep: Keep<ObservableLike>["keep"];
export declare const keepType: KeepType<ObservableLike>["keepType"];
export declare const lastAsync: LastAsync<ObservableLike, {
    scheduler?: SchedulerLike | Factory<SchedulerLike>;
    capacity?: number;
    backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}>["lastAsync"];
export declare const map: Map<ObservableLike>["map"];
export declare const mapTo: MapTo<ObservableLike>["mapTo"];
export declare const merge: Merge<ObservableLike>["merge"];
export declare const mergeAll: MergeAll<ObservableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}>["mergeAll"];
export declare const mergeMap: MergeMap<ObservableLike, {
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    readonly capacity?: number;
    readonly concurrency?: number;
}>["mergeMap"];
export declare const mergeWith: MergeWith<ObservableLike>["mergeWith"];
/**
 * Returns a `MulticastObservableLike` backed by a single subscription to the source.
 *
 * @param scheduler - A `SchedulerLike` that is used to subscribe to the source observable.
 *
 * @category Transform
 */
export declare const multicast: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    /**
     * The number of events that should be replayed when the `MulticastObservableLike`
     * is subscribed to.
     */
    readonly replay?: number;
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
export declare const never: Never<ObservableLike>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => ContainerOperator<ObservableLike, T, T>;
export declare const pairwise: Pairwise<ObservableLike>["pairwise"];
export declare const pick: Pick<ObservableLike>["pick"];
export declare const reduce: Reduce<ObservableLike>["reduce"];
export declare const repeat: Repeat<ObservableLike>["repeat"];
export declare const retry: Retry<ObservableLike>["retry"];
export declare const scan: Scan<ObservableLike>["scan"];
export declare const scanLast: ScanLast<ObservableLike, ObservableLike>["scanLast"];
export declare const scanMany: ScanMany<ObservableLike, ObservableLike>["scanMany"];
/**
 * Returns an `ObservableLike` backed by a shared refcounted subscription to the
 * source. When the refcount goes to 0, the underlying subscription
 * to the source is disposed.
 *
 * @param scheduler - A `SchedulerLike` that is used to subscribe to the source.
 * @param replay - The number of events that should be replayed when the `ObservableLike`
 * is subscribed to.
 *
 * @category Operator
 */
export declare const share: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly replay?: number | undefined;
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
} | undefined) => Function1<ObservableLike<T>, ObservableLike<T>>;
export declare const skipFirst: SkipFirst<ObservableLike>["skipFirst"];
export declare const startWith: StartWith<ObservableLike>["startWith"];
export declare const switchAll: SwitchAll<ObservableLike>["switchAll"];
export declare const switchMap: SwitchMap<ObservableLike>["switchMap"];
export declare const subscribe: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, DisposableLike>;
/**
 * @category Operator
 */
export declare const subscribeOn: <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
} | undefined) => (observable: ObservableLike<T>) => ObservableLike<T>;
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
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
    readonly replay?: number | undefined;
}) => Function1<ObservableLike<T>, import("../util.js").EventSourceLike<T>>;
export declare const toObservable: ToObservable<ObservableLike>["toObservable"];
export declare const toRunnable: ToRunnable<ObservableLike>["toRunnable"];
export declare const withCurrentTime: WithCurrentTime<ObservableLike>["withCurrentTime"];
export declare const withLatestFrom: WithLatestFrom<ObservableLike>["withLatestFrom"];
export declare const zip: Zip<ObservableLike>["zip"];
export declare const zipLatest: ZipLatest<ObservableLike>["zipLatest"];
export declare const zipWith: ZipWith<ObservableLike>["zipWith"];
export declare const zipWithLatestFrom: ZipWithLatestFrom<ObservableLike>["zipWithLatestFrom"];
