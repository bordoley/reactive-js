import { testModule } from "../../__internal__/testing.js";
import * as Computation from "../Computation.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";

const m = Computation.makeModule<Iterable.Computation>()(Iterable);

testModule(
  "Iterable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SynchronousComputationModuleTests(m),
  InteractiveComputationModuleTests(m),
)();
