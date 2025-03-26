import { ComputationModule, ComputationModuleLike_computationType, ComputationType } from "../../../computations.js";
declare const ComputationModuleTests: <TComputationType extends ComputationType>(m: Pick<ComputationModule<TComputationType>, "distinctUntilChanged" | "genPure" | "keep" | "map" | "pairwise" | "scan" | "skipFirst" | "takeFirst" | "takeWhile" | "toReadonlyArrayAsync" | typeof ComputationModuleLike_computationType>) => import("../../../__internal__/testing.js").Describe;
export default ComputationModuleTests;
