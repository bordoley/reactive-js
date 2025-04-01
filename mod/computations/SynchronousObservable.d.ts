import { ComputationModule, ComputationTypeLike, Computation_T, Computation_baseOfT, DeferredReactiveComputationModule, PureComputationOperator, PureSynchronousObservableLike, ReactiveComputationModule, SequentialComputationModule, SequentialReactiveComputationModule, SynchronousComputationModule, SynchronousObservableLike, SynchronousObservableWithSideEffectsLike } from "../computations.js";
import { Factory, Function1, Function2 } from "../functions.js";
import { SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface SynchronousObservableComputation extends ComputationTypeLike {
    readonly [Computation_baseOfT]?: SynchronousObservableLike<this[typeof Computation_T]>;
}
export type Computation = SynchronousObservableComputation;
export type ThrottleMode = "first" | "last" | "interval";
export type ComputeMode = "batched" | "combine-latest";
export interface SynchronousObservableModule extends ComputationModule<SynchronousObservableComputation, {
    genPure: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
    toProducer: {
        readonly scheduler?: SchedulerLike;
    };
}>, ReactiveComputationModule<SynchronousObservableComputation>, SequentialComputationModule<SynchronousObservableComputation, {
    gen: {
        readonly delay?: number;
        readonly delayStart?: boolean;
    };
}>, SequentialReactiveComputationModule<SynchronousObservableComputation>, SynchronousComputationModule<SynchronousObservableComputation, {
    toRunnable: {
        readonly maxMicroTaskTicks?: number;
    };
}>, DeferredReactiveComputationModule<SynchronousObservableComputation> {
    compute<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): SynchronousObservableWithSideEffectsLike<T>;
    currentTime: PureSynchronousObservableLike<number>;
    delay(duration: number): PureSynchronousObservableLike;
    keyFrame(duration: number, options?: {
        readonly easing?: Function1<number, number>;
    }): PureSynchronousObservableLike<number>;
    spring(options?: {
        readonly stiffness?: number;
        readonly damping?: number;
        readonly precision?: number;
    }): PureSynchronousObservableLike<number>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): PureComputationOperator<SynchronousObservableComputation, T, T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureComputationOperator<SynchronousObservableComputation, TA, TB>;
}
export type Signature = SynchronousObservableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const currentTime: Signature["currentTime"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const delay: Signature["delay"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const keyFrame: Signature["keyFrame"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const scanDistinct: Signature["scanDistinct"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
export declare const switchAll: Signature["switchAll"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const toRunnable: Signature["toRunnable"];
export declare const withBackpressure: Signature["withBackpressure"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withEffect: Signature["withEffect"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
