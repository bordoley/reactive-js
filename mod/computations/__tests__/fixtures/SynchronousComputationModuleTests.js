/// <reference types="./SynchronousComputationModuleTests.d.ts" />

import { describe, expectEquals, test } from "../../../__internal__/testing.js";
import { pipeLazy, returns } from "../../../functions.js";
const SynchronousComputationModuleTests = (m) => describe("SynchronousComputationModule", describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))));
export default SynchronousComputationModuleTests;
