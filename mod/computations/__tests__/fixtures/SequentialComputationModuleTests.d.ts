import { ComputationModule, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationModule extends ComputationModule & Pick<SequentialComputationModule, "scanDistinct" | "catchError" | "concat" | "forEach" | "gen" | "repeat" | "retry" | "throwIfEmpty">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;
