import { ComputationModule, ComputationTypeLike, ConcurrentReactiveComputationModule, ReactiveComputationModule } from "../../../computations.js";
declare const ReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & ConcurrentReactiveComputationModule<TComputationType> & ReactiveComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default ReactiveComputationModuleTests;
