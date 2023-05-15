import { Equality, Factory, Function1, Function2, Optional, Predicate, Reducer, SideEffect1, TypePredicate, Updater } from "./functions.js";
import { ContainerOf, DeferredObservableLike, DispatcherLike, DisposableLike, DisposableOrTeardown, EnumerableLike, EventSourceLike, ObservableContainer, ObservableLike, ObserverLike, PublisherLike, QueueableLike, QueueableLike_backpressureStrategy, RunnableLike, SchedulerLike, SharedObservableContainer, SharedObservableLike } from "./types.js";
export type EnumerableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends EnumerableLike<TIn> ? EnumerableLike<TOut> : TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export type RunnableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends RunnableLike<TIn> ? RunnableLike<TOut> : TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export type DeferredObservableUpperBoundObservableOperator<TIn, TOut> = <TObservableIn extends ObservableLike<TIn>>(observable: TObservableIn) => TObservableIn extends DeferredObservableLike<TIn> ? DeferredObservableLike<TOut> : TObservableIn extends SharedObservableLike<TIn> ? SharedObservableLike<TOut> : never;
export type Type = ObservableContainer;
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
type MaybeSharedObservableLike<T> = SharedObservableLike<T> | ObservableLike<T>;
type AnyObservableLike<T> = EnumerableLike<T> | RunnableLike<T> | DeferredObservableLike<T> | SharedObservableLike<T> | ObservableLike<T>;
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
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableLike<T>;
    createPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
    createRefCountedPublisher<T>(options?: {
        readonly replay?: number;
    }): PublisherLike<T>;
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
    encodeUtf8(): EnumerableUpperBoundObservableOperator<string, Uint8Array>;
    endWith<T>(value: T, ...values: readonly T[]): EnumerableUpperBoundObservableOperator<T, T>;
    enqueue<T>(queue: QueueableLike<T>): EnumerableUpperBoundObservableOperator<T, T>;
    firstAsync<T>(): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: QueueableLike[typeof QueueableLike_backpressureStrategy];
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): DeferredObservableUpperBoundObservableOperator<TA, TB>;
    /**
     * @category Operator
     */
    flatMapIterable<TA, TB>(selector: Function1<TA, Iterable<TB>>): EnumerableUpperBoundObservableOperator<TA, TB>;
    forEach<T>(effect: SideEffect1<T>): EnumerableUpperBoundObservableOperator<T, T>;
    forkConcat<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, EnumerableLike<TOut>>, snd: Function1<TObservableIn, EnumerableLike<TOut>>, ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]): Function1<TObservableIn, EnumerableLike<TOut>>;
    forkConcat<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, RunnableLike<TOut>>, snd: Function1<TObservableIn, RunnableLike<TOut>>, ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]): Function1<TObservableIn, RunnableLike<TOut>>;
    forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, DeferredObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, DeferredObservableLike<TOut>>;
    forkConcat<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, SharedObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, SharedObservableLike<TOut>>;
    forkMerge<TObservableIn extends EnumerableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, EnumerableLike<TOut>>, snd: Function1<TObservableIn, EnumerableLike<TOut>>, ...tail: readonly Function1<TObservableIn, EnumerableLike<TOut>>[]): Function1<TObservableIn, EnumerableLike<TOut>>;
    forkMerge<TObservableIn extends RunnableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, RunnableLike<TOut>>, snd: Function1<TObservableIn, RunnableLike<TOut>>, ...tail: readonly Function1<TObservableIn, RunnableLike<TOut>>[]): Function1<TObservableIn, RunnableLike<TOut>>;
    forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, DeferredObservableLike<TOut>>, snd: Function1<TObservableIn, DeferredObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, DeferredObservableLike<TOut>>[]): Function1<TObservableIn, DeferredObservableLike<TOut>>;
    forkMerge<TObservableIn extends SharedObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, SharedObservableLike<TOut>>, snd: Function1<TObservableIn, SharedObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, SharedObservableLike<TOut>>[]): Function1<TObservableIn, SharedObservableLike<TOut>>;
    forkMerge<TObservableIn extends DeferredObservableLike<TIn>, TIn, TOut>(fst: Function1<TObservableIn, MaybeSharedObservableLike<TOut>>, snd: Function1<TObservableIn, MaybeSharedObservableLike<TOut>>, ...tail: readonly Function1<TObservableIn, MaybeSharedObservableLike<TOut>>[]): Function1<TObservableIn, SharedObservableLike<TOut>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>): Function1<TObservableIn, EnumerableLike<[TA, TB]>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends EnumerableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, EnumerableLike<TA>>, b: Function1<TObservableIn, EnumerableLike<TB>>, c: Function1<TObservableIn, EnumerableLike<TC>>, d: Function1<TObservableIn, EnumerableLike<TD>>): Function1<TObservableIn, EnumerableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>): Function1<TObservableIn, RunnableLike<[TA, TB]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends RunnableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, RunnableLike<TA>>, b: Function1<TObservableIn, RunnableLike<TB>>, c: Function1<TObservableIn, RunnableLike<TC>>, d: Function1<TObservableIn, RunnableLike<TD>>): Function1<TObservableIn, RunnableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, DeferredObservableLike<TA>>, b: Function1<TObservableIn, DeferredObservableLike<TB>>, c: Function1<TObservableIn, DeferredObservableLike<TC>>, d: Function1<TObservableIn, DeferredObservableLike<TD>>): Function1<TObservableIn, DeferredObservableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends SharedObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, SharedObservableLike<TA>>, b: Function1<TObservableIn, SharedObservableLike<TB>>): Function1<TObservableIn, SharedObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends SharedObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, SharedObservableLike<TA>>, b: Function1<TObservableIn, SharedObservableLike<TB>>, c: Function1<TObservableIn, SharedObservableLike<TC>>): Function1<TObservableIn, SharedObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends SharedObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, SharedObservableLike<TA>>, b: Function1<TObservableIn, SharedObservableLike<TB>>, c: Function1<TObservableIn, SharedObservableLike<TC>>, d: Function1<TObservableIn, SharedObservableLike<TD>>): Function1<TObservableIn, SharedObservableLike<[TA, TB, TC, TD]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB>(a: Function1<TObservableIn, MaybeSharedObservableLike<TA>>, b: Function1<TObservableIn, MaybeSharedObservableLike<TB>>): Function1<TObservableIn, SharedObservableLike<[TA, TB]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC>(a: Function1<TObservableIn, MaybeSharedObservableLike<TA>>, b: Function1<TObservableIn, MaybeSharedObservableLike<TB>>, c: Function1<TObservableIn, MaybeSharedObservableLike<TC>>): Function1<TObservableIn, SharedObservableLike<[TA, TB, TC]>>;
    forkZip<TObservableIn extends DeferredObservableLike<TIn>, TIn, TA, TB, TC, TD>(a: Function1<TObservableIn, MaybeSharedObservableLike<TA>>, b: Function1<TObservableIn, MaybeSharedObservableLike<TB>>, c: Function1<TObservableIn, MaybeSharedObservableLike<TC>>, d: Function1<TObservableIn, MaybeSharedObservableLike<TD>>): Function1<TObservableIn, SharedObservableLike<[TA, TB, TC, TD]>>;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableLike<T>>;
    fromFactory<T>(): Function1<Factory<T>, EnumerableLike<T>>;
    fromFactory<T>(options: {
        readonly delay: number;
    }): Function1<Factory<T>, RunnableLike<T>>;
    fromOptional<T>(): Function1<Optional<T>, EnumerableLike<T>>;
    fromOptional<T>(options: {
        readonly delay: number;
    }): Function1<Optional<T>, RunnableLike<T>>;
    fromReadonlyArray<T>(): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly count: number;
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly start: number;
    }): Function1<ReadonlyArray<T>, EnumerableLike<T>>;
    fromReadonlyArray<T>(options: {
        readonly delay: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, RunnableLike<T>>;
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
    merge<T>(fst: MaybeSharedObservableLike<T>, snd: MaybeSharedObservableLike<T>, ...tail: readonly MaybeSharedObservableLike<T>[]): SharedObservableLike<T>;
    mergeWith<T>(snd: EnumerableLike<T>, ...tail: readonly EnumerableLike<T>[]): EnumerableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: RunnableLike<T>, ...tail: readonly RunnableLike<T>[]): RunnableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: DeferredObservableLike<T>, ...tail: readonly DeferredObservableLike<T>[]): DeferredObservableUpperBoundObservableOperator<T, T>;
    mergeWith<T>(snd: MaybeSharedObservableLike<T>, ...tail: readonly MaybeSharedObservableLike<T>[]): Function1<ObservableLike<T>, SharedObservableLike<T>>;
    mergeMany<T>(observables: readonly EnumerableLike<T>[]): EnumerableLike<T>;
    mergeMany<T>(observables: readonly RunnableLike<T>[]): RunnableLike<T>;
    mergeMany<T>(observables: readonly DeferredObservableLike<T>[]): DeferredObservableLike<T>;
    mergeMany<T>(observables: readonly MaybeSharedObservableLike<T>[]): SharedObservableLike<T>;
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
    throttle<T>(duration: number, options?: {
        readonly mode?: "first" | "last" | "interval";
    }): RunnableUpperBoundObservableOperator<T, T>;
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
    withLastestFrom<TA, TB, T>(other: EnumerableLike<TB>, selector: Function2<TA, TB, T>): EnumerableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: RunnableLike<TB>, selector: Function2<TA, TB, T>): RunnableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: DeferredObservableLike<TB>, selector: Function2<TA, TB, T>): DeferredObservableUpperBoundObservableOperator<TA, T>;
    withLastestFrom<TA, TB, T>(other: SharedObservableLike<TB>, selector: Function2<TA, TB, T>): Function1<AnyObservableLike<TA>, SharedObservableLike<T>>;
    zip<TA, TB>(a: EnumerableLike<TA>, b: EnumerableLike<TB>): EnumerableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: EnumerableLike<TA>, b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: RunnableLike<TA>, b: RunnableLike<TB>): RunnableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: RunnableLike<TA>, b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>): DeferredObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableLike<readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableLike<readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: DeferredObservableLike<TA>, b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zip<TA, TB>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>): SharedObservableLike<readonly [TA, TB]>;
    zip<TA, TB, TC>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC]>;
    zip<TA, TB, TC, TD>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD]>;
    zip<TA, TB, TC, TD, TE>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD, TE]>;
    zip<TA, TB, TC, TD, TE, TF>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD, TE, TF]>;
    zip<TA, TB, TC, TD, TE, TF, TG>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>, h: MaybeSharedObservableLike<TH>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zip<TA, TB, TC, TD, TE, TF, TG, TH, TI>(a: MaybeSharedObservableLike<TA>, b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>, h: MaybeSharedObservableLike<TH>, i: MaybeSharedObservableLike<TI>): ContainerOf<SharedObservableContainer, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: EnumerableLike<TB>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: EnumerableLike<TB>, c: EnumerableLike<TC>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: EnumerableLike<TB>, c: EnumerableLike<TC>, d: EnumerableLike<TD>, e: EnumerableLike<TE>, f: EnumerableLike<TF>, g: EnumerableLike<TG>, h: EnumerableLike<TH>, i: EnumerableLike<TI>): EnumerableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: RunnableLike<TB>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: RunnableLike<TB>, c: RunnableLike<TC>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: RunnableLike<TB>, c: RunnableLike<TC>, d: RunnableLike<TD>, e: RunnableLike<TE>, f: RunnableLike<TF>, g: RunnableLike<TG>, h: RunnableLike<TH>, i: RunnableLike<TI>): RunnableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: DeferredObservableLike<TB>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB]>;
    zipWith<TA, TB, TC>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC]>;
    zipWith<TA, TB, TC, TD>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD]>;
    zipWith<TA, TB, TC, TD, TE>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE]>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH]>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: DeferredObservableLike<TB>, c: DeferredObservableLike<TC>, d: DeferredObservableLike<TD>, e: DeferredObservableLike<TE>, f: DeferredObservableLike<TF>, g: DeferredObservableLike<TG>, h: DeferredObservableLike<TH>, i: DeferredObservableLike<TI>): DeferredObservableUpperBoundObservableOperator<TA, readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>;
    zipWith<TA, TB>(b: SharedObservableLike<TB>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB]>>;
    zipWith<TA, TB, TC>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC]>>;
    zipWith<TA, TB, TC, TD>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD]>>;
    zipWith<TA, TB, TC, TD, TE>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD, TE]>>;
    zipWith<TA, TB, TC, TD, TE, TF>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD, TE, TF]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>, h: MaybeSharedObservableLike<TH>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH]>>;
    zipWith<TA, TB, TC, TD, TE, TF, TG, TH, TI>(b: MaybeSharedObservableLike<TB>, c: MaybeSharedObservableLike<TC>, d: MaybeSharedObservableLike<TD>, e: MaybeSharedObservableLike<TE>, f: MaybeSharedObservableLike<TF>, g: MaybeSharedObservableLike<TG>, h: MaybeSharedObservableLike<TH>, i: MaybeSharedObservableLike<TI>): Function1<AnyObservableLike<TA>, SharedObservableLike<readonly [TA, TB, TC, TD, TE, TF, TG, TH, TI]>>;
}
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const concat: Signature["concat"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const create: Signature["create"];
export declare const createPublisher: Signature["createPublisher"];
export declare const createRefCountedPublisher: Signature["createRefCountedPublisher"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const endWith: Signature["endWith"];
export declare const enqueue: Signature["enqueue"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const flatMapIterable: Signature["flatMapIterable"];
export declare const forEach: Signature["forEach"];
export declare const forkConcat: Signature["forkConcat"];
export declare const forkMerge: Signature["forkMerge"];
export declare const forkZip: Signature["forkZip"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromFactory: Signature["fromFactory"];
export declare const fromOptional: Signature["fromOptional"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const generate: Signature["generate"];
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
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const throws: Signature["throws"];
export declare const toEventSource: Signature["toEventSource"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLastestFrom"];
export declare const zip: Signature["zip"];
export declare const zipWith: Signature["zipWith"];
export {};
