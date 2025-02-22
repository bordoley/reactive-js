import { Computation, ComputationWithSideEffectsModule, Computation_T, Computation_type, DeferredComputationModule, PureStatelessComputationModule, SynchronousComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation {
    readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}
export interface IterableModule extends PureStatelessComputationModule<IterableComputation>, DeferredComputationModule<IterableComputation>, ComputationWithSideEffectsModule<IterableComputation>, SynchronousComputationModule<IterableComputation> {
}
export type Signature = IterableModule;
export declare const concat: Signature["concat"];
export declare const concatAll: Signature["concatAll"];
export declare const concatMap: Signature["concatMap"];
export declare const concatMany: Signature["concatMany"];
export declare const concatWith: Signature["concatWith"];
export declare const endWith: Signature["endWith"];
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromValue: Signature["fromValue"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const last: Signature["last"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const repeat: Signature["repeat"];
export declare const startWith: Signature["startWith"];
export declare const takeFirst: Signature["takeFirst"];
export declare const takeWhile: Signature["takeWhile"];
export declare const throws: Signature["throws"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
