import { testModule } from "../../__internal__/testing.js";
import { RunnableLike } from "../../computations.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Runnable",
  ComputationModuleTests(Runnable),
  DeferredComputationModuleTests(Runnable),
  DeferredReactiveComputationModuleTests(Runnable),
  ComputationWithSideEffectsModuleTests(Runnable),
  SynchronousComputationModuleTests<RunnableLike, Runnable.RunnableComputation>(
    Runnable,
  ),
);

((_: Runnable.Signature) => {})(Runnable);
