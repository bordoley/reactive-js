import { ComputationModule, ComputationType } from "../../../computations.js";
declare const ComputationModuleTests: <TComputationType extends ComputationType>(m: Pick<ComputationModule<TComputationType>, "distinctUntilChanged" | "gen" | "genPure" | "keep" | "map" | "toReadonlyArrayAsync">) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;
