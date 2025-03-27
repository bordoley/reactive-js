import { testModule } from "../../__internal__/testing.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";

const m = Runnable.makeModule(Runnable);

testModule(
  "Runnable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
);
