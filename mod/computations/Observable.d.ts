import { ComputationModule, ComputationTypeLike, ComputationTypeLike_T, ComputationTypeLike_baseOfT, ConcurrentDeferredComputationModule, ConcurrentReactiveComputationModule, DeferredComputationModule, DeferredReactiveComputationModule, ObservableLike, PureComputationOperator, ReactiveComputationModule, ScheduledReactiveComputationModule } from "../computations.js";
import { BackpressureStrategy, SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface ObservableComputation extends ComputationTypeLike {
    readonly [ComputationTypeLike_baseOfT]?: ObservableLike<this[typeof ComputationTypeLike_T]>;
}
export type Computation = ObservableComputation;
export type ThrottleMode = "first" | "last" | "interval";
export type ComputeMode = "batched" | "combine-latest";
export interface ObservableModule extends ComputationModule<ObservableComputation, {
    toProducer: {
        readonly scheduler?: SchedulerLike;
    };
}>, ConcurrentDeferredComputationModule<ObservableComputation, {
    genAsync?: {
        bufferSize?: number;
    };
    genPureAsync?: {
        bufferSize?: number;
    };
}>, ReactiveComputationModule<ObservableComputation>, DeferredComputationModule<ObservableComputation>, DeferredReactiveComputationModule<ObservableComputation, {
    broadcast?: {
        scheduler?: SchedulerLike;
    };
    compute?: {
        readonly mode?: "batched" | "combine-latest";
    };
    toAsyncIterable?: {
        scheduler?: SchedulerLike;
    };
}>, ConcurrentReactiveComputationModule<ObservableComputation, {
    fromBroadcaster: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    };
    fromProducer: {
        capacity?: number;
        backpressureStrategy?: BackpressureStrategy;
    };
}>, ScheduledReactiveComputationModule<ObservableComputation> {
    gen: ScheduledReactiveComputationModule<ObservableComputation>["gen"];
    genPure: ScheduledReactiveComputationModule<ObservableComputation>["genPure"];
    retry: ScheduledReactiveComputationModule<ObservableComputation>["retry"];
    subscribeOn<T>(scheduler: SchedulerLike, options?: {
        backpressureStrategy?: BackpressureStrategy;
        capacity?: number;
    }): PureComputationOperator<ObservableComputation, T, T>;
}
export type Signature = ObservableModule;
export declare const broadcast: Signature["broadcast"];
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const combineLatest: Signature["combineLatest"];
export declare const compute: Signature["compute"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const currentTime: Signature["currentTime"];
export declare const debounce: Signature["debounce"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const delay: Signature["delay"];
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
export declare const keyFrame: Signature["keyFrame"];
export declare const map: Signature["map"];
export declare const merge: Signature["merge"];
export declare const mergeAll: Signature["mergeAll"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const scanMany: Signature["scanMany"];
export declare const skipFirst: Signature["skipFirst"];
export declare const spring: Signature["spring"];
export declare const subscribeOn: Signature["subscribeOn"];
export declare const switchAll: Signature["switchAll"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeUntil: Signature["takeUntil"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throttle: Signature["throttle"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toAsyncIterable: Signature["toAsyncIterable"];
export declare const toObservable: Signature["toObservable"];
export declare const toProducer: Signature["toProducer"];
export declare const withCurrentTime: Signature["withCurrentTime"];
export declare const withEffect: Signature["withEffect"];
export declare const withLatestFrom: Signature["withLatestFrom"];
export declare const zipLatest: Signature["zipLatest"];
