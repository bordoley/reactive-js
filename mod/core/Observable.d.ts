import { AsynchronousContainers, Containers, DisposableLike, DisposableOrTeardown, EnumerableContainers, ObservableContainer, ObservableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, ReactiveContainers, RunnableContainers, SchedulerLike, StatefulContainers } from "../core.js";
import { Factory, Function1, SideEffect1 } from "../functions.js";
export declare const animate: ReactiveContainers.TypeClass<ObservableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainers.TypeClass<ObservableContainer>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => Containers.Operator<ObservableContainer, T, readonly T[]>;
export declare const catchError: StatefulContainers.TypeClass<ObservableContainer>["catchError"];
export declare const combineLatest: ReactiveContainers.TypeClass<ObservableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../core.js").DeferredObservableLike<T>;
export declare const concat: ReactiveContainers.TypeClass<ObservableContainer>["concat"];
export declare const concatAll: ReactiveContainers.TypeClass<ObservableContainer>["concatAll"];
export declare const concatMap: ReactiveContainers.TypeClass<ObservableContainer>["concatMap"];
export declare const concatWith: ReactiveContainers.TypeClass<ObservableContainer>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: ReactiveContainers.TypeClass<ObservableContainer>["currentTime"];
export declare const decodeWithCharset: StatefulContainers.TypeClass<ObservableContainer>["decodeWithCharset"];
export declare const defer: StatefulContainers.TypeClass<ObservableContainer>["defer"];
export declare const dispatchTo: ReactiveContainers.TypeClass<ObservableContainer>["dispatchTo"];
export declare const distinctUntilChanged: ReactiveContainers.TypeClass<ObservableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainers.TypeClass<ObservableContainer>["empty"];
export declare const encodeUtf8: StatefulContainers.TypeClass<ObservableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainers.TypeClass<ObservableContainer>["enqueue"];
export declare const endWith: ReactiveContainers.TypeClass<ObservableContainer>["endWith"];
export declare const exhaust: ReactiveContainers.TypeClass<ObservableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainers.TypeClass<ObservableContainer>["exhaustMap"];
export declare const firstAsync: ReactiveContainers.TypeClass<ObservableContainer>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => Containers.Operator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: ReactiveContainers.TypeClass<ObservableContainer>["flatMapIterable"];
export declare const forEach: ReactiveContainers.TypeClass<ObservableContainer>["forEach"];
export declare const forkCombineLatest: ReactiveContainers.TypeClass<ObservableContainer>["forkCombineLatest"];
export declare const forkConcat: ReactiveContainers.TypeClass<ObservableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainers.TypeClass<ObservableContainer>["forkMerge"];
export declare const forkZip: ReactiveContainers.TypeClass<ObservableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainers.TypeClass<ObservableContainer>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => import("../core.js").DeferredObservableLike<T>;
export declare const fromAsyncIterable: AsynchronousContainers.TypeClass<ObservableContainer>["fromAsyncIterable"];
export declare const fromEnumeratorFactory: ReactiveContainers.TypeClass<ObservableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainers.TypeClass<ObservableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainers.TypeClass<ObservableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainers.TypeClass<ObservableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainers.TypeClass<ObservableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainers.TypeClass<ObservableContainer>["generate"];
export declare const identity: ReactiveContainers.TypeClass<ObservableContainer>["identity"];
export declare const ignoreElements: ReactiveContainers.TypeClass<ObservableContainer>["ignoreElements"];
export declare const keep: ReactiveContainers.TypeClass<ObservableContainer>["keep"];
export declare const keepType: ReactiveContainers.TypeClass<ObservableContainer>["keepType"];
export declare const lastAsync: ReactiveContainers.TypeClass<ObservableContainer>["lastAsync"];
export declare const map: ReactiveContainers.TypeClass<ObservableContainer>["map"];
export declare const mapTo: ReactiveContainers.TypeClass<ObservableContainer>["mapTo"];
export declare const merge: ReactiveContainers.TypeClass<ObservableContainer>["merge"];
export declare const mergeAll: ReactiveContainers.TypeClass<ObservableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainers.TypeClass<ObservableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainers.TypeClass<ObservableContainer>["mergeWith"];
export declare const multicast: ReactiveContainers.TypeClass<ObservableContainer>["multicast"];
export declare const never: ReactiveContainers.TypeClass<ObservableContainer>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Containers.Operator<ObservableContainer, T, T>;
export declare const pairwise: ReactiveContainers.TypeClass<ObservableContainer>["pairwise"];
export declare const pick: ReactiveContainers.TypeClass<ObservableContainer>["pick"];
export declare const repeat: ReactiveContainers.TypeClass<ObservableContainer>["repeat"];
export declare const retry: StatefulContainers.TypeClass<ObservableContainer>["retry"];
export declare const scan: ReactiveContainers.TypeClass<ObservableContainer>["scan"];
export declare const scanLast: ReactiveContainers.TypeClass<ObservableContainer>["scanLast"];
export declare const scanMany: ReactiveContainers.TypeClass<ObservableContainer>["scanMany"];
export declare const share: ReactiveContainers.TypeClass<ObservableContainer>["share"];
export declare const skipFirst: ReactiveContainers.TypeClass<ObservableContainer>["skipFirst"];
export declare const startWith: ReactiveContainers.TypeClass<ObservableContainer>["startWith"];
export declare const switchAll: ReactiveContainers.TypeClass<ObservableContainer>["switchAll"];
export declare const switchMap: ReactiveContainers.TypeClass<ObservableContainer>["switchMap"];
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
export declare const takeFirst: ReactiveContainers.TypeClass<ObservableContainer>["takeFirst"];
export declare const takeLast: ReactiveContainers.TypeClass<ObservableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainers.TypeClass<ObservableContainer>["takeUntil"];
export declare const takeWhile: ReactiveContainers.TypeClass<ObservableContainer>["takeWhile"];
export declare const throttle: ReactiveContainers.TypeClass<ObservableContainer>["throttle"];
export declare const throwIfEmpty: StatefulContainers.TypeClass<ObservableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainers.TypeClass<ObservableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainers.TypeClass<ObservableContainer>["timeout"];
export declare const toEnumerable: EnumerableContainers.TypeClass<ObservableContainer>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../core.js").EventSourceLike<T>>;
export declare const toObservable: ReactiveContainers.TypeClass<ObservableContainer>["toObservable"];
export declare const toRunnable: RunnableContainers.TypeClass<ObservableContainer>["toRunnable"];
export declare const withCurrentTime: ReactiveContainers.TypeClass<ObservableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainers.TypeClass<ObservableContainer>["withLatestFrom"];
export declare const zip: ReactiveContainers.TypeClass<ObservableContainer>["zip"];
export declare const zipLatest: ReactiveContainers.TypeClass<ObservableContainer>["zipLatest"];
export declare const zipWith: ReactiveContainers.TypeClass<ObservableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainers.TypeClass<ObservableContainer>["zipWithLatestFrom"];
export {};
