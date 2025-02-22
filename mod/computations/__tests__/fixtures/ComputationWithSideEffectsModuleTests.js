/// <reference types="./ComputationWithSideEffectsModuleTests.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectToThrowError, test, } from "../../../__internal__/testing.js";
import { pipe, pipeLazy } from "../../../functions.js";
const ComputationWithSideEffectsModuleTests = (m) => describe("ComputationWithSideEffectsModule", describe("forEach", test("invokes the effect for each notified value", () => {
    const result = [];
    pipe([1, 2, 3], m.fromReadonlyArray(), m.forEach((x) => {
        result[Array_push](x + 10);
    }), m.toReadonlyArray()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), test("when the effect function throws", () => {
    const err = new Error();
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArray()), expectToThrowError(err));
})));
export default ComputationWithSideEffectsModuleTests;
