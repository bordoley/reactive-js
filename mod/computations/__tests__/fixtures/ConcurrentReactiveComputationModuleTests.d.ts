import { ComputationModule, ConcurrentReactiveComputationModule, PickComputationModule } from "../../../computations.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputationModule extends ComputationModule & PickComputationModule<ConcurrentReactiveComputationModule, "fromObservable" | "takeUntil">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;
