import { Computation, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputation extends Computation>(m: InteractiveComputationModule<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;
