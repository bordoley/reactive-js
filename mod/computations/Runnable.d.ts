import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_multicastOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredComputationModule, DeferredReactiveComputationModule, PureRunnableLike, RunnableLike, RunnableWithSideEffectsLike, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface RunnableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: RunnableLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: PureRunnableLike<this[typeof Computation_T]>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: RunnableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]?: never;
}
export type Computation = RunnableComputation;
export interface RunnableModule extends ComputationModule<RunnableComputation>, DeferredComputationModule<RunnableComputation>, DeferredReactiveComputationModule<RunnableComputation>, SynchronousComputationModule<RunnableComputation> {
}
export type Signature = RunnableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const first: Signature["first"];
export declare const firstAsync: Signature["firstAsync"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const reduceAsync: Signature["reduceAsync"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toObservable: Signature["toObservable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const toRunnable: Signature["toRunnable"];
