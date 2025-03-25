import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentComputationModule, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredReactiveComputationModule, ObservableLike, ObservableWithSideEffectsLike, PureAsynchronousComputationOperator, PureComputationOperator, PureObservableLike, PureSynchronousObservableLike, SequentialComputationModule, SequentialReactiveComputationModule, SynchronousComputationModule, SynchronousObservableWithSideEffectsLike } from "../computations.js";
import { Function1, Function2 } from "../functions.js";
import { BackpressureStrategy, ObserverLike, SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: PureSynchronousObservableLike<this[typeof Computation_T]>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: SynchronousObservableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureObservableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: ObservableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]?: never;
}
export type Computation = ObservableComputation;
export interface ObservableModule extends ComputationModule<ObservableComputation, {
    empty: {
        readonly delay: number;
    };
    firstAsync: {
        readonly scheduler?: SchedulerLike;
    };
    fromIterable: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    fromReadonlyArray: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    fromValue: {
        readonly delay: number;
    };
    gen: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    genPure: {
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
    runAsync: {
        readonly scheduler?: SchedulerLike;
    };
    toReadonlyArrayAsync: {
        readonly scheduler?: SchedulerLike;
    };
}>, ConcurrentDeferredComputationModule<ObservableComputation, {
    broadcast: {
        scheduler?: SchedulerLike;
    };
    toProducer: {
        scheduler?: SchedulerLike;
    };
}>, ConcurrentReactiveComputationModule<ObservableComputation>, SequentialComputationModule<ObservableComputation>, SequentialReactiveComputationModule<ObservableComputation>, SynchronousComputationModule<ObservableComputation, {
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
}>, ConcurrentComputationModule<ObservableComputation>, DeferredReactiveComputationModule<ObservableComputation, {
    subscribe: {
        scheduler?: SchedulerLike;
    };
}> {
    backpressureStrategy<T>(options: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): PureComputationOperator<ObservableComputation, T, T>;
    create<T>(f: (observer: ObserverLike<T>) => void): ObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    subscribeOn<T>(scheduler: SchedulerLike): PureAsynchronousComputationOperator<ObservableComputation, T, T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureComputationOperator<ObservableComputation, TA, TB>;
}
export type Signature = ObservableModule;
export declare const buffer: Signature["buffer"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const toProducer: Signature["toProducer"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
