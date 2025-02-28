/// <reference types="./SynchronousComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, test, } from "../../../__internal__/testing.js";
import { increment, pipeLazy, returns } from "../../../functions.js";
import * as Runnable from "../../Runnable.js";
const SynchronousComputationModuleTests = (m) => describe("SynchronousComputationModule", describe("last", test("returns the last value in the computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.last(), expectEquals(3)))), describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("toRunnable", test("when deferable sinkcompletes early", pipeLazy(m.generate(increment, returns(0)), m.toRunnable(), Runnable.takeFirst({ count: 3 }), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))));
export default SynchronousComputationModuleTests;
