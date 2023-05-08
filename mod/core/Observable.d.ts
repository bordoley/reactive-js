import { Container, DisposableLike, DisposableOrTeardown, ObservableContainer, ObservableLike, ObserverLike, QueueableLike, QueueableLike_backpressureStrategy, ReactiveContainer, SchedulerLike } from "../core.js";
import { Factory, Function1, SideEffect1 } from "../functions.js";
export declare const animate: ReactiveContainer.TypeClass<ObservableContainer>["animate"];
export declare const backpressureStrategy: ReactiveContainer.TypeClass<ObservableContainer>["backpressureStrategy"];
/**
 * @category Operator
 */
export declare const buffer: <T>(options?: {
    readonly duration?: number | Function1<T, ObservableContainer>;
    readonly count?: number;
}) => Container.Operator<ObservableContainer, T, readonly T[]>;
export declare const catchError: ReactiveContainer.TypeClass<ObservableContainer>["catchError"];
export declare const combineLatest: ReactiveContainer.TypeClass<ObservableContainer>["combineLatest"];
/**
 * @category Constructor
 */
export declare const compute: <T>(computation: Factory<T>, options?: {
    mode?: "batched" | "combine-latest" | undefined;
}) => import("../core.js").DeferredObservableLike<T>;
export declare const concat: Container.TypeClass<ObservableContainer>["concat"];
export declare const concatAll: Container.TypeClass<ObservableContainer>["concatAll"];
export declare const concatMap: Container.TypeClass<ObservableContainer>["concatMap"];
export declare const concatWith: Container.TypeClass<ObservableContainer>["concatWith"];
/**
 * @category Constructor
 */
export declare const create: <T>(f: SideEffect1<ObserverLike<T>>) => ObservableLike<T>;
export declare const currentTime: ReactiveContainer.TypeClass<ObservableContainer>["currentTime"];
export declare const decodeWithCharset: ReactiveContainer.TypeClass<ObservableContainer>["decodeWithCharset"];
export declare const defer: ReactiveContainer.TypeClass<ObservableContainer>["defer"];
export declare const dispatchTo: ReactiveContainer.TypeClass<ObservableContainer>["dispatchTo"];
export declare const distinctUntilChanged: Container.TypeClass<ObservableContainer>["distinctUntilChanged"];
export declare const empty: ReactiveContainer.TypeClass<ObservableContainer>["empty"];
export declare const encodeUtf8: ReactiveContainer.TypeClass<ObservableContainer>["encodeUtf8"];
export declare const enqueue: ReactiveContainer.TypeClass<ObservableContainer>["enqueue"];
export declare const endWith: Container.TypeClass<ObservableContainer>["endWith"];
export declare const exhaust: ReactiveContainer.TypeClass<ObservableContainer>["exhaust"];
export declare const exhaustMap: ReactiveContainer.TypeClass<ObservableContainer>["exhaustMap"];
export declare const firstAsync: ReactiveContainer.TypeClass<ObservableContainer>["firstAsync"];
/**
 * @category Operator
 */
export declare const flatMapAsync: <TA, TB>(f: import("../functions.js").Function2<TA, AbortSignal, Promise<TB>>) => Container.Operator<ObservableContainer, TA, TB>;
export declare const flatMapIterable: Container.TypeClass<ObservableContainer>["flatMapIterable"];
export declare const forEach: Container.TypeClass<ObservableContainer>["forEach"];
export declare const forkCombineLatest: ReactiveContainer.TypeClass<ObservableContainer>["forkCombineLatest"];
export declare const forkConcat: Container.TypeClass<ObservableContainer>["forkConcat"];
export declare const forkMerge: ReactiveContainer.TypeClass<ObservableContainer>["forkMerge"];
export declare const forkZip: Container.TypeClass<ObservableContainer>["forkZip"];
export declare const forkZipLatest: ReactiveContainer.TypeClass<ObservableContainer>["forkZipLatest"];
/**
 * @category Constructor
 */
