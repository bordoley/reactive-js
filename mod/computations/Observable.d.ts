import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredReactiveComputationModule, ObservableLike, ObservableWithSideEffectsLike, PureAsynchronousComputationOperator, PureComputationOperator, PureObservableLike, PureSynchronousObservableLike, SequentialComputationModule, SequentialReactiveComputationModule, SynchronousComputationModule, SynchronousObservableWithSideEffectsLike } from "../computations.js";
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
    genPure: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    toProducer: {
        readonly scheduler?: SchedulerLike;
    };
}>, ConcurrentDeferredComputationModule<ObservableComputation>, ConcurrentReactiveComputationModule<ObservableComputation>, SequentialComputationModule<ObservableComputation, {
    gen: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
}>, SequentialReactiveComputationModule<ObservableComputation>, SynchronousComputationModule<ObservableComputation, {
    toRunnable: {
        readonly maxMicroTaskTicks?: number;
    };
}>, DeferredReactiveComputationModule<ObservableComputation> {
    backpressureStrategy<T>(options: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): PureComputationOperator<ObservableComputation, T, T>;
    create<T>(f: (observer: ObserverLike<T>) => void): ObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    delay(duration: number): PureSynchronousObservableLike<number>;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    subscribeOn<T>(scheduler: SchedulerLike): PureAsynchronousComputationOperator<ObservableComputation, T, T>;
    withBackpressure<T>(config: {
        capacity: number;
        backpressureStrategy: BackpressureStrategy;
    }): PureComputationOperator<ObservableComputation, T, T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureComputationOperator<ObservableComputation, TA, TB>;
}
export type Signature = ObservableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const delay: Signature["delay"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const fromObservable: Signature["fromObservable"];
export declare const gen: Signature["gen"];
export declare const genAsync: Signature["genAsync"];
export declare const genPure: Signature["genPure"];
export declare const genPureAsync: Signature["genPureAsync"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withBackpressure: Signature["withBackpressure"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withLatestFrom: Signature["withLatestFrom"];
