import { ComputationModule, DeferredAsynchronousReactiveComputationModule } from "../../../computations.js";
declare const DeferredAsynchronousReactiveComputationModuleTests: <TComputationModule extends ComputationModule & Pick<DeferredAsynchronousReactiveComputationModule, "switchAll" | "withBackpressure">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default DeferredAsynchronousReactiveComputationModuleTests;
