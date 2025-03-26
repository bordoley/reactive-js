import { ComputationModule, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationModule extends ComputationModule & Pick<SequentialComputationModule, "forEach" | "gen">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;
