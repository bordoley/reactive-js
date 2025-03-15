import { ComputationModule, ComputationType, ConcurrentDeferredComputationModule } from "../../../computations.js";
declare const ConcurrentDeferredComputationModuleTests: <TComputationType extends ComputationType>(m: ConcurrentDeferredComputationModule<TComputationType> & ComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentDeferredComputationModuleTests;
