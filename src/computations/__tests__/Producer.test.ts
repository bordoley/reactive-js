import { testModule } from "../../__internal__/testing.js";
import * as Producer from "../Producer.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTest.js";

const m = Producer.makeModule(Producer);

testModule(
  "Producer",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
);
