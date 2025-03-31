import { ComputationModule, ComputationTypeLike, ConcurrentReactiveComputationModule, SourceComputationModule } from "../../../computations.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & SourceComputationModule<TComputationType> & ConcurrentReactiveComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;
