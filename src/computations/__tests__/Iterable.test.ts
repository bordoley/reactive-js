import { testModule } from "../../__internal__/testing.js";
import * as Iterable from "../Iterable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import PureStatelesssComputationModuleTests from "./fixtures/PureStatelessComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

testModule(
  "Iterable",
  PureStatelesssComputationModuleTests(Iterable),
  DeferredComputationModuleTests<Iterable.IterableComputation>(Iterable),
  ComputationWithSideEffectsModuleTests<Iterable.IterableComputation>(Iterable),
  SynchronousComputationModuleTests<Iterable.IterableComputation>(Iterable),
);
