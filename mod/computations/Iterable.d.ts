import { Computation, Computation_T, Computation_type, PureStatelessComputationModule } from "../computations.js";
import { SideEffect1 } from "../functions.js";
/**
 * @noInheritDoc
 */
export interface IterableComputation extends Computation {
    readonly [Computation_type]?: Iterable<this[typeof Computation_T]>;
}
export interface IterableModule extends PureStatelessComputationModule<IterableComputation> {
    forEach<T>(effect: SideEffect1<T>): SideEffect1<Iterable<T>>;
}
export type Signature = IterableModule;
export declare const forEach: Signature["forEach"];
export declare const keep: Signature["keep"];
export declare const map: Signature["map"];
