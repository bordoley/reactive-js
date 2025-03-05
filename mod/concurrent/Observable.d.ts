import { ComputationOperatorWithSideEffects, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentReactiveComputationModule, DeferredComputationWithSideEffectsLike, DeferredReactiveComputationModule, FromIterableOperator, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, PureDeferredComputationLike, RunnableLike, StatefulAsynchronousComputationOperator, StatefulSynchronousComputationOperator, StatelessAsynchronousComputationOperator, ZippingConstructor } from "../computations.js";
import { DeferredObservableLike, DeferredObservableWithSideEffectsLike, DispatcherLike, MulticastObservableLike, ObservableLike, ObserverLike, PureDeferredObservableLike, PureSynchronousObservableLike, SchedulerLike, SynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../concurrent.js";
import { EventSourceLike, StoreLike } from "../events.js";
import { Factory, Function1, Function2, Optional, SideEffect, SideEffect1, Tuple2, Updater } from "../functions.js";
import { BackpressureStrategy, DisposableLike, QueueableLike } from "../utils.js";
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
}
/**
 * @noInheritDoc
 */
export interface ObservableModule extends DeferredReactiveComputationModule<ObservableComputation>, ConcurrentReactiveComputationModule<ObservableComputation> {
    backpressureStrategy<T>(capacity: number, backpressureStrategy: BackpressureStrategy): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    combineLatest: ZippingConstructor<ObservableComputation>;
    computeDeferred<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): DeferredObservableWithSideEffectsLike<T>;
    computeSynchronousObservable<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): SynchronousObservableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    defer<T>(f: Factory<MulticastObservableLike<T>>): PureDeferredObservableLike<T>;
    dispatchTo<T>(dispatcher: DispatcherLike<T>): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    empty<T>(options?: {
        readonly delay: number;
    }): PureSynchronousObservableLike<T>;
    enqueue<T>(queue: QueueableLike<T>): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    exhaust<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    exhaust<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>, T>;
    firstAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
    flatMapAsync<TA, TB>(f: Function2<TA, AbortSignal, Promise<TB>>): Function1<DeferredObservableLike<TA>, DeferredObservableWithSideEffectsLike<TB>>;
    forkMerge: ForkMerge;
    fromAsyncFactory<T>(): Function1<Function1<AbortSignal, Promise<T>>, DeferredObservableWithSideEffectsLike<T>>;
    fromAsyncIterable<T>(): Function1<AsyncIterable<T>, DeferredObservableWithSideEffectsLike<T>>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromIterable<T>(options?: {
        readonly delay: number;
        readonly delayStart?: boolean;
    }): FromIterableOperator<ObservableComputation, T>;
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
    lastAsync<T>(scheduler: SchedulerLike, options?: {
        readonly capacity?: number;
        readonly backpressureStrategy?: BackpressureStrategy;
    }): Function1<ObservableLike<T>, Promise<Optional<T>>>;
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
    never<T>(): MulticastObservableLike<T>;
    onSubscribe<T>(f: Factory<DisposableLike | SideEffect1<Optional<Error>>> | SideEffect): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    raise<T>(options?: {
        readonly raise?: Factory<unknown>;
        readonly delay?: number;
    }): PureSynchronousObservableLike<T>;
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
    }): StatelessAsynchronousComputationOperator<ObservableComputation, T, T>;
    switchAll<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    switchAll<T, TInnerType extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerType;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerType, HigherOrderInnerComputationOf<ObservableComputation, TInnerType, T>, T>;
    takeUntil<T>(notifier: PureSynchronousObservableLike): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    takeUntil<T>(notifier: SynchronousObservableWithSideEffectsLike): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    takeUntil<T>(notifier: DeferredObservableWithSideEffectsLike): Function1<ObservableLike<T>, DeferredObservableWithSideEffectsLike<T>>;
    takeUntil<T>(notifier: MulticastObservableLike): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    toRunnable<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, RunnableLike<T>>;
    toEventSource<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, EventSourceLike<T>>;
    toReadonlyArray<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly maxMicroTaskTicks?: number;
    }): Function1<SynchronousObservableLike<T>, ReadonlyArray<T>>;
    toReadonlyArrayAsync<T>(scheduler: SchedulerLike, options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
    }): Function1<ObservableLike<T>, Promise<ReadonlyArray<T>>>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): StatefulSynchronousComputationOperator<ObservableComputation, TA, TB>;
    withLatestFrom<TA, TB>(other: PureSynchronousObservableLike<TB>): StatefulSynchronousComputationOperator<ObservableComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureSynchronousObservableLike<TB>, selector: Function2<TA, TB, T>): StatefulSynchronousComputationOperator<ObservableComputation, TA, T>;
    withLatestFrom<TA, TB>(other: SynchronousObservableWithSideEffectsLike<TB>): ComputationOperatorWithSideEffects<ObservableComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: SynchronousObservableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): ComputationOperatorWithSideEffects<ObservableComputation, TA, T>;
    withLatestFrom<TA, TB>(other: PureDeferredObservableLike<TB>): StatefulAsynchronousComputationOperator<ObservableComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: PureDeferredObservableLike<TB>, selector: Function2<TA, TB, T>): StatefulAsynchronousComputationOperator<ObservableComputation, TA, T>;
    withLatestFrom<TA, TB>(other: DeferredObservableWithSideEffectsLike<TB>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<Tuple2<TA, TB>>>;
    withLatestFrom<TA, TB, T>(other: DeferredObservableWithSideEffectsLike<TB>, selector: Function2<TA, TB, T>): Function1<ObservableLike<TA>, DeferredObservableWithSideEffectsLike<T>>;
    withLatestFrom<TA, TB>(other: MulticastObservableLike<TB>): StatefulAsynchronousComputationOperator<ObservableComputation, TA, Tuple2<TA, TB>>;
    withLatestFrom<TA, TB, T>(other: MulticastObservableLike<TB>, selector: Function2<TA, TB, T>): StatefulAsynchronousComputationOperator<ObservableComputation, TA, T>;
    zipLatest: ZippingConstructor<ObservableComputation>;
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
export declare const toRunnable: Signature["toRunnable"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
export {};
