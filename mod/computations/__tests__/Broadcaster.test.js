/// <reference types="./Broadcaster.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Broadcaster from "../Broadcaster.js";
import * as Computation from "../Computation.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import ConcurrentReactiveComputationModuleTests from "./fixtures/ConcurrentReactiveComputationModuleTests.js";
const m = Computation.makeModule()(Broadcaster);
testModule("Broadcaster", ComputationModuleTests(m), ConcurrentReactiveComputationModuleTests(m))();
