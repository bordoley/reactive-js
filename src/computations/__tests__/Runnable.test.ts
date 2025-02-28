import { testModule } from "../../__internal__/testing.js";
import { RunnableLike } from "../../computations.js";
import * as Runnable from "../Runnable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import StatefulComputationModuleTests from "./fixtures/StatefulComputationModuleTests.js";
import StatelessComputationModuleTests from "./fixtures/StatelessComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Runnable",
  StatelessComputationModuleTests(Runnable),
  DeferredComputationModuleTests(Runnable),
  StatefulComputationModuleTests(Runnable),
  ComputationWithSideEffectsModuleTests(Runnable),
  SynchronousComputationModuleTests<RunnableLike, Runnable.RunnableComputation>(
    Runnable,
  ),
);

((_: Runnable.Signature) => {})(Runnable);
