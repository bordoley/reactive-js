import { AsyncIterableLike, AsyncIterableWithSideEffectsLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, ConcurrentComputationModule, ConcurrentDeferredComputationModule, InteractiveComputationModule, PureAsyncIterableLike, SequentialComputationModule } from "../computations.js";
import { Function1 } from "../functions.js";
import { SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: AsyncIterableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureAsyncIterableLike<this[typeof Computation_T]>;
}
export type Computation = AsyncIterableComputation;
export interface AsyncIterableModule extends ComputationModule<AsyncIterableComputation>, SequentialComputationModule<AsyncIterableComputation>, InteractiveComputationModule<AsyncIterableComputation>, ConcurrentComputationModule<AsyncIterableComputation>, ConcurrentDeferredComputationModule<AsyncIterableComputation, {
    broadcast: {
        readonly scheduler?: SchedulerLike;
    };
}> {
    of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;
}
export type Signature = AsyncIterableModule;
export declare const broadcast: Signature["broadcast"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const forEach: Signature["forEach"];
export declare const gen: Signature["gen"];
export declare const genAsync: Signature["genAsync"];
export declare const genPure: Signature["genPure"];
export declare const genPureAsync: Signature["genPureAsync"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const pairwise: Signature["pairwise"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toProducer: Signature["toProducer"];
export declare const zip: Signature["zip"];
