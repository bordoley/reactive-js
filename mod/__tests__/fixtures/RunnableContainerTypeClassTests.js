/// <reference types="./RunnableContainerTypeClassTests.d.ts" />

import { describe, expectArrayEquals, expectToThrowError, test, } from "../../__internal__/testing.js";
import { increment, pipe, pipeLazy } from "../../functions.js";
const RunnableContainerTypeClassTests = (m) => describe("RunnableContainerTypeClass", describe("map", test("maps every value", pipeLazy([1, 2, 3], m.fromReadonlyArray(), m.map(increment), m.toReadonlyArray(), expectArrayEquals([2, 3, 4]))), test("when selector throws", () => {
    const err = new Error();
    const selector = (_a) => {
        throw err;
    };
    pipe(pipeLazy([1, 1], m.fromReadonlyArray(), m.map(selector), m.toReadonlyArray()), expectToThrowError(err));
})));
export default RunnableContainerTypeClassTests;
