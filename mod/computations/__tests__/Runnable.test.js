/// <reference types="./Runnable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Runnable from "../Runnable.js";
import ComputationWithSideEffectsModuleTests from "./fixtures/ComputationWithSideEffectsModuleTests.js";
import DeferredComputationModuleTests from "./fixtures/DeferredComputationModuleTests.js";
import StatefulComputationModuleTests from "./fixtures/StatefulComputationModuleTests.js";
import StatelessComputationModuleTests from "./fixtures/StatelessComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
testModule("Runnable", StatelessComputationModuleTests(Runnable), DeferredComputationModuleTests(Runnable), StatefulComputationModuleTests(Runnable), ComputationWithSideEffectsModuleTests(Runnable), SynchronousComputationModuleTests(Runnable));
((_) => { })(Runnable);
