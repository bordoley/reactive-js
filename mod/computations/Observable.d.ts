import { ComputationModule, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentReactiveComputationModule, DeferredComputationModule, DeferredComputationWithSideEffectsLike, DeferredComputationWithSideEffectsOf, DeferredObservableLike, DeferredObservableWithSideEffectsLike, DeferredReactiveComputationModule, EventSourceLike, FromIterableSynchronousOperator, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, MulticastComputationLike, MulticastObservableLike, ObservableLike, PauseableEventSourceLike, PauseableObservableLike, PureComputationOf, PureDeferredComputationLike, PureDeferredComputationOf, PureDeferredObservableLike, PureSynchronousComputationOf, PureSynchronousObservableLike, RunnableLike, StatefulAsynchronousComputationOperator, StatefulSynchronousComputationOperator, StatelessAsynchronousComputationOperator, StatelessComputationOperator, StoreLike, SynchronousComputationModule, SynchronousComputationOf, SynchronousComputationWithSideEffectsOf, SynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../computations.js";
import { AsyncFunction1, AsyncFunction2, Factory, Function1, Function2, Optional, Reducer, SideEffect, SideEffect1, Tuple2, Tuple3, Tuple4, Updater } from "../functions.js";
import { BackpressureStrategy, DispatcherLike, DisposableLike, ObserverLike, QueueableLike, SchedulerLike } from "../utils.js";
export interface ObservableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureDeferredObservableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: DeferredObservableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousObservableLike<this[typeof Computation_T]>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]: MulticastObservableLike<this[typeof Computation_T]>;
}
export type Computation = ObservableComputation;
export declare const BatchedComputeMode = "batched";
export declare const CombineLatestComputeMode = "combine-latest";
export type ComputeMode = typeof BatchedComputeMode | typeof CombineLatestComputeMode;
export declare const ThrottleFirstMode = "first";
export declare const ThrottleLastMode = "last";
export declare const ThrottleIntervalMode = "interval";
export type ThrottleMode = typeof ThrottleFirstMode | typeof ThrottleLastMode | typeof ThrottleIntervalMode;
interface ForkMerge {
    <TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, PureDeferredComputationLike, TOut>>, snd: Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, PureDeferredComputationLike, TOut>>, ...tail: Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, PureDeferredComputationLike, TOut>>[]): HigherOrderComputationOperator<ObservableComputation, PureDeferredComputationLike, TIn, TOut>;
    <TIn, TOut, TInnerType extends DeferredComputationWithSideEffectsLike>(fst: Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>>, snd: Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>>, ...tail: readonly [
        ...Function1<MulticastObservableLike<TIn>, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, TOut>>[],
        {
            innerType?: TInnerType;
        }
    ]): HigherOrderComputationOperator<ObservableComputation, TInnerType, TIn, TOut>;
    <TIn, TOut>(fst: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, snd: Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>, ...tail: readonly [
        ...Function1<MulticastObservableLike<TIn>, MulticastObservableLike<TOut>>[],
        {
            innerType: MulticastComputationLike;
        }
    ]): StatelessComputationOperator<ObservableComputation, TIn, TOut>;
}
interface CombineConstructor {
    <TA, TB>(a: PureSynchronousComputationOf<ObservableComputation, TA>, b: PureSynchronousComputationOf<ObservableComputation, TB>): PureSynchronousComputationOf<ObservableComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureSynchronousComputationOf<ObservableComputation, TA>, b: PureSynchronousComputationOf<ObservableComputation, TB>, c: PureSynchronousComputationOf<ObservableComputation, TC>): PureSynchronousComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureSynchronousComputationOf<ObservableComputation, TA>, b: PureSynchronousComputationOf<ObservableComputation, TB>, c: PureSynchronousComputationOf<ObservableComputation, TC>, d: PureSynchronousComputationOf<ObservableComputation, TD>): PureSynchronousComputationOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: SynchronousComputationOf<ObservableComputation, TA>, b: SynchronousComputationOf<ObservableComputation, TB>): SynchronousComputationWithSideEffectsOf<ObservableComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: SynchronousComputationOf<ObservableComputation, TA>, b: SynchronousComputationOf<ObservableComputation, TB>, c: SynchronousComputationOf<ObservableComputation, TC>): SynchronousComputationWithSideEffectsOf<ObservableComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: SynchronousComputationOf<ObservableComputation, TA>, b: SynchronousComputationOf<ObservableComputation, TB>, c: SynchronousComputationOf<ObservableComputation, TC>, d: SynchronousComputationOf<ObservableComputation, TD>): SynchronousComputationWithSideEffectsOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureDeferredComputationOf<ObservableComputation, TA>, b: PureDeferredComputationOf<ObservableComputation, TB>): PureDeferredComputationOf<ObservableComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureDeferredComputationOf<ObservableComputation, TA>, b: PureDeferredComputationOf<ObservableComputation, TB>, c: PureDeferredComputationOf<ObservableComputation, TC>): PureDeferredComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureDeferredComputationOf<ObservableComputation, TA>, b: PureDeferredComputationOf<ObservableComputation, TB>, c: PureDeferredComputationOf<ObservableComputation, TC>, d: PureDeferredComputationOf<ObservableComputation, TD>): PureDeferredComputationOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: PureComputationOf<ObservableComputation, TA>, b: PureComputationOf<ObservableComputation, TB>): PureDeferredComputationOf<ObservableComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: PureComputationOf<ObservableComputation, TA>, b: PureComputationOf<ObservableComputation, TB>, c: PureComputationOf<ObservableComputation, TC>): PureDeferredComputationOf<ObservableComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: PureComputationOf<ObservableComputation, TA>, b: PureComputationOf<ObservableComputation, TB>, c: PureComputationOf<ObservableComputation, TC>, d: PureComputationOf<ObservableComputation, TD>): PureDeferredComputationOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;
    <TA, TB>(a: ComputationOf<ObservableComputation, TA>, b: ComputationOf<ObservableComputation, TB>): DeferredComputationWithSideEffectsOf<ObservableComputation, Tuple2<TA, TB>>;
    <TA, TB, TC>(a: ComputationOf<ObservableComputation, TA>, b: ComputationOf<ObservableComputation, TB>, c: ComputationOf<ObservableComputation, TC>): DeferredComputationWithSideEffectsOf<ObservableComputation, Tuple3<TA, TB, TC>>;
    <TA, TB, TC, TD>(a: ComputationOf<ObservableComputation, TA>, b: ComputationOf<ObservableComputation, TB>, c: ComputationOf<ObservableComputation, TC>, d: ComputationOf<ObservableComputation, TD>): DeferredComputationWithSideEffectsOf<ObservableComputation, Tuple4<TA, TB, TC, TD>>;
}
/**
 * @noInheritDoc
 */
