import { ComputationModule, ComputationTypeLike, SequentialComputationModule } from "../../../computations.js";
declare const SequentialComputationModuleTests: <TComputationType extends ComputationTypeLike>(m: ComputationModule<TComputationType> & Pick<SequentialComputationModule<TComputationType>, "scanDistinct" | "catchError" | "concat" | "forEach" | "gen" | "repeat" | "retry" | "throwIfEmpty">) => import("../../../__internal__/testing.js").Describe;
export default SequentialComputationModuleTests;
