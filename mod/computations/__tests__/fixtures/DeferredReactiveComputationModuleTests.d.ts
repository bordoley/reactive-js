import { ComputationModule, ComputationTypeLike, DeferredReactiveComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(_m: ComputationModule<TComputationType> & DeferredReactiveComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;
