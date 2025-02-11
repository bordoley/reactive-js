import { Computation, Computation_T, Computation_type, PureStatelessComputationModule } from "../computations.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation {
    readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}
export interface IterableModule extends PureStatelessComputationModule<IterableComputation> {
}
export type Signature = IterableModule;
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
