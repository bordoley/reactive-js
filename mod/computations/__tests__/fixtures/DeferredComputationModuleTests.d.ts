import { ComputationModule, ComputationType, ComputationTypeOf, DeferredComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <TComputation extends ComputationType>(m: DeferredComputationModule<TComputation> & ComputationModule<TComputation>, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;
