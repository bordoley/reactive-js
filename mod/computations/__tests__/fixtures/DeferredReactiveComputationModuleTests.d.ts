import { ComputationType, ComputationTypeOf, DeferredComputationModule, DeferredReactiveComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputationType extends ComputationType>(m: DeferredComputationModule<TComputationType> & DeferredReactiveComputationModule<TComputationType> & SynchronousComputationModule<TComputationType>, computations: ComputationTypeOf<TComputationType>) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;
