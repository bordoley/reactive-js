import { ComputationModule, ComputationType, DeferredComputationModule, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputation extends ComputationType>(m: InteractiveComputationModule<TComputation> & DeferredComputationModule<TComputation> & ComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;
