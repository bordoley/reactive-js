import { testModule } from "../../__internal__/testing.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";

const m = Observable.makeModule(Observable);

testModule(
  "Observable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
);
