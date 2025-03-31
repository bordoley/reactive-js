import { ComputationModule, ComputationTypeLike, SequentialReactiveComputationModule } from "../../../computations.js";
declare const SequentialReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & SequentialReactiveComputationModule<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SequentialReactiveComputationModuleTests;
