/// <reference types="./Runnable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTest.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTest.js";
const m = Runnable.makeModule(Runnable);
testModule("Runnable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m));
