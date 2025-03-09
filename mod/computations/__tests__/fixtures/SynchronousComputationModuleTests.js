/// <reference types="./SynchronousComputationModuleTests.d.ts" />

import { describe, expectArrayEquals, expectEquals, expectIsNone, test, } from "../../../__internal__/testing.js";
import { ignore, increment, pipe, pipeLazy, returns, } from "../../../functions.js";
import * as Iterable from "../../Iterable.js";
import * as Runnable from "../../Runnable.js";
import * as ComputationTest from "./helpers/ComputationTest.js";
const SynchronousComputationModuleTests = (m) => {
    return describe("SynchronousComputationModule", describe("empty", ComputationTest.isPureSynchronous(m.empty())), describe("first", test("returns the first value in the computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.first(), expectEquals(1))), test("returns the none when computation is empty", pipeLazy([], m.fromReadonlyArray(), m.first(), expectIsNone))), describe("fromIterable", ComputationTest.isPureSynchronous(m.fromIterable()([])), ComputationTest.isSynchronousWithSideEffects(pipe([], Iterable.forEach(ignore), m.fromIterable()))), describe("fromReadonlyArray", ComputationTest.isPureSynchronous(pipe([], m.fromReadonlyArray()))), describe("fromValue", ComputationTest.isPureSynchronous(pipe("a", m.fromValue()))), describe("generate", ComputationTest.isPureSynchronous(m.generate(increment, returns(0), { count: 10 }))), describe("last", test("returns the last value in the computation", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.last(), expectEquals(3)))), describe("raise", ComputationTest.isPureSynchronous(m.raise())), describe("reduce", test("summing all values from delayed source", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.reduce((acc, next) => acc + next, returns(0)), expectEquals(6)))), describe("toRunnable", test("when deferable sinkcompletes early", pipeLazy(m.generate(increment, returns(0)), m.toRunnable(), Runnable.takeFirst({ count: 3 }), Runnable.toReadonlyArray(), expectArrayEquals([1, 2, 3])))));
};
export default SynchronousComputationModuleTests;
