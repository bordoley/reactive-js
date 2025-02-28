import { Computation, ComputationWithSideEffectsModule, Computation_T, Computation_type, DeferredComputationModule, IterableLike, IterableWithSideEffectsLike, PureStatelessComputationModule, SynchronousComputationModule } from "../computations.js";
import { Tuple2, Tuple3, Tuple4 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation<IterableLike> {
    readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}
export interface IterableWithSideEffectsComputation extends Computation<IterableWithSideEffectsLike> {
    readonly [Computation_type]?: IterableWithSideEffectsLike<this[typeof Computation_T]>;
}
export interface IterableModule extends PureStatelessComputationModule<IterableLike, IterableComputation>, DeferredComputationModule<IterableLike, IterableComputation>, ComputationWithSideEffectsModule<IterableLike, IterableComputation, IterableWithSideEffectsLike, IterableWithSideEffectsComputation>, SynchronousComputationModule<IterableLike, IterableComputation> {
    zip<TA, TB>(a: Iterable<TA>, b: Iterable<TB>): Iterable<Tuple2<TA, TB>>;
    zip<TA, TB, TC>(a: Iterable<TA>, b: Iterable<TB>, c: Iterable<TC>): Iterable<Tuple3<TA, TB, TC>>;
    zip<TA, TB, TC, TD>(a: Iterable<TA>, b: Iterable<TB>, c: Iterable<TC>, d: Iterable<TD>): Iterable<Tuple4<TA, TB, TC, TD>>;
}
export type Signature = IterableModule;
export declare const catchError: Signature["catchError"];
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const empty: Signature["empty"];
export declare const endWith: Signature["endWith"];
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
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const throwIfEmpty: Signature["throwIfEmpty"];
export declare const takeWhile: Signature["takeWhile"];
export declare const toRunnable: Signature["toRunnable"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
export declare const zip: Signature["zip"];
