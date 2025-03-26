import { testModule } from "../../__internal__/testing.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTest.js";

const m = Iterable.makeModule(Iterable);

testModule(
  "Iterable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
);
