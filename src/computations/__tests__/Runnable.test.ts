import { testModule } from "../../__internal__/testing.js";
import { RunnableLike } from "../../computations.js";
import * as Runnable from "../Runnable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import PureStatefulComputationModuleTests from "./fixtures/PureStatefulComputationModuleTests.js";
import PureStatelessComputationModuleTests from "./fixtures/PureStatelessComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Runnable",
  PureStatelessComputationModuleTests(Runnable),
  DeferredComputationModuleTests(Runnable),
  PureStatefulComputationModuleTests(Runnable),
  ComputationWithSideEffectsModuleTests(Runnable),
  SynchronousComputationModuleTests<RunnableLike, Runnable.RunnableComputation>(
    Runnable,
  ),
);

((_: Runnable.Signature) => {})(Runnable);
