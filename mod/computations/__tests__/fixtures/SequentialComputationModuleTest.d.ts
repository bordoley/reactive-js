import { ComputationModule, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationModule extends ComputationModule & Pick<SequentialComputationModule, "catchError" | "concat" | "forEach" | "gen" | "throwIfEmpty">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;
