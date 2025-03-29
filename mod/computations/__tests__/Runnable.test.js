/// <reference types="./Runnable.test.d.ts" />

import { describe, expectArrayEquals, expectToThrow, test, testModule, } from "../../__internal__/testing.js";
import { pipeLazy, raise } from "../../functions.js";
import * as Computation from "../Computation.js";
import * as Runnable from "../Runnable.js";
import ComputationModuleTests from "./fixtures/ComputationModuleTests.js";
import SequentialComputationModuleTests from "./fixtures/SequentialComputationModuleTests.js";
import SequentialReactiveComputationModuleTests from "./fixtures/SequentialReactiveComputationModuleTests.js";
import SynchronousComputationModuleTests from "./fixtures/SynchronousComputationModuleTests.js";
const m = Computation.makeModule()(Runnable);
testModule("Runnable", ComputationModuleTests(m), SequentialComputationModuleTests(m), SequentialReactiveComputationModuleTests(m), SynchronousComputationModuleTests(m), describe("fromReadonlyArray", test("produces the values", pipeLazy([1, 2, 3], Runnable.fromReadonlyArray(), Computation.toReadonlyArray(m)(), expectArrayEquals([1, 2, 3]))), test("produces the values in reverse", pipeLazy([1, 2, 3], Runnable.fromReadonlyArray({ count: -3, start: 2 }), Computation.toReadonlyArray(m)(), expectArrayEquals([3, 2, 1]))), test("when the sink throws", pipeLazy(pipeLazy([1, 2, 3], Runnable.fromReadonlyArray(), Runnable.forEach(_ => {
    raise("some exception");
}), Computation.last(m)()), expectToThrow))))();
