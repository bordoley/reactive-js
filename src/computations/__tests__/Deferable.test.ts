import { testModule } from "../../__internal__/testing.js";
import PureStatelessComputationModuleTests from "../../computations/__tests__/fixtures/PureStatelessComputationModuleTests.js";
import { DeferableLike } from "../../computations.js";
import * as Deferable from "../Deferable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import PureStatefulComputationModuleTests from "./fixtures/PureStatefulComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Deferable",
  PureStatelessComputationModuleTests(Deferable),
  DeferredComputationModuleTests(Deferable),
  PureStatefulComputationModuleTests(Deferable),
  ComputationWithSideEffectsModuleTests(Deferable),
  SynchronousComputationModuleTests<
    DeferableLike,
    Deferable.DeferableComputation
  >(Deferable),
);

((_: Deferable.Signature) => {})(Deferable);
