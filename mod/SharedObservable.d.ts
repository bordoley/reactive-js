import { Containers, SharedObservableContainer } from "./containers.js";
import { Factory, Function1, SideEffect1 } from "./functions.js";
import { DisposableLike, DisposableOrTeardown, ObservableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, SchedulerLike, SharedObservableLike } from "./types.js";
export declare const backpressureStrategy: SharedObservableContainer.TypeClass["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, SharedObservableContainer>;
    readonly count?: number;
}) => Containers.Operator<SharedObservableContainer, T, readonly T[]>;
export declare const combineLatest: SharedObservableContainer.TypeClass["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => ObservableLike<T>;
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => SharedObservableLike<T>;
export declare const decodeWithCharset: SharedObservableContainer.TypeClass["decodeWithCharset"];
export declare const defer: SharedObservableContainer.TypeClass["defer"];
export declare const dispatchTo: SharedObservableContainer.TypeClass["dispatchTo"];
export declare const distinctUntilChanged: SharedObservableContainer.TypeClass["distinctUntilChanged"];
export declare const enqueue: SharedObservableContainer.TypeClass["enqueue"];
export declare const firstAsync: SharedObservableContainer.TypeClass["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("./functions.js").Function2<TA, AbortSignal, Promise<TB>>) => Containers.Operator<import("./containers.js").ObservableContainer, TA, TB>;
export declare const forEach: SharedObservableContainer.TypeClass["forEach"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("./types.js").DeferredObservableLike<T>;
export declare const identity: SharedObservableContainer.TypeClass["identity"];
export declare const ignoreElements: SharedObservableContainer.TypeClass["ignoreElements"];
export declare const keep: SharedObservableContainer.TypeClass["keep"];
export declare const keepType: SharedObservableContainer.TypeClass["keepType"];
export declare const lastAsync: SharedObservableContainer.TypeClass["lastAsync"];
export declare const map: SharedObservableContainer.TypeClass["map"];
export declare const mapTo: SharedObservableContainer.TypeClass["mapTo"];
export declare const mergeWith: SharedObservableContainer.TypeClass["mergeWith"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Containers.Operator<SharedObservableContainer, T, T>;
export declare const pairwise: SharedObservableContainer.TypeClass["pairwise"];
export declare const pick: SharedObservableContainer.TypeClass["pick"];
export declare const scan: SharedObservableContainer.TypeClass["scan"];
export declare const skipFirst: SharedObservableContainer.TypeClass["skipFirst"];
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
    } | undefined): Function1<import("./types.js").DeferredObservableLike<T>, import("./types.js").DeferredObservableLike<T>>;
    <T_1>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    } | undefined): Function1<SharedObservableLike<T_1>, SharedObservableLike<T_1>>;
    <T_2>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
        readonly capacity?: number | undefined;
    } | undefined): Function1<ObservableLike<T_2>, ObservableLike<T_2>>;
};
export declare const takeFirst: SharedObservableContainer.TypeClass["takeFirst"];
export declare const takeLast: SharedObservableContainer.TypeClass["takeLast"];
export declare const takeWhile: SharedObservableContainer.TypeClass["takeWhile"];
export declare const throwIfEmpty: SharedObservableContainer.TypeClass["throwIfEmpty"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("./types.js").EventSourceLike<T>>;
export declare const toObservable: SharedObservableContainer.TypeClass["toObservable"];
export declare const withCurrentTime: SharedObservableContainer.TypeClass["withCurrentTime"];
export declare const withLatestFrom: SharedObservableContainer.TypeClass["withLatestFrom"];
