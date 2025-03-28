/// <reference types="./Runnable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Computation from "../Computation.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(Runnable);
testModule("Runnable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m))();
