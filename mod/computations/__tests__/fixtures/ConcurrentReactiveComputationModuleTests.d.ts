import { ComputationModule, ConcurrentReactiveComputationModule, PickComputationModule } from "../../../computations.js";
declare const ConcurrentReactiveComputationModuleTests: <TComputationModule extends ComputationModule & PickComputationModule<ConcurrentReactiveComputationModule, "combineLatest" | "fromObservable" | "merge" | "takeUntil" | "withLatestFrom">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default ConcurrentReactiveComputationModuleTests;
