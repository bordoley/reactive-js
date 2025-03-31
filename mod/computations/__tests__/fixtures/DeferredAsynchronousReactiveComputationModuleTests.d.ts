import { ComputationModule, ComputationTypeLike, DeferredAsynchronousReactiveComputationModule } from "../../../computations.js";
declare const DeferredAsynchronousReactiveComputationModuleTests: <TComputationType extends ComputationTypeLike>(_m: ComputationModule<TComputationType> & Pick<DeferredAsynchronousReactiveComputationModule<TComputationType>, "switchAll" | "withBackpressure">) => import("../../../__internal__/testing.js").Describe;
export default DeferredAsynchronousReactiveComputationModuleTests;
