import { ComputationModule, ComputationOf, ComputationOperatorWithSideEffects, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredComputationModule, DeferredObservableWithSideEffectsLike, DeferredReactiveComputationModule, EventSourceLike, HigherOrderComputationOperator, HigherOrderInnerComputationLike, HigherOrderInnerComputationOf, MulticastObservableLike, ObservableLike, PauseableEventSourceLike, PauseableObservableLike, PureDeferredObservableLike, PureSynchronousObservableLike, StatefulAsynchronousComputationOperator, StatefulSynchronousComputationOperator, StatelessAsynchronousComputationOperator, StoreLike, SynchronousComputationModule, SynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../computations.js";
import { Equality, Factory, Function1, Function2, Optional, Reducer, SideEffect, SideEffect1 } from "../functions.js";
import { BackpressureStrategy, DisposableLike, ObserverLike, QueueableLike, SchedulerLike } from "../utils.js";
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
/**
 * @noInheritDoc
 */
export interface ObservableModule extends ComputationModule<ObservableComputation, {
    empty: {
        readonly delay: number;
    };
    firstAsync: {
        readonly scheduler?: SchedulerLike;
    };
    fromIterable: {
        readonly delay: number;
        readonly delayStart?: boolean;
    };
    fromReadonlyArray: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    fromValue: {
        readonly delay: number;
    };
    generate: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    lastAsync: {
        readonly scheduler?: SchedulerLike;
    };
    raise: {
        readonly delay?: number;
    };
    reduceAsync: {
        readonly scheduler?: SchedulerLike;
    };
    toReadonlyArrayAsync: {
        readonly scheduler?: SchedulerLike;
    };
}>, DeferredComputationModule<ObservableComputation>, SynchronousComputationModule<ObservableComputation, {
    first: {
        readonly maxMicroTaskTicks?: number;
    };
    last: {
        readonly maxMicroTaskTicks?: number;
    };
    reduce: {
        readonly maxMicroTaskTicks?: number;
    };
    run: {
        readonly maxMicroTaskTicks?: number;
    };
    toReadonlyArray: {
        readonly maxMicroTaskTicks?: number;
    };
    toRunnable: {
        readonly maxMicroTaskTicks?: number;
    };
}>, DeferredReactiveComputationModule<ObservableComputation>, ConcurrentReactiveComputationModule<ObservableComputation>, ConcurrentDeferredComputationModule<ObservableComputation> {
    actionReducer<TAction, T>(reducer: Reducer<TAction, T>, initialState: Factory<T>, options?: {
        readonly equality?: Equality<T>;
    }): StatefulSynchronousComputationOperator<ObservableComputation, TAction, T>;
    backpressureStrategy<T>(options: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    computeDeferred<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): DeferredObservableWithSideEffectsLike<T>;
    computeSynchronous<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): SynchronousObservableWithSideEffectsLike<T>;
    create<T>(f: SideEffect1<ObserverLike<T>>): DeferredObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    defer<T>(f: Factory<MulticastObservableLike<T> & DisposableLike>): PureDeferredObservableLike<T>;
    enqueue<T>(queue: QueueableLike<T>): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    exhaust<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    exhaust<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerLike, HigherOrderInnerComputationOf<ObservableComputation, TInnerLike, T>, T>;
    fromEventSource<T>(): Function1<EventSourceLike<T>, MulticastObservableLike<T>>;
    fromStore<T>(): Function1<StoreLike<T>, MulticastObservableLike<T>>;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    mergeAll<T>(options?: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
    }): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    mergeAll<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly backpressureStrategy?: BackpressureStrategy;
        readonly capacity?: number;
        readonly concurrency?: number;
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerLike, HigherOrderInnerComputationOf<ObservableComputation, TInnerLike, T>, T>;
    multicast<T>(scheduler: SchedulerLike, options?: {
        readonly autoDispose?: boolean;
        readonly replay?: number;
    }): Function1<ObservableLike<T>, MulticastObservableLike<T> & DisposableLike>;
    onSubscribe<T>(f: Factory<DisposableLike | SideEffect1<Optional<Error>>> | SideEffect): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    scanMany<T, TAcc>(scanner: Function2<TAcc, T, PureSynchronousObservableLike<TAcc>>, initialValue: Factory<TAcc>): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, T, TAcc>;
    scanMany<T, TAcc, TInnerLike extends HigherOrderInnerComputationLike>(scanner: Function2<TAcc, T, HigherOrderInnerComputationOf<ObservableComputation, TInnerLike, T>>, initialValue: Factory<TAcc>, options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerLike, T, TAcc>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    subscribe<T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, DisposableLike>;
    subscribeOn<T>(scheduler: SchedulerLike): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
    switchAll<T>(): HigherOrderComputationOperator<ObservableComputation, PureSynchronousObservableLike, PureSynchronousObservableLike<T>, T>;
    switchAll<T, TInnerLike extends HigherOrderInnerComputationLike>(options: {
        readonly innerType: TInnerLike;
    }): HigherOrderComputationOperator<ObservableComputation, TInnerLike, HigherOrderInnerComputationOf<ObservableComputation, TInnerLike, T>, T>;
    takeUntil<T>(notifier: PureSynchronousObservableLike): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    takeUntil<T>(notifier: SynchronousObservableWithSideEffectsLike): ComputationOperatorWithSideEffects<ObservableComputation, T, T>;
    takeUntil<T>(notifier: PureDeferredObservableLike): StatefulAsynchronousComputationOperator<ObservableComputation, T, T>;
    takeUntil<T>(notifier: DeferredObservableWithSideEffectsLike): Function1<ComputationOf<ObservableComputation, T>, DeferredObservableWithSideEffectsLike<T>>;
    takeUntil<T>(notifier: MulticastObservableLike): StatelessAsynchronousComputationOperator<ObservableComputation, T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): StatefulSynchronousComputationOperator<ObservableComputation, T, T>;
    toEventSource<T>(scheduler: SchedulerLike): Function1<ObservableLike<T>, EventSourceLike<T> & DisposableLike>;
    toPauseableEventSource<T>(scheduler: SchedulerLike): Function1<SynchronousObservableLike<T>, PauseableEventSourceLike<T> & DisposableLike>;
    toPauseableObservable<T>(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): Function1<SynchronousObservableLike<T>, PauseableObservableLike<T> & DisposableLike>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): StatefulSynchronousComputationOperator<ObservableComputation, TA, TB>;
}
export type Signature = ObservableModule;
export declare const actionReducer: Signature["actionReducer"];
export declare const backpressureStrategy: Signature["backpressureStrategy"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const computeDeferred: Signature["computeDeferred"];
export declare const computeSynchronous: Signature["computeSynchronous"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const create: Signature["create"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const defer: Signature["defer"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const enqueue: Signature["enqueue"];
export declare const exhaust: Signature["exhaust"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromAsyncIterable: Signature["fromAsyncIterable"];
export declare const fromEventSource: Signature["fromEventSource"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromObservable: Signature["fromObservable"];
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
export declare const toObservable: Signature["toObservable"];
export declare const toPauseableEventSource: Signature["toPauseableEventSource"];
export declare const toPauseableObservable: Signature["toPauseableObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
