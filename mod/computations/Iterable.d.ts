import { ComputationModule, ComputationType, Computation_T, Computation_baseOfT, Computation_pureSynchronousOfT, Computation_synchronousWithSideEffectsOfT, InteractiveComputationModule, IterableLike, IterableWithSideEffectsLike, PureIterableLike, SequentialComputationModule, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends ComputationType {
    readonly [Computation_baseOfT]?: IterableLike<this[typeof Computation_T]>;
    readonly [Computation_pureSynchronousOfT]?: PureIterableLike<this[typeof Computation_T]>;
    readonly [Computation_synchronousWithSideEffectsOfT]?: IterableWithSideEffectsLike<this[typeof Computation_T]>;
}
export type Computation = IterableComputation;
export interface IterableModule extends ComputationModule<IterableComputation>, SequentialComputationModule<IterableComputation>, SynchronousComputationModule<IterableComputation>, InteractiveComputationModule<IterableComputation> {
}
export type Signature = IterableModule;
export declare const catchError: Signature["catchError"];
export declare const concatAll: Signature["concatAll"];
export declare const concat: Signature["concat"];
export declare const distinctUntilChanged: Signature["distinctUntilChanged"];
export declare const empty: Signature["empty"];
export declare const encodeUtf8: Signature["encodeUtf8"];
export declare const first: Signature["first"];
export declare const forEach: Signature["forEach"];
export declare const fromValue: Signature["fromValue"];
export declare const gen: Signature["gen"];
export declare const genPure: Signature["genPure"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const lastAsync: Signature["lastAsync"];
export declare const makeModule: Signature["makeModule"];
export declare const map: Signature["map"];
export declare const pairwise: Signature["pairwise"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const retry: Signature["retry"];
export declare const scan: Signature["scan"];
export declare const skipFirst: Signature["skipFirst"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const toReadonlyArrayAsync: Signature["toReadonlyArrayAsync"];
export declare const toRunnable: Signature["toRunnable"];
export declare const zip: Signature["zip"];
