import { Computation, ComputationModule, ComputationOf, ComputationWithSideEffectsModule, Computation_T, Computation_type, DeferredComputationModule, InteractiveComputationModule, IterableLike, IterableWithSideEffectsLike, PureIterableLike, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
interface IterableComputation extends Computation<IterableLike> {
    readonly [Computation_type]?: IterableLike<this[typeof Computation_T]>;
}
interface IterableWithSideEffectsComputation extends Computation<IterableWithSideEffectsLike> {
    readonly [Computation_type]?: IterableWithSideEffectsLike<this[typeof Computation_T]>;
}
interface PuredIterableComputation extends Computation<PureIterableLike> {
    readonly [Computation_type]?: PureIterableLike<this[typeof Computation_T]>;
}
export type IterableComputationFor<Type extends IterableLike> = Type extends PureIterableLike ? PuredIterableComputation : Type extends IterableWithSideEffectsLike ? IterableWithSideEffectsComputation : IterableComputation;
export type IterableComputationOf<Type extends IterableLike, T> = ComputationOf<Type, IterableComputationFor<Type>, T>;
export interface IterableModule extends ComputationModule<IterableLike, IterableComputationFor<IterableLike>>, DeferredComputationModule<IterableLike, IterableComputationFor<IterableLike>>, ComputationWithSideEffectsModule<IterableLike, IterableComputationFor<IterableLike>, IterableWithSideEffectsLike, IterableComputationFor<IterableWithSideEffectsLike>>, SynchronousComputationModule<IterableLike, IterableComputationFor<IterableLike>>, InteractiveComputationModule<IterableLike, IterableComputationFor<IterableLike>> {
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
export {};
