import { ComputationModule, SequentialReactiveComputationModule } from "../../../computations.js";
declare const SequentialReactiveComputationModuleTests: <TComputationModule extends ComputationModule & Pick<SequentialReactiveComputationModule, "buffer" | "decodeWithCharset" | "takeLast">>(m: TComputationModule) => import("../../../__internal__/testing.js").Describe;
export default SequentialReactiveComputationModuleTests;
