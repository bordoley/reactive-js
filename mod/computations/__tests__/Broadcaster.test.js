/// <reference types="./Broadcaster.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as Broadcaster from "../Broadcaster.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
const m = Broadcaster.makeModule(Broadcaster);
testModule("Broadcaster", ComputationModuleTests(m))();
