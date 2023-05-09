import { Containers, DisposableLike, DisposableOrTeardown, ObservableContainer, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike } from "../core.js";
import { Factory, Function1 } from "../functions.js";
export declare const backpressureStrategy: ObservableContainer.TypeClass["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => Containers.Operator<ObservableContainer, T, readonly T[]>;
export declare const catchError: ObservableContainer.TypeClass["catchError"];
export declare const combineLatest: ObservableContainer.TypeClass["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../core.js").DeferredObservableLike<T>;
export declare const decodeWithCharset: ObservableContainer.TypeClass["decodeWithCharset"];
export declare const defer: ObservableContainer.TypeClass["defer"];
export declare const dispatchTo: ObservableContainer.TypeClass["dispatchTo"];
export declare const distinctUntilChanged: ObservableContainer.TypeClass["distinctUntilChanged"];
export declare const encodeUtf8: ObservableContainer.TypeClass["encodeUtf8"];
export declare const enqueue: ObservableContainer.TypeClass["enqueue"];
export declare const exhaust: ObservableContainer.TypeClass["exhaust"];
export declare const exhaustMap: ObservableContainer.TypeClass["exhaustMap"];
export declare const firstAsync: ObservableContainer.TypeClass["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => Containers.Operator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: ObservableContainer.TypeClass["flatMapIterable"];
export declare const forEach: ObservableContainer.TypeClass["forEach"];
export declare const forkCombineLatest: ObservableContainer.TypeClass["forkCombineLatest"];
export declare const forkMerge: ObservableContainer.TypeClass["forkMerge"];
export declare const forkZip: ObservableContainer.TypeClass["forkZip"];
export declare const forkZipLatest: ObservableContainer.TypeClass["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../core.js").DeferredObservableLike<T>;
export declare const fromAsyncIterable: ObservableContainer.TypeClass["fromAsyncIterable"];
export declare const identity: ObservableContainer.TypeClass["identity"];
export declare const ignoreElements: ObservableContainer.TypeClass["ignoreElements"];
export declare const keep: ObservableContainer.TypeClass["keep"];
export declare const keepType: ObservableContainer.TypeClass["keepType"];
export declare const lastAsync: ObservableContainer.TypeClass["lastAsync"];
export declare const map: ObservableContainer.TypeClass["map"];
export declare const mapTo: ObservableContainer.TypeClass["mapTo"];
export declare const merge: ObservableContainer.TypeClass["merge"];
export declare const mergeAll: ObservableContainer.TypeClass["mergeAll"];
export declare const mergeMap: ObservableContainer.TypeClass["mergeMap"];
export declare const mergeWith: ObservableContainer.TypeClass["mergeWith"];
export declare const never: ObservableContainer.TypeClass["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Containers.Operator<ObservableContainer, T, T>;
export declare const pairwise: ObservableContainer.TypeClass["pairwise"];
export declare const pick: ObservableContainer.TypeClass["pick"];
export declare const scan: ObservableContainer.TypeClass["scan"];
export declare const scanLast: ObservableContainer.TypeClass["scanLast"];
export declare const scanMany: ObservableContainer.TypeClass["scanMany"];
export declare const skipFirst: ObservableContainer.TypeClass["skipFirst"];
export declare const switchAll: ObservableContainer.TypeClass["switchAll"];
export declare const switchMap: ObservableContainer.TypeClass["switchMap"];
export declare const subscribe: <T>(scheduler: SchedulerLike, options?: {
    readonly capacity?: number;
    readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
}) => Function1<ObservableLike<T>, DisposableLike>;
/**
 * @category Operator
 */
export declare const subscribeOn: {
    <T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    } | undefined): Function1<import("../core.js").DeferredObservableLike<T>, import("../core.js").DeferredObservableLike<T>>;
    <T_1>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    } | undefined): Function1<import("../core.js").SharedObservableLike<T_1>, import("../core.js").SharedObservableLike<T_1>>;
    <T_2>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    } | undefined): Function1<ObservableLike<T_2>, ObservableLike<T_2>>;
};
export declare const takeFirst: ObservableContainer.TypeClass["takeFirst"];
export declare const takeLast: ObservableContainer.TypeClass["takeLast"];
export declare const takeUntil: ObservableContainer.TypeClass["takeUntil"];
export declare const takeWhile: ObservableContainer.TypeClass["takeWhile"];
export declare const throttle: ObservableContainer.TypeClass["throttle"];
export declare const throwIfEmpty: ObservableContainer.TypeClass["throwIfEmpty"];
interface Throws extends ObservableContainer.TypeClass {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ObservableContainer.TypeClass["timeout"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../core.js").EventSourceLike<T>>;
export declare const toObservable: ObservableContainer.TypeClass["toObservable"];
export declare const withCurrentTime: ObservableContainer.TypeClass["withCurrentTime"];
export declare const withLatestFrom: ObservableContainer.TypeClass["withLatestFrom"];
export declare const zip: ObservableContainer.TypeClass["zip"];
export declare const zipLatest: ObservableContainer.TypeClass["zipLatest"];
export declare const zipWith: ObservableContainer.TypeClass["zipWith"];
export declare const zipWithLatestFrom: ObservableContainer.TypeClass["zipWithLatestFrom"];
export {};
