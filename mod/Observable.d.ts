import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, Updater } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, DispatcherLike, DisposableLike, EnumerableLike, EventSourceLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike, SharedObservableLike } from "./types.js";
export type ObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: ObservableLike<TIn>) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export interface Type extends Container {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
export interface Signature {
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): ObservableOperator<T, T>;
    currentTime(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): ObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<SharedObservableLike<T> & DisposableLike>): DeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ObservableOperator<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): ObservableOperator<T, T>;
    encodeUtf8: ObservableOperator<string, Uint8Array>;
    enqueue<T>(queue: QueueableLike<T>): ObservableOperator<T, T>;
    forEach<T>(effect: SideEffect1<T>): ObservableOperator<T, T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    ignoreElements<T>(): ObservableOperator<unknown, T>;
    isDeferredObservable<T>(obs: ObservableLike<T>): obs is DeferredObservableLike<T>;
    isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;
    isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;
    isSharedObservable<T>(obs: ObservableLike<T>): obs is SharedObservableLike<T>;
    keep<T>(predicate: Predicate<T>): ObservableOperator<T, T>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): ObservableOperator<TA, TB>;
    mapTo<TA, TB>(value: TB): ObservableOperator<TA, TB>;
    pairwise<T>(): ObservableOperator<T, readonly [T, T]>;
    pick<T, TKey extends keyof T>(key: TKey): ObservableOperator<T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): ObservableOperator<T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): ObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): ObservableOperator<T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): ObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): ObservableOperator<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): ObservableOperator<T, T>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): ObservableOperator<TA, TB>;
}
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const forEach: Signature["forEach"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferredObservable: Signature["isDeferredObservable"];
export declare const isEnumerable: Signature["isEnumerable"];
export declare const isRunnable: Signature["isRunnable"];
export declare const isSharedObservable: Signature["isSharedObservable"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const subscribe: Signature["subscribe"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toEventSource: Signature["toEventSource"];
export declare const withCurrentTime: Signature["withCurrentTime"];
