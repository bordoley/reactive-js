import { testModule } from "../../__internal__/testing.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";

const m = Iterable.makeModule(Iterable);

testModule(
  "Iterable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
)();
