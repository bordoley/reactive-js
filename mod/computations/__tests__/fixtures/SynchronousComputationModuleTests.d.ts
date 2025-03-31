import { ComputationModule, ComputationTypeLike, SynchronousComputationModule } from "../../../computations.js";
declare const SynchronousComputationModuleTests: <TComputationType extends ComputationTypeLike>(_m: ComputationModule<TComputationType> & SynchronousComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SynchronousComputationModuleTests;
