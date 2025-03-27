import { testModule } from "../../__internal__/testing.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";

const m = Producer.makeModule(Producer);

testModule(
  "Producer",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
)();
