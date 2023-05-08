import { Container, DisposableLike, DisposableOrTeardown, ObservableContainer, ObservableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, ReactiveContainer, SchedulerLike } from "../core.js";
import { Factory, Function1, SideEffect1 } from "../functions.js";
export declare const animate: ReactiveContainer.Animate<ObservableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainer.BackpressureStrategy<ObservableContainer>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => Container.Operator<ObservableContainer, T, readonly T[]>;
export declare const catchError: ReactiveContainer.CatchError<ObservableContainer>["catchError"];
export declare const combineLatest: ReactiveContainer.CombineLatest<ObservableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
export declare const concat: Container.Concat<ObservableContainer>["concat"];
export declare const concatAll: Container.ConcatAll<ObservableContainer>["concatAll"];
export declare const concatMap: Container.ConcatMap<ObservableContainer>["concatMap"];
export declare const concatWith: Container.ConcatWith<ObservableContainer>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: ReactiveContainer.CurrentTime<ObservableContainer>["currentTime"];
export declare const decodeWithCharset: ReactiveContainer.DecodeWithCharset<ObservableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainer.Defer<ObservableContainer>["defer"];
export declare const dispatchTo: ReactiveContainer.DispatchTo<ObservableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.DistinctUntilChanged<ObservableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainer.Empty<ObservableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainer.EncodeUtf8<ObservableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainer.Enqueue<ObservableContainer>["enqueue"];
export declare const endWith: Container.EndWith<ObservableContainer>["endWith"];
export declare const exhaust: ReactiveContainer.Exhaust<ObservableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainer.ExhaustMap<ObservableContainer>["exhaustMap"];
export declare const firstAsync: ReactiveContainer.FirstAsync<ObservableContainer>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => Container.Operator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: Container.FlatMapIterable<ObservableContainer>["flatMapIterable"];
export declare const forEach: Container.ForEach<ObservableContainer>["forEach"];
export declare const forkCombineLatest: ReactiveContainer.ForkCombineLatest<ObservableContainer>["forkCombineLatest"];
export declare const forkConcat: Container.ForkConcat<ObservableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainer.ForkMerge<ObservableContainer>["forkMerge"];
export declare const forkZip: Container.ForkZip<ObservableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainer.ForkZipLatest<ObservableContainer>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: Container.FromAsyncIterable<ObservableContainer>["fromAsyncIterable"];
export declare const fromEnumeratorFactory: ReactiveContainer.FromEnumeratorFactory<ObservableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainer.FromFactory<ObservableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainer.FromIterable<ObservableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainer.FromOptional<ObservableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainer.FromReadonlyArray<ObservableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainer.Generate<ObservableContainer>["generate"];
export declare const identity: Container.Identity<ObservableContainer>["identity"];
export declare const ignoreElements: Container.IgnoreElements<ObservableContainer>["ignoreElements"];
export declare const keep: Container.Keep<ObservableContainer>["keep"];
export declare const keepType: Container.KeepType<ObservableContainer>["keepType"];
export declare const lastAsync: ReactiveContainer.LastAsync<ObservableContainer>["lastAsync"];
export declare const map: Container.Map<ObservableContainer>["map"];
export declare const mapTo: Container.MapTo<ObservableContainer>["mapTo"];
export declare const merge: ReactiveContainer.Merge<ObservableContainer>["merge"];
export declare const mergeAll: ReactiveContainer.MergeAll<ObservableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainer.MergeMap<ObservableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainer.MergeWith<ObservableContainer>["mergeWith"];
export declare const multicast: ReactiveContainer.Multicast<ObservableContainer>["multicast"];
export declare const never: ReactiveContainer.Never<ObservableContainer>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Container.Operator<ObservableContainer, T, T>;
export declare const pairwise: Container.Pairwise<ObservableContainer>["pairwise"];
export declare const pick: Container.Pick<ObservableContainer>["pick"];
export declare const repeat: Container.Repeat<ObservableContainer>["repeat"];
export declare const retry: ReactiveContainer.Retry<ObservableContainer>["retry"];
export declare const scan: Container.Scan<ObservableContainer>["scan"];
export declare const scanLast: ReactiveContainer.ScanLast<ObservableContainer>["scanLast"];
export declare const scanMany: ReactiveContainer.ScanMany<ObservableContainer>["scanMany"];
export declare const share: ReactiveContainer.Share<ObservableContainer>["share"];
export declare const skipFirst: Container.SkipFirst<ObservableContainer>["skipFirst"];
export declare const startWith: Container.StartWith<ObservableContainer>["startWith"];
export declare const switchAll: ReactiveContainer.SwitchAll<ObservableContainer>["switchAll"];
export declare const switchMap: ReactiveContainer.SwitchMap<ObservableContainer>["switchMap"];
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
export declare const takeFirst: Container.TakeFirst<ObservableContainer>["takeFirst"];
export declare const takeLast: Container.TakeLast<ObservableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainer.TakeUntil<ObservableContainer>["takeUntil"];
export declare const takeWhile: Container.TakeWhile<ObservableContainer>["takeWhile"];
export declare const throttle: ReactiveContainer.Throttle<ObservableContainer>["throttle"];
export declare const throwIfEmpty: ReactiveContainer.ThrowIfEmpty<ObservableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainer.Throws<ObservableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainer.Timeout<ObservableContainer>["timeout"];
export declare const toEnumerable: Container.ToEnumerable<ObservableContainer>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../core.js").EventSourceLike<T>>;
export declare const toObservable: Container.ToObservable<ObservableContainer>["toObservable"];
export declare const toRunnable: Container.ToRunnable<ObservableContainer>["toRunnable"];
export declare const withCurrentTime: ReactiveContainer.WithCurrentTime<ObservableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainer.WithLatestFrom<ObservableContainer>["withLatestFrom"];
export declare const zip: Container.Zip<ObservableContainer>["zip"];
export declare const zipLatest: ReactiveContainer.ZipLatest<ObservableContainer>["zipLatest"];
export declare const zipWith: Container.ZipWith<ObservableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainer.ZipWithLatestFrom<ObservableContainer>["zipWithLatestFrom"];
export {};
