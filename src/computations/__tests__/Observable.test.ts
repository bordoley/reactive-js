import { testModule } from "../../__internal__/testing.js";
import * as Observable from "../Observable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTest.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTest.js";

const m = Observable.makeModule(Observable);

testModule(
  "Observable",
  ComputationModuleTests(m),
  SequentialComputationModuleTests(m),
  SequentialReactiveComputationModuleTests(m),
);
