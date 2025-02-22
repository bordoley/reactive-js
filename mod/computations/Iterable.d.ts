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
export declare const forEach: Signature["forEach"];
export declare const fromIterable: Signature["fromIterable"];
export declare const fromReadonlyArray: Signature["fromReadonlyArray"];
export declare const generate: Signature["generate"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
export declare const reduce: Signature["reduce"];
export declare const toReadonlyArray: Signature["toReadonlyArray"];