export interface ObservableModule extends ComputationModule<ObservableComputation>, DeferredComputationModule<ObservableComputation>, SynchronousComputationModule<ObservableComputation>, DeferredReactiveComputationModule<ObservableComputation>, ConcurrentReactiveComputationModule<ObservableComputation> {
    backpressureStrategy<T>(capacity: number, backpressureStrategy: BackpressureStrategy): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    combineLatest: CombineConstructor;
    computeDeferred<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): DeferredObservableWithSideEffectsLike<T>;
    computeSynchronousObservable<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): SynchronousObservableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    defer<T>(f: Factory<MulticastObservableLike<T> & DisposableLike>): PureDeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    empty<T>(options?: {
        readonly delay: number;
    }): PureSynchronousObservableLike<T>;
    enqueue<T>(queue: QueueableLike<T>): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    exhaust<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    exhaust<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>, T>;
    first<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, Optional<T>>;
    firstAsync<T>(options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, Optional<T>>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, Optional<T>>;
    flatMapAsync<TA, TB>(f: AsyncFunction2<TA, AbortSignal, TB>): HigherOrderComputationOperator<ObservableComputation, DeferredComputationWithSideEffectsLike, TA, TB>;
    forkMerge: ForkMerge;
    fromAsyncFactory<T>(): Function1<AsyncFunction1<AbortSignal, T>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromIterable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): FromIterableSynchronousOperator<ObservableComputation, T>;
    fromPromise<T>(): Function1<Promise<T>, MulticastObservableLike<T>>;
    fromReadonlyArray<T>(options?: {
        readonly delay?: number;
        readonly delayStart?: boolean;
        readonly count?: number;
        readonly start?: number;
    }): Function1<ReadonlyArray<T>, PureSynchronousObservableLike<T>>;
    fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
    fromValue<T>(options?: {
        readonly delay: number;
    }): Function1<T, PureSynchronousObservableLike<T>>;
    generate<T>(generator: Updater<T>, initialValue: Factory<T>, options?: {
        readonly count?: number;
        readonly delay?: number;
        readonly delayStart?: boolean;
    }): PureSynchronousObservableLike<T>;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    last<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, Optional<T>>;
    lastAsync<T>(options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, Optional<T>>;
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, Optional<T>>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    mergeAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>, T>;
    multicast<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<DeferredObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
    onSubscribe<T>(f: Factory<DisposableLike | SideEffect1<Optional<Error>>> | SideEffect): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
        readonly delay?: number;
    }): PureSynchronousObservableLike<T>;
    reduceAsync<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, TAcc>;
    reduceAsync<T, TAcc>(reducer: Reducer<T, TAcc>, initialValue: Factory<TAcc>, scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): AsyncFunction1<ObservableLike<T>, TAcc>;
    run<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): SideEffect1<SynchronousObservableLike<T>>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>, initialValue: Factory<TAcc>): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, T, TAcc>;
    scanMany<T, TAcc, TInnerType extends HigherOrderInnerComputationLike>(scanner: Function2<TAcc, T, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, T, TAcc>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    subscribe<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
    switchAll<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    switchAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>, T>;
    takeUntil<T>(notifier: PureSynchronousObservableLike): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    takeUntil<T>(notifier: SynchronousObservableWithSideEffectsLike): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    takeUntil<T>(notifier: PureDeferredObservableLike): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
    takeUntil<T>(notifier: DeferredObservableWithSideEffectsLike): Function1<ComputationOf<ObservableComputation, T>, DeferredObservableWithSideEffectsLike<T>>;
    takeUntil<T>(notifier: MulticastObservableLike): StatelessAsynchronousComputationOperator<ObservableComputation, T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T> & DisposableLike>;
    toPauseableObservable<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly replay?: number;
    }): Function1<SynchronousObservableLike<T>, PauseableObservableLike<T> & DisposableLike>;
    toPauseableEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<SynchronousObservableLike<T>, PauseableEventSourceLike<T> & DisposableLike>;
    toReadonlyArray<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): AsyncFunction1<ObservableLike<T>, ReadonlyArray<T>>;
    toRunnable<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, RunnableLike<T>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): StatefulSynchronousComputationOperator<ObservableComputation, TA, TB>;
    zipLatest: CombineConstructor;
}
export type Signature = ObservableModule;
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const computeDeferred: Signature["computeDeferred"];
export declare const computeSynchronousObservable: Signature["computeSynchronousObservable"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const dispatchTo: Signature["dispatchTo"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const exhaust: Signature["exhaust"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const flatMapAsync: Signature["flatMapAsync"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromEventSource: Signature["fromEventSource"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromPromise: Signature["fromPromise"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromStore: Signature["fromStore"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const keyFrame: Signature["keyFrame"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const mergeAll: Signature["mergeAll"];
export declare const merge: Signature["merge"];
export declare const multicast: Signature["multicast"];
export declare const never: Signature["never"];
export declare const onSubscribe: Signature["onSubscribe"];
export declare const pairwise: Signature["pairwise"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const run: Signature["run"];
export declare const scan: Signature["scan"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
export declare const subscribe: Signature["subscribe"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toPauseableEventSource: Signature["toPauseableEventSource"];
export declare const toPauseableObservable: Signature["toPauseableObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
export {};
