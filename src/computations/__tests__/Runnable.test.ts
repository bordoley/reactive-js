import { testModule } from "../../__internal__/testing.js";
import {
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
} from "../../computations.js";
import { ignore, pipe } from "../../functions.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const RunnableTypes = {
  [Computation_pureSynchronousOfT]: Runnable.empty(),
  [Computation_synchronousWithSideEffectsOfT]: pipe(
    Runnable.empty(),
    Runnable.forEach(ignore),
  ),
};

testModule(
  "Runnable",
  ComputationModuleTests(Runnable, RunnableTypes),
  DeferredComputationModuleTests(Runnable, RunnableTypes),
  DeferredReactiveComputationModuleTests(Runnable, RunnableTypes),
  SynchronousComputationModuleTests(Runnable),
);

((_: Runnable.Signature) => {})(Runnable);
