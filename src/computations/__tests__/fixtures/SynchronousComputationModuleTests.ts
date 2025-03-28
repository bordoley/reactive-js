import { describe } from "../../../__internal__/testing.js";
import {
  ComputationModule,
  SynchronousComputationModule,
} from "../../../computations.js";

const SynchronousComputationModuleTests = <
  TComputationModule extends ComputationModule & SynchronousComputationModule,
>(
  _m: TComputationModule,
) => describe("SynchronousComputationModule");

export default SynchronousComputationModuleTests;
