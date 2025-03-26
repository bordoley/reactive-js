/// <reference types="./SequentialComputationModuleTest.d.ts" />

import { Array_push } from "../../../__internal__/constants.js";
import { describe, expectArrayEquals, expectToThrowErrorAsync, testAsync, } from "../../../__internal__/testing.js";
import { pipe, pipeAsync, pipeLazy } from "../../../functions.js";
import * as Computation from "../../Computation.js";
const SequentialComputationModuleTests = (m) => describe("SequentialComputationModule", describe("forEach", testAsync("invokes the effect for each notified value", async () => {
    const result = [];
    await pipeAsync([1, 2, 3], Computation.fromReadonlyArray(m)(), m.forEach((x) => {
        result[Array_push](x + 10);
    }), m.toReadonlyArrayAsync()),
        pipe(result, expectArrayEquals([11, 12, 13]));
}), testAsync("when the effect function throws", async () => {
    const err = new Error();
    await pipeAsync(pipeLazy([1, 1], Computation.fromReadonlyArray(m)(), m.forEach(_ => {
        throw err;
    }), m.toReadonlyArrayAsync()), expectToThrowErrorAsync(err));
})));
export default SequentialComputationModuleTests;
