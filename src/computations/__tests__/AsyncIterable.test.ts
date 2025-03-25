import { testModule } from "../../__internal__/testing.js";
import * as AsyncIterable from "../AsyncIterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";

testModule(
  "AsyncIterable",
  ComputationModuleTests<AsyncIterable.Computation>(AsyncIterable),
);
