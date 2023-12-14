/// <reference types="./Enumerable.test.d.ts" />

import { describe, expectArrayEquals, test, testModule, } from "../../__internal__/testing.js";
import PureComputationModuleTests from "../../computations/__tests__/fixtures/PureComputationModuleTests.js";
import { arrayEquality, pipe, pipeLazy, tuple, } from "../../functions.js";
import * as Enumerable from "../Enumerable.js";
import * as ReadonlyArray from "../ReadonlyArray.js";
testModule("Enumerable", PureComputationModuleTests(Enumerable, Enumerable.toReadonlyArray), describe("concatAll", test("concats the input containers in order", pipeLazy([
    pipe([1, 2, 3], ReadonlyArray.values()),
    pipe([4, 5, 6], ReadonlyArray.values()),
], ReadonlyArray.values(), Enumerable.concatAll(), Enumerable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 4, 5, 6])))), describe("concatMap", test("maps each value to a container and flattens", pipeLazy([0, 1], ReadonlyArray.values(), Enumerable.concatMap(pipeLazy([1, 2, 3], ReadonlyArray.values())), Enumerable.toReadonlyArray(), expectArrayEquals([1, 2, 3, 1, 2, 3])))), describe("zip", test("when all inputs are the same length", pipeLazy(Enumerable.zip(pipe([1, 2, 3, 4, 5], ReadonlyArray.values()), pipe([5, 4, 3, 2, 1], ReadonlyArray.values())), Enumerable.toReadonlyArray(), expectArrayEquals([tuple(1, 5), tuple(2, 4), tuple(3, 3), tuple(4, 2), tuple(5, 1)], { valuesEquality: arrayEquality() }))), test("when inputs are different length", pipeLazy(Enumerable.zip(pipe([1, 2, 3], ReadonlyArray.values()), pipe([5, 4, 3, 2, 1], ReadonlyArray.values()), pipe([1, 2, 3, 4], ReadonlyArray.values())), Enumerable.toReadonlyArray(), expectArrayEquals([tuple(1, 5, 1), tuple(2, 4, 2), tuple(3, 3, 3)], { valuesEquality: arrayEquality() })))));
((_) => { })(Enumerable);
