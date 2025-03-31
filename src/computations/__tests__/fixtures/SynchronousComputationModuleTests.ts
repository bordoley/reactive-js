import { describe } from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ComputationTypeLike,
  SynchronousComputationModule,
} from "../../../computations.js";

const SynchronousComputationModuleTests = <
  TComputationType extends ComputationTypeLike,
>(
  _m: ComputationModule<TComputationType> &
    SynchronousComputationModule<TComputationType>,
) => describe("SynchronousComputationModule");

export default SynchronousComputationModuleTests;
