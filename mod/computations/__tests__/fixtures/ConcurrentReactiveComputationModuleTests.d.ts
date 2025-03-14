import { ComputationModule, ComputationType, ComputationTypeOf, ConcurrentReactiveComputationModule } from "../../../computations.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputationType extends ComputationType>(m: ConcurrentReactiveComputationModule<TComputationType> & ComputationModule<TComputationType>, computations: ComputationTypeOf<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;
