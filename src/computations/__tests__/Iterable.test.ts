import { testModule } from "../../__internal__/testing.js";
import {
  Computation_pureSynchronousOfT,
  Computation_synchronousWithSideEffectsOfT,
} from "../../computations.js";
import { ignore, pipe } from "../../functions.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const IterableTypes = {
  [Computation_pureSynchronousOfT]: Iterable.empty(),
  [Computation_synchronousWithSideEffectsOfT]: pipe(
    Iterable.empty(),
    Iterable.forEach(ignore),
  ),
};

testModule(
  "Iterable",
  ComputationModuleTests(Iterable, IterableTypes),
  SynchronousComputationModuleTests(Iterable, IterableTypes),
  InteractiveComputationModuleTests(Iterable),
);
