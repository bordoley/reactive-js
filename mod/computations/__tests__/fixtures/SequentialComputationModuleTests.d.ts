import { ComputationModule, ComputationType, ComputationTypeOf, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationType extends ComputationType>(m: SequentialComputationModule<TComputationType> & ComputationModule<TComputationType>, computations: ComputationTypeOf<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;
