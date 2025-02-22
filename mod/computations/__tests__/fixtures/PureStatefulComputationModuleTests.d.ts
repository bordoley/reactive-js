import { Computation, DeferredComputationModule, PureStatefulComputationModule, SynchronousComputationModule } from "../../../computations.js";
declare const PureStatefulComputationModuleTests: <C extends Computation>(m: PureStatefulComputationModule<C> & DeferredComputationModule<C> & SynchronousComputationModule<C>) => import("../../../__internal__/testing.js").Describe;
export default PureStatefulComputationModuleTests;
