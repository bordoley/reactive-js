/// <reference types="./AsyncIterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as AsyncIterable from "../AsyncIterable.js";
import * as Computation from "../Computation.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
const m = Computation.makeModule()(AsyncIterable);
testModule("AsyncIterable", ComputationModuleTests(m), SequentialComputationModuleTests(m), InteractiveComputationModuleTests(m))();
