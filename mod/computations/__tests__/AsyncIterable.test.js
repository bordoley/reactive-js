/// <reference types="./AsyncIterable.test.d.ts" />

import { testModule } from "../../__internal__/testing.js";
import * as AsyncIterable from "../AsyncIterable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTest.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTest.js";
const m = AsyncIterable.makeModule(AsyncIterable);
testModule("AsyncIterable", ComputationModuleTests(m), SequentialComputationModuleTests(m));
