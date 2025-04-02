import { ComputationModule, ComputationTypeLike, DeferredComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & DeferredComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;
