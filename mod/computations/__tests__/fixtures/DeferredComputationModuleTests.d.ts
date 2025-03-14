import { ComputationModule, ComputationType, ComputationTypeOf, DeferredComputationModule } from "../../../computations.js";
declare const DeferredComputationModuleTests: <TComputationType extends ComputationType>(m: DeferredComputationModule<TComputationType> & ComputationModule<TComputationType>, computations: ComputationTypeOf<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default DeferredComputationModuleTests;
