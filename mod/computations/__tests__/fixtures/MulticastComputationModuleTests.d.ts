import { ComputationModule, ComputationType, MulticastedComputationModule } from "../../../computations.js";
declare const MulticastedComputationModuleTests: <TComputationType extends ComputationType>(m: MulticastedComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default MulticastedComputationModuleTests;
