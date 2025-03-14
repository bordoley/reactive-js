import { ComputationModule, ComputationType, DeferredComputationModule, InteractiveComputationModule } from "../../../computations.js";
declare const InteractiveComputationModuleTests: <TComputationType extends ComputationType>(m: InteractiveComputationModule<TComputationType> & DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default InteractiveComputationModuleTests;
