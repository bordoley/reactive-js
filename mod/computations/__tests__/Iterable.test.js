/// <reference types="./Iterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Iterable from "../Iterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import InteractiveComputationModuleTests from "./fixtures/InteractiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
testModule("Iterable", ComputationModuleTests(Iterable), SynchronousComputationModuleTests(Iterable), InteractiveComputationModuleTests(Iterable));
