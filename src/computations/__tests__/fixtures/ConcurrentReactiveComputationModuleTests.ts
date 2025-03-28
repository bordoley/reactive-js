import { describe } from "../../../__internal__/testing.js";
import {
  ComputationModule,
  ConcurrentReactiveComputationModule,
  PickComputationModule,
} from "../../../computations.js";

const ConcurrentReactiveComputationModuleTests = <
  TComputationModule extends ComputationModule &
    PickComputationModule<
      ConcurrentReactiveComputationModule,
      "fromObservable" | "takeUntil"
    >,
>(
  _m: TComputationModule,
) => describe("ConcurrentReactiveComputationModuleTests");

export default ConcurrentReactiveComputationModuleTests;
