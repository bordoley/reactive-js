import { ComputationModule, ComputationTypeLike, PickComputationModule, SequentialReactiveComputationModule } from "../../../computations.js";
declare const SequentialReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & PickComputationModule<SequentialReactiveComputationModule<TComputationType>, "buffer" | "decodeWithCharset" | "takeLast">) => import("../../../__internal__/testing.js").Describe;
export default SequentialReactiveComputationModuleTests;
