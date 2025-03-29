import { ComputationModule, DeferredReactiveComputationModule } from "../../../computations.js";
declare const DeferredReactiveComputationModuleTests: <TComputationModule extends ComputationModule & Pick<DeferredReactiveComputationModule, "switchAll" | "withBackpressure">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default DeferredReactiveComputationModuleTests;
