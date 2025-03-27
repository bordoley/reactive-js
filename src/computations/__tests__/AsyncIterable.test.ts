import { testModule } from "../../__internal__/testing.js";
import * as AsyncIterable from "../AsyncIterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";

const m = AsyncIterable.makeModule(AsyncIterable);

testModule(
  "AsyncIterable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
)();
