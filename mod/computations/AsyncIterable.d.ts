import { AsyncIterableLike, AsyncIterableWithSideEffectsLike, ComputationModule, ComputationTypeLike, ComputationTypeLike_T, ComputationTypeLike_baseOfT, ConcurrentDeferredComputationModule, DeferredComputationModule, InteractiveComputationModule } from "../computations.js";
import { Function1 } from "../functions.js";
export interface AsyncIterableComputation extends ComputationTypeLike {
    readonly [ComputationTypeLike_baseOfT]?: AsyncIterableLike<this[typeof ComputationTypeLike_T]>;
}
export type Computation = AsyncIterableComputation;
export interface AsyncIterableModule extends ComputationModule<AsyncIterableComputation>, DeferredComputationModule<AsyncIterableComputation>, InteractiveComputationModule<AsyncIterableComputation, {
    toObservable: {
        bufferSize?: number;
    };
}>, ConcurrentDeferredComputationModule<AsyncIterableComputation> {
    fromAsyncFactory<T>(): Function1<(options?: {
        signal?: AbortSignal;
    }) => Promise<T>, AsyncIterableWithSideEffectsLike<T>>;
    of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;
}
export type Signature = AsyncIterableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
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
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toObservable: Signature["toObservable"];
export declare const toProducer: Signature["toProducer"];
export declare const withEffect: Signature["withEffect"];
export declare const zip: Signature["zip"];
