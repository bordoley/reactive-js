import { AsyncIterableLike, AsyncIterableWithSideEffectsLike, ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_pureDeferredOfT, ConcurrentDeferredComputationModule, InteractiveComputationModule, PauseableEventSourceLike, PauseableObservableLike, PureAsyncIterableLike, SequentialComputationModule } from "../computations.js";
import { Function1 } from "../functions.js";
import { DisposableLike, SchedulerLike } from "../utils.js";
/**
 * @noInheritDoc
 */
export interface AsyncIterableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: AsyncIterableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: AsyncIterableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureAsyncIterableLike<this[typeof Computation_T]>;
}
export type Computation = AsyncIterableComputation;
export interface AsyncIterableModule extends ComputationModule<AsyncIterableComputation>, SequentialComputationModule<AsyncIterableComputation>, InteractiveComputationModule<AsyncIterableComputation>, ConcurrentDeferredComputationModule<AsyncIterableComputation> {
    of<T>(): Function1<AsyncIterable<T>, AsyncIterableWithSideEffectsLike<T>>;
    toEventSource<T>(): Function1<AsyncIterableLike<T>, PauseableEventSourceLike<T> & DisposableLike>;
    toPauseableObservable<T>(scheduler: SchedulerLike, options?: {
        readonly replay?: number;
    }): Function1<AsyncIterableLike<T>, PauseableObservableLike<T> & DisposableLike>;
}
export type Signature = AsyncIterableModule;
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const fromAsyncFactory: Signature["fromAsyncFactory"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const firstAsync: Signature["firstAsync"];
export declare const forEach: Signature["forEach"];
export declare const fromValue: Signature["fromValue"];
export declare const gen: Signature["gen"];
export declare const genWithSideEffects: Signature["genWithSideEffects"];
export declare const keep: Signature["keep"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const of: Signature["of"];
export declare const raise: Signature["raise"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toObservable: Signature["toObservable"];
export declare const toEventSource: Signature["toEventSource"];
export declare const toPauseableObservable: Signature["toPauseableObservable"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const zip: Signature["zip"];