export declare const fromAsyncFactory: <T>(f: (abortSignal: AbortSignal) => Promise<T>) => ObservableLike<T>;
export declare const fromAsyncIterable: Container.TypeClass<ObservableContainer>["fromAsyncIterable"];
export declare const fromEnumeratorFactory: ReactiveContainer.TypeClass<ObservableContainer>["fromEnumeratorFactory"];
export declare const fromFactory: ReactiveContainer.TypeClass<ObservableContainer>["fromFactory"];
export declare const fromIterable: ReactiveContainer.TypeClass<ObservableContainer>["fromIterable"];
export declare const fromOptional: ReactiveContainer.TypeClass<ObservableContainer>["fromOptional"];
export declare const fromReadonlyArray: ReactiveContainer.TypeClass<ObservableContainer>["fromReadonlyArray"];
export declare const generate: ReactiveContainer.TypeClass<ObservableContainer>["generate"];
export declare const identity: Container.TypeClass<ObservableContainer>["identity"];
export declare const ignoreElements: Container.TypeClass<ObservableContainer>["ignoreElements"];
export declare const keep: Container.TypeClass<ObservableContainer>["keep"];
export declare const keepType: Container.TypeClass<ObservableContainer>["keepType"];
export declare const lastAsync: ReactiveContainer.TypeClass<ObservableContainer>["lastAsync"];
export declare const map: Container.TypeClass<ObservableContainer>["map"];
export declare const mapTo: Container.TypeClass<ObservableContainer>["mapTo"];
export declare const merge: ReactiveContainer.TypeClass<ObservableContainer>["merge"];
export declare const mergeAll: ReactiveContainer.TypeClass<ObservableContainer>["mergeAll"];
export declare const mergeMap: ReactiveContainer.TypeClass<ObservableContainer>["mergeMap"];
export declare const mergeWith: ReactiveContainer.TypeClass<ObservableContainer>["mergeWith"];
export declare const multicast: ReactiveContainer.TypeClass<ObservableContainer>["multicast"];
export declare const never: ReactiveContainer.TypeClass<ObservableContainer>["never"];
/**
 * @category Operator
 */
export declare const onSubscribe: <T>(f: Factory<DisposableOrTeardown | void>) => Container.Operator<ObservableContainer, T, T>;
export declare const pairwise: Container.TypeClass<ObservableContainer>["pairwise"];
export declare const pick: Container.TypeClass<ObservableContainer>["pick"];
export declare const repeat: Container.TypeClass<ObservableContainer>["repeat"];
export declare const retry: ReactiveContainer.TypeClass<ObservableContainer>["retry"];
export declare const scan: Container.TypeClass<ObservableContainer>["scan"];
export declare const scanLast: ReactiveContainer.TypeClass<ObservableContainer>["scanLast"];
export declare const scanMany: ReactiveContainer.TypeClass<ObservableContainer>["scanMany"];
export declare const share: ReactiveContainer.TypeClass<ObservableContainer>["share"];
export declare const skipFirst: Container.TypeClass<ObservableContainer>["skipFirst"];
export declare const startWith: Container.TypeClass<ObservableContainer>["startWith"];
export declare const switchAll: ReactiveContainer.TypeClass<ObservableContainer>["switchAll"];
export declare const switchMap: ReactiveContainer.TypeClass<ObservableContainer>["switchMap"];
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
export declare const takeFirst: Container.TypeClass<ObservableContainer>["takeFirst"];
export declare const takeLast: Container.TypeClass<ObservableContainer>["takeLast"];
export declare const takeUntil: ReactiveContainer.TypeClass<ObservableContainer>["takeUntil"];
export declare const takeWhile: Container.TypeClass<ObservableContainer>["takeWhile"];
export declare const throttle: ReactiveContainer.TypeClass<ObservableContainer>["throttle"];
export declare const throwIfEmpty: ReactiveContainer.TypeClass<ObservableContainer>["throwIfEmpty"];
interface Throws extends ReactiveContainer.TypeClass<ObservableContainer> {
    /**
     * @category Constructor
     */
    throws<T>(options?: {
        delay?: number;
        raise?: Factory<unknown>;
    }): ObservableLike<T>;
}
export declare const throws: Throws["throws"];
export declare const timeout: ReactiveContainer.TypeClass<ObservableContainer>["timeout"];
export declare const toEnumerable: Container.TypeClass<ObservableContainer>["toEnumerable"];
/**
 * @category Transform
 */
export declare const toEventSource: <T>(scheduler: SchedulerLike, options?: {
    readonly backpressureStrategy?: "overflow" | "drop-latest" | "drop-oldest" | "throw" | undefined;
    readonly capacity?: number | undefined;
}) => Function1<ObservableLike<T>, import("../core.js").EventSourceLike<T>>;
export declare const toObservable: Container.TypeClass<ObservableContainer>["toObservable"];
export declare const toRunnable: Container.TypeClass<ObservableContainer>["toRunnable"];
export declare const withCurrentTime: ReactiveContainer.TypeClass<ObservableContainer>["withCurrentTime"];
export declare const withLatestFrom: ReactiveContainer.TypeClass<ObservableContainer>["withLatestFrom"];
export declare const zip: Container.TypeClass<ObservableContainer>["zip"];
export declare const zipLatest: ReactiveContainer.TypeClass<ObservableContainer>["zipLatest"];
export declare const zipWith: Container.TypeClass<ObservableContainer>["zipWith"];
export declare const zipWithLatestFrom: ReactiveContainer.TypeClass<ObservableContainer>["zipWithLatestFrom"];
export {};
