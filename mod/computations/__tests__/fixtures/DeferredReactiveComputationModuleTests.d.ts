import { ComputationModule, DeferredReactiveComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputationModule extends ComputationModule & Pick<DeferredReactiveComputationModule, "withBackpressure">>(_m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;
