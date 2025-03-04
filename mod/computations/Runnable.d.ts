import { Computation as ComputationSig, Computation_T, Computation_baseOfT, Computation_deferredWithSideEffectsOfT, Computation_multicastOfT, Computation_pureDeferredOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, DeferredReactiveComputationModule, PureRunnableLike, RunnableLike, RunnableWithSideEffectsLike } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface RunnableComputation extends ComputationSig {
    readonly [Computation_baseOfT]?: RunnableLike<this[typeof Computation_T]>;
    readonly [Computation_pureDeferredOfT]?: PureRunnableLike<this[typeof Computation_T]>;
    readonly [Computation_deferredWithSideEffectsOfT]?: RunnableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: PureRunnableLike<this[typeof Computation_T]>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: RunnableWithSideEffectsLike<this[typeof Computation_T]>;
    readonly [Computation_multicastOfT]?: never;
}
export type Computation = RunnableComputation;
export interface RunnableModule extends DeferredReactiveComputationModule<RunnableComputation> {
}
export type Signature = RunnableModule;
export declare const buffer: Signature["buffer"];
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const decodeWithCharset: Signature["decodeWithCharset"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const fromValue: Signature["fromValue"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeLast: Signature["takeLast"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toRunnable: Signature["toRunnable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
