import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, TypePredicate, Updater } from "./functions.js";
import { Container, Container_T, Container_type, DeferredObservableLike, DispatcherLike, DisposableLike, DisposableOrTeardown, EnumerableLike, EventSourceLike, ObservableLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike, SharedObservableLike } from "./types.js";
export type EnumerableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export type RunnableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export type DeferredObservableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export interface Type extends Container {
    readonly [Container_type]?: ObservableLike<this[typeof Container_T]>;
}
export declare namespace Animation {
    /**
     * @noInheritDoc
     */
    interface Delay {
        readonly type: "delay";
        readonly duration: number;
    }
    /**
     * @noInheritDoc
     */
    interface KeyFrame {
        readonly type: "keyframe";
        readonly from: number;
        readonly to: number;
        readonly duration: number;
        readonly easing?: Function1<number, number>;
    }
    /**
     * @noInheritDoc
     */
    interface Frame {
        readonly type: "frame";
        readonly value: number;
    }
    /**
     * @noInheritDoc
     */
    interface Loop<T> {
        readonly type: "loop";
        readonly animation: Animation<T> | readonly Animation<T>[];
        readonly count?: number;
    }
    /**
     * @noInheritDoc
     */
    interface Spring {
        readonly type: "spring";
        readonly from: number;
        readonly to: number;
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }
}
export type Animation<T = number> = Animation.Delay | Animation.Loop<T> | (T extends number ? (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector?: never;
} : (Animation.KeyFrame | Animation.Spring | Animation.Frame) & {
    readonly selector: Function1<number, T>;
});
export interface Signature {
    animate<T = number>(configs: Animation<T> | readonly Animation<T>[]): RunnableLike<T>;
    backpressureStrategy<T>(capacity: number, backpressureStrategy: QueueableLike[typeof QueueableLike_backpressureStrategy]): EnumerableUpperBoundObservableOperator<T, T>;
    concat<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concat<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    concat<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    concat<T>(fst: SharedObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): SharedObservableLike<T>;
    concatMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    concatMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    concatMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    concatMany<T>(observables: readonly [
        SharedObservableLike<T>,
        ...DeferredObservableLike<T>[]
    ]): SharedObservableLike<T>;
    concatWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableUpperBoundObservableOperator<T, T>;
    concatWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableUpperBoundObservableOperator<T, T>;
    concatWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableUpperBoundObservableOperator<T, T>;
    currentTime(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<number>;
    decodeWithCharset(options?: {
        readonly charset?: string;
    }): EnumerableUpperBoundObservableOperator<ArrayBuffer, string>;
    defer<T>(f: Factory<SharedObservableLike<T> & DisposableLike>): DeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): EnumerableUpperBoundObservableOperator<T, T>;
    distinctUntilChanged<T>(options?: {
        readonly equality?: Equality<T>;
    }): EnumerableUpperBoundObservableOperator<T, T>;
    empty<T>(): EnumerableLike<T>;
    empty<T>(options: {
        readonly delay: number;
    }): RunnableLike<T>;
    encodeUtf8: EnumerableUpperBoundObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): EnumerableUpperBoundObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): EnumerableUpperBoundObservableOperator<T, T>;
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    forEach<T>(effect: SideEffect1<T>): EnumerableUpperBoundObservableOperator<T, T>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromFactory<T>(options: {
        readonly delay: number;
    }): Function1<Factory<T>, RunnableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>): EnumerableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): RunnableLike<T>;
    ignoreElements<T>(): EnumerableUpperBoundObservableOperator<unknown, T>;
    isDeferredObservable<T>(obs: ObservableLike<T>): obs is DeferredObservableLike<T>;
    isEnumerable<T>(obs: ObservableLike<T>): obs is EnumerableLike<T>;
    isRunnable<T>(obs: ObservableLike<T>): obs is RunnableLike<T>;
    isSharedObservable<T>(obs: ObservableLike<T>): obs is SharedObservableLike<T>;
    keep<T>(predicate: Predicate<T>): EnumerableUpperBoundObservableOperator<T, T>;
    keepType<TA, TB extends TA>(predicate: TypePredicate<TA, TB>): EnumerableUpperBoundObservableOperator<TA, TB>;
    lastAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    map<TA, TB>(selector: Function1<TA, TB>): EnumerableUpperBoundObservableOperator<TA, TB>;
    merge<T>(fst: EnumerableLike<T>, snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    merge<T>(fst: RunnableLike<T>, snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableLike<T>;
    merge<T>(fst: DeferredObservableLike<T>, snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    merge<T>(fst: SharedObservableLike<T> | ObservableLike<T>, snd: SharedObservableLike<T> | ObservableLike<T>, ...tail: readonly (SharedObservableLike<T> | ObservableLike<T>)[]): SharedObservableLike<T>;
    mergeWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: SharedObservableLike<T> | ObservableLike<T>, ...tail: readonly (SharedObservableLike<T> | ObservableLike<T>)[]): Function1<ObservableLike<T>, SharedObservableLike<T>>;
    mergeMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly (SharedObservableLike<T> | ObservableLike<T>)[]): SharedObservableLike<T>;
    mapTo<TA, TB>(value: TB): EnumerableUpperBoundObservableOperator<TA, TB>;
    never<T>(): SharedObservableLike<T>;
    onSubscribe<T>(f: Factory<DisposableOrTeardown | void>): EnumerableUpperBoundObservableOperator<T, T>;
    pairwise<T>(): EnumerableUpperBoundObservableOperator<T, readonly [T, T]>;
    pick<T, TKey extends keyof T>(key: TKey): EnumerableUpperBoundObservableOperator<T, T[TKey]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA]>(keyA: TKeyA, keyB: TKeyB): EnumerableUpperBoundObservableOperator<T, T[TKeyA][TKeyB]>;
    pick<T, TKeyA extends keyof T, TKeyB extends keyof T[TKeyA], TKeyC extends keyof T[TKeyA][TKeyB]>(keyA: TKeyA, keyB: TKeyB, keyC: TKeyC): EnumerableUpperBoundObservableOperator<T, T[TKeyA][TKeyB][TKeyC]>;
    scan<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>): EnumerableUpperBoundObservableOperator<T, TAcc>;
    skipFirst<T>(options?: {
        readonly count?: number;
    }): EnumerableUpperBoundObservableOperator<T, T>;
    startWith<T>(value: T, ...values: readonly T[]): EnumerableUpperBoundObservableOperator<T, T>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<DeferredObservableLike<T>, DeferredObservableLike<T>>;
    subscribeOn<T>(schedulerOrFactory: SchedulerLike | Factory<SchedulerLike & DisposableLike>, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<SharedObservableLike<T>, SharedObservableLike<T>>;
    takeFirst<T>(options?: {
        readonly count?: number;
    }): EnumerableUpperBoundObservableOperator<T, T>;
    takeLast<T>(options?: {
        readonly count?: number;
    }): EnumerableUpperBoundObservableOperator<T, T>;
    takeWhile<T>(predicate: Predicate<T>, options?: {
        readonly inclusive?: boolean;
    }): EnumerableUpperBoundObservableOperator<T, T>;
    throwIfEmpty<T>(factory: Factory<unknown>, options?: undefined): EnumerableUpperBoundObservableOperator<T, T>;
    throws<T>(): EnumerableLike<T>;
    throws<T>(options: {
        readonly raise: Factory<unknown>;
    }): EnumerableLike<T>;
    throws<T>(options: {
        readonly delay: number;
        readonly raise?: Factory<unknown>;
    }): RunnableLike<T>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): EnumerableUpperBoundObservableOperator<TA, TB>;
    withLastestFrom<TA, TB, T>(other: EnumerableLike<T>, selector: Function2<TA, TB, T>): EnumerableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: RunnableLike<T>, selector: Function2<TA, TB, T>): RunnableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: DeferredObservableLike<T>, selector: Function2<TA, TB, T>): DeferredObservableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: SharedObservableLike<T>, selector: Function2<TA, TB, T>): Function1<ObservableLike<T>, SharedObservableLike<T>>;
}
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const concat: Signature["concat"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const endWith: Signature["endWith"];
export declare const enqueue: Signature["enqueue"];
export declare const firstAsync: Signature["firstAsync"];
export declare const forEach: Signature["forEach"];
export declare const fromFactory: Signature["fromFactory"];
export declare const ignoreElements: Signature["ignoreElements"];
export declare const isDeferredObservable: Signature["isDeferredObservable"];
export declare const isEnumerable: Signature["isEnumerable"];
export declare const isRunnable: Signature["isRunnable"];
export declare const isSharedObservable: Signature["isSharedObservable"];
export declare const keep: Signature["keep"];
export declare const keepType: Signature["keepType"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mapTo: Signature["mapTo"];
export declare const merge: Signature["merge"];
export declare const mergeMany: Signature["mergeMany"];
export declare const mergeWith: Signature["mergeWith"];
export declare const never: Signature["never"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const pick: Signature["pick"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const startWith: Signature["startWith"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLastestFrom"];
