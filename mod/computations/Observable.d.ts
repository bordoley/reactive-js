import { ComputationModule, ComputationTypeLike, Computation_T, Computation_baseOfT, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredAsynchronousReactiveComputationModule, ObservableLike, ObservableWithSideEffectsLike, PureComputationOperator, SequentialComputationModule, SequentialReactiveComputationModule, SourceComputationModule } from "../computations.js";
import { Factory, Function2 } from "../functions.js";
import { SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationTypeLike {
    readonly [Computation_baseOfT]?: ObservableLike<this[typeof Computation_T]>;
}
export type Computation = ObservableComputation;
export type ThrottleMode = "first" | "last" | "interval";
export type ComputeMode = "batched" | "combine-latest";
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
}>, SequentialReactiveComputationModule<ObservableComputation>, DeferredAsynchronousReactiveComputationModule<ObservableComputation>, SourceComputationModule<ObservableComputation> {
    compute<T>(computation: Factory<T>, options?: {
        readonly mode?: ComputeMode;
    }): ObservableWithSideEffectsLike<T>;
    subscribeOn<T>(scheduler: SchedulerLike): PureComputationOperator<ObservableComputation, T, T>;
    throttle<T>(duration: number, options?: {
        readonly mode?: ThrottleMode;
    }): PureComputationOperator<ObservableComputation, T, T>;
    withCurrentTime<TA, TB>(selector: Function2<number, TA, TB>): PureComputationOperator<ObservableComputation, TA, TB>;
}
export type Signature = ObservableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const forkMerge: Signature["forkMerge"];
export declare const fromBroadcaster: Signature["fromBroadcaster"];
export declare const fromObservable: Signature["fromObservable"];
export declare const fromProducer: Signature["fromProducer"];
export declare const gen: Signature["gen"];
export declare const genAsync: Signature["genAsync"];
export declare const genPure: Signature["genPure"];
export declare const genPureAsync: Signature["genPureAsync"];
export declare const keep: Signature["keep"];
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
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const withBackpressure: Signature["withBackpressure"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withEffect: Signature["withEffect"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
