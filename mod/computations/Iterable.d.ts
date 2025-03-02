import { Computation_T, Computation_ofT, Computation_pureOfT, Computation_withSideEffectsOfT, DeferredComputationModule, GenericComputation, InteractiveComputationModule, IterableLike, IterableWithSideEffectsLike, PureIterableLike, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends GenericComputation<IterableLike, PureIterableLike, IterableWithSideEffectsLike> {
    readonly [Computation_ofT]?: IterableLike<this[typeof Computation_T]>;
    readonly [Computation_pureOfT]?: PureIterableLike<this[typeof Computation_T]>;
    readonly [Computation_withSideEffectsOfT]?: IterableWithSideEffectsLike<this[typeof Computation_T]>;
}
export interface IterableModule extends DeferredComputationModule<IterableComputation>, SynchronousComputationModule<IterableComputation>, InteractiveComputationModule<IterableComputation> {
}
export type Signature = IterableModule;
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMany: Signature["concatMany"];
export declare const empty: Signature["empty"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromValue: Signature["fromValue"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const raise: Signature["raise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toRunnable: Signature["toRunnable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
