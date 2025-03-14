import { ComputationModule, ComputationType, ComputationTypeOf, ConcurrentReactiveComputationModule } from "../../../computations.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputation extends ComputationType>(m: ConcurrentReactiveComputationModule<TComputation> & ComputationModule<TComputation>, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;
