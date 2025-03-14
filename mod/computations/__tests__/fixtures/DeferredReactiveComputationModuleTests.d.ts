import { ComputationType, ComputationTypeOf, DeferredComputationModule, DeferredReactiveComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputation extends ComputationType>(m: DeferredComputationModule<TComputation> & DeferredReactiveComputationModule<TComputation> & SynchronousComputationModule<TComputation>, computationType: ComputationTypeOf<TComputation>) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;
