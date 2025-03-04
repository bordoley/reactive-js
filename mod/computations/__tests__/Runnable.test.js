/// <reference types="./Runnable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import DeferredReactiveComputationModuleTests from "./fixtures/DeferredReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
testModule("Runnable", ComputationModuleTests(Runnable), DeferredReactiveComputationModuleTests(Runnable), SynchronousComputationModuleTests(Runnable));
((_) => { })(Runnable);
