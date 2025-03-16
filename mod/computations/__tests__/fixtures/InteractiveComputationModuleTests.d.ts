import { ComputationModule, ComputationType, InteractiveComputationModule, SequentialComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputationType extends ComputationType>(m: InteractiveComputationModule<TComputationType> & SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;
