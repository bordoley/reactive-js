import { ComputationType, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputation extends ComputationType>(m: InteractiveComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;
